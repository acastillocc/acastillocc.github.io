// JavaScript Document

function simple_tooltip(clase, name){
	$("."+clase).each(function(i){
		$("body").append("<div class='"+name+"' id='"+name+i+"' style='display:none; bottom: 0px;'><div class='tooltipp_text' style='border-radius: 5px;	margin:0;padding:0;color:#fff;background-color:#222;padding-top: 5px;padding-right: 9px;padding-bottom: 5px;padding-left: 9px;	line-height: 15px;text-align: center;background-image:-webkit-gradient(linear, left top, left bottom, color-stop(0, #454545), color-stop(1, #000));  background-image:-webkit-linear-gradient(#454545, #000);background-image:-moz-linear-gradient(top, #454545, #000);background-image:-o-linear-gradient(top, #454545, #000);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#353535\", EndColorStr=\"#000\");box-shadow:inset 0 0 15px #000000;-o-box-shadow: 		inset 0 0 15px #000000;-ms-box-shadow:inset 0 0 15px #000000;-moz-box-shadow:inset 0 0 15px #000000;-webkit-box-shadow: inset 0 0 15px #000000;text-shadow: #000 0 -1px 2px;max-width: 400px;max-height:400px;font-size:12px;font-family:Tahoma;'>"+$(this).attr('title')+"</div></div>");
		var my_tooltip = $("#"+name+i);

		if($(this).attr("title") != "" && $(this).attr("title") != "undefined" ){

		$(this).removeAttr("title").mouseover(function(){
			my_tooltip.removeAttr('style');
			my_tooltip.css({opacity:0.8, 
							display:"none",
							position: "absolute",
							'z-index': 100100,
							padding:"5px",
							border: "1px solid #CCC",
							width:"auto",
							height:"auto",
							'word-wrap':'break-word',
							'border-radius': "5px",
							'box-shadow':"0px 8px 23px -5px #000000",
							'-o-box-shadow': "0px 8px 23px -5px #000000",
							'-ms-box-shadow':	"0px 8px 23px -5px #000000",
							'-moz-box-shadow': "0px 8px 23px -5px #000000",
							'-webkit-box-shadow':"0px 8px 23px -5px #000000;}).show()"}).show();
							
			my_tooltip.css("background-color","#FFFFFF");
					
		}).mousemove(function(kmouse){
				var border_top = $(window).scrollTop();
				var border_right = $(window).width();
				var left_pos;
				var top_pos;
				var offset = 17;
				if(border_right - (offset *2) >= my_tooltip.width() + kmouse.pageX){
					left_pos = kmouse.pageX+offset;
					} else{
					left_pos = border_right-my_tooltip.width()-offset;
					}

				if(border_top + (offset *2)>= kmouse.pageY - my_tooltip.height()){
					top_pos = border_top +offset;
					} else{
					top_pos = kmouse.pageY-my_tooltip.height()-offset;
					}

				my_tooltip.css({left:left_pos, top:top_pos});
		}).mouseout(function(){
				my_tooltip.hide();
		});

		}

	});
}