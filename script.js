// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startBtn = document.querySelector("#start button");
var quizTitle = document.querySelector("#quiz #title");
var timer = document.querySelector("#timer");
var quizQuestion = document.querySelector("#questions");
var currentQuestion = 0;
var questions = [];
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");
var countDown = "75"


function displayState() {
  if (state === 'start') {
    startEl.style.display = 'block';
    quizEl.style.display = 'none';
    endEl.style.display = 'none';
  }
  if (state === 'quiz') {
    startEl.style.display = 'none';
    quizEl.style.display = 'block';
    endEl.style.display = 'none';
  }
  if (state === 'end') {
    startEl.style.display = 'none';
    quizEl.style.display = 'none';
    endEl.style.display = 'block';
  }

  function makeQuestions(){

    var theQuestion = {
      question: "How many digits are in a hex triplet?",
      answer: ["four", "five", "six","seven"],
      correct: 2
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "what color is an apple",
      answer: ["red", "pink", "white","black"],
      correct: 0
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "waht color is a pineapple",
      answer: ["rainbow", "green", "blue","yellow"],
      correct: 3
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "which one is not part of a computer",
      answer: ["flashdrive", "motherboard", "gpu","cpu"],
      correct: 0
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "how mnay quarters does it take to make dolar",
      answer: ["four", "seven", "eight","five"],
      correct: 0
    };
    questions.push(theQuestion);
  }
  makeQuestions();


  
  
}
// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     countDown--;
//     timer.textContent = "Timer: " + countDown;

//     if(countDown === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }







function displayQuestion(){

var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
quizQuestion.textContent = questions[currentQuestion].question;
answer1El.textContent = questions[currentQuestion].answer[0];
answer2El.textContent = questions[currentQuestion].answer[1];
answer3El.textContent = questions[currentQuestion].answer[2];
answer4El.textContent = questions[currentQuestion].answer[3];


}





// buttons to switch screens
startBtn.addEventListener("click", function() {
  state = 'quiz';
  displayState();
 
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      countDown--;
      timer.textContent = "Timer: " + countDown;
  
      if(countDown === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        //state = 'end'
      }
  
    }, 1000);
  
  
});


function clearContent(){

}


quizTitle.addEventListener("click", function () {
  state = 'end';
  displayState();
});

answer1Btn.addEventListener("click", function(){
currentQuestion += "1";

})
console.log(currentQuestion);


function init() {
  displayState();
  displayQuestion();
  
  
}
init();
