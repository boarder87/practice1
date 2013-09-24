$(document).ready(function(){
	

$("div.one").click(function(){
$("div.one").animate({width:'100%',opacity:'0.5'},"slow").animate({width: '100%',opacity:'1'},"slow");
$("div.two").delay(1000).slideDown();
$("div.three").delay(1200).slideDown();
$("div.four").delay(1400).slideDown();
$("div.five").delay(1600).slideDown();
$("div.six").delay(1800).slideDown();

$("div.two").delay(400).animate({opacity:'0.01'},"slow").animate({opacity:'1'},"slow");
$("div.three").delay(600).animate({opacity:'0.01'},"slow").animate({opacity:'1'},"slow");
$("div.four").delay(800).animate({opacity:'0.01'},"slow").animate({opacity:'1'},"slow");
$("div.five").delay(1000).animate({opacity:'0.01'},"slow").animate({opacity:'1'},"slow");
$("div.six").delay(1200).animate({opacity:'0.01'},"slow").animate({opacity:'1'},"slow");
$("div.one").delay(1400).animate({opacity:'0.01'},"slow").animate({opacity:'1'},"slow");
});
});