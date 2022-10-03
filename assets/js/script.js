console.log("here i am")

var timerEl=document.querySelector(".timer");
var timerCount, userScore, questionindex;


var timerCount = 60;

var listAnswers = document.querySelector(".list-answers");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");

var question = document.getElementById("question")

var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

var startQ = document.querySelector("#front-page");
var endQ = document.querySelector("#end-page");
// var h1 = document.querySelector ('h1')
// var title=document.getElementById("titleQ");
// title.setAttribute("style", '100px', 'center');
// h1.append(title);

// resetButton.setAttribute;


var questionArr=[{
    question:"this is question #1",
    choiceA: "1this is wrong",
    choiceB: "1this is wrong",
    choiceC: "1this is correct",
    choiceD: "1this is wrong",
    correct: "1this is correct"
},{
    question:"this is question #2",
    choiceA: "2this is correct",
    choiceB: "2this is wrong",
    choiceC: "2this is wrong",
    choiceD: "2this is wrong",
    correct: "2this is correct"
},{
    question:"this is question #3",
    choiceA: "3this is wrong",
    choiceB: "3this is wrong",
    choiceC: "3this is wrong",
    choiceD: "3this is correct",
    correct: "3this is correct"
},{
    question:"this is question #4",
    choiceA: "4this is correct",
    choiceB: "4this is wrong",
    choiceC: "4this is wrong",
    choiceD: "4this is wrong",
    correct: "4this is correct"
}
]



// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;

//     if(secondsLeft === 0) {
      
//       clearInterval(timerInterval);
      
//     //   sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();



// start quiz and switch from front page to questions

function startQuiz() {

    timerCount = 60;
    userScore = 0;
    questionindex = 0;
    renderQuestion()
    startTimer()
    startButton.disabled=true;
    startQ.style.display = "block";
    for(var i = 0; i < questionArr.length; i++){
        startQ.style.display = "none";
    }
    
}
   


function startTimer(){

    var timerCount=setInterval(function(){
        timerCount--; 
        if (timerCount===0){
            stop(timer)};
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
function checkAnswer(event){
    console.log (event);
    questionindex += 1;
    renderQuestion();

}

document.querySelector(".list-answers").addEventListener("click", checkAnswer)


