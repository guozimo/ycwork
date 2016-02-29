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




var wid;
$(".system_c div img,.platform_c div .platform11").on("mouseover",function(){
	wid = $(this).width();
	$(this).stop().animate({
		"width":wid+20
	},100);

}).on("mouseout",function(){
	$(this).stop().animate({
		"width":wid
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











