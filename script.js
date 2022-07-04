// declare variable

let introText = document.querySelector("#introText");
let startBtn = document.querySelector(".startBtn");
let quiz = document.querySelector(".quiz");
let finalSocre = document.querySelector(".final-score");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let userName = document.querySelector("#useName");
let userNameBtn = document.querySelector("#useNameBtn");

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

let scoreEl = document.querySelector(".score");
let iterationNumber = 0;
let score = 0;

// array of questions
let questionLists = [
  {
    question: "1.How to write an IF statement in JavaScript?",
    optionA: "A: if i = 5",
    optionB: "B: if i = 5 then ",
    optionC: "C: if i == 5 then",
    optionD: "D: if (i == 5)",
    answer: "D"
  },
  {
    question: "2. How do you round the number 7.25, to the nearest integer??",
    optionA: "A: Math.round(7.25)",
    optionB: "B: rnd(7.25)",
    optionC: "C: round(7.25)",
    optionD: "D: Math.rnd(7.25)",
    answer: "A"
  },
  {
    question: "3. How do you create a function in JavaScript?",
    optionA: "A: function, myFunction()",
    optionB: "B: function:myFunction()",
    optionC: "C: function myFunction()",
    optionD: "D: function = myFunction()",
    answer: "C"
  },
  {
    question: "4. What will the following code return: Boolean(10 > 9)",
    optionA: "A: NaN",
    optionB: "B: true",
    optionC: "C: undefined",
    optionD: "D: false",
    answer: "B"
  }
]

// feature display - disappear

quiz.style.display = "none"
finalSocre.style.display = "none"

function beginQuiz() {
  introText.innerHTML = ""
  startBtn.style.display = "none"
  quiz.style.display = "block"
  question.innerHTML = questionLists[iterationNumber].question;
  answerA.innerHTML = questionLists[iterationNumber].optionA;
  answerB.innerHTML = questionLists[iterationNumber].optionB;
  answerC.innerHTML = questionLists[iterationNumber].optionC;
  answerD.innerHTML = questionLists[iterationNumber].optionD;
}

function goBacktoHome() {
  introText.innerHTML = "This is a timed quiz. Please click the 'Start' button to begin.";
  finalSocre.style.display = "none"
  startBtn.style.display = "block"
}

function displayFinalSocre() {
  quiz.style.display = "none";
  scoreEl.innerHTML = score;
  finalSocre.style.display = "block";
  
}


function aFunction () {

  var option = "A";

  if (iterationNumber >= questionLists.length) {
    iterationNumber = 0;
    return displayFinalSocre();
  } 

  question.innerHTML = questionLists[iterationNumber].question;
  answerA.innerHTML = questionLists[iterationNumber].optionA;
  answerB.innerHTML = questionLists[iterationNumber].optionB;
  answerC.innerHTML = questionLists[iterationNumber].optionC;
  answerD.innerHTML = questionLists[iterationNumber].optionD;

  var answer = questionLists[iterationNumber].answer
  if (answer === option) {
    score = score + 1;
  }

  iterationNumber = iterationNumber + 1;

}


function bFunction () {

  var option = "B";

  if (iterationNumber >= questionLists.length) {
    iterationNumber = 0;
    return displayFinalSocre();
  } 

  question.innerHTML = questionLists[iterationNumber].question;
  answerA.innerHTML = questionLists[iterationNumber].optionA;
  answerB.innerHTML = questionLists[iterationNumber].optionB;
  answerC.innerHTML = questionLists[iterationNumber].optionC;
  answerD.innerHTML = questionLists[iterationNumber].optionD;

  var answer = questionLists[iterationNumber].answer
  if (answer === option) {
    score = score + 1;
  }

  iterationNumber = iterationNumber + 1;
}



function cFunction () {
  console.log(iterationNumber)

  var option = "C";

  if (iterationNumber >= questionLists.length) {
    iterationNumber = 0;
    return displayFinalSocre();
  } 

  question.innerHTML = questionLists[iterationNumber].question;
  answerA.innerHTML = questionLists[iterationNumber].optionA;
  answerB.innerHTML = questionLists[iterationNumber].optionB;
  answerC.innerHTML = questionLists[iterationNumber].optionC;
  answerD.innerHTML = questionLists[iterationNumber].optionD;

  var answer = questionLists[iterationNumber].answer
  if (answer === option) {
    score = score + 1;
  }

  iterationNumber = iterationNumber + 1;
  
}


function dFunction () {

  var option = "D";

  if (iterationNumber >= questionLists.length) {
    iterationNumber = 0;
    return displayFinalSocre();
  } 

  question.innerHTML = questionLists[iterationNumber].question;
  answerA.innerHTML = questionLists[iterationNumber].optionA;
  answerB.innerHTML = questionLists[iterationNumber].optionB;
  answerC.innerHTML = questionLists[iterationNumber].optionC;
  answerD.innerHTML = questionLists[iterationNumber].optionD;

  var answer = questionLists[iterationNumber].answer
  if (answer === option) {
    score = score + 1;
  }
  
  iterationNumber = iterationNumber + 1;
  
}

function countdown() {
  var timeLeft = 15;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left";

    if(timeLeft === 0) {
      clearInterval(timeInterval);
      alert("TIMES UP!");
    }

  }, 1000);
}

countdown();

userNameBtn.addEventListener("click", function(event) {
  event.preventDefault();
})

