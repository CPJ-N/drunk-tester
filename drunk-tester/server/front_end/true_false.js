var h1 = document.createElement("h1"); // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude????"; // Insert text
document.body.appendChild(h1);

let session;

function addDummyuser() {
  //document.location.href = "choose_trivia.html"; //going to trivia page
  // let passInput = document.getElementById("pass_input");
  // let usernameInput = document.getElementById("username_input");
  // console.log(passInput.value);
  fetch(`http://localhost:3000/adduser?username=admin&password=admin`, {
    method: "POST",
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
}
addDummyuser();

function addDummytoken() {
  //document.location.href = "choose_trivia.html"; //going to trivia page
  // let passInput = document.getElementById("pass_input");
  // let usernameInput = document.getElementById("username_input");
  // console.log(passInput.value);
  fetch(`http://localhost:3000/authenticate?username=admin&password=admin`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      if (result.token) {
        session = result.token;
      }
    })
    .catch((err) => console.log(err));
}
addDummytoken();

document.getElementById("main_header").setAttribute("align", "center");

const questions = [
  {
    question:
      "Do you think that our fingers are just hand-legs or if our legs are just fingers for our torso?",
    correctResponse: false,
  },
  {
    question:
      "Has anyone really been far even as decided to use even go want to do look more like?",
    correctResponse: false,
  },
  {
    question: "How Can Mirrors Be Real If Our Eyes Aren't Real?",
    correctResponse: "False",
  },
  {
    question: "What if our legs, didn't know they were legs?",
    correctResponse: true,
  },
  {
    question: "Do you wish you were sober right now?",
    correctResponse: true,
  },
  {
    question: "Food for thought or drink forgot?",
    correctResponse: true,
  },
  {
    question: "6/2(1+2)=? is it 9?",
    correctResponse: true,
  },
  {
    question: "what kind of animal Mickey Mouse is? a Rat?",
    correctResponse: false,
  },
  {
    question: "You are feeling sleepy or sleepy?",
    correctResponse: false,
  },
  {
    question: "Is your best friend the most scandalous person you know?",
    correctResponse: true,
  },
  {
    question: "Do you have a big secret that you keep from everyone?",
    correctResponse: true,
  },
  {
    question: "Are you having kinky ideas in your head?",
    correctResponse: false,
  },
];

var true_false = ["a", "True", "False"];

for (i = 1; i < questions.length; i++) {
  var h3 = document.createElement("h3"); // Create a <p> element

  h3.setAttribute("id", "true_false");

  h3.innerText = questions[i].question; // Insert text
  document.body.appendChild(h3);

  for (j = 1; j < 3; j++) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    x.setAttribute("id", `Q${i}_${j}`);
    x.setAttribute("name", `Q${i}`);
    x.value = `option ${true_false[j]}`;
    document.body.appendChild(x);

    var p = document.createElement("p");
    p.innerText = `${true_false[j]}`;
    document.body.appendChild(p);
  }

  for (k = 0; k < 2; k++) {
    var br = document.createElement("br");
    br.innerText = " ";
    document.body.appendChild(br);
  }
}

var next_btn = document.createElement("BUTTON");
var next_btn_txt = document.createTextNode("Submit!");
next_btn.setAttribute("id", "myBtn");
next_btn.appendChild(next_btn_txt);
document.body.appendChild(next_btn);

document.getElementById("myBtn").addEventListener("click", onSubmit);

// let sessionID = () => {
//   fetch("/currentsession")
//     .then((response) => response.json())
//     .then((result) => {
//       if (result === "no session") {
//         console.log("no session");
//       } else {
//         session = result.token;
//         console.log("token:" + session);
//       }
//     })
//     .catch((error) => console.log("error", error));
// };

function onSubmit() {
  // document.location.href = "result.html";
  // sessionID();
  let responses = {};

  for (let i = 0; i < questions.length; i++) {
    let radios = document.getElementsByName(`Q${i}`);

    for (let j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        // do whatever you want with the checked radio
        // alert(radios[j].value);
        if (radios[j].value === questions[i].correctResponse) {
          responses[questions[i].question] = "correct";
        } else {
          responses[questions[i].question] = "incorrect";
        }
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // let requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: responses,
  //   redirect: "follow",
  // };

  fetch(`http://localhost:3000/savequizprogress/${session}`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(responses),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      document.location.href = "result.html";
    })
    .catch((error) => console.log("error", error));

  console.log(responses);
}

document.body.style.background =
  "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";
