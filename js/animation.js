$(document).ready(function(){
	$('img').on('dragstart', function(event) { event.preventDefault(); }); 
	console.log('prevent dragging of images');
}); 

