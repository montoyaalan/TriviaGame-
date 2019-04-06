// THIS IS ALL THE JQUERY AND JAVASCRIPT FOR MY TRIVIA GAME 
// USED YOUTUBE VIDEOS AND A BLOG POST FOR INSPIRATION 
// MAINLY BLOG POST BC IT WAS EASY TO FOLLOW AND I PREFER TO READ 

// STYLING WAS TAKEN FROM YOUTUBE VIDEO


$(document).ready(function () {

    //AN ARRAY WITH QUESTIONS WILL ALLOW IT TO ITERATE EASIER 
    var options = [
        {
            question: "Corey and Topanga are from what show?",
            choice:["Full House", "Beverley Hills 90210","Boy Meets World","Saved By The Bell"],
            answer: 2,
            photo: "assets/images/bmw.gif"
         },
         {
            question: "Which one of these spices was NOT part of The Spice Girls?",
            choice:["Scary Spice", "Posh Spice","Tragic Spice","Baby Spice"],
            answer: 2,
            photo: "assets/images/dance.gif"
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
            photo: "assets/images/sisters.gif"
        }, 
        {
            question: "What 90's Chick Flick was about Witchcraft?", 
            choice: ["Teen Witch", "Charmed", "Pretty In Pink", "The Craft" ],
            answer: 3,
            photo: "assets/images/kisses.gif"
        }, 
        {
            question: "Melissa Joan Hart played a teenager with powers in what show?",
            choice:["Clarisa Explains It All", "Sabrina The Teenage Witch","So Weird","The Days of Our Lives"],
            answer: 1,
            photo: "assets/images/magic.gif"
        }, 
        {
            question: "What 90's TV Show Launched Will Smith's Career?", 
            choice: ["The Cosby Show", "The Famous Jet Jackson", "The Fresh Prince of Bel Air", "Baywatch" ],
            answer: 2,
            photo: "assets/images/prince.gif"
        }, 
        {
            question: "What group is in charge of the 90's hit 'C'Mon Ride The Train'?", 
            choice: ["Salt N Pepa", "Destiny's Child", "Quad City DJ's", "Coolio" ],
            answer: 2,
            photo: "assets/images/train.gif"
        },
        {
            question: "Which one of these boy bands had member Justin Timberlake?", 
            choice: ["The Backstreet Boys", "Blink 182", "98 Degrees", "N'SYNC" ],
            answer: 3,
            photo: "assets/images/boys.gif"
            
        }, 
        {
            question: "What Movie starred Bugs Bunny and Michael Jordan?", 
            choice: ["Space Jam", "Kazam!", "Who Framed Roger Rabbit", "Baywatch" ],
            answer: 0,
            photo: "assets/images/space.gif"
        },
        {
            question: "Who played Forrest Gump?", 
            choice: ["John Travolta", "Jim Carey", "Tom Hanks", "Leonardo Dicaprio" ],
            answer: 2,
            photo: "assets/images/gump.gif"
            
        }, 
        {
            question: "What movie is the song 'My Heart Will Go' featured in?", 
            choice: ["Sister Act", "The First Wives Club", "The Terminator", "Titanic" ],
            answer: 3,
            photo: "assets/images/titanic.gif"
            
        },
        {
            question: "How many members were originally in Destiny's Child?", 
            choice: ["5", "2", "4", "ITS ALWAYS BEEN KELLY, BEY, AND MICHELLE" ],
            answer: 2,
            photo: "assets/images/child.gif"
            
        },
        {
            question: "What group of teenagers with attitudes kicked ass on the reg?", 
            choice: ["Big Bad BeetleBords", "The Mighty Morphin Power Rangers", "The PowerPuff Girls", "Pokemon" ],
            answer: 1,
            photo: "assets/images/power.gif"
            
        }
    ];
    


    //ALL VARIABLES 
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 15;
    var intervalId;
    var playerChoice ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    
    
  $("#reset").hide();
    //CREATING CLICK BUTTON TO START THE GAME 
    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
    }
        })
    // CREATING FUNCTION TO START TIMER
    function runTimer(){
        if (!running) {
        intervalId = setInterval(countD, 1000); 
        running = true;
        }
    }
    //FUNCTION TO HAVE TIMER COUNTDOWN 
    function countD () {
        $("#timeleft").html("<h3>Time Left: " + timer + "</h3>");
        timer --;
    
        //WHAT WILL HAPPEN WHEN THE TIMER HITS ZERO 
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerblock").html("<p>Times Up Sucka! The answer is " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }	
    }
        //FUNCTION FOR TIMER TO STOP WHEN THE PLAYER ANSWERS 
        function stop() {
            running = false;
            clearInterval(intervalId);
        }
    

//DISPLAY QUESTION AND ALLOWS LOOP TO LOOP THROUGH 
//ALSO DISPLAY POSSIBLE ANSWERS 
        function displayQuestion() {
            //GENERATE RANDOM QUESTION IN THE ARRAY 
            index = Math.floor(Math.random()*options.length);
            //THE VARIABLE FOR PICK WILL BE EQUAL TO THE CHOSEN QUESTION IN THE ARRAY 
            pick = options[index];
        
 //	if (pick.shown) {
        //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
        //		displayQuestion();
        //	} else {
        //		console.log(pick.question);
                //ITERATE THROUGH THE ANSWER ARRAY AND DISPLAY 
                $("#questionblock").html("<h2>" + pick.question + "</h2>");
                for(var i = 0; i < pick.choice.length; i++) {
                    var playerGuess = $("<div>");
                    //CREATING CLASS ".answerChoice" FOR CSS STYLING 
                    playerGuess.addClass("answerchoice");
                    playerGuess.html(pick.choice[i]);
                    //ASSSIGN ARRAY POSITION TO IT SO IT CAN EVALUATE PLAYERS ANSWER
                    playerGuess.attr("data-guessvalue", i);
                    $("#answerblock").append(playerGuess);
        //		}
        }
        
        
        
    //CLICK FUNCTION TO SELECT ANSWERS AND OUTCOMES 
        $(".answerchoice").on("click", function () {
            //grab array position from userGuess
            playerChoice = parseInt($(this).attr("data-guessvalue"));
        
            //CORRECT GUESSES/INCORRECT GUESSES OUTCOMES
            if (playerChoice === pick.answer) {
                stop();
                correctCount++;
                playerChoice="";
                $("#answerblock").html("<p>YOU GOT IT DUDE!</p>");
                hidepicture();
        
            } else {
                stop();
                wrongCount++;
                playerChoice="";
                $("#answerblock").html("<p>BUMMER! The answer is " + pick.choice[pick.answer] + "</p>");
                hidepicture();
            }
        })
        }
        
        
        function hidepicture () {
            $("#answerblock").append("<img src=" + pick.photo + ">");
            newArray.push(pick);
            options.splice(index,1);
        
            var hidpic = setTimeout(function() {
                $("#answerblock").empty();
                timer= 15;
        
            //RUN THE SCORE SCREEN IF ALL QUESTIONS HAVE BEEN ANSWERED// 
            if ((wrongCount + correctCount + unanswerCount) === qCount) {
                // THIS IS WHEN ALL QUESTIONS HAVE BEEN USED 
                $("#questionblock").empty();
                // WRITING IN HTML VIA JQUERY 
                $("#questionblock").html("<h3>Game Over Man! Check The Score Board! </h3>");
                $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
                $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
                $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
                $("#reset").show();
                correctCount = 0;
                wrongCount = 0;
                unanswerCount = 0;
        
            } 
            //THIS REFRESHES THE PAGE AFTER 5 SECONDS AFTER THE ANSWER IS DISPLAYED 
            else {
                runTimer();
                displayQuestion();
        
            }
            }, 5000);
        
        
        }
        
        $("#reset").on("click", function() {
            $("#reset").hide();
            $("#answerblock").empty();
            $("#questionblock").empty();
            for(var i = 0; i < holder.length; i++) {
                options.push(holder[i]);
            }
            runTimer();
            displayQuestion();
        
        })
        
    })
        