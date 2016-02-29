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

$('.qhLists li').hover(function(){
	$(this).addClass('active').find("a").css({background:'none'});
},function(){
	$(this).removeClass('active').find('a').css({background:'url(images/line02.jpg) no-repeat center bottom'});
});
$('.qhLists li.active').hover(function(){
	$(this).addClass('active')
},function(){
	$(this).addClass('active').find("a").css({background:'none'});
})
$('.menuLists li').hover(function(){
		$(this).addClass('active').find('.secondLists').show();
	},function(){
		$(this).removeClass('active').find('.secondLists').hide();
	});
	$('.qhTitle li').click(function(){
		var _index=$(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.goodBox').eq(_index).show().siblings().hide();
	});
	$('.vidioBox a').hover(function(){
		$(this).find('.mb').show();
	},function(){
		$(this).find('.mb').hide();
	});
	$('.dispBox li a').hover(function(){
		$(this).addClass('on').find('.tp-line').show();
	},function(){
		$(this).removeClass('on').find('.tp-line').hide();
	});
	$('.fixBox .close').click(function(){
		$('.fixBox').hide();
	});
	$('.ewmshareBox .close').click(function(){
		$('.ewmshareBox,.grayBg').hide();
	});	
//	弹框兼容IE6
	var valHei = $("body").outerHeight();
	var valWid = $("body").outerWidth();
	$(".grayBg").css({
		width:valWid,
		height:valHei
	});
//	div滑过添加背景兼容IE6	
	$(".usList").hover(function(){
		$(this).addClass("bgColor").siblings().removeClass("bgColor");
	});
	
//tab切换
$(".softTopBox a").click(function(){
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".downList").eq(index).show().siblings().hide();
});
$('.displayBox').each(function(){
	$(this).find('li').eq(2).addClass('spe');
	$(this).find('li').eq(5).addClass('spe');
	$(this).find('li').eq(8).addClass('spe');
});

$('.rightBtn.downBtn a').click(function(){
	$(".grayBg,.ewmshareBox").show();
});
	//地址框获取鼠标焦点
   $(".openBox p input").focus(function(){
	    var inp_val = $(this).val(); //得到当前文本框的值
	    if( inp_val == this.defaultValue ){ //使用defaultValue属性
	    	$(this).val('').css({color:'#ccc'}); //如果符合条件，则情况文本框的内容
	    }
	    $(this).css({color:"#000"})
   });
   //地址框失去焦点
   $(".openBox p input").blur(function(){
	    var inp_val = $(this).val(); //得到当前文本框的值
	    if( inp_val == "" ){
	    	$(this).val(this.defaultValue).css({color:'#ccc'}); //如果符合条件，则设置内容
	    }
   }); 

