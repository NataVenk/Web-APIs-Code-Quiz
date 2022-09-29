console.log("here i am")

var timerEl=document.querySelector(".timer");

var timerCount, userScore, questionindex;
var listAnswers = document.querySelector(".list-answers");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var question = document.getElementById("question")


var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

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
}]


// need a collection of objects that hold quesitons


// need click start button 

// function.startQuiz(){
// }

function startQuiz() {

    timerCount = 60;
    userScore = 0;
    questionindex=0;
    renderQuestion()
    startTimer()
    startButton.disabled=true;
  }

function startTimer(){

    // timerInterval=setInterval(function()){
    //     timerCount--;  
    //     timerElement.textContent = timerCount;

    //     if (timerCount==0){
    //         clearInterval(timer);
    //         resultsEl ();
    //         // go to final score window with inititals and submit button
    //     }
    // }, 1000
}    
    


startButton.addEventListener("click", startQuiz);



// Function call to present questions

function renderQuestion(){
   question.textContent=questionArr[questionindex].question
   choice1.textContent=questionArr[questionindex].choiceA
   choice2.textContent=questionArr[questionindex].choiceB
   choice3.textContent=questionArr[questionindex].choiceC
   choice4.textContent=questionArr[questionindex].choiceD
//    question.textContent=questionArr[1].question
//    question.textContent=questionArr[2].question

}
function checkAnswer(event){
    console.log (event);
    questionindex += 1;
    renderQuestion();

}

document.querySelector(".list-answers").addEventListener("click", checkAnswer);

startButton.addEventListener("click", startQuiz);



