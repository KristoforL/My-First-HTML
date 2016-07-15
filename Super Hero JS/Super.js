 $(document).ready(function(){

var arrayCount = 6;

/*------------------------CLASSES PROPERTIES  FUNCTIONS AND VARIABLES-------------------------------*/


	 // Sets up a class for the Constructor to be held in
	 class Superhero{

	 	// Sets a constructor that has two variables and the properties that reference the the specific constructor
		constructor (name, powers){
			this.name = name;
			this.powers = powers;
		}

		// This is a method that is specific for returning the name of the specific Superhero
		getName(){
			return this.name;
		}

		// This is a method that checks the powers of a Superhero and tells you if the superhero can fly or not
		canFly(){
			var fly = false;
			var allPowers = this.powers.length;
			for(var j = 0; j<allPowers; j++){
				if(this.powers[j] == ("Can Fly")){
					fly = true;
				}
			}
			return (fly);
		}
	}

	// Sets up the multiple superheros from the constructor template above
	var superKid = new Superhero("SuperDo", ["Super Speed", "Can Fly"]);
	var superKid1 = new Superhero("SuperNo", ["Super Strength", "Super Breath"]);
	var superKid2 = new Superhero("SuperSo", ["Super Size", "X-ray Vision"]);
	var superKid3 = new Superhero("SuperToo", ["Super Singer", "Can Fly"]);
	var superKid4 = new Superhero("SuperBrew", ["Shape Shifter", "Sonic Voice"]);
	var superKid5 = new Superhero("SuperCrew", ["Super Replicate", "Super Speed", "Atomic Consumption"]);

	// Sets an array of super heros
	var superHeroes=[];

	// Assigns the above superkids to an index in the array
	superHeroes[0] = superKid;
	superHeroes[1] = superKid1;
	superHeroes[2] = superKid2;
	superHeroes[3] = superKid3;
	superHeroes[4] = superKid4;
	superHeroes[5] = superKid5;


/*------------------------CALLING FUNCTIONS-------------------------------*/

	// Saves the super hero in the array and sets the heroes name and powers
	$(".saveHero").click(function(){

		var name = $(".superName").val();
		
		// Set the values of the powers to an array and parse the string 

		var power= '"'+ $(".power").val()+'", ';

		console.log(powers);


		superHeroes[arrayCount] = new Superhero(name,powers);

		// Clears all the information in place for the stored superhero
		$(".extraPowers").text("");
		$(".superList").text("");
		$(".flyingHeroes").text("");

		// increases the count so we do not store over old entries
		arrayCount++;
	})

	// adds an additional input box for the superhero to have another power
	$(".addPower").click(function(){
		$(".extraPowers").append("<input type='text' name='Superpower' value='Power' class='powers'>");
	})

	// Displays all the superheroes
	$(".showSupers").click(function(){
		for (var j = 0; j<superHeroes.length; j++){
			$(".superList").append("The superhero at index " + j + " is " + superHeroes[j].name + "<br>");
		}
	})

	// Displays all the flying superheroes
	$(".flyingSupers").click(function(){
		
		var index = 0;
		var numHeros = superHeroes.length;
		var result = null;

		while (index < numHeros)
		{
			var currentHero = superHeroes[index];

		if (currentHero.canFly())
		{
		console.log ("Hero " + currentHero.name + " can fly!");

		$(".flyingHeroes").append("Hero " + currentHero.name + " can fly!<br>");
			
		}

		index++;
		}
	})

	// Clears all the changes so that you can start over for the superhero
	$(".clearChanges").click(function(){
		$(".extraPowers").text("");
		$(".superList").text("");
		$(".flyingHeroes").text("");
	})

});