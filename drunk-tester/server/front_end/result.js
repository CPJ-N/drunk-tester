var ans_percent = 0;

var h1 = document.createElement("h1");               // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude?????";               // Insert text
document.body.appendChild(h1);   

document.getElementById("main_header").setAttribute("align", "center");


var h2 = document.createElement("h2");               // Create a <p> element
h2.setAttribute("id", "header_2");
if (ans_percent >= 80) {
h2.innerText = "You good, dude!";  
             }
             else {
                {
h2.innerText = "Get some water man, you're not good";  
             }
             }
                          // Insert text
document.body.appendChild(h2);  
document.getElementById("header_2").setAttribute("align", "center");



 var next_btn = document.createElement("BUTTON");
 next_btn.setAttribute("id", "myBtn");
  var next_btn_txt = document.createTextNode("See leaderboard!");

  next_btn.appendChild(next_btn_txt);
  document.body.appendChild(next_btn);

document.getElementById("myBtn").addEventListener("click", start_quiz);

function start_quiz() {
  document.location.href = "leaderboard.html";
}

document.body.style.background = "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";