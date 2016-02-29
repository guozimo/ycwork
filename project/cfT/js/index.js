$(function(){
	//地址框获取鼠标焦点 
   $(".val_none,.withdrawals-bomb p input,.search-type p input,.sign p input,#reg_name").focus(function(){ 
        var inp_val = $(this).val(); //得到当前文本框的值 
        if( inp_val == this.defaultValue ){ //使用defaultValue属性 
         $(this).val(''); //如果符合条件，则情况文本框的内容 
        } 
   }); 
   //地址框失去焦点 
   $(".val_none,.withdrawals-bomb p input,.search-type p input,#reg_name").blur(function(){ 
        var inp_val = $(this).val(); //得到当前文本框的值 
        if( inp_val == "" ){ 
         $(this).val(this.defaultValue); //如果符合条件，则设置内容 
        } 
   }); 
   
   $(".close,.cancel").click(function(){
   		$(".pop-bg,.reg,.sign,.delete-bomb,.prompt-bomb,.share-bomb,.withdrawals-bomb,.credit-bomb,.retrieve-paw,.forget-box").hide();
		$('#findcode').val("");//找回密码code为空
		$("#codenotice").html("");
		$(".termsBox,.ternsBg").hide();
   });
   $(".delete-close").click(function(){//关闭注册服务条款弹层
   		$(".reg").show();//注册框显示
		$(".pop-bg,.sign,.delete-bomb,.prompt-bomb,.share-bomb,.withdrawals-bomb,.credit-bomb,.retrieve-paw,.forget-box").hide();
		$(".termsBox,.ternsBg").hide();
   });

   $(".reg p.agreement a").click(function(){
   		$(".termsBox,.ternsBg").show();
   })
   $(".free-sign a,.reg-btn").click(function(){
   		$(".pop-bg,.reg").show();
   		$(".sign").hide();
   });
   $(".forget a").click(function(){
   		$(".pop-bg,.forget-box").show();
   		$(".sign").hide();
		$("#ycode2").hide();
   });

   // 红包
   $(".RedBox").click(function(){
   		$(".Redpop,.pop-bg").show();
   		$(this).hide();
   });
   $(".Redclose").click(function(){
   		$(".Redpop,.initial,.pop-bg").hide();
   		$(".RedBox").show();
   });
   $(".Red1").click(function(){
   		$(".initial").show();
		$(".sign,.forget-box,.reg").hide();//登陆注册框隐藏
   })
   if(navigator.userAgent.indexOf("MSIE") != -1){
	   	setInterval(function(){
	   		$(".square1").fadeToggle();
	   },1200);
	   setInterval(function(){
	   		$(".square2").fadeToggle();
	   },1500);
	   setInterval(function(){
	   		$(".square3").fadeToggle();
	   },1800);
   };

   $(".reg-sign a,.sign-btn").click(function(){
   		$(".reg").hide();
   		$(".pop-bg,.sign").show();
   })
   $(".reg p.agreement em").click(function(){
   		$(this).toggleClass("check");
   });
   
   $(".wal-select a").click(function(){
   		$(".pop-bg,.delete-bomb:eq(0)").show();
   });
   $("a.del").click(function(){
	   $("#ids").val($(this).attr('data-id'));
	   $(".pop-bg,.delete-bomb:eq(1)").show();
   });
   
   $(".share_btn").click(function(){
   		$(".share-bomb,.pop-bg").show();
   });
 //  $(".tixian").click(function(){
 // 	$(".withdrawals-bomb,.pop-bg").show();
 // });

   
	// tab切换
	$(".tab-top span").click(function(){
		var index = $(this).index();
		$(this).addClass("org-line").siblings().removeClass("org-line");
		$(this).parent().parent().siblings().find(".tab-list").eq(index).show().siblings().hide();
	});
	
	$(".Tabtitle a").click(function(){
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".listTab ul").eq(index).show().siblings().hide();
	});
	
	$(".main-right-top a").on("click",function(){
		var index = $(this).index();
		$(this).addClass("top-org").siblings().removeClass("top-org");
		$(this).parent().siblings(".myBox").find(".myBox_list").eq(index).show().siblings().hide();
	});
	
	$(".jijin-type a").click(function(){
		var index = $(this).index();
		$(this).addClass("org").siblings().removeClass("org");
//		$(".type-list").eq(index).show().siblings(".type-list").hide();
		if(index == 3){
			$(".StockBox").show();
			$(".currencyBox").hide();
			console.log(index)
		}else{
			$(".currencyBox").show();
			$(".StockBox").hide();
		}
		console.log(index)
	});


	//隔行变色
	$(".tab-list:first-child tbody tr:odd").css({background:"#f8f8f8"});
	$(".tab-list:last-child tbody tr:even").css({background:"#fcfcfc"});
	$(".tab-list:last-child tbody tr:odd").css({background:"#f8f8f8"});
	$(".withdrawalsBox tbody tr:even").css({background:"#f5f5f5"});
	
	$(".ticketlist:first-child tbody tr:even").css({background:"#f8f8f8"});
	$(".ticketlist:first-child tbody tr:odd").css({background:"#fcfcfc"});
	$(".ticketlist:last-child tbody tr:even").css({background:"#f8f8f8"});
	$(".ticketlist:last-child tbody tr:odd").css({background:"#fcfcfc"});
	
	$(".fundBox .fund-list:even").css({background:"#f8f8f8"});
	$(".fundBox .fund-list:odd").css({background:"#fcfcfc"});
	
	
	$(".pop-bg").height($("body").height());
	
	
	// QQ登录提示	弹框
	//$("	.main-top-time a").click(function(){
	//	$(".couQQ").show();
   	//	setInterval(function(){
   	//		$(".couQQ").hide()
   	//	},3000)
	//})
	
})


