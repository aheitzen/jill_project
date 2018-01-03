$(document).ready(function() {
	$('#fullpage').fullpage();
});

$(document).ready(function (){
	$("#30").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#thirty-days").offset().top
        }, 1000);
  	});
	$("#about").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#mission-statement").offset().top
        }, 1000);
  	});
  	$("#movie").click(function (){
    	$('html, body').animate({
        	scrollTop: $("#movie-section").offset().top
        }, 1000);
  	});
    $("#contact").click(function (){
      $('html, body').animate({
          scrollTop: $("#footer").offset().top
        }, 1000);
    });
    $("#pricing").click(function (){
      $('html, body').animate({
          scrollTop: $("#pricing-header").offset().top
        }, 1000);
    });
});

$("#thirty-days").on("mouseenter", function(){
  $("li").addClass("list-switch");
});

$("#thirty-days").on("mouseleave", function(){
  $("li").removeClass("list-switch");
});