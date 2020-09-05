var h1 = document.createElement("h1"); // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude?"; // Insert text
document.body.appendChild(h1);

document.getElementById("main_header").setAttribute("align", "center");

var h2 = document.createElement("h2"); // Create a <p> element
h2.setAttribute("id", "header_2");
h2.innerText = "Create account below!"; // Insert text
document.body.appendChild(h2);
document.getElementById("header_2").setAttribute("align", "center");

var user_form_header = document.createElement("p");
user_form_header.innerText = "User Name";
document.body.appendChild(user_form_header);
var user_name_form = document.createElement("form");
user_name_input = document.createElement("input");
user_name_input.setAttribute("type", "text");
user_name_input.setAttribute("id", "username_input");
user_name_form.appendChild(user_name_input);
document.body.appendChild(user_name_form);

var password_form_header = document.createElement("p");
password_form_header.innerText = "Password";
document.body.appendChild(password_form_header);
var password_form = document.createElement("form");
password_input = document.createElement("input");
password_input.setAttribute("type", "password");
password_input.setAttribute("id", "pass_input");
password_form.appendChild(password_input);
document.body.appendChild(password_form);

var next_btn = document.createElement("BUTTON");
next_btn.setAttribute("id", "myBtn");
var next_btn_txt = document.createTextNode("Create Account");

next_btn.appendChild(next_btn_txt);
document.body.appendChild(next_btn);

function addDummyuser() {
  let passInput = document.getElementById("pass_input");
  let usernameInput = document.getElementById("username_input");
  // console.log(passInput.value);
  fetch(
    `http://localhost:3000/adduser?username=${usernameInput.value}&password=${passInput.value}`,
    {
      method: "POST",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      var tempString = document.createElement("p");
      tempString.innerText = "Account added";
      document.body.appendChild(tempString);
      document.location.href = "choose_trivia.html"; //going to trivia page
    })
    .catch((err) => console.log(err));
}

document.getElementById("myBtn").addEventListener("click", addDummyuser);

// function login_click() {
//   document.location.href = "abc.html";
// }

document.body.style.background =
  "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";
