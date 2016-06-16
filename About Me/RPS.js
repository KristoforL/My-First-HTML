$(document).ready(function(){

$("#start").click(function(){

// sets all the variables to there starting point

var com = null
var choose = "CHOOSE!!"
var yt = "Your Throw"
var r = "rock"
var s = "scissors"
var p = "paper"
var t = null
var ct = null
var wins = 0
var lost = 0
var win = 0

$("#Throw").text(yt);
$("#win").text(wins);
$("#loss").text(lost);
$("#computer").text(null)
$("#rps").attr("src","rps.jpg");
$("#crps").attr("src","computer.jpg")

// generates a random number
ct = Math.random();


// logs to makes sure that the ct is set correctly
console.log(ct)


// evluates the value of ct and changes it to a string value for the game to compare
if(ct< .33){
	ct = "rock";
}
else if(ct < .67 && ct > .33){
	ct = "scissors";
}
else if(ct >.67){
	ct = "paper";
}

// logs the ct and makes sure its value is now a string value
console.log(ct);

// on click of title will be changed to the value of the choose variable to say the game is ready to start
$("#title").text(choose);

// when one of these bundles is clicked it sets your choice to the screen so you know what have chosen and displays a picture of what you chose
$("#S").click(function(){
	$("#Throw").text(s);
	t = s
	$("#rps").attr("src","Scissors.gif");
})

$("#R").click(function(){
	$("#Throw").text(r);
	t = r	
	$("#rps").attr("src","the rock.gif");
})

$("#P").click(function(){
	$("#Throw").text(p);
	t = p
	$("#rps").attr("src","paper.gif");
})



// The throw button is clicked and now the function takes place to compare the values. 
$("#play").click(function(){


// compares all the values for win and lose to set the score for the screen to see them.
	if(t === ct){
		$("#title").text("There is a tie");
	}
	else if(t === "rock" && ct === "scissors"){
		$("#title").text("You Won");
		wins++;
		$("#win").text(wins);
		win = 1
	}
	else if(t === "paper" && ct === "rock"){
		$("#title").text("You Won");
		wins++;
		$("#win").text(wins);
		win = 1
	}
	else if(t==="scissors" && ct === "paper"){
		$("#title").text("You Won");
		wins++;
		$("#win").text(wins);
		win = 1
	}
	else if(t === "scissors" && ct === "rock"){
		$("#title").text("You Lost");
		lost++;
		$("#loss").text(lost);
		win = 2
	}
	else if(t === "rock" && ct === "paper"){
		$("#title").text("You Lost");
		lost++;
		$("#loss").text(lost);
		win = 2
	}
	else if(t === "paper" && ct === "scissors"){
		$("#title").text("You Lost");
		lost++;	
		$("#loss").text(lost);
		win = 2
	}

// sets the variable equal to the value
com = "Computer chose "+ ct

//prints results to the console
console.log() 

//changes the image for the computer to what it threw 
if(ct === "rock"){
$("#crps").attr("src","the rock.gif")
} else if( ct === "paper"){
$("#crps").attr("src","paper.gif")
}else{
$("#crps").attr("src","Scissors.gif")
}

//displays the results in the picture
if(win == 1){
	if (t === "rock"){
		$("#result").attr("src","rock wins.jpg")
	}
	else if(t === "paper"){
		$("#result").attr("src", "paper wins.png")
	}
	else if(t==="scissors"){
		$("#result").attr("src", "scissors win.gif")
	}
}
else if(win == 2){
	if (t === "rock"){
		$("#result").attr("src","rock loses.jpg")
	}
	else if(t === "paper"){
		$("#result").attr("src","pl.gif")
	}
	else if(t === "scissors"){
		$("#result").attr("src", "scissors lose.gif")
	}
}
else{
	$("#result").attr("src","head to head.jpg")
}

//resets the boolean to false
win = 0;

// prints the computers choice
$("#computer").text(com)

// after comparing it sets another random number to compare for the next comparison so there is no duplicate
	ct = Math.random()
	
// checks to see if there is another number being generated and stored.
	console.log(ct)


// sets the value to a string for comparison
	if(ct< .33){
	ct = "rock";
	}
	else if(ct < .67 && ct > .33){
		ct = "scissors";
	}
	else if(ct >.67){
		ct = "paper";
	}	
	
// checks to see if the value is now a string value
	console.log(ct)






// sets the current score ont he html to the variable so that the player cans ee what the win lose is
$("#win").text(wins);
$("#loss").text(lost);
$("#copmuter").text(lost);
});

});






// On the page being ready this fuction will start
	// RPS();


// This is the rock paper scissors game
// function RPS(){


// //Declares all the variables for the game and has them as null
// var userThrow = null;
// var computerThrow = null;
// var Won = 0;
// var Lost = 0;
// var Tie = 0;
// var wins = 0;
// var lose = 0;

// // Randomly generates the number
// computerThrow =  Math.random();
// console.log(computerThrow);


// // Prompts the user to put in a choice to play
// userThrow = prompt("Rock, Paper, Scissors, Shoe!!");

// // Verifys the user throw is saved
// console.log(userThrow);



// // changes computer input to rock paper or scissors

// if(computerThrow< .33){
// 	computerThrow = "rock";
// }
// else if(computerThrow < .67 && computerThrow > .33){
// 	computerThrow = "scissors";
// }
// else if(computerThrow >.67){
// 	computerThrow = "paper";
// }


// // the user input and the computer random choice are compared

// function result(user, comp){	




// 	if(user === comp){
// 		alert("There is a tie");
// 	}
// 	else if(user === "rock" && comp === "scissors"){
// 		alert("You Won");
// 		wins++;
// 		$("#win").text(wins);
// 	}
// 	else if(user === "paper" && comp === "rock"){
// 		alert("You Won");
// 		wins++;
// 		$("#win").text(wins);
// 	}
// 	else if(user==="scissors" && comp === "paper"){
// 		alert("You Won");
// 		wins++;
// 		$("#win").text(wins);
// 	}
// 	else if(user === "scissors" && comp === "rock"){
// 		alert("You Lost");
// 		lose++;
// 		$("#win").text(lose);
// 	}
// 	else if(user === "rock" && comp === "paper"){
// 		alert("You Lost");
// 		lose++;
// 		$("#win").text(lose);
// 	}
// 	else if(user === "paper" && comp === "scissors"){
// 		alert("You Lost");
// 		lose++;	
// 		$("#win").text(lose);
// 	}
// 	else{
// 		alert("Thank you for palying!");
// 	}
// 	Won = wins;
// 	Lost = lose;
// }


// //Function created to make sure and see if the player wants to play again without reloading the DOM

// function repeat(){

//     var yes;
//     var con = confirm("Want to Play Again!");
//     if (con == true) {
//     	RPS();
//     } 

// }

// // calls the functions to actually interact with the DOM and have it respond.

// result(userThrow, computerThrow);

// repeat();


// }



});


