var timeLeft = questions.length * 15;
var timerId;
var currentQuestionIndex = 0;
var score = 0;
// DOM element variables to use
var startScreen = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var titleElement = document.querySelector("#questions-title");
var feedbackElement = document.querySelector("#feedback");
var endScreen = document.querySelector("#end-screen");
var endScore = document.querySelector("#end-score");
var submitBtn = document.querySelector("#submit");
var highscoreName = document.querySelector("#initials");

// starts game
function startQuiz() {
  // hides start screen
  startScreen.setAttribute("class", "hide");

  // Show questions
  questionsElement.removeAttribute("class", "hide");
  questionsElement.setAttribute("class", "unhide");
  // setTimeout();
  getCurrentQuestion();
  countdown();
}

function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerElement.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerElement.textContent = "0";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      endScreen.setAttribute("class", "unhide");
      questionsElement.setAttribute("class", "hide");
      feedbackElement.setAttribute("class", "hide");
      endScore.textContent = score + ".";
    }
  }, 1000);
}

function getCurrentQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  titleElement.textContent = currentQuestion.title;
  questionChoices.textContent = "";

  for (var i = 0; i < currentQuestion.choice.length; i++) {
    var possibleAnswers = document.createElement("button");
    possibleAnswers.setAttribute("class", "choice");
    if (currentQuestion.choice[i] == currentQuestion.answer) {
      possibleAnswers.setAttribute("onClick", "correct()");
    } else {
      possibleAnswers.setAttribute("onClick", "incorrect()");
    }
    questionChoices.setAttribute("value", currentQuestion.choice[i]);

    possibleAnswers.textContent = i + 1 + ". " + currentQuestion.choice[i];
    questionChoices.appendChild(possibleAnswers);
  }
}

function correct() {
  feedbackElement.textContent = "CORRECT!";
  feedbackElement.setAttribute("class", "unhide");
  currentQuestionIndex++;
  score += 100;
  if (score >= 1000) {
    endScreen.setAttribute("class", "unhide");
    questionsElement.removeAttribute("class", "unhide");
    questionsElement.setAttribute("class", "hide");
    feedbackElement.removeAttribute("class", "unhide");
    feedbackElement.setAttribute("class", "hide");
    endScore.textContent = score + ".";
    timeLeft = 0;
  } else {
  getCurrentQuestion();
  }
}

function incorrect() {
  feedbackElement.textContent = "INCORRECT!";
  feedbackElement.setAttribute("class", "unhide");
  timeLeft -= 15;
}

function setHighscore() {
  var result = { name: highscoreName.value, score: score };

  var savedScores = localStorage.getItem("highscore") || "[]"; // get the score, or initial value

  var highscores = [...JSON.parse(savedScores), result] // add the result
    .sort((a, b) => b.score - a.score) // sort descending
    .slice(0, 10); // take highest 10

  localStorage.setItem("highscore", JSON.stringify(highscores)); // store the scores

  window.location.href = "highscores.html";
}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", setHighscore);
