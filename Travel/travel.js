$(document).ready(function(){

	var roundTrip = 0

	//NEEDS TO RETURN THE BOOLEAN VALUE SO THAT IT CAN REGISTER ON THE SEARCH CLICK BUTTON FUNCTION
	$("#rt").click(function(){
		
		$("#rtb").css("display", "inline");
		$(".bg").css("display", "inline");
		$(".return").css("display", "inline");
		$(".searching").text("");
		$(".depart").val("")
		$(".to").val("")
		roundTrip = 0
		console.log(roundTrip)
	});

	$("#ow").click(function(){
		
		$(".return").css("display", "none");
		$(".bg").css("display", "none");
		$(".searching").text("");
		$(".depart").val("")
		$(".return").val("")
		roundTrip = 1
		console.log(roundTrip)
	});


	//Returns the value for the the appropriate travel be it round trip or one way
	$("#search").click(function(){
		
		/*
		Should check for:
		same city of travel
		if the date is before the current date
		if the date returning is before the day of departure
		*/

		if($("#from").val()!="empty" && $("#to").val()!="empty"){

			//Checks to see if the vlaues are equal to one another	
			if($("#from").val() != $("#to").val()){
						
				if(roundTrip == 0){
					$(".searching").text("Searching for you flight from " + $("#from").val() +" on " + $(".depart").val() + " and returning back to "+ $("#to").val() + " on "+ $(".return").val() +".")
					}else{
					$(".searching").text("Searching for you flight from " + $("#from").val() +" to "+ " on " + $("#to").val() + " on " + $(".depart").val() + ".")	
					}
			
			}else{
				alert("YOU ARE DUMB FOR REAL. YOU CAN NOT FLY FROM AND TO THE SAME LOCATION!")
			}
		}else{
			alert("Please fill in both to and from locations")
		}
			
	});


	//reverts everything back to normal
	$("#cancel").click(function(){
		$("#from").val(1);
		$("#to").val(1);
		$("#rt").prop("checked", "checked")
		$("#ow").attr("checked", false)
		$(".searching").text("")
		$(".return").css("display", "inline");
		$(".bg").css("display", "inline");
		$("#rtb").val("")
		$(".return").val("")

	})

});