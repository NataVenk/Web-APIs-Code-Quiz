// console.log("here i am")
var qTitle = document.querySelector("#titleQ")
var timerEl=document.querySelector(".qtime");
var topScoreEl = document.querySelector("top-score");
var timerCount, userScore; var questionindex=0
var timerCount = 60;
// var topScoreheader = document.querySelector("#top-Score-header")

var score = 0; 

var listAnswers = document.querySelector(".list-answers");
var startButton = document.querySelector(".start-button");

// var resetButton = document.querySelector(".reset-button");

var question = document.getElementById("question")

var choiceA = document.getElementById("choice1")
var choiceB = document.getElementById("choice2")
var choiceC = document.getElementById("choice3")
var choiceD = document.getElementById("choice4")

// var aChoice = document.getElementsByClassName("btnanswer")
var ansCorrect = "";


var startQ = document.querySelector(".front-page");
var endQz = document.querySelector("#end-page");
var qBody = document.querySelector ("#quizBody");
var topScore = document.querySelector ("#top-score");



var questionArr=[{
    question:"this is question #1",
    aChoice: ["bullion", "number", "string", "array"],
    ansCorrect: [1]

},{
    question:"this is question #2",
    aChoice: ["2bullion", "number", "string", "array"],
    ansCorrect: [0]
   
},{
    question:"this is question #3",
    aChoice: ["3bullion", "number", "string", "array"],
    ansCorrect: [1]
    
},{
    question:"this is question #4",
    aChoice: ["4bullion", "number", "string", "array"],
    ansCorrect: [1]
    
},{
    question:"this is question #5",
    aChoice: ["5bullion", "number", "string", "array"],
    ansCorrect: [0]
  
    
},{
    question:"this is question #6",
    aChoice: ["6bullion", "number", "string", "array"],
    ansCorrect: [3]

    
}
]
console.log(questionArr[1].aChoice[1])


function StartScreen (){
    timerEl.textContent = "Time left " + timerCount;
    // how to move timer between title and paragraph?
    startQ.style.display = "block"; 
    endQz.style.display = "none"; 
    qBody.style.display = "none"; 
    topScore.style.display = "none";
    timerEl.textContent = "Time left " + timerCount;
    
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
        // console.log(timerCount);
        timerCount--; 
        timerEl.textContent = "Time left " + timerCount;
        if(timerCount === 0) {
            presentResults();
            clearInterval(timerInterval);
            
          }
       
    },1000);
 
    
}



startButton.addEventListener("click", startQuiz);



// Function call to present questions

function renderQuestion(){
   question.textContent=questionArr[questionindex].question
   choiceA.textContent=questionArr[questionindex].aChoice[0]
   choiceB.textContent=questionArr[questionindex].aChoice[1]
   choiceC.textContent=questionArr[questionindex].aChoice[2]
   choiceD.textContent=questionArr[questionindex].aChoice[3]

   console.log(questionArr[1].aChoice[1])
//    choice1.textContent=questionArr[questionindex].choiceA
//    choice2.textContent=questionArr[questionindex].choiceB
//    choice3.textContent=questionArr[questionindex].choiceC
//    choice4.textContent=questionArr[questionindex].choiceD

}

function checkAnswer(){

    if (ansCorrect == "true" ) {
        questionindex ++;
        score += 
        alert ("Correct!")}
    else {
        questionindex ++;
        timerCount = timerCount-10; 
        alert ("Wrong!")}

    // if (answer == "true"){score++; alert("Correct!")}
    // else {timerCount= timerCount-10; alert ("Wrong!")};
    // questionindex += i;
    // renderQuestion();

}
// // ansCorrect.addEventListener("click", addScore);

// function addScore(){
//     score= i++
// }

function presentResults (){
    qBody.style.display = "none";
    endQz.style.display = "block";

    
}




document.querySelector(".list-answers").addEventListener("click", checkAnswer)



