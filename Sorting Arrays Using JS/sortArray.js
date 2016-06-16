$(document).ready(function(){

		
	var myArray = [0.2867, 0.833, 1.576, 0.19, 0.688, 0.22, 0.572, .167, 0.643, 0.921, "-", "-", 0.222, 1.466789, 0.1, 0.714, 1.115];
	var myNewArray = []
	var decimalPlace = null

	var j;

	/*This function checks for the length of the array
	Pulls the value 
	assigns the value to a variable
	converts it to a precision of 3 places
	Pushes the value to the new array
	and checks the value being pushed to the array  by logging the array
	*/
	for (j=0; j<myArray.length; j++) {
		
			if (myArray[j] === "-"){
				
				decimalPlace = 000;
				myNewArray.push(decimalPlace);
			
			}


			/*
			If this is a number then this is supposed to make sure there is not a zero in the
			front of the decimal. if there is a zero we will remove it.
			*/
			else{
				decimalPlace = myArray[j].toPrecision(3)
				console.log(decimalPlace)	
				myNewArray.push(decimalPlace);
				console.log(myNewArray)
			
				myNewArray = myNewArray.map(function(decimalPlace){
					decimalPlace = Number(decimalPlace).toFixed(3);
					
					if(decimalPlace === "-") return '.000';
					
					return decimalPlace[0] === '0'? decimalPlace.slice(1) : decimalPlace
				})
			}
		}
	

	/*After the new array has been filled
	This will sort the new array
	log to see the new order of the array
	and alert that the new array in order
	*/
	myNewArray.sort()
	console.log(myNewArray);
	
	
	/*
	This block of code makes a formatte way to present it so that it can be viewed in the html
	*/
	var k
	var formatSentence = "";

	for(k=0; k<myNewArray.length; k++){
		formatSentence += myNewArray[k]+ ",  "
	}

	console.log(formatSentence)
	$(".arrayValue").text(formatSentence);

});

