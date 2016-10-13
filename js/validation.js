$(document).ready(function(){

	var namePattern = new RegExp("^[a-zA-Z.' -]{2,50}$");  
	var phonePattern = new RegExp("^[0-9+() ]{5,15}$"); 
	var emailPattern = new RegExp("^[a-zA-Z0-9._'@]{7,50}$");

	var totalErrors = 0; 

	$('#first-name').blur(function(){ 
		var input = $(this).val(); 
		if( input.length === 0 ) { 
			$('#first-name-message').html('This feild is required');
			$('#first-name-message').removeClass('success').addClass('error'); 
			totalErrors++; 
		} 
		return $(totalErrors);
	}); 
	console.log(totalErrors);
});