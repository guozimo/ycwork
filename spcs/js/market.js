//头部锚点点击

$(".headBox a").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
});





//底部轮播图
var num=0;
var timer = null;
var liHei = $(".scrollLists li").width() + 40;
var Length = $(".scrollLists li").length;


function move(){
	if(num == 3){
		num=0;
	}else{
		num++;
	}	
	$(".scrollLists").animate({
		'margin-left': -liHei*num
	});
	$(".showpicBox p").eq(num).fadeIn().siblings().fadeOut();	
}
timer=setInterval(move,2000);
$(".scrollLists li").click(function(){
	var index = $(this).index();
	$(".showpicBox p").eq(index).show().siblings().hide();
});
$(".scrollLists li").hover(function(){
	clearInterval(timer);
},function(){
	console.log(1)
	timer=setInterval(move,2000);
});

//banner轮播图
var timer1 = null;
var Numb=0;
$(".bannerMenu li").click(function(){
	clearInterval(timer1);
	var index=$(this).index(); 
	Numb=index;
	$(this).addClass("meun").siblings().removeClass("meun");
	$(".bannerUl>li").eq(index).fadeIn().siblings().fadeOut();
});
$(".banner1").mouseenter(function(){
	clearInterval(timer1);
});
$(".banner1").mouseleave(function(){
	timer1=setInterval(move1,3000);
});

function move1(){
	if(Numb == 4){
		Numb=0;
	}else{
		Numb++;
	}
	$(".bannerUl>li").eq(Numb).fadeIn().siblings().fadeOut();
	$(".bannerMenu li").eq(Numb).addClass("meun").siblings().removeClass("meun");
}
timer1=setInterval(move1,3000);
/*锚点导航*/
//锚点跳转滑动效果
$('a[href*=#],area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
        if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({
                        scrollTop: targetOffset - 68
                    },
                    1000);
            return false;
        }
    }
});




$(".platform1 img.platform11,.platform2 img.platform11").on("mouseover",function(){
	$(this).stop().animate({
		"width":417
	},100);
}).on("mouseout",function(){
	$(this).stop().animate({
		"width":407
	},100);
});
$(".platform2 img.platform11").on("mouseover",function(){
	$(this).stop().animate({
		"width":426
	},100);
}).on("mouseout",function(){
	$(this).stop().animate({
		"width":416
	},100);
});
$(".platform3 img.platform11").on("mouseover",function(){
	$(this).stop().animate({
		"width":352
	},100);
}).on("mouseout",function(){
	$(this).stop().animate({
		"width":342
	},100);
});




/*QQ客服*/
$(".qq_float_con").on("mouseover",function(){
	$(this).addClass("active");
}).on("mouseout",function(){
	$(this).removeClass("active");
});

//gif 切换
var index=1,len=$(".giftab li").length;
	setInterval(function(){
		$(".giftab li").eq(index).addClass("li_show").siblings().removeClass("li_show");
		index=(index+1) % len;
	},2000);



/*$(".userBg").on("scroll",function(){
    $(".emailBox").css({"bottom":$(this).scrollTop()+5});
});*/

$(".userList p .userList_det").on("click",function(){
	$(this).parent(".userList p").css({"max-height":"none","overflow":"auto"})
	$(this).siblings("span").show();
	$(this).hide().siblings(".userList_Stop").show();
	$(this).parents(".userList").siblings().find("span").css({"display":"none","overflow":"hidden"})
	$(this).parents(".userList").siblings().find(".userList_Stop").css({"display":"none"})
	$(this).parents(".userList").siblings().find(".userList_det").css({"display":"inline-block"})

})
$(".userList p .userList_Stop").on("click",function(){
	$(this).parent(".userList p").css({"max-height":"100px","overflow":"hidden"})
	$(this).siblings("span").hide();
	$(this).hide().siblings(".userList_det").show();

})




