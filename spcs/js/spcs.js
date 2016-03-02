$(function(){
    /*判断我的策略大小*/
    var hei=502*0.94*0.206;
    if($('.mainright').width()!=353){
        $('.wdclli').css("height",hei);
    }else{
        $('.wdclli').css("height",'65px');
    }
    
    $('.mainrtop .xhlists li').click(function(){
        var indea=$(this).index();
        $(this).addClass('check').siblings().removeClass('check');
        $('.mainrbot').eq(indea).removeClass('hidea').siblings('.mainrbot').addClass('hidea')

    });
    /*$('.tabli').hover(function(){
        $(this).find('.tablidivk').css({"background":"#213758","border":"solid 1px #465e8a"});
        $(this).find('.ygykb').css({"background":"#1f2b3f"});
    },function(){
        $(this).find('.tablidivk').css({"background":"#313131","border":"solid 1px #3d3d3d"});
         $(this).find('.ygykb').css({"background":"#282828"});
    })*/
    $('.tabli').click(function(){
        $(this).find('.tablidivk').addClass('active').parent('.tabli').siblings().find('.tablidivk').removeClass('active');
        $(this).find('.ygykb').addClass('active').parent('.tabli').siblings().find('.tablidivk').removeClass('active');
    });
    /*判断头部*/
    var tophei=$('.top').height();
        if(tophei==86){
            $('.brandtit').css("font-size","12px");
            $('.tablidivk').css("margin-top","6%");
        }else{
             $('.brandtit').css("font-size","12px");
             $('.tablidivk').css("margin-top","10%");
        }
    $('.tabdiv p.tit').css("line-height","140%");
    /*var winw=document.body.offsetWidth;
        var ss=winw-560-8;
        
        if($('.mainright').width()!=370){
            $('.mainleft').css("width",ss);
        }else{
            $('.mainrbotvv').css("height","326px");
              $('.mainleft').css("windth","840px");
        }
       */
         
    
   var wins=$('.mainright').height()-65;
    $('.charts').css("height",wins);
    
     $('.clmc').css("line-height",wins*0.406*0.93*0.184+'px');
     $('.jbxx2').css("line-height",wins*0.406*0.93*0.125+'px');
     if(wins*0.60*0.09>20){
        $('.hyzq').css({"height":wins*0.60*0.09,"line-height":wins*0.60*0.09+'px'});
     }else{
        $('.hyzq').css({"height":wins*0.60*0.09,"line-height":wins*0.60*0.09+'px'});
     }
     if(wins*0.60*0.12>20){
        $('.dzweek,.dzweek span').css({"height":wins*0.60*0.12,"line-height":wins*0.60*0.12+'px'});
     }else{
        $('.dzweek,.dzweek span').css({"height":wins*0.60*0.12,"line-height":wins*0.60*0.12+'px'});
     }


     $('.videoaa img').click(function(){
        $(this).toggle().siblings().toggle();
     });
     
     $('.tytk label').click(function(){
        if($(this).hasClass('check')!=true){
            $(this).addClass('check');
        }else{
            $(this).removeClass('check');
        }
     });

     $('.tophy i').click(function(){
        $('.dia_bg').hide();
        $('.loginbox').hide();
     });
     $('.dia_col').click(function(){
        $(this).parent('.dia_boxs').hide();
        $('.dia_bg').hide();
     });
     $('.tophy .dia_col').click(function(){
        $(this).parents('.dia_boxs').hide();
        $('.dia_bg').hide();
     });

     $('.clocksj span').css("line-height",$('.clocksj').height()+'px');
     $('.mj').css("line-height",$('.mj').height()+'px');
        $('.zval269').css("line-height",17+'px');

    /*tabdiv*/

    window.onresize=function(){
        var hei=502*0.94*0.206;
    /*console.log($('.cllist').height());*/
        if($('.mainright').width()!=353){
            $('.wdclli').css("height",hei);
        }else{
            $('.wdclli').css("height",'65px');
        }
        $('.clocksj span').css("line-height",$('.clocksj').height()+'px');
        $('.mj').css("line-height",$('.mj').height()+'px');
        var tophei=$('.top').height();
        if(tophei==86){
            $('.brandtit').css("font-size","12px");
            $('.tablidivk').css("margin-top","6%");
            $('.zval269').css("line-height",17+'px');
        }else{
            $('.brandtit').css("font-size","12px");
            $('.tablidivk').css("margin-top","10%");
            $('.zval269').css("line-height",17+'px');
        }
        var winh=document.body.offsetHeight-$('.top').height()-$('.mainrtop').height()-$('.mainrbotvv').height()-47;
        var toph=$('.top').height()*0.256;
        var divh=$('.top').height()*0.56;
        $('.tabdiv').css({"margin-top":toph,"height":divh/**/});
        $('.mianrbot2').css({"height":winh,"overflow":"auto"});
        var wins=$('.mainright').height()-65;
        $('.charts').css("height",wins);
        $('.clmc').css("line-height",wins*0.406*0.93*0.184+'px');
        $('.jbxx2').css("line-height",wins*0.406*0.93*0.125+'px');
        if(wins*0.60*0.09>20){
            $('.hyzq').css({"height":wins*0.60*0.09,"line-height":wins*0.60*0.09+'px'});
        }else{
            $('.hyzq').css({"height":wins*0.60*0.09,"line-height":wins*0.60*0.09+'px'});
         }
        if(wins*0.60*0.12>20){
            $('.dzweek,.dzweek span').css({"height":wins*0.60*0.12,"line-height":wins*0.60*0.12+'px'});
        }else{
            $('.dzweek,.dzweek span').css({"height":wins*0.60*0.12,"line-height":wins*0.60*0.12+'px'});
        }
        $('.videoaa img').click(function(){
            $(this).toggle().siblings().toggle();
        });
   

    };
    
    var x=0;
    var height = $('.zmboxa').css('height');
    height=height-200;
    setInterval(function(){
           x=x-10;
           if(x==-2000){x=0;}
          
        $('.zmboxa').css("margin-top",x);
    },50);



    //点击条款
    $(".tytk span").on("click",function(){
        $(".agreebg").css({"display":"block"});
    });
    $(".con_nobtn").on("click",function(){
        $(".agreebg").css({"display":"none"});
        $(".tytk label").removeClass("check");
    });
    $(".con_yesbtn").on("click",function(){
        $(".agreebg").css({"display":"none"});
        $(".tytk label").addClass("check");
    });

    //点击码表使用说明
    $(".ints").on("click",function(){
        $(".ints_txt").show();
        $(".dia_bg").show();
    });
    $(".ints_txt_colse").on("click",function(){
        $(".ints_txt").hide();
        $(".dia_bg").hide();
    });

    //策略库
    /*
        $(".listli1_box .listli1").on("click",function(){
            $(".listli1_box .listli1 .limg_h").css({"display":"none"});
             $(".listli1_box .listli1 .limg2_h").css({"display":"none"});
            $(this).find(".limg_h").css({"display":"block"});
            $(this).find(".limg2_h").css({"display":"block"});
        });
    */

    /**点击发送验证码*/
    function Countdown(ele,tel){
        ele.click(function(){
            var Tele=tel.val();
            var reg=/^1[3458]\d{9}$/;
            if(reg.test(Tele)){
                var i = 60;
                loop = setInterval(function(){
                    s=i;
                    ele.click(function(){
                        i=60;
                    });
                    if( i > 0){
                        ele.val(i+'秒后重试');
                        i--;
                    }else{
                        ele.val("获取密码");
                    }
                },1000);
            }/*else if(Tele==''){
                alert('手机号不能为空');
                tel.val('');
            }else{
                alert('号码有误');
                tel.val('');
            }*/

        });
    }
    Countdown($('.mimar'),$('.tel'));
    Countdown($('.mimar'),$('#hidden_tel'));

//弹框
    $(".dia_boxs h2 span").on("click",function(){
        $(this).parent().parent(".dia_boxbg").css({"display":"none"});
        $(".dia_bg").hide();
    });
     $(".dia_box6 .dia_ybtn").on("click",function(){
        $(".dia_box6").css({"display":"none"});
        $(".dia_bg").hide();
    });


//顶部右侧切换
    $(".ul_tit li").on("mouseover",function(){
        var index=$(this).index();
        $(".ul_cons ul").eq(index).addClass("ul_show").siblings().removeClass("ul_show");
    });
     $(".ul_cons").on("click",".ul_show li",function(){
        $(this).addClass("li_on").siblings().removeClass("li_on");
    });
     $(".tabbox").on("mouseleave",function(){
        $(".ul_cons ul").removeClass("ul_show");
    });

//点击免责条框
$(".Disclaimer").on("click",function(){
    $(".Disclaimer1").show();
    $(".dia_bg").show();
});
//点击关闭免责条框
$(".Disclaimer1 .con_nobtn").on("click",function(){
    $(".Disclaimer1").hide();
    $(".dia_bg").hide();
});



})

function Resize(){
    var rightWid = $(".mainright").outerWidth() + 10;
    var winWid = $(window).outerWidth();
   // console.log(winWid)
    $(".mainleft").width(winWid-rightWid);

    // 滚动条
     var winh=document.body.offsetHeight-$('.top').height()-$('.mainrtop').height()-$('.mainrbotvv').height()-47;
    var toph=$('.top').height()*0.256;
    var divh=$('.top').height()*0.56;
    $('.tabdiv').css({"margin-top":toph,"height":divh});
   $('.mianrbot2').css({"height":winh,"overflow":"auto"});
}
Resize();
$(window).resize(function(){
    Resize();
});
$(".chartsright").on("scroll",function(){
    $(".cancel").css({"top":$(this).scrollTop()+5});
});