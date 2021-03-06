var highscoreList = document.querySelector("#highscore-list");
var clearHsBtn = document.querySelector("#clear-highscores");
var getScores = localStorage.getItem("highscore");
var savedScores = [...JSON.parse(getScores)];

function clearHighscores() {
  window.localStorage.clear();
  var scoreRowCollection = document.getElementsByTagName("tr");
  var i = scoreRowCollection.length;
  while (i > 0) {
    i = scoreRowCollection.length - 1;
    scoreRowCollection[i].remove();
  }
}

for (var i = 0; i < savedScores.length; i++) {
  var prevTr = document.createElement("tr");
  highscoreList.appendChild(prevTr);
  var tD = document.createElement("td");
  var tD2 = document.createElement("td");
  tD2.setAttribute("class", "scoreRow");
  tD.textContent = savedScores[i].name;
  tD2.textContent = savedScores[i].score;
  prevTr.appendChild(tD2);
  prevTr.appendChild(tD);
}


clearHsBtn.addEventListener("click", clearHighscores);
