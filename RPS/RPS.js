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
		$("#result").attr("src", "head to head.jpg")

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
			}else{
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

});


