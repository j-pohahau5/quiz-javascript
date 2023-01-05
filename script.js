// created variables that connect back to my HTML
// will use the varobles to create the game on javscript

var instructions = document.querySelector("#instructions");
var startBtn = document.querySelector("#start-btn");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");

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
        correct : "A",
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

// write a function for the start button to begin game
function startGame() {
    instructions.style.display = "none";
    displayQuestion()
}

startBtn.addEventListener("click", startGame)

function displayQuestion() {
    quiz.style.display = "block"
    question.textContent = questions[questionIndex].question
    choiceA.textContent = questions[questionIndex].choiceA
    choiceB.textContent = questions[questionIndex].choiceB
    choiceC.textContent = questions[questionIndex].choiceC
    choiceD.textContent = questions[questionIndex].choiceD
}

function checkAnswer() {

}

// checkAnswer, in this function, comparing correct answer and user seleted answer
// increase index
// call displayQuesiotn() for dispalying next question.

// 74 75 declare new global variable
// create a on click check answer function
// index variable
// 0 is hard code instead or that you can use your variable