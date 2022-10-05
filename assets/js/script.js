// console.log("here i am")

var timerEl=document.querySelector(".qtime");
var timerCount, userScore, questionindex;
var timerCount = 60;
// document.getElementById("timer").innerHTML = "Time" + timerInterval;

var score = 0; 

var listAnswers = document.querySelector(".list-answers");
var startButton = document.querySelector(".start-button");

// var resetButton = document.querySelector(".reset-button");

var question = document.getElementById("question")

var choiceA = document.getElementById("choice1")
var choiceB = document.getElementById("choice2")
var choiceC = document.getElementById("choice3")
var choiceD = document.getElementById("choice4")




var startQ = document.querySelector(".front-page");
var endQz = document.querySelector("#end-page");
var qBody = document.querySelector ("#quizBody");
var topScore = document.querySelector ("#top-score");



var questionArr=[{
    question:"this is question #1",
    choiceA: "1this is wrong", correct: false,
    choiceB: "1this is wrong", correct: false,
    choiceC: "1this is correct", correct: true,
    choiceD: "1this is wrong", correct: false,
    
},{
    question:"this is question #2",
    choiceA: "2this is correct", correct: true,
    choiceB: "2this is wrong", correct: false,
    choiceC: "2this is wrong", correct: false,
    choiceD: "2this is wrong",correct: false,
   
},{
    question:"this is question #3",
    choiceA: "3this is wrong", correct: false,
    choiceB: "3this is wrong", correct: false,
    choiceC: "3this is wrong", correct: false,
    choiceD: "3this is correct", correct: true,
    
},{
    question:"this is question #4",
    choiceA: "4this is correct", correct: true,
    choiceB: "4this is wrong", correct: false,
    choiceC: "4this is wrong", correct: false,
    choiceD: "4this is wrong", correct: false,
    
}
]



function StartScreen (){
    startQ.style.display = "block"; 
    endQz.style.display = "none"; 
    qBody.style.display = "none"; 
    topScore.style.display = "none";


}

StartScreen();



function startQuiz() {

    timerCount = 60;
    userScore = 0;
    questionindex = 0;
    renderQuestion()
    startTimer()
    startQ.style.display = "block";
    for(var i = 0; i < questionArr.length; i++){
        startQ.style.display = "none";
    }
    qBody.style.display = "block"; 
    topScore.style.display = "none";
    
}



function startTimer(){

    var timerInterval=setInterval(function(){
        console.log(timerCount);
        timerCount--; 
        timerEl.textContent = "Time left " + timerCount;
        if(timerCount === 0) {
            presentScore();
            clearInterval(timerInterval);
            
          }
       
    },1000);
 
    
}



startButton.addEventListener("click", startQuiz);



// Function call to present questions

function renderQuestion(){
   question.textContent=questionArr[questionindex].question
   choice1.textContent=questionArr[questionindex].choiceA
   choice2.textContent=questionArr[questionindex].choiceB
   choice3.textContent=questionArr[questionindex].choiceC
   choice4.textContent=questionArr[questionindex].choiceD

}
function checkAnswer(){
    // if (answer == "true"){score++; alert("Correct!")}
    // else {alert ("Wrong!")};
    questionindex += 1;
    renderQuestion();

}


function presentScore (){
    qBody.style.display = "none";
    endQz.style.display = "block";

    
}


document.querySelector(".list-answers").addEventListener("click", checkAnswer)



