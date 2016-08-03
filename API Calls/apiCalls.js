// This is to check and see if the API call is successful
$(".api").click(function(){

	// Takes the value of the input into the search
	var search = $(".UI").val();

	// logs the value put into the search and readys the API call
	console.log(search);

	// Gets the Json for the new call on the movie and returns it
	$.getJSON("http://www.omdbapi.com/?s="+search+"&r=json", function(data){
		
		var final = [];

 		var items = data.Search;
  		var j;

  		  for(j=0; j<items.length; j++){

  	 final.push( "<li>" + items[j].Title + " came out during " + items[j].Year + "</li>" );
  	  	console.log(items[j].Title);
  		}
	    
	    $( "<ul/>", {
	    html: final.join( "" )
	  }).appendTo( ".mySearch" );
	})
	$(".UI").val("");
})


// This is displaying the data from the API call

$.getJSON( "http://www.omdbapi.com/?s=Rugrats&r=json", function( data ) {

  var final = [];

  var items = data.Search;
  var j;

  // This cycles through the array and pushs the value of a array into a new array
  for(j=0; j<items.length; j++){

  	 final.push( "<li>" + items[j].Title + " came out during " + items[j].Year + "</li>" );

  	// Logging to make sure that it was putting out the correct information
  	// console.log(items[j].Title);
  }
  
  // This is creating a new ul tag with a join function in it to join all the li tags and adding them to the body
  $( "<ul/>", {
    html: final.join( "" )
  }).appendTo( ".mySearch" );

});


$.getJSON( "https://cigarsbaseballserver.herokuapp.com/cigarsbaseball/roster", function( data ) {

	var items = data;

	var j;

	for (j=0; j<items.length; j++){
		
		if(items[j].position.includes("OF")){
			
			$("<ul/>",{
			html: items[j].position + " "+ items[j].name
			}).appendTo(".bb");
		}

		console.log(items[j].name+" "+items[j].position);
	}


});


// var str = "Hello world, welcome to the universe.";
// var n = str.includes("world");
























