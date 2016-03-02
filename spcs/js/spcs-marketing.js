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
				"width":"100%"
			},2000);
			//克服人性弱点动画
			$(".yx_sinimg2").stop().animate({
				"width":"100%"
			},3000);
			$(".no1").css({"display": "none"});
			$(".no2").css({"display": "none"});




		});

		// setTimeout(function(){
		// 	$(".yx_gifpic embed").eq(1).css({"display":"block"});
		// },2000);
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
	boxs1=$(".yx_dots1 span .yx_info"),
	embeds=$(".yx_gifpic embed");
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
			embeds.eq(index1).css({"display":"block"}).siblings().css({"display":"none"});
			setTimeout(function(){
				$(".yx_anibtn").eq(index1-1).css({"display":"block"}).animate({
					"top":20
				}).delay(200).animate({
					"top":30
				});
			},200);
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
	var index2 = 0,
		len2 = $(".no1 span").length,
		dots2 = $(".no1 span"),
		boxs2 = $(".no1 span .yx_info"),
		len3 = $(".no2 span").length,
		dots3 = $(".no2 span"),
		boxs3 = $(".no2 span .yx_info"),
		time1 = 4000 * len2,
		time2 = 4000 * len3;
	var run2 = true;
	var index = 0;

	var timer = setInterval(function () {
		if (run2) {
			if (index2 < len2) {
				$(".no2").css({"display": "none"});
				$(".no1").delay(2000).show(1000);
				/*console.log(index)*/
				if (index2 == 0 && index != 0) {
					$(".yx_sinimg2").stop().animate({
						"backgroundPositionX": "-1006px",
						"width": "0"
					}, 1000).animate({
						"width": "60%"
					}, 1000).animate({
						"width": "100%"
					}, 1000);
				}
				dots2.eq(index2).addClass("yx_animated").siblings().removeClass("yx_animated");
				boxs2.stop().animate({
					"height": 0
				})
				boxs2.eq(index2).stop().animate({
					"height": 135
				})
			} else {

				$(".no1").css({"display": "none"});
				$(".no2").delay(5000).show(2000);
				var index3 = (index2 - len2) % len3;
				if (index3 == 0) {
					/*$(".no2").hide(4000).show(1000);*/
					$(".yx_sinimg2").stop().animate({
						"backgroundPositionX": "0px",
						"width": "0"
					}, 1000).animate({
						"width": "60%"
					}, 1000).animate({
						"width": "100%"
					}, 1000);

				}
				run2 = true;
				dots3.eq(index3).addClass("yx_animated").siblings().removeClass("yx_animated");
				boxs3.stop().animate({
					"height": 0
				})
				boxs3.eq(index3).stop().animate({
					"height": 135
				})


			}
			index = index2 + 1;
			index2 = index % (len2 + len3);
			//console.log(index2)
		}
	}, 4000);

	$(".yx_dots2 span").on("mouseover", function () {
		run2 = false;
		$(this).addClass("yx_animated").siblings().removeClass("yx_animated");
		$(".yx_dots2 span .yx_info").stop().animate({
			"height": 0
		});
		$(this).find(".yx_info").stop().animate({
			"height": 135
		});
	});
	$(".yx_dots2 span").on("mouseout", function () {
		run2 = true;
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
		elebtn.find("i").css({"left":-80,"opacity":1});
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

	setInterval(function(){
		$(".light-right").stop().animate({"marginLeft":"90%","opacity":0},"slow",function(){
			$(".light-right").css({"marginLeft":"60%","opacity":1});
		});
	},1000);
	setInterval(function(){
		$(".light-left").stop().animate({"marginLeft":"10%","opacity":0},"slow",function(){
			$(".light-left").css({"marginLeft":"39%","opacity":1});
		});
	},1000);










});