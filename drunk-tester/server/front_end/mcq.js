var h1 = document.createElement("h1"); // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude???"; // Insert text
document.body.appendChild(h1);

let session;

let questions = [
  {
    question:
      "when I get multiplied by any number, the sum of the figures in the product is always me. what am I?",
    options: [4, 9, 8, 2],
    correctAnswer: 9,
  },
  {
    question: "a farmer has 86 checkens. All but 6 die. how many are left?",
    options: [6, 86, 85, 5],
    correctAnswer: 6,
  },
  {
    question: "What is the most common connecting word for SHIP and CARDS",
    options: ["Sea", "Deck", "Port", "Harbor"],
    correctAnswer: "Deck",
  },
  {
    question: "what is the three-fifth of 50?",
    options: [35, 20, 25, 30],
    correctAnswer: 30,
  },
  {
    question: " What is the square root of 10000",
    options: [10, 100, 110, 1000],
    correctAnswer: 100,
  },
  {
    question: "Which of the following words is spelled correctly?",
    options: ["Vacumm", "Occured", "Greatful", "Fulfill"],
    correctAnswer: "Fulfill",
  },
  {
    question: "1/3 of 1/3 of 450 equals",
    options: [55, 40, 45, 50],
    correctAnswer: 50,
  },
  {
    question:
      "Melinda, 12 year old, is three times as old as Liza. How old will she be when she's twice as old as Liza?",
    options: [18, 14, 16, 24],
    correctAnswer: 6,
  },
  {
    question: " Water is to ice as milk is to ________ .",
    options: ["Calf", "Coffe", "Butter", "Cow"],
    correctAnswer: "Butter",
  },
  {
    question: "what is the square root of 225?",
    options: [25, 15, 52, 22],
    correctAnswer: 15,
  },
  {
    question: "Where is Liberia?",
    options: ["Asia", "Africa"],
    correctAnswer: "Africa",
  },
];

document.getElementById("main_header").setAttribute("align", "center");

for (i = 1; i < questions.length; i++) {
  var h3 = document.createElement("h3"); // Create a <p> element

  h3.setAttribute("id", "true_false");

  h3.innerText = `${questions[i].question}?`; // Insert text
  document.body.appendChild(h3);

  for (j = 0; j < questions[i].options.length; j++) {
    console.log(questions[i].options);
    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    x.setAttribute("id", `Q${i}_${j}`);
    x.setAttribute("name", `Q${i}`);
    x.value = questions[i].options[j];
    document.body.appendChild(x);

    var p = document.createElement("p");
    p.innerText = `${questions[i].options[j]}`;
    document.body.appendChild(p);
  }

  for (k = 0; k < 2; k++) {
    var br = document.createElement("br");
    br.innerText = " ";
    document.body.appendChild(br);
  }
}

var next_btn = document.createElement("BUTTON");
next_btn.setAttribute("id", "myBtn");
var next_btn_txt = document.createTextNode("Next");

next_btn.appendChild(next_btn_txt);
document.body.appendChild(next_btn);

document.getElementById("myBtn").addEventListener("click", onSubmit());

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
        if (radios[j].value === questions[i].correctAnswer) {
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
