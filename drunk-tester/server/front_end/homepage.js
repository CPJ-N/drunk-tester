var h1 = document.createElement("h1"); // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude?"; // Insert text
document.body.appendChild(h1);

document.getElementById("main_header").setAttribute("align", "center");

var h2 = document.createElement("h2"); // Create a <p> element
h2.setAttribute("id", "header_2");
h2.innerText = "Welcome to a new era of drinking game (quarantine edition)!"; // Insert text
document.body.appendChild(h2);
document.getElementById("header_2").setAttribute("align", "center");

var h4 = document.createElement("h4"); // Create a <p> element
h4.setAttribute("id", "header_4");
h4.innerText =
  "Drinking in isolation with friends on Zoom? Miss playing drinking games? Well, we're here with a new drinking game!"; // Insert text
document.body.appendChild(h4);
document.getElementById("header_4").setAttribute("align", "center");

var p1 = document.createElement("p"); // Create a <p> element
p1.setAttribute("id", "para_1");
p1.innerText =
  "We bring you the 'You good, dude?' drunk questionnaire! You shall be taking a a trivia based on your choice from a few different types. The first set of questions will be multipe choice and the second set will be true false."; // Insert text
document.body.appendChild(p1);
document.getElementById("para_1").setAttribute("align", "center");

var h5 = document.createElement("h5"); // Create a <p> element
h5.setAttribute("id", "h5");
h5.innerText =
  "In order to take the quiz you have to create an account. If you have an account already, go ahead and login to start! Or else, you could view the leaderboard below "; // Insert text
document.body.appendChild(h5);
document.getElementById("h5").setAttribute("align", "left");

var create_acc_btn = document.createElement("BUTTON");
create_acc_btn.setAttribute("id", "create_acc_btn");
var create_acc_btn_txt = document.createTextNode("Create Account");

create_acc_btn.appendChild(create_acc_btn_txt);
document.body.appendChild(create_acc_btn);
var br = document.createElement("br");
document.body.appendChild(br);
var br = document.createElement("br");
document.body.appendChild(br);

var login_btn = document.createElement("BUTTON");
login_btn.setAttribute("id", "login_btn");
var login_btn_txt = document.createTextNode("Login");

login_btn.appendChild(login_btn_txt);
document.body.appendChild(login_btn);

var br = document.createElement("br");
document.body.appendChild(br);
var br = document.createElement("br");
document.body.appendChild(br);

var leaderboard = document.createElement("BUTTON");
leaderboard.setAttribute("id", "leaderboard");
var leaderboard_txt = document.createTextNode("Leaderboard");

leaderboard.appendChild(leaderboard_txt);
document.body.appendChild(leaderboard);

// Create Account Button
document
  .getElementById("create_acc_btn")
  .addEventListener("click", create_acc_btn_click);

function create_acc_btn_click() {
  document.location.href = "signup.html"; // LINK HTML HERE
}

// Login Button
document.getElementById("login_btn").addEventListener("click", login_btn_click);

function login_btn_click() {
  document.location.href = "loginpage.html"; // LINK HTML HERE
}
// Leaderboard Button
document
  .getElementById("leaderboard")
  .addEventListener("click", leaderboard_click);

function leaderboard_click() {
  document.location.href = "leaderboard.html"; // LINK HTML HERE
}

document.body.style.background =
  "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";
