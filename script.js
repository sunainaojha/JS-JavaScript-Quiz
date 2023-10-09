var questions = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: ["var myVar = 5", "let myVar = 5", "const myVar=5", "All of the above"],
    answer: "All of the above"
  },

  {
    question: "Which programming language is known as the 'mother of all languages'?",
    choices: ["C", "Java", "Assembly", "Python"],
    answer: "Assembly"
  },

  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },

  {
    question: "Javascript Language is an _____ language?",
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented"
  },


  {
    question: "How can a datatype be declared to be a constant type?",
    choices: ["const", "var", "let", "constant"],
    answer: "const"
  },


];

var currentQuestionIndex = 0;
var time = 60; // Initial time in seconds
var timerInterval;
var score = 0;


var questionEl = document.querySelector(".questionEl");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById('submitBtn');

console.log(questionEl);

function startQuiz() {



  document.getElementById("section").innerHTML = "";


  timerInterval = setInterval(updateTimer, 1000); // Start the timer
  displayQuestion();


}

function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";

  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = currentQuestion.choices[i];
    choiceBtn.setAttribute("onclick", "checkAnswer(this)");
    choicesEl.appendChild(choiceBtn);
  }
}

function checkAnswer(btn) {
  var userAnswer = btn.textContent;
  var currentQuestion = questions[currentQuestionIndex];

  if (userAnswer === currentQuestion.answer) {

    score++;
  } else {
    time -= 10; // Subtract 10 seconds for incorrect answer
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length || time <= 0) {
    endQuiz();
  } else {
    displayQuestion();
  }
  //results.innerHTML=`score ${score} `;
 
  return score;
};
//var showScore = checkAnswer();
  //results.innerHTML=showScore;

function endQuiz() {
  console.log("text")
  clearInterval(timerInterval);
  // Display game over message
  // Prompt user for initials and save score
  //window.location.href="scores.html";
  document.querySelector(".quiz").innerHTML = "";
  document.querySelector(".end").style.display = "block";
  results.innerHTML=score;


}

function updateTimer() {
  timerEl.textContent = "Time: " + time;

  if (time <= 0) {
    endQuiz();
  } else {
    time--;
  }
}





 //results = document.getElementById('results');
//let scoreStorage = localStorage.getItem("scoreList")
  //? JSON.parse(localStorage.getItem("scoreList"))
  //: [];
//localStorage.setItem('results', JSON.stringify(scoreStorage));

//startBtn.addEventListener("click", startQuiz);
//listBuilder(initials.value);
//listBuilder(checkAnswer());
//var listBuilder=(s)=> {
 // var scoreLi= document.createElement('li');
//};

var initialInput = document.querySelector("#initialInput")
// var previousHistory = JSON.parse(localStorage.getItem("userScores")) || []

submitBtn.addEventListener("click", (event) => {
 event.preventDefault();
 var previousHistory = JSON.parse(localStorage.getItem("userScores")) || []
var userInfo = {
  initials: initialInput.value,
  score: score
}
previousHistory.push(userInfo)
localStorage.setItem("userScores", JSON.stringify(previousHistory))
console.log(userInfo)
});
//var initials = document.getElementById('initials')
//console.log(checkAnswer());

//const getScores = JSON.parse(scoreStorage.getScore("scoreList"));
  //getScores.forEach((score) => {
    //listBuilder(score);
  //});


//var initials= document.getElementById('initials');
//var results=document.getElementById('results');

//localStorage.setItem("results");

startBtn.addEventListener("click", startQuiz);