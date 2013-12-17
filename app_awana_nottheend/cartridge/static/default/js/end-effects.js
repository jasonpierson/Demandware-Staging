// Mobile Menu -- not jQuery
var navigation = responsiveNav("#site-menu", { // Selector: The ID of the wrapper
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 400, // Integer: Speed of the transition, in milliseconds
  customToggle: "menu-toggle", // Selector: Specify the ID of a custom toggle
  insert: "before", // String: Insert the toggle before or after the navigation
  openPos: "relative" // String: Position of the opened nav, relative or static
});

$(document).ready( function() {
	$('.radio-select input[type="radio"], .radio-select label').addClass('js');
	
	$('.radio-select label').click(function() {
	    $('.radio-select label').siblings( function() {
	    	$.removeClass('active');
	    });
	    $(this).addClass('active');
	});
});