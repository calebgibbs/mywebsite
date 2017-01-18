$(document).ready(function(){

	$('.responsive-img').hover(function(){
		$(this).attr("src", function(index, attr){
			return attr.replace(".png", "-responsive.png");
		});
	}, function(){
		$(this).attr("src", function(index, attr){
			return attr.replace("-responsive.png", ".png");
		});
	});

});
