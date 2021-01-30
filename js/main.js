$(document).ready(function(){
 $('.header').height($(window).height());

// Ёффект прокрутки
 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
 })
})