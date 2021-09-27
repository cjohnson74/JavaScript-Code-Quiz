var highscoreList = document.querySelector("#highscore-listff");
var clearHsBtn = document.querySelector("#clear-highscores");
var savedScores = localStorage.getItem("highscore");


function clearHighscores() {
  window.localStorage.clear();
}

for (var i = 0; i < savedScores.length - 1; i++){
    for (var j = 0; i < 2; i++){
        var row
    }
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
