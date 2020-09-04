var h1 = document.createElement("h1");               // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "Leaderboard";               // Insert text
document.body.appendChild(h1);   

document.getElementById("main_header").setAttribute("align", "center");

leaderboard = ['a', 'b', 'c', 'd']    // Placeholder for leaders from database

for (i=0; i<leaderboard.length; i++) {
var tr = document.createElement("TR");
tr.setAttribute("id", "main_header");
  
tr.innerText = `${i} ${leaderboard[i]}`; 
       // Insert text
document.body.appendChild(tr); 

}

document.body.style.background = "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";



