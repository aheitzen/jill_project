$(document).ready(function() {
	$('#fullpage').fullpage();
});

$(document).ready(function (){
	$(".glyphicon.glyphicon-ice-lolly-tasted").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#hero-section").offset().top
        }, 1000);
  	});
	$("#30").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#thirty-days").offset().top
        }, 1000);
  	});
	$("#ux").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#ux-persona").offset().top
        }, 1000);
  	});
  	$("#keycode").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#keycode-project").offset().top
        }, 1000);
  	});
});



