// THIS IS ALL THE JQUERY AND JAVASCRIPT FOR MY TRIVIA GAME 
// USED YOUTUBE VIDEOS AND A BLOG POST FOR INSPIRATION 

// selecting HTML tags and storing variables like so
const quizContainer=document.getElementById("quiz");

const resultsContainer=document.getElementById("results");

const submitButton=document.getElementById("submit");


//FUNCTIONS BEGIN BELOW 

function buildQuiz () {

}

function showResults (){

}

// evoking this function will display quiz right away 

buildQuiz ();

// on submit it will show the results 

submitButton.addEventListener('click'.showResults);



//QUESTIONS 
//USING AN ARRAY WILL MAKE THE QUERSTIONS EASY TO ITERATE OVER 

const myQuestions = [
    [
        question: "Corey and Tapanga are from what show?";

       var answers: {
            a: "Full House",
            b: "Beverley Hills 90210",
            c: "Boy Meets World",
        };
        correctAnswer: "c";
    ]
]