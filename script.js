$('.boutonEpaule').click(function(){
	$('.affiche').hide();
	$('#textEpaule').toggle();

});

$(".boutonBras").click(function(){
	$('.affiche').hide();
	$("#textBras").toggle();
});

$(".boutonMain").click(function(){
	$('.affiche').hide();
	$("#textMain").toggle();
});

$(".boutonHanche").click(function(){
	$('.affiche').hide();
	$("#textHanche").toggle();
});

$(".boutonGenoux").click(function(){
	$('.affiche').hide();
	$("#textGenoux").toggle();
});

$(".boutonPied").click(function(){
	$('.affiche').hide();
	$("#textPied").toggle();
});
jQuery(document).ready(function(){
   $('h1').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});