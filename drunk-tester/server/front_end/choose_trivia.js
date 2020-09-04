var h1 = document.createElement("h1");               // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude??";               // Insert text
document.body.appendChild(h1);   

document.getElementById("main_header").setAttribute("align", "center");


// var h2 = document.createElement("h2");               // Create a <p> element
// h2.setAttribute("id", "header_2");
// h2.innerText = "Welcome to a new era of drinking game (quarantine edition)!";               // Insert text
// document.body.appendChild(h2);  
// document.getElementById("header_2").setAttribute("align", "center");

var h4 = document.createElement("h4");               // Create a <p> element
h4.setAttribute("id", "header_4");
h4.innerText = "Choose a trivia from the following!";               // Insert text
document.body.appendChild(h4);  
document.getElementById("header_4").setAttribute("align", "center");

// var p1 = document.createElement("p");               // Create a <p> element
// p1.setAttribute("id", "para_1");
// p1.innerText = "We bring you the 'You good, dude?' drunk questionnaire! You shall be taking a a trivia based on your choice from the following. The first set of questions will be multipe choice and the second set will be true false.";               // Insert text
// document.body.appendChild(p1);  
// document.getElementById("para_1").setAttribute("align", "center");

for (i=0; i<4; i++) {
var tr = document.createElement("TR");
tr.setAttribute("id", "main_header");
tr.innerText = `Trivia: ${i}`;             // Insert text
document.body.appendChild(tr); 
var inp = document.createElement("INPUT");
inp.setAttribute("type", "radio");
inp.setAttribute("id", "trivia_option");
inp.setAttribute("name", `abc_${i}`);               // Insert text
document.body.appendChild(inp);
}

for (k=0; k<2; k++) {
  var br = document.createElement("br"); 
br.innerText = " ";
document.body.appendChild(br);
}

 var next_btn = document.createElement("BUTTON");
 next_btn.setAttribute("id", "myBtn");
  var next_btn_txt = document.createTextNode("Start!");
  next_btn.appendChild(next_btn_txt);
  document.body.appendChild(next_btn);

document.getElementById("myBtn").addEventListener("click", start_quiz);

function start_quiz() {
  document.location.href = "mcq.html";
}

document.body.style.background = "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";
