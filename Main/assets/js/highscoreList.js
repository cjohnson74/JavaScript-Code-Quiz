var highscoreList = document.querySelector("#highscore-list");
var clearHsBtn = document.querySelector("#clear-highscores");
var getScores = localStorage.getItem("highscore");
var savedScores = [...JSON.parse(getScores)]

function clearHighscores() {
  window.localStorage.clear();
}

for (var i = 0; i < savedScores.length; i++) {
    var prevTr = document.createElement("tr");
    highscoreList.appendChild(prevTr);
    var tD = document.createElement("td");
    tD.setAttribute("class", "scoreRow");
    var tD2 = document.createElement("td");
    tD2.setAttribute("class", "scoreRow");
    tD.textContent = savedScores[i].name;
    tD2.textContent = savedScores[i].score;
    prevTr.appendChild(tD2);
    prevTr.appendChild(tD);
  
}

// for (var i = 1; i < localStorage.length; i++) {
//   for (var j = 0; j < 9; j++) {
//     if (localStorage.key.length <= 3) {
//       savedScores[j][0] = localStorage.key[i];
//       savedScores[j][1] = localStorage.Value[i];
//     }
//     else {
//         break;
//     }
//   }
// }

clearHsBtn.addEventListener("click", clearHighscores);
