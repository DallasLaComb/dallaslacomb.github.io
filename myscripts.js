//There is 45 game boxes - (5 x 9)
var gameBoxes = document.getElementsByClassName('btn col-xs-1 col-centered');

var round; // Later will be used to determine the amount of blocks that appear on the screen.
var lives; // Later will be used to see how many strikes you have. 3 Strikes and you lose and have to start over.
var container = document.getElementById("container"); //Used to delete the game at the end of the round. It's the div the whole game is wrapped in.
var roundCompleted = document.getElementsByClassName('continue').length ==0; 


if(roundCompleted) {
    // update round
    if (round == null) {
        round = 4;
    } 
    else {
        round++;
    }
let buttonNumber = 1; //This variable assigns each button a number, starting with 1.
var counter = 0; //Used as a way to keep the while loop going untill all the boxes are filled with numbers for the round.
    while((round<=45)&&(counter<round)){
        let rng = Math.floor(Math.random() * 45);
        if ((gameBoxes[rng].classList.contains("active")) == false) {
                    gameBoxes[rng].innerHTML = buttonNumber.toString();
                    gameBoxes[rng].classList.add("active");
                    gameBoxes[rng].id = buttonNumber.toString();
                    buttonNumber++;
                    counter++
        }
        else {continue;}
    }
    
    var actives = document.getElementsByClassName("active");
    var clickCounter = 1;    
    $(".active").click(function() {
        if (this.id == clickCounter) {
            $(this).off('click');
            this.classList.remove("active")
            this.innerHTML = "";
            $(".active").text('')
            $(".active").css("background-color", "rgba(153, 144, 149, 0.5)")
            $(this).css("background-color", "transparent")
           
            clickCounter++
        
            if (actives.length == 0) {
               container.remove();
                $('#content').load('nextRound.html');
                
            }
        } else {
           if(lives==null){
            lives = 1;
            container.remove();
            round--;
            $('#content').load('nextRound.html');
           }
           else if(lives<2){
            lives++;
            container.remove();
            round--;
            $('#content').load('nextRound.html');
           }
           else{
            window.alert("You Lost!");
            container.remove();
            $('#content').load('nextRound.html');
            round = 3;
            lives=0;
           }
        }
    }); 
}

$(function(){
    $("#nav-placeholder").load("navbar.html");
  });

