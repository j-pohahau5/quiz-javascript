// created variables that connect back to my HTML
// will use the varobles to create the game on javscript

var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var counter = document.querySelector("#counter");
var progress = document.querySelector("#progress");
var scoreCard = document.querySelector("#scoreContainer");

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
        choiceC : "srting",
        choiceD : "boolean",
        correct : "C",
    }
]