$(function(){
	$(".yx_tabtit h2").on("click",function(){
		var index=$(this).index();
		$(this).addClass("yx_on").siblings().removeClass("yx_on");
		$(".yx_tabbox .yx_tbox").eq(index).addClass("yx_show").siblings().removeClass("yx_show");
	});

//实时信号&克服人性弱点动画
$(window).on("scroll",function(){
	if( $(window).scrollTop()>0 ){
		setTimeout(function(){
			$(".yx_sinimg1").stop().animate({
				"width":"20%"
			},2000).delay(2000).animate({
				"width":"40%"
			},2000).delay(2000).animate({
				"width":"60%"
			},2000).delay(2000).animate({
				"width":"80%"
			},2000).delay(2000).animate({
				"width":"100%"
			},2000)
			
			/*$(".yx_dots1").stop().animate({
				"width":"20%"
			},2000).delay(2000).animate({
				"width":"40%"
			},2000).delay(2000).animate({
				"width":"60%"
			},2000).delay(2000).animate({
				"width":"80%"
			},2000).delay(2000).animate({
				"width":"80%"
			},2000).delay(2000).animate({
				"width":"100%"
			},2000)*/
		});
		setTimeout(function(){
			$(".yx_sinimg1 embed").css({"display":"block"});
		},2000);
		setTimeout(function(){
			$(".yx_sinimg1 embed").css({"display":"none"});
		},4000);
		// var yx_wid = $(".yx_sinimg1").width();
		// if( yx_wid === "20%" ){
		// 	$(".yx_sinimg1 embed").css({"display":"block"});
		// 	//alert(1)
		// }
		
	}

	if( $(window).scrollTop()>2800 ){
		setTimeout(function(){
			$(".yx_sinimg2").stop().animate({
				"width":"100%"
			},3000);
			
			/*$(".yx_dots2").stop().animate({
				"width":"100%"
			},3000);*/
		});
	}
});


//alert($(".yx_sinbg2").offset().top)
var index1=0,
	len1=$(".yx_dots1 span").length,
	dots1=$(".yx_dots1 span"),
	boxs1=$(".yx_dots1 span .yx_info");
	var run1 = true;
	setInterval(function(){
		if( run1 ){
			dots1.eq(index1).addClass("yx_animated").siblings().removeClass("yx_animated");
			boxs1.stop().animate({
				"height":0
			});
			boxs1.eq(index1).stop().animate({
				"height":100
			});
			index1 = (index1 + 1) % len1;
		}
	},4000);
	$(".yx_dots1 span").on("mouseover",function(){
		run1=false;
		$(this).addClass("yx_animated").siblings().removeClass("yx_animated");
		$(".yx_dots1 span .yx_info").stop().animate({
			"height":0
		});
		$(this).find(".yx_info").stop().animate({
			"height":100
		});
	});
	$(".yx_dots1 span").on("mouseout",function(){
		run1=true;
	});

//克服人性弱点（定时切换）
var index2=0,
	len2=$(".yx_dots2 span").length,
	dots2=$(".yx_dots2 span"),
	boxs2=$(".yx_dots2 span .yx_info");
	var run2 = true;
	setInterval(function(){
		if( run2 ){
			dots2.eq(index2).addClass("yx_animated").siblings().removeClass("yx_animated");
			boxs2.stop().animate({
				"height":0
			})
			boxs2.eq(index2).stop().animate({
				"height":100
			})
			index2 = (index2 + 1) % len2;
		}
	},4000);
	$(".yx_dots2 span").on("mouseover",function(){
		run2=false;
		$(this).addClass("yx_animated").siblings().removeClass("yx_animated");
		$(".yx_dots2 span .yx_info").stop().animate({
			"height":0
		});
		$(this).find(".yx_info").stop().animate({
			"height":100
		});
	});
	$(".yx_dots2 span").on("mouseout",function(){
		run2=true;
	});


//报告
	$(".yx_tbox ul li").on("click",function(){
		$(this).addClass("yx_blk").siblings().removeClass("yx_blk");
	});

//按钮鼠标滑过
function animatebtn(elebtn){
	var runs;
	setInterval(function(){
		if(runs){
			elebtn.find("i").stop().animate({"left":246,"opacity":0},"slow",function(){
				elebtn.find("i").css({"left":-80,"opacity":1});
			});
		}
	},1000);

	elebtn.on("mouseover",function(){
		runs = true;
	}).on("mouseout",function(){
		runs = false;
		elebtn.find("i").css({"left":0,"opacity":1});
	});
}
animatebtn($(".animate_btn1"));
animatebtn($(".animate_btn2"));
animatebtn($(".animate_btn3"));

//点击底部悬浮框关闭按钮
	$(".sus_close").on("click",function(){
		$(".suspension").slideUp();
	});

//图片自动滚动动画
	function scroll2(scrollBox,pos,direction){
		var speed = 50;  //滚动速度
		function Marquee(){
			var mt=scrollBox.css("marginTop");
			var ml=scrollBox.css("marginLeft");
			if(direction == "up"){
				if(mt<=0){
					scrollBox.animate({
						"marginTop":0
					});
				}else{
					scrollBox.animate({
						"marginTop":"-=1"
					},0,function(){
						var s = Math.abs(parseInt(mt));//绝对值
						if(s >= pos){
							$(this).children().first().appendTo($(this));
							$(this).css("margin-top", 0);
						}
					});
				}
			}else{
				if(ml<=0){
					scrollBox.animate({
						"marginLeft":0
					});
				}else{
					scrollBox.animate({
						"marginLeft":"-=1"
					},0,function(){
						var s = Math.abs(parseInt(ml));//绝对值
						if(s >= pos){
							$(this).children().first().appendTo($(this));
							$(this).css("marginLeft", 0);
						};
					});
				};
			};
		};
		var MyMar = setInterval(Marquee,speed);
		scrollBox.on("mouseover",function(){clearInterval(MyMar)});
		scrollBox.on("mouseout",function(){MyMar = setInterval(Marquee,speed)});
	};
	var len=$(".moveList1 li").length;
	$(".moveList1").css({"width":269*len});
	scroll2( $(".moveList1"),$(".moveList1 li").width()+15,"left" );


















});