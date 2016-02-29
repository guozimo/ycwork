/*$('.maintop li').click(function(){
	var index=$(this).index();
	$('.maintop li').eq(index).addClass('check').siblings().removeClass('check');
	$('.mainl').eq(index).removeClass('disnon').siblings('.mainl').addClass('disnon');
})*/

$(function(){
	$('.eyebox').click(function(){
		
        
		if($(this).parents('.passbox').hasClass('open')==true){
			$(this).parents('.passbox').removeClass('open');
			
		}else{
			$(this).parents('.passbox').addClass('open');
			
		}
		
	})  
	$('.close').click(function(){
		$('.floatbox').hide();
		$('.blackbox').hide();
	})
})
