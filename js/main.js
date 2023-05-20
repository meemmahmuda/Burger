(function($){
	'use strict';

//Mobile Menu


$('.menu-icon i').on('click', function(){
	$('.mobile-menu').slideToggle();
})



$(window).resize(function(){

	var screenSize = $(window).width();

	if(screenSize > 991){
		$('.mobile-menu').removeAttr('style');
	}
});




}) (jQuery);