var h1 = document.createElement("h1"); // Create a <p> element
h1.setAttribute("id", "main_header");
h1.innerText = "Leaderboard"; // Insert text
document.body.appendChild(h1);

document.getElementById("main_header").setAttribute("align", "center");

let allResults = [];

function getReport() {
  fetch("http://localhost:3000/report")
    .then((response) => response.json())
    .then((result) => {
      //       console.log(result);
      allResults = result;
      for (i = 0; i < allResults.length; i++) {
        var tr = document.createElement("TR");
        tr.setAttribute("id", "main_header");
        for (var key in allResults[i].body) {
          if (allResults[i].body.hasOwnProperty(key)) {
            console.log(key);
            console.log(allResults[i].body[key]);
            var td1 = document.createElement("TD");
            var td2 = document.createElement("TD");
            td1.setAttribute("id", "content");
            td1.innerText = `${key}`;
            td2.setAttribute("id", "content");
            td2.innerText = `${allResults[i].body[key]}`;
            tr.append(td1, td2);
          }
        }
        tr.innerText = `${i} ${allResults[i].body}`;
        // Insert text
        document.body.appendChild(tr);
      }
    })
    .catch((error) => console.log("error", error));
}
getReport();

// leaderboard = ["a", "b", "c", "d // Placeholder for leaders from database

for (i = 0; i < allResults.length; i++) {
  var tr = document.createElement("TR");
  tr.setAttribute("id", "main_header");
  for (var key in allResults[i].body) {
    if (p.hasOwnProperty(key)) {
      console.log(key);
      var td = document.createElement("TR");
      td.setAttribute("id", "content");
      td.innerText = `${key} +  ->  ${allResults[i].body[key]}`;
      tr.appendChild(td);
    }
  }
  tr.innerText = `${i} ${allResults[i].body}`;
  // Insert text
  document.body.appendChild(tr);
}

document.body.style.background =
  "url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-036.jpg')";
