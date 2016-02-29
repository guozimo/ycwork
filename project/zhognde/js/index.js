
/*点击*/
$('.remberUser').click(function(){
	if($(this).hasClass('on')){
		$(this).removeClass('on');
	}else{
		$(this).addClass('on');
	}
})
/*slider*/
	var slider_count = 0;
	var timer = null;
	
//	banner 切换
	var num=0;
	$(".slider_menu_list li").click(function(){
		clearInterval(timer);
		var index=$(this).index();
		$(this).eq(num).addClass("focus").siblings().removeClass("focus");
		$("#slider_box li").eq(index).fadeIn().siblings().fadeOut();

	});
	$("#slider_box li,.slider_menu_list li").mouseenter(function(){
		clearInterval(timer);
	});
	$("#slider_box li,.slider_menu_list li").mouseleave(function(){
		timer=setInterval(move,1800);
	})
	
	function move(){
		if(num == 2){
			num=0;
		}else{
			num++;
		}
		$("#slider_box li").eq(num).fadeIn().siblings().fadeOut();
		$(".slider_menu_list li").eq(num).addClass("focus").siblings().removeClass("focus");
	}
	timer=setInterval(move,1800);
	

	//首页图片预加载
	$(".js_slider_img").each(function(k,v){
		var me = $(this);
		me[0].onload = function(){
			me.css("opacity",1);
		};
		me[0].src = me[0].src;
		if(me[0].complete){
			me.css("opacity",1);
		}
	});


	//鼠标滑过清除大屏滚动
	$(".slider").mouseover(function(){
		clearInterval(timer);
	});

	//鼠标滑出继续大屏滚动
	$(".slider").mouseout(function(){
		timer = setInterval(function(){
			runSlider();
		},5000);
	});	


	// 导航滑过

	$(".research_f_nav").mouseenter(function(){
		$(this).find(".research_f_abs").show();
		$(this).find(".first_nav_item").css("background","#bf4241");
	});

	$(".research_f_nav").mouseleave(function(){
		$(this).find(".research_f_abs").hide();
		$(this).find(".first_nav_item").css("background","none");
	});	

	$(".research_f_abs").find("a").mouseenter(function(){
		$(this).css({
			"background":"#bf4241"
		});
	});

	$(".research_f_abs").find("a").mouseleave(function(){
		$(this).css({
			"background":"none"
		});
	});	

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