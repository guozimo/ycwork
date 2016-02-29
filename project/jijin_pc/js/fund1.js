$(function(){
	$(".toMarket").on("click",function(){
		$(".witebox,.black").css({"display":"block"});
	});
	$(".topbox img").on("click",function(){
		$(".witebox,.black").css({"display":"none"});
	});

//默认箭头位置设置
var mr_left= $(".conIn_sou p span .ji_on").attr("data-id");
	$(".conIn_sj p").css({"left":mr_left+"px"});

	$(".conIn_sou p span a").on("click",function(){
		var index = $(this).index(),
			pos_left=$(this).attr("data-id"); //获取位置数值
		$(this).addClass('ji_on').siblings().removeClass("ji_on");
		$(".conIn_lists .conIn_list").eq(index).addClass('active').siblings().removeClass("active");
		//$(".conIn_sj p").css({"left":pos_left+"px"});
		$(".conIn_sj p").stop().animate({
			"left":pos_left
		},500);
		
		$(".j_gp").stop().animate({
			"left":pos_left
		},500);

	});
	$(".settings span a").on("click",function(){
		var index = $(this).index(),
			pos_left=$(this).attr("data-id"); //获取位置数值
		$(this).addClass('ji_on').siblings().removeClass("ji_on");
		$(".conIn_lefts .conIn_left").eq(index).addClass('active').siblings().removeClass("active");
		//$(".conIn_sj p").css({"left":pos_left+"px"});
		$(".conIn_sj2 p").stop().animate({
			"left":pos_left
		},500);

	});

//input value(asset_pwdsettings1.html)
	$(".j_form .j_passwds").on("focus",function(){
		$(this).css({"display":"none"}).siblings("input").css({"display":"inline-block"});
		$(this).siblings("input").focus();
	});
	$(".j_form .j_passwd").on("blur",function(){
		if( !$.trim( $(this).val() ) ){
			$(this).css({"display":"none"}).siblings("input").css({"display":"inline-block"});
		}
	});







});



//添加自选
function zixuan_add(obj){
	   var fundCode = $(obj).attr('code');
	   $.ajax({
             url:"<?= site_url('/Fund_list/zixuan_add')?>",
             type:"post",
             data:{fundCode:fundCode},
             success:function(result){
                    if(result==1){
                        alert('关注成功');
                        $(obj).text("已关注");
                   }
             }
         })
}
