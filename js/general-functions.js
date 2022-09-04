// JavaScript Document
window.onresize = function(){
  resize();
}
function resize(){
	if( typeof( window.innerWidth ) == 'number' ){
		altoExplorador = window.innerHeight;
		anchoExplorador = window.innerWidth;
	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		altoExplorador = document.documentElement.clientHeight;
		anchoExplorador = document.documentElement.clientWidth;
	  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		altoExplorador = document.body.clientHeight;
		anchoExplorador = document.body.clientWidth;
	  }
	$("#content").css("height",altoExplorador-90+"px");
	$("#text").css("height",altoExplorador-150+"px");
	$(".page").css("width",(anchoExplorador - $("#content").outerWidth())+"px");
}