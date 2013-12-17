jQuery(document).ready(function()  {
	if(jQuery(window).width() < 531) {
		// jQuery(".categorymenu > ul > li > a").attr("href","#");
		jQuery(".categorymenu > ul > li:has(ul)").find("a:first").attr("href","#");
	}
	jQuery(".nav-show").click(function() {
		jQuery(".categorymenu").toggle();
	});
});