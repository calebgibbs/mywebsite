$(document).ready(function(){
	$('#mobile-icon').click(function(){
		$('#menu-button').toggleClass('is-active'); 
		$('#list-items').toggleClass('menu-close');
	});
});