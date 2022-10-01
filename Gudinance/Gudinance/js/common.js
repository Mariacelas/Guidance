$(document).ready(function() {
	 $('.bxslider').bxSlider({
        auto: true,		
		touchEnabled: false
    });
	$(".slider").slider({ 
        min: 0, 
        max: 500, 
        step: 1,
		range: true
    }).slider("pips", {
        rest: "label",
		step: 250,
		prefix: "$",
		suffix: "K"
    }).slider("float", {
        prefix: "$"
    });
});



