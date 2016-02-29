/*table偶数行*/
$(".keyTabList tr:even").css({'background':'#e7e6e6'});

/*table奇数行*/
$(".keyTabList tr:odd").css({'background':'#dadada','border-top':'1px solid #cacaca','border-left':'1px solid #cacaca'});

/*table第二列边线*/
$(".keyTabList td:odd").css({'border-right':'1px solid #cccccc'});

/*tab切换*/
$(".kLineTop a").click(function(){
	var index = $(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$(".lineTabBox").eq(index).show().siblings(".lineTabBox").hide();
});

$(".radioBox").click(function(){
	$(this).find("i").toggleClass("open");
});

$(".menuBtn").click(function(){
	$(this).toggleClass("openBtn");
	$(".openCont").toggle();
});
