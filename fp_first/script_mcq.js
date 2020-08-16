var h1 = document.createElement("h1");               // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "You good, dude??";               // Insert text
document.body.appendChild(h1);   

document.getElementById("main_header").setAttribute("align", "center");

for (i=1; i<6; i++) {
  
  var h3 = document.createElement("h3");               // Create a <p> element
  
h3.setAttribute("id", "true_false");

h3.innerText = `Question ${i}?`;               // Insert text
document.body.appendChild(h3);

for (j=1; j<5; j++) {


var x = document.createElement("INPUT");
x.setAttribute("type", "radio");
x.setAttribute("id", "option_1");
x.setAttribute("name", `abc_${i}`);
x.value=`option ${j}`
document.body.appendChild(x);

  var p = document.createElement("p");
  p.innerText = `option ${j}`;
document.body.appendChild(p);



}

for (k=0; k<3; k++) {
  var br = document.createElement("br"); 
br.innerText = " ";
document.body.appendChild(br);
}

}

 var next_btn = document.createElement("BUTTON");
  var next_btn_txt = document.createTextNode("Next Section");
  next_btn.appendChild(next_btn_txt);
  document.body.appendChild(next_btn);