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
// var correct;


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
        correct : "if/ if else/ else/",
    }, {
        question : "Arrays in JavaScript can be used to store ___.",
        choiceA : "numbers and strings",
        choiceB : "booleans",
        choiceC : "other arrays",
        choiceD : "all the above",
        correct : "booleans",
    }, {
        question : "String value must be enclosed within ___ when being assigned to variables.",
        choiceA : "quotes",
        choiceB : "commas",
        choiceC : "curly brackets",
        choiceD : "square brackets",
        correct : "quotes",
    }, {
        question : "What is && in JavaScript?",
        choiceA : "loops",
        choiceB : "datatype",
        choiceC : "string",
        choiceD : "boolean",
        correct : "string",
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
    console.log('in displayQuestion(): questionIndex: ', questionIndex)

    quiz.style.display = "block"
    question.textContent = questions[questionIndex].question
    choiceA.textContent = questions[questionIndex].choiceA
    choiceB.textContent = questions[questionIndex].choiceB
    choiceC.textContent = questions[questionIndex].choiceC
    choiceD.textContent = questions[questionIndex].choiceD

//     choices.forEach(item => {
//         item.addEventListener("click", checkAnswer);
// })
}

// use a function to create timer count down
function setTime() {
    var timerInterval = setInterval(function() {
      timer--;
      timeCounter.textContent = timer;
  
      if(timer === 0) {
        clearInterval(timerInterval);
        // restartBtn.style.display = "block"  
      }
    }, 1000);
  }

function checkAnswer() {
    
    if (this.textContent !== questions[questionIndex].correct) {
        console.log('in checkAnswer(): INCORRECT ANSWER: questionIndex: ', questionIndex, 'question len: ', questions.length)

        console.log(incorrectCounter)
        console.log("wrong")
        incorrectCounter++
        // displayQuestion(questionIndex * 6) 
        // displayQuestion(questionIndex++)          
      } else {
        console.log('in checkAnswer(): CORRECT ANSWER: questionIndex: ', questionIndex)
        console.log("correct")

        console.log(correctCounter);
        correctCounter++;
        // displayQuestion(questionIndex++)        
      }
      if(questionIndex < questions.length - 1){
        displayQuestion(questionIndex++)
      } else {
        console.log("todo add score card page")
        scoreCard()
      }
      
    //   displayQuestion(questionIndex++)  
}

function restartGame() {
    // instructions.style.display = "block";
     correctCounter = 0;
 incorrectCounter = 0;
 timer = 5;
 questionIndex = 0;
    location.reload();
   
}

restartBtn.addEventListener("click", restartGame)


function scoreCard() {
    instructions.style.display = "none";
    restartBtn.style.display = "block" 
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "");
    document.body.appendChild(x);
    document.getElementsByClassName("score-card").innerHTML = "hello";

}

//  compare whatever that answer is equal to correct answer
// checkAnswer, in this function, comparing correct answer and user seleted answer
// increase index
// call displayQuesiotn() for dispalying next question.

// 74 75 declare new global variable
// create a on click check answer function
// index variable
// 0 is hard code instead or that you can use your variable