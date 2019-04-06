// THIS IS ALL THE JQUERY AND JAVASCRIPT FOR MY TRIVIA GAME 
// USED YOUTUBE VIDEOS AND A BLOG POST FOR INSPIRATION 
$(document).ready(function () {


//QUESTIONS 
//USING AN ARRAY WILL MAKE THE QUERSTIONS EASY TO ITERATE OVER 

var myQuestions = [
        {
            question: "Corey and Tapanga are from what show?";
            choice:["Full House", "Beverley Hills 90210","Boy Meets World","Saved By The Bell"];
            answer: 2;
            photo: "";
         },

         {
            question: "Which one of these spices were not part of The Spice Girls?";
            choice:["Scary Spice", "Posh Spice","Tragic Spice","Baby Spice"];
            answer: 2;
            photo: "";
         },
         { 
            question: "What movie coined the phrases 'AS IF' and 'Whatever!' ?";
            choice:["It Takes Two", "Bebe's Kids","Encino Man","Clueless"];
            answer: 3;
            photo: "";
         },
         {
            question: "What show were Tia Mowry and Tamera Mowry in?";
            choice:["Sister, Sister", "All That","Full House","Dawson's Creek"];
            answer: 0;
            photo: "";
         },
         {
            question: "Melissa Joan Hart played a teenager with powers in what show?";
            choice:["Clarisa Explains It All", "Sabrina The Teenage Witch","So Weird","So Weird"];
            answer: 1;
            photo: "";
         }
        }]; // these are the closing tags for my array/objects of questions 


//GLOBAL VARIABLES FOR COUNTERS AND TIMERS 

var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var timer = 30;
var intervalId;
var userGuess ="";
var running = false;
var qCount = myQuestions.length;
var pick;
var index;
var newArray = [];
var holder = [];



//JQUERY BEGINS HERE 
// USING FUNCTIONS 

$("#reset").hide();

//CREATE START BUTTON TO BE CLICKED FOR GAME TO START
$("#start").on("click", function () {
    $("#start").hide();
    displayQuestion();
    startTimer();
    for(var i = 0; i < myQuestions.length; i++) {
holder.push(myQuestions[i]);
}
})

//STARTS THE TIMER 
function startTimer(){
	if (!running) {
	intervalId = setInterval(timeUp, 1000); 
	running = true;
	}
}

//COUNTDOWN TIMER 
function timeUp() {
	$("#timeleft").html("<h3>Time Left: " + timer + "</h3>");
    timer --;
    	//CONDITIONAL TO STOP TIMER AT 0
	if (timer === 0) {
		unanswerCount++;
		stop();
		$("#answerblock").html("<p>NOT COOL! The Answer was: " + pick.choice[pick.answer] + "</p>");
		hidepicture();
	}	
}




} // THIS CURLY BRACE IS THE END OF MY JAVASCRIPT CODE 