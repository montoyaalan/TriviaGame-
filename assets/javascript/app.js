// THIS IS ALL THE JQUERY AND JAVASCRIPT FOR MY TRIVIA GAME 
// USED YOUTUBE VIDEOS AND A BLOG POST FOR INSPIRATION 
$(document).ready(function () {
    var options = [
        {
            question: "Corey and Tapanga are from what show?",
            choice:["Full House", "Beverley Hills 90210","Boy Meets World","Saved By The Bell"],
            answer: 2,
            photo: "assets/images/bmw.jpg"
         },
         {
            question: "Which one of these spices were not part of The Spice Girls?",
            choice:["Scary Spice", "Posh Spice","Tragic Spice","Baby Spice"],
            answer: 2,
            photo: "assets/images/spice.jpg"
         }, 
         {
            question: "What movie coined the phrases 'AS IF' and 'Whatever!' ?",
            choice:["It Takes Two", "Bebe's Kids","Encino Man","Clueless"],
            answer: 3,
            photo: "assets/images/tenor.gif"
        }, 
        {
            question: "What show were Tia Mowry and Tamera Mowry in?",
            choice:["Sister, Sister", "All That","Full House","Dawson's Creek"],
            answer: 0,
            photo: "assets/images/sister.jpg"
        }, 
        {
            question: "What 90's Chick Flick was about Witchcraft?", 
            choice: ["Teen Witch", "Charmed", "Pretty In Pink", "The Craft" ],
            answer: 3,
            photo: "assets/images/craft.jpg"
        }, 
        {
            question: "Melissa Joan Hart played a teenager with powers in what show?",
            choice:["Clarisa Explains It All", "Sabrina The Teenage Witch","So Weird","The Days of Our Lives"],
            answer: 1,
            photo: "assets/images/sabrina.jpg"
        }, 
        {
            question: "What 90's TV Show Launched Will Smith's Career?", 
            choice: ["The Cosby Show", "The Famous Jet Jackson", "The Fresh Prince of Bel Air", "Baywatch" ],
            answer: 2,
            photo: "assets/images/prince.jpg"
        }, 
        {
            question: "What group is in charge of the 90's hit 'C'Mon Ride The Train'?", 
            choice: ["Salt N Pepa", "Destiny's Child", "Quad City DJ's", "Coolio" ],
            answer: 2,
            photo: "assets/images/djs.jpg"
        },
        {
            question: "Which one of these boy bands had member Justin Timberlake?", 
            choice: ["The Backstreet Boys", "Blink 182", "98 Degrees", "N'SYNC" ],
            answer: 3,
            photo: "assets/images/"
            
        }, 
        {
            question: "What Movie starred Bugs Bunny and Michael Jordan?", 
            choice: ["Space Jam", "Kazam!", "Who Framed Roger Rabbit", "Baywatch" ],
            answer: 0,
            photo: "assets/images/space.gif"
        }
    ];
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 30;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    
    
  $("#reset").hide();
    //click start button to start game
    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
    }
        })
    //timer start
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        //stop timer if reach 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }	
    }
    