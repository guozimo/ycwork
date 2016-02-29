/*轮播图*/
var t=null;
var n =0; //计数器;
var count=$("#banner_list a").length; //a的个数
$(document).ready(function(){
	$("#banner_list a:not(:first-child)").hide(); //除了第一个其余的都隐藏;
	var _title=$("#banner_list a").eq(0).find("img").attr('alt');//获取图片的alt值;
	$("#banner_info").html(_title); //把图片的alt值赋值给标题;
	//自动播放
	t=setInterval(function(){
		showAuto()
	},4000);
	//小方块点击
	$("#banner li").click(function() {
		clearInterval(t);//点击之前先清除定时器
		var i = $(this).index();//获取Li元素的索引值
		n = i;
		if (i >= count) return;   //如果计数器的大于图片的个数，跳出循环
		//否则执行代码
		$(this).addClass('on').siblings('li').removeClass('on');
		$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
		$("#banner_list a").fadeOut(500).siblings().eq(i).fadeIn(500);
	});
	//移上去清除定时器，移出开启定时器
	$('#banner').hover(function(){
		clearInterval(t)
	},function(){
		t = setInterval("showAuto()", 4000);
	});
});
//淡入淡出轮播函数
function fadeScroll(){
	$("#banner li").eq(n).addClass('on').siblings().removeClass('on');
	$("#banner_info").html($("#banner_list a").eq(n).find("img").attr('alt'));
	$("#banner_list a").fadeOut(500).siblings().eq(n).fadeIn(500);
}
//自动轮播向右
function showAuto() {
	if(n>=(count-1)){
		n=0
	}else{
		n++
	}
	fadeScroll();
}
