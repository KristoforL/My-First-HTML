
$(document).ready(function(){
var home = document.getElementById(".page-wrapper");
var aboutMe = document.getElementById(".page-wrapper1");
var whatILike = document.getElementById(".page-wrapper2");
var contact = document.getElementById(".page-wrapper3");



$(".home").click(function(){
	
	$("#1").css("display", "block");
	$("#2").css("display", "none");
	$("#3").css("display", "none");
	$("#4").css("display", "none");

console.log("home");
});



$(".aboutMe").click(function(){
	
	$("#1").css("display", "none");
	$("#2").css("display", "block");
	$("#3").css("display", "none");
	$("#4").css("display", "none");
console.log("me");
});

$(".whatILike").click(function(){
	
	$("#1").css("display", "none");
	$("#2").css("display", "none");
	$("#3").css("display", "block");
	$("#4").css("display", "none");
console.log("like");
});

$(".contact").click(function(){
	
	$("#1").css("display", "none");
	$("#2").css("display", "none");
	$("#3").css("display", "none");
	$("#4").css("display", "block");
	
console.log("phone");
});


});

//Outside of .ready function so it can start on its own
function light(){
	$(".light").click(function(){
		$("html").css({"color":"black","background-color":"white"});
	})
}
function dark(){
	$(".dark").click(function(){
		$("html").css({"color":"white","background-color":"black"});
	})
}

function startTime() {
	 var today = new Date();
     var h = today.getHours();
	 var m = today.getMinutes();
	 var s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);
     document.getElementById('txt').innerHTML =
	 h + ":" + m + ":"+s;
	 var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	 if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
     return i;
}