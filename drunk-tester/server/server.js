//server code
let axios = require("axios");
let express = require("express");

let crypto = require("crypto");
let app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const asyncHandler = require("express-async-handler");

// add your API key to env.json
// let apiFile = require("../env.json");
// let apiKey = apiFile["api_key"];
// let baseUrl = apiFile["base_api_url"];

// Copied per instructions on Microsoft Docs
// source: https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-get-started
// ****************************************
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

const { endpoint, key, databaseId, containerId, sessionContainerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);
let currentsession = null;
// ****************************************

let port = 3000;
let hostname = "localhost";

function createPasswordHash(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

function createId() {
  return `${getTokenSegment()}-${getTokenSegment()}-${getTokenSegment()}-${getTokenSegment()}-${getTokenSegment()}`;
}

async function runQuery(query, container) {
  console.log(`query: ${query}`);
  // create query to find the user
  const querySpec = {
    query: query,
  };

  // read all items in the Items container
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();

  return items;
}

async function findUser(username, container) {
  let items = await runQuery(
    `SELECT * from c where c.username=\"${username}\"`,
    container
  );

  if (items === undefined || items === null || items.length === 0) {
    return null;
  } else {
    return items[0];
  }
}

async function upsertUser(newUser, container) {
  try {
    const { resource: createdItem } = container.items.upsert(newUser);
    console.log(`Success`);
  } catch (e) {
    console.log(`Failed`);
    console.log(e);
  }
}

async function getSession(sessionid, container) {
  let query = `SELECT * from c where c.type=\"sessionid\" and c.id = \"${sessionid}\"`;
  let items = await runQuery(query, container);

  if (items === undefined || items === null || items.length === 0) {
    return null;
  } else {
    return items[0];
  }
}

async function getSessionData(sessionid, container) {
  let query = `SELECT * from c where c.type=\"quizattempt\" and c.sessionid = \"${sessionid}\"`;
  let items = await runQuery(query, container);

  if (items === undefined || items === null || items.length === 0) {
    return null;
  } else {
    return items[0];
  }
}

async function validateSession(sessionid, container) {
  let session = getSession(sessionid, container);

  if (session === null) {
    return false;
  } else {
    return true;
  }
}

async function createSession(username, container) {
  var token = createId();
  const newSession = {
    username: username,
    type: "session",
    id: token,
  };

  try {
    const { resource: createdItem } = container.items.upsert(newSession);
    console.log(`Success`);
  } catch (e) {
    console.log(`Failed`);
    console.log(e);
  }

  return token;
}

async function upsertProgress(body, sessionid, container) {
  const newAttemptData = {
    type: "quizattempt",
    sessionid: sessionid,
    body: body,
  };

  let items = await runQuery(
    `SELECT * from c where c.type=\"quizattempt\" and c.sessionid = \"${sessionid}\"`,
    container
  );

  if (items === undefined || items === null || items.length === 0) {
    console.log(`No data found, creating new`);
    // no data yet, create new id
    newAttemptData.id = createId();
  } else {
    console.log(`Data found, updating`);
    // there is data, copy the id
    newAttemptData.id = items[0].id;
  }

  try {
    const { resource: createdItem } = container.items.upsert(newAttemptData);
    console.log(`Success`);
  } catch (e) {
    console.log(`Failed`);
    console.log(e);
  }
}

// all static html will come from a 'public' folder
app.use(express.static("front_end"));
app.use(express.json());

app.get(
  "/currentsession",
  asyncHandler(async (req, res, next) => {
    if (currentsession) {
      res.json({ token: currentsession });
    } else {
      res.send("no session");
    }
  })
);

// Description:  Adds a user to the system
// example: curl -X POST "http://localhost:3000/adduser?username=hello&password=world"
// Behavior:
//      When successful will return HTTP 200 and OK
//      When either username or password is missing, the request will fail
app.post(
  "/adduser",
  asyncHandler(async (req, res, next) => {
    console.log(
      `adding user with  ${req.query.username} and ${req.query.password}`
    );

    // validate input parameters
    if (req.query.username == undefined || req.query.password == undefined) {
      res.statusCode(400).send("Invalid request");
    }

    let user = await findUser(req.query.username, container);

    const newUser = {
      username: req.query.username,
      password: req.query.password, // REMOVE THIS LATER
      type: "user",
      passwordHash: createPasswordHash(`${req.query.password}`),
    };

    if (user === null) {
      console.log(`No user found, creating new`);
      // user not found, create a new id
      newUser.id = createId();
    } else {
      // user is found, we copy the id so that an update is created in the db
      console.log(`User found, updating`);
      newUser.id = user.id;
    }

    await upsertUser(newUser, container);

    res.status(200);
    res.json("OK");
  })
);

// Description:  Validates username or password and issues a sessionid
// example: curl "http://localhost:3000/authenticate?username=hello&password=world"
// Behavior:
//      When successful will return HTTP 200 with response text being sessionid
//      When either username or password is not correct, HTTP 400 is returned the request will fail
app.get(
  "/authenticate",
  asyncHandler(async (req, res, next) => {
    // validate input parameters
    if (req.query.username == undefined || req.query.password == undefined) {
      res.statusCode(400).json("Invalid request");
    }

    let query = `SELECT * from c where c.type=\"user\" and c.username=\"${
      req.query.username
    }\" and c.passwordHash=\"${createPasswordHash(req.query.password)}\"`;
    let items = await runQuery(query, container);

    items.forEach((item) => {
      console.log(`${item.username} - ${item.password}`);
    });

    console.log(
      `trying to log in using ${req.query.username} and ${req.query.password} `
    );
    if (items.length === 1) {
      console.log(`Found: ${items.length}`);
      let token = await createSession(req.query.username, container);

      console.log(`generated session token ${token}`);
      currentsession = token;
      res.json({ token: token });
    } else {
      // no user with the right username and password
      res.status(400).json("Invalid request");
      console.log(`No user match found`);
    }
  })
);

// Description:  Save session progress
// example: curl -X POST -H "Content-Type: application/json" -d '{"q1":"abc","q2":"def"}' https://localhost:3000/savequizprogress/<sessionid>
// Behavior:
//      When successful will return HTTP 200 with OK
//      When failed, HTTP 400 is returned
app.post(
  "/savequizprogress/:sessionid",
  asyncHandler(async (req, res, next) => {
    try {
      console.log(
        `saving progress for ${req.params.sessionid} with body of ${req.body}`
      );

      if (await validateSession(req.params.sessionid, container)) {
        await upsertProgress(req.body, req.params.sessionid, container);
      }

      res.json("OK");
    } catch (error) {
      console.log(error);
      res.status(400).send("Invalid request.");
    }
  })
);

// Description:  Save session progress
// example: curl https://localhost:3000/readquiz/<sessionid>
// Behavior:
//      When successful will return HTTP 200 with OK
//      When failed, HTTP 400 is returned
app.get(
  "/readquiz/:sessionid",
  asyncHandler(async (req, res, next) => {
    try {
      console.log(`get value for session: ${req.params.sessionid}`);
      let session = await getSessionData(req.params.sessionid, container);

      if (session === null) {
        console.log("No session found");
        res.status(404).send("Invalid request.");
      } else {
        console.log("Session found");
        let json = JSON.stringify(session);

        console.log(session.body);

        res.json(session.body);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send("Invalid request.");
    }
  })
);

app.get("/results/:user", function (req, res) {
  let listOfResults = [];
  console.log(
    `get results for user  ${req.params.user} with body of ${req.body}`
  );

  res.json(listOfResults);
});

function getTokenSegment() {
  return Math.round(Math.random() * 1000);
}

app.listen(port, hostname, () => {
  // create a database and container if they don't yet exist
  dbContext.create(client, databaseId, containerId);
  dbContext.create(client, databaseId, sessionContainerId);

  console.log(
    `Connecting to CosmosDB...\n endpoint: ${config.endpoint}, \n databaseid:${config.databaseId},\n containerid:${config.containerId}`
  );
  console.log(`Listening at: http://${hostname}:${port}`);
});
