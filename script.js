// created variables that connect back to my HTML
// will use the varobles to create the game on javscript

var instructions = document.querySelector("#instructions");
var startBtn = document.querySelector("#start-btn");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choices = document.querySelectorAll(".choice");

var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");

var timeCounter = document.querySelector(".time-counter");
var notice = document.querySelector("#notice");

var restartBtn = document.querySelector(".restart-btn");
var correctCounter = 0;
var incorrectCounter = 0;
var timer = 60;
var questionIndex = 0;


// using the variable questions to connect var question  with choice (A,B,C,D)
var questions = [
    {
        question : "Which one of these are a datatype?",
        choiceA : ".querySelector",
        choiceB : "True",
        choiceC : "div",
        choiceD : "var",
        correct : ".querySelector",
    }, {
        question : "What starts a conditional statement?",
        choiceA : "for",
        choiceB : "False",
        choiceC : "if/ if else/ else/",
        choiceD : "docuement",
        correct : "C",
    }, {
        question : "Arrays in JavaScript can be used to store ___.",
        choiceA : "numbers and strings",
        choiceB : "booleans",
        choiceC : "other arrays",
        choiceD : "all the above",
        correct : "B",
    }, {
        question : "String value must be enclosed within ___ when being assigned to variables.",
        choiceA : "quotes",
        choiceB : "commas",
        choiceC : "curly brackets",
        choiceD : "square brackets",
        correct : "A",
    }, {
        question : "What is && in JavaScript?",
        choiceA : "loops",
        choiceB : "datatype",
        choiceC : "string",
        choiceD : "boolean",
        correct : "C",
    }
];
console.log(questions)
//  hide restart button 

restartBtn.style.display = "none"

// write a function for the start button to begin game
function startGame() {
    instructions.style.display = "none";
    displayQuestion()
    setTime()
}
// use  start button to start game
startBtn.addEventListener("click", startGame)

// use function to display question
function displayQuestion() {
    quiz.style.display = "block"
    question.textContent = questions[questionIndex].question
    choiceA.textContent = questions[questionIndex].choiceA
    choiceB.textContent = questions[questionIndex].choiceB
    choiceC.textContent = questions[questionIndex].choiceC
    choiceD.textContent = questions[questionIndex].choiceD
}

// use a function to create timer count down
function setTime() {
    var timerInterval = setInterval(function() {
      timer--;
      timeCounter.textContent = timer;
  
      if(timer === 0) {
        clearInterval(timerInterval);       
      }
    }, 1000);
  }

function checkAnswer() {
    console.log("hello it works")

    choices.forEach(function(i){
        i.addEventListener("click", function(e){
            if(e.target.innerHTML === correct) {
                console.log("true")
            };
        })
      })
}



//  compare whatever that answer is equal to correct answer
// checkAnswer, in this function, comparing correct answer and user seleted answer
// increase index
// call displayQuesiotn() for dispalying next question.

// 74 75 declare new global variable
// create a on click check answer function
// index variable
// 0 is hard code instead or that you can use your variable