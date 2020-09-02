    var h1 = document.createElement("h1");               // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude?";               // Insert text
document.body.appendChild(h1);   

document.getElementById("main_header").setAttribute("align", "center");


var h2 = document.createElement("h2");               // Create a <p> element
h2.setAttribute("id", "header_2");
h2.innerText = "Welcome to a new era of drinking game (quarantine edition)!";               // Insert text
document.body.appendChild(h2);  
document.getElementById("header_2").setAttribute("align", "center");

var h4 = document.createElement("h4");               // Create a <p> element
h4.setAttribute("id", "header_4");
h4.innerText = "Drinking in isolation with friends on Zoom? Miss playing drinking games? Well, we're here with a new drinking game!";               // Insert text
document.body.appendChild(h4);  
document.getElementById("header_4").setAttribute("align", "center");

var p1 = document.createElement("p");               // Create a <p> element
p1.setAttribute("id", "para_1");
p1.innerText = "We bring you the 'You good, dude?' drunk questionnaire! You shall be taking a a trivia based on your choice from a few different types. The first set of questions will be multipe choice and the second set will be true false.";               // Insert text
document.body.appendChild(p1);  
document.getElementById("para_1").setAttribute("align", "center");

var login_instruction = document.createElement("h4");               // Create a <p> element
login_instruction.setAttribute("id", "login_instruction");
login_instruction.innerText = "Login to continue. An account will be created under the username if you dont' have one already.";               // Insert text
document.body.appendChild(login_instruction);  

for (k=0; k<2; k++) {
  var br = document.createElement("br"); 
br.innerText = " ";
document.body.appendChild(br);
}





    var user_form_header = document.createElement("p");
    user_form_header.innerText = "User Name"
    document.body.appendChild(user_form_header);
    var user_name_form = document.createElement("form");
    user_name_input = document.createElement("input");
    user_name_form.appendChild(user_name_input);
    document.body.appendChild(user_name_form);

    var password_form_header = document.createElement("p");
    password_form_header.innerText = "Password"
    document.body.appendChild(password_form_header);
    var password_form = document.createElement("form");
    password_input = document.createElement("input");
    password_form.appendChild(password_input);
    document.body.appendChild(password_form);

     var next_btn = document.createElement("BUTTON");
 next_btn.setAttribute("id", "myBtn");
  var next_btn_txt = document.createTextNode("Login");

  next_btn.appendChild(next_btn_txt);
  document.body.appendChild(next_btn);

document.getElementById("myBtn").addEventListener("click", login_click);

function login_click() {
  document.location.href = "choose_trivia.html";
}



document.body.style.background = "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";