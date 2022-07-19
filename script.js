
var state = 'start';

var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var scoreboardEl = document.querySelector("#scorepage")
var endBtn = document.querySelector("#end button")
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
var finalScore = document.querySelector("#score");
var wrongOrRight = document.querySelector("#right")
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var initialsInput = document.querySelector("#textBox");
var submitbtn = document.querySelector("#submit");
var startoverbtn = document.querySelector("#start-over")


//sends the page to a different one
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
//makes the different questions and answeres and choices the correct answer
  function makeQuestions(){

    var theQuestion = {
      question: "How many digits are in a hex triplet?",
      answer: ["four", "five", "six","seven"],
      correct: "six"
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "What color is #000000?",
      answer: ["red", "pink", "white","black"],
      correct: "black"
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "What color is #ffffff?",
      answer: ["rainbow", "white", "blue","yellow"],
      correct: "white"
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "Which one is not part of a computer?",
      answer: ["printer", "motherboard", "gpu","cpu"],
      correct: "printer"
    };
    questions.push(theQuestion);
    theQuestion = {
      question: "how many quarters does it take to make dolar",
      answer: ["four", "seven", "eight","five"],
      correct: "four"
    };
    questions.push(theQuestion);
  }
  makeQuestions();


  
  
}


//gets the different answer choices and question
function displayQuestion(){


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
      
       
      if(countDown === 0 || state === 'end' ) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      //displays final score
        finalScore.textContent ="Your score is: " + countDown;
        state = 'end';
      
      }
      
    }, 1000);
  
  
});

//button click 1
answer1Btn.addEventListener("click", function(){
if(currentQuestion <=3){
  if(answer1El.textContent === questions[currentQuestion].correct){
    wrongOrRight.textContent = "Right";
      }
      else{
    wrongOrRight.textContent = "Wrong";
    countDown = countDown - 15;
      }
      
  currentQuestion += 1;
  displayQuestion();
}
else{
  state = 'end';
  displayState();
}})
//button click 2
answer2Btn.addEventListener("click", function(){
  if(currentQuestion <=3){
    if(answer2El.textContent === questions[currentQuestion].correct){
      wrongOrRight.textContent = "Right";
        }
        else{
      wrongOrRight.textContent = "Wrong";
      countDown = countDown - 15;
        }
        
    currentQuestion += 1;
    displayQuestion();
  }
  else{
    state = 'end';
    displayState();
  }})
  //button click 3
answer3Btn.addEventListener("click", function(){
  if(currentQuestion <=3){
    if(answer3El.textContent === questions[currentQuestion].correct){
      wrongOrRight.textContent = "Right";
        }
        else{
      wrongOrRight.textContent = "Wrong";
      countDown = countDown - 15;
        }
        
    currentQuestion += 1;
    displayQuestion();
  }
  else{
    state = 'end';
    displayState();
  }})
  //button click 4
answer4Btn.addEventListener("click", function(){
  if(currentQuestion <=3){
    if(answer4El.textContent === questions[currentQuestion].correct){
      wrongOrRight.textContent = "Right";
        }
        else{
      wrongOrRight.textContent = "Wrong";
      countDown = countDown - 15;
        }
    currentQuestion += 1;
    displayQuestion();
  }
  else{
    state = 'end';
    displayState();
  }})


  //text box at the end


submitbtn.addEventListener('click', function(event){
  event.preventDefault();

  // var data = {
  //   initials: initialsInput.value,
  //   score: countDown
  // };

  // var scores = JSON.parse(localStorage.getItem('score')) || [];

  

  localStorage.setItem(initialsInput.value, countDown);
  init();
})


function init() {
  displayState();
  displayQuestion();
}
init();
