// JavaScript Document

$(document).ready(function() {
	$(document).mousemove(function(e){
		if(intro == true)
		{
		  var mousex = e.pageX;
		  var mousey = e.pageY;
		  var doc_width = $(document).width();
		  var doc_height = $(document).height();
		  var percent1, percent2;
		  mousex = mousex / crop ;
		  mousey = mousey / crop;
		  $(".background").css("background-position", (doc_width - mousex)+"px "+(doc_height - mousey)+"px");
		  percent1 = ((doc_width ) / e.pageX);
		  percent1 = $(".page"+current+" .scene1").attr('speed') / percent1;
		  percent1 = $(".page"+current+" .scene1").attr('desp') - percent1;
		  percent2 = ((doc_width ) / e.pageX);
		  percent2 = $(".page"+current+" .scene2").attr('speed') / percent2;
		  $(".light").css("left",3+percent2+"%");
		  percent2 = $(".page"+current+" .scene2").attr('desp') - percent2;
		  $(".page"+current+" .scene1").css("background-position",percent1+"% 50%");
		  $(".page"+current+" .scene2").css("background-position",percent2+"% 50%");
		}
	});
    
});

function introFunc()
{
	
	intro = false;
	$(".page2 .scene2, .page2 .scene1, .page3 .scene2, .page4 .scene2").removeClass('special');
	$(".page"+current+" .scene1").css("background-position", interactionPage1[current]);
	$(".page"+current+" .scene2").css("background-position", interactionPage2[current]);
	$(".page"+current+" .scene1").animate({
		'background-position-x': '50%',
		'background-position-y': '50%'
	},2000);
	$(".page"+current+" .scene2").animate({
		'background-position-x': '50%',
		'background-position-y': '50%'
	},2000,function()
	{
		intro = true;
		$(".page2 .scene2, .page2 .scene1, .page3 .scene2, .page4 .scene2").addClass('special');
	});
	
	
}




