$(function(){
	$(".usd_share,.wall_share a,.db_box li a.share_btn").tap(function(){
		$(".pop_bg,.popUpBox").show();
	});
	$(".share_btn a,.amountBox p a").tap(function(){
		$(".pop_bg,.popUpBox,.amountBox").hide();
	});
	$(".sourBtn a").tap(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().siblings(".Tablist").find(".sourlist").eq(index).show().siblings().hide();
	});
	
	$('.delete-close').click(function(){
		$('.credit-bomb').hide();
	});

	
})
