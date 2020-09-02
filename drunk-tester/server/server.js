//server code
let axios = require("axios");
let express = require("express");
let app = express();

// add your API key to env.json
// let apiFile = require("../env.json");
// let apiKey = apiFile["api_key"];
// let baseUrl = apiFile["base_api_url"];

let port = 3000;
let hostname = "localhost";

// all static html will come from a 'public' folder
app.use(express.static("public"));
app.use(express.json());

app.get("/authenticate", function (req, res) {
  let token = `${getTokenSegment()}-${getTokenSegment()}-${getTokenSegment()}-${getTokenSegment()}-${getTokenSegment()}`;
  console.log(
    `trying to log in using ${req.query.username} and ${req.query.password} generated session token ${token}`
  );
  res.send(token);
});

app.post("/savequizprogress/:sessionid", function (req, res) {
  console.log(
    `saving progress for ${req.params.sessionid} with body of ${req.body}`
  );
  res.send("OK");
});

app.post("/adduser", function (req, res) {
  console.log(
    `adding user with  ${req.query.username} and ${req.query.password}`
  );
  res.send("OK");
});

app.post("/readquiz/:sessionid", function (req, res) {
  console.log(
    `saving progress for ${req.params.sessionid} with body of ${req.body}`
  );
  res.send("OK");
});

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
  console.log(`Listening at: http://${hostname}:${port}`);
});
