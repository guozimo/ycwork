$(function() {
	
	/******start登录操作*****/
	$('#reg_name').focus(function(){
			$(".tishi span").html('');
	 });

	$('#reg_name').keyup(function(event){ 
		if($('#reg_name').val() && event.keyCode==13){
			$('#reg_pwd').focus();
		}
		if(!$('#reg_name').val() && event.keyCode==13){
			$(".tishi span").html("您输入的账号不正确");
		}else{
			$(".tishi span").html("");
		}
	});

	$('#reg_pwd').focus(function(){
		$(".tishi span").html('');
	});
	$('#reg_pwd').keyup(function(event){ 
		$(".tishi span").html('');
		if($('#reg_pwd').val() && event.keyCode==13){
			$('#reg_pwd').blur();
			document.getElementById('loadbtn').click();
		}
		if(!$('#reg_pwd').val()){
			$(".tishi span").html("您输入的密码不正确");
		}
	});	 
	$('#loadbtn').click(function(){
		var reg_name = $('#reg_name').val();
		var reg_pwd = $('#reg_pwd').val();
		$.ajax({
			url : "/index.php?d=welcome&c=welcome&m=do_login&t="+Math.random(),
			type : "post",
			data:{
				reg_name:reg_name,
				reg_pwd:reg_pwd
			},
			dataType : "json",
			success : function(data){
				if(data.Status==1){
					//alert(data.Msg);
					location.href="/index.php?d=person&c=wallet&m=index&sessionid="+data.sessionid+"&loginuid="+data.uid+"&fr=1";
				}
				else{
					if($('#reg_name').val()=='手机号'){
						$(".tishi span").html("手机号不能为空");
					}else if($('#reg_pwd').val()==''){
						$(".tishi span").html("密码不能为空");
					}else{
						$(".tishi span").html("手机号或密码错误");
					}
					// alert(data.m);
					 return false;
				}
			}
		});
		 
	});
	/******end登录操作*****/	
	// 登陆输入密码显示效果
	$('.password1').focus(function(){
		$('#reg_pwd').removeClass('hidea');
		$('#reg_pwd').focus();
		$('.password1').addClass('hidea');
	});
	$('#reg_pwd').blur(function(){
		var pwd=$('#reg_pwd').attr('value');
		if(pwd=='' || pwd=='密码'){
		$('.password1').removeClass('hidea');
		$('.password1').attr('value','密码');
		$('#reg_pwd').addClass('hidea');
		}
	});

	/*
	*
	*注册密码显示效果
	*/
	$('.password2').focus(function(){
		$('#password').removeClass('hidea');
		$('#password').focus();
		$('.password2').addClass('hidea');
	});

	$('#password').blur(function(){
		var zval=$('#password').attr('value');
		if(zval=='' || zval=='请设置一个密码'){
		$('.password2').removeClass('hidea');
		$('.password2').attr('value','请设置一个密码');
		$('#password').addClass('hidea');
		}
	});
		
	/*
	*
	*找回密码显示效果
	*/
	$('.newpwd').focus(function(){ //新密码
		$('#newpwd').removeClass('hidea');
		$('#newpwd').focus();
		$('.newpwd').addClass('hidea');
	});

	$('#newpwd').blur(function(){
		var zval=$('#newpwd').attr('value');
			if(zval=='' || zval=='请输入新密码'){
			$('.newpwd').removeClass('hidea');
			$('.newpwd').attr('value','请输入新密码');
			$('#newpwd').addClass('hidea');
			}
	});	

	$('.newpss').focus(function(){ //确认密码
			$('#newpss').removeClass('hidea');
			$('#newpss').focus();
			$('.newpss').addClass('hidea');
		});
		
		$('#newpss').blur(function(){
			var zval=$('#newpss').attr('value');
			if(zval=='' || zval=='确认密码'){
			$('.newpss').removeClass('hidea');
			$('.newpss').attr('value','确认密码');
			$('#newpss').addClass('hidea');
			}
	});





	//点击修改密码确定按钮操作
	$('#confirm').click(function(){
		var newpss = $("#newpss").val();
		var newpwd = $("#newpwd").val();
		var imgcode = $('#imgcode').val();
		var findcode = $('#mobilecode').val();
		var passmobile = $('#passmobile').val();
		/*$.getJSON("/index.php?d=welcome&c=welcome&m=find_passworld&time="+$("#findtoken").val(),{'newpwd':newpwd,'newpss':newpss,'imgcode':imgcode,'passmobile':passmobile,'findcode':findcode},function(data){
			if(data.s==1){
				 alert(data.m);//修改成功
                 $("input").attr("value","");
				 window.location.href="/index.php?d=welcome&c=welcome&m=index";
			}else{
				 alert(data.m);
				 return false;
			}
		})*/

		$.ajax({
			url : "/index.php?d=welcome&c=welcome&m=find_passworld&time="+$("#findtoken").val(),
			type : "post",
			data:{
				newpwd:newpwd,
				newpss:newpss,
                imgcode:imgcode,
				passmobile:passmobile,
				findcode:findcode
			},
			dataType : "json",
			success : function(data){
				if(data.s==1){
					alert(data.m);
					$("input").attr("value","");
					location.href="/index.php?d=welcome&c=welcome&m=index";
				}
				else{
					 alert(data.m);
				     return false;
				}
			}
		});


	});

	//重置密码点击下一步判断操作
	$('#next').click(function(){
		var findmobile = $('#findmobile').val();
		var imgcode = $('#imgcode').val();
		var findcode = $('#findcode').val();
		if(findmobile=='输入手机号'||findmobile==''){
			$("#findnotice").html("<p class='tishi'>请输入手机号</p>");
			return false;
		}else if(imgcode=='验证码'||imgcode==''){
			$("#imgnotice").html("<p class='tishi'>请输入4位验证码</p>");
			return false;
		}else if(findcode=='验证码'||findcode==''){
			$("#codenotice").html("<p class='tishi'>请输入手机验证码</p>");
			return false;
		}

	}); 
	
/*************************************注册操作验证**************************************************************************/	
	/*$('#regForm [title]').tipsy({trigger: 'hover', gravity: 'w',opacity: 1});
	$.formValidator.initConfig({validatorgroup:"1",autotip:true,formid:"regForm",onsuccess:function(){
		$.post("/index.php?d=welcome&c=welcome&m=register&time="+$("#timetoken").val(),
			$("#regForm").serialize() ,function(data){
			var object = JSON.parse(data);
			if(object.Status==0){
			    alert(object.Msg);
				return false;
			}else{
				alert('注册成功')
				$(".sign").show();//显示登录框
				$(".reg").hide();
			}
	      })
	}});*/
	$("form#regForm").submit( function () {
		var _mobile = $.trim($("#mobile").val()),
			_nickname = $.trim($("#nickname").val()),
			_pwd = $.trim($("#password").val()),
			_pwdre=/^[a-zA-Z0-9_]{6,18}$/ ;
		if(_mobile=='输入手机号'||_mobile=='' ){
			$("#notice").html("<p class='tishi'>请输入手机号</p>");
			return false; 
		}else if(_nickname=='用户昵称'||_nickname=='' ){
			$("#notice3").html("<p class='tishi'>请输入用户昵称</p>");	
			return false; 
		}else if( _pwd=='请设置一个密码'||_pwd=='' ){
			$("#notice4").html("<p class='tishi'>请输入密码</p>");	
			return false;
		}else if(_pwd.length<6 || _pwd.length>18 ){
			$("#notice4").html("<p class='tishi'>密码为6-18个字符</p>");
    		return false;
		}else if(!_pwdre.test(_pwd)){
			("#notice4").html("<p class='tishi'>密码格式不正确</p>");
			return false;
		}else if($("#protocol").attr("class")!='check'){
			alert('请阅读通金魔方的注册条款');
			return false;
		}
		$.post("/index.php?d=welcome&c=welcome&m=register&time="+$("#timetoken").val(),
			$("#regForm").serialize() ,function(data){
			var object = JSON.parse(data);
			if(object.Status==0){
			    alert(object.Msg);
				return false;
			}else{
				alert('注册成功')
				$(".sign").show();//显示登录框
				$(".reg").hide();
			}
	     });

	});
	$('#ycode').hide();//验证码输入框隐藏
	$('#ycode2').hide();//找回密码验证码输入框隐藏
	$("#mobile").focus(function(){
		var check =$("#protocol").attr("class"); 
		if(check==''){
			alert('请阅读通金魔方的注册条款');
			$('#protocol').addClass('check');
		}	
	});
	$("#mobile").blur(function(obj){	
		var _val=$.trim($(this).val()),
			re=/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8})$/;
		if(_val=="输入手机号"||_val==""){		
			$("#notice").html("<p class='tishi'>请输入手机号</p>");
			return false;
		}
		if(!re.test(_val)){
	        $("#notice").html("<p class='tishi'>手机号码不正确</p>");
			return false;
	    }
		$.ajax({
			type: "get",
			url:  "/index.php?d=welcome&c=welcome&m=check_mobile",
			data: {
				'mobile':_val
			},
			dataType: "json",
			success:function(data){
				if(data.Status==1){
					$("#notice").html("<span class='onCorrect'></span>");
					$('#ycode').show();
					$('#sendcode').removeClass("newclass").unbind('click').bind('click',function(){send_code('register',$('#mobile').val())});
					return true;
				}else{
					$('#ycode').hide();
					$('#sendcode').addClass("newclass").unbind('click');
					$("#notice").html("<p class='tishi'>手机号码已经存在</p>");
					return false;
				}
			}
		});	
	});

	//重新获取图片验证码
	$("img.tupian").bind("click",function(){
		var t=Math.round(new Date().getTime()/1000);
		$(this).attr('src','http://passport.mfniu.com/cgi/index?time='+t);
		$("#timetoken").val(t);
	});
	//图片验证码
	$("#code").bind("focusout",function(){
		val=$(this).val();
		if(val.length!=4){
			$("#notice1").html('<p class="tishi">请输入4位验证码</p>').show();
			return false;
		}
		else{
			$.ajax({
				type: "get",
				url: "/index.php?d=welcome&c=welcome&m=check_imgcode&time="+$("#timetoken").val(),
				data: {
					'code':val
				},
				dataType: "json",
				success:function(data){
					if(data.Status==1){
						$("#notice1").hide();
						return true;
					}else{
						$("#notice1").html("<p class='tishi'>"+data.Msg+"</p>").show();
						return false;
					}
				}
			});	
		}	
	});
	//手机验证码
	$("#code2").bind("focusout",function(){
		var _val=$.trim($(this).val()),
			re=/^[0-9]*$/;
		if(!_val || !re.test(_val)){
	        $("#notice2").html("<p class='tishi'>请输入数字验证码</p>");
			return false;
	    }
		if(_val.length!=6 ){
			$("#notice2").html("<p class='tishi'>请输入6位验证码</p>");
			return false;
		}
		$.ajax({
			type: "get",
			url:  "/index.php?d=welcome&c=welcome&m=check_code&type=register",
			data: {
				'mobile':$.trim($("#mobile").val()),
				'code2':_val,
				'time':$("#timetoken").val()
			},
			dataType: "json",
			success:function(data){
				if(data.Status == "1"){
					$("#notice2").html("<span class='onCorrect'></span>");
					return true;
				}else{
					$("#notice2").html("<p class='tishi'>验证码不正确</p>");
					return false;
				}
			}
		});	
	});
	$("#nickname").blur(function(obj){
		var _val = $(this).val();
		if(_val=="用户昵称" ||_val==""){
			$("#notice3").html("<p class='tishi'>请输入用户昵称</p>");	
			return false;	
		}
		var re =/^[\u4E00-\u9FA5]+$/;
	    if(!re.test(_val)){
	    	$("#notice3").html("<p class='tishi'>昵称应该为2-6个中文汉字</p>");	
	    	return false;
		}
    	if(_val.length<2 || _val.length>6 ){
    		$("#notice3").html("<p class='tishi'>中文汉字应该为2-6个</p>");
    		return false;
    	}
    	$("#notice3").html('');
	});	
	$("#password").blur(function(obj){
	    var _pwd = $("#password").val();
	    re=/^[a-zA-Z0-9_]{6,18}$/ //匹配IP地址的正则表达式
    	if(_pwd.length<6 || _pwd.length>18 ){
    		$("#notice4").html("<p class='tishi'>密码为6-18个字符</p>");
    		return false;
    	}
	    if(!re.test(_pwd)){
	        $("#notice4").html("<p class='tishi'>密码格式不正确</p>");
			return false;
	    }
		$("#notice4").html('');
	});
//****************************************找回密码操作*******************************************************************/

	$('#regForm1 [title]').tipsy({trigger: 'hover', gravity: 'w',opacity: 1});
	$.formValidator.initConfig({validatorgroup:"2",autotip:true,formid:"regForm1",onsuccess:function(){
		$.post("/index.php?d=welcome&c=welcome&m=find_passworld&time="+$("#findtoken").val(),
			$("#regForm1").serialize() ,function(data){
			alert('修改密码成功')
          })
		}});
	
		//注册表单提交
	    //找回密码
		$("#findmobile").blur(function(obj){	
			var _val=$.trim($(this).val()),
				re=/^(13[0-9]{9}|15[012356789][0-9]{8}|18[0-9]{9}|147[0-9]{8})$/;
			if(_val=="输入手机号"||_val==""){		
				$("#notice").html("<p class='tishi'>请输入手机号</p>");
				$('#ycode2').hide();
				return false;
			}
			if(!re.test(_val)){
				$("#notice").html("<p class='tishi'>手机号码不正确</p>");
				$('#ycode2').hide();
				return false;
			}
			$.ajax({
				type: "get",
				url:  "/index.php?d=welcome&c=welcome&m=check_mobile",
				data: {
					'findmobile':_val
				},
				dataType: "json",
				success:function(data){
					if(data.Status==1){
						$("#passmobile").val($('#findmobile').val());
						$("#findnotice").html("<span class='onCorrect'></span>");
						$('#ycode2').show();
						$('#findsendcode').removeClass("newclass").unbind('click').bind('click',function(){send_findcode('findpass',$('#findmobile').val())});
						return true;
					}else{
						$('#findsendcode').addClass("newclass").unbind('click');
						$("#findnotice").html("<p class='tishi'>"+data.Msg+"</p>");
						$('#ycode2').hide();
						return false;
					}
				}
			});	
		});
		$("img.fingimg").bind("click",function(){
			var s=Math.round(new Date().getTime()/1000);
			$(this).attr('src','http://passport.mfniu.com/cgi/index?time='+s);
			$("#findtoken").val(s);
		});
		//图片验证码点击获取时间戳
		$("#imgcode").bind("focusout",function(){
			val=$(this).val();
			if(val.length!=4){
				$("#imgnotice").html('<p class="tishi">请输入4位验证码</p>').show();
				return false;
			}
			else{
				$.ajax({
					type: "get",
					url: "/index.php?d=welcome&c=welcome&m=check_imgcode&time="+$("#findtoken").val(),
					data: {
						'imgcode':val
					},
					dataType: "json",
					beforeSend:function(){
						$("#passcode").val('');
					},
					success:function(data){
						if(data.Status==1){
							$("#passcode").val(val);
							$("#imgnotice").hide();
							if($('#mobilecode').val()!='' && $('#passmobile').val()!=''){
								$(".retrieve-paw").show();//密码修改界面
								$(".forget-box").hide();
							}
							return true;
						}else{
							$("#imgnotice").html("<p class='tishi'>"+data.Msg+"</p>").show();
							return false;
						}
					}
				});	
			}	
		});
		//手机验证码
		$("#findcode").bind("focusout",function(){
			var _val=$.trim($(this).val()),
				re=/^[0-9]*$/;
			if(!_val){
				$("#codenotice").html("<p class='tishi'>请输入手机验证码</p>");
				return false;
			}
			if(!re.test(_val)){
				$("#codenotice").html("<p class='tishi'>请输入数字验证码</p>");
				return false;
			}
			if(_val.length!=6 ){
				$("#codenotice").html("<p class='tishi'>请输入6位验证码</p>");
				return false;
			}
			$.ajax({
				type: "get",
				url:  "/index.php?d=welcome&c=welcome&m=check_code&type=findpass",
				data: {
					'mobile':$.trim($("#findmobile").val()),
					'findcode':_val,
					'time':$("#findtoken").val()
				},
				dataType: "json",
				beforeSend:function(){
					var findmobile = $('#findmobile').val();
					var imgcode = $('#imgcode').val();
					if(findmobile=='输入手机号'||findmobile==''){
						$("#findnotice").html("<p class='tishi'>请输入手机号</p>");
						return false;
					}else if(imgcode=='验证码'||imgcode==''){
						$("#imgnotice").html("<p class='tishi'>请输入4位验证码</p>");
						return false;
					}
				},
				success:function(data){
					if(data.Status == "1"){
						$("#mobilecode").val($('#findcode').val());
						if($('#passmobile').val()!='' && $('#passcode').val()!=''){
							$(".retrieve-paw").show();//密码修改界面
							$(".forget-box").hide();
						}
					}else{
						$("#codenotice").html("<p class='tishi'>您的验证码有误</p>");
						return false;
					}
				}	
			});	
		});
	
		   $("#newpwd").formValidator({validatorgroup:"2",onshow:" ",onfocus:" ",oncorrect:"&nbsp;"}).inputValidator({min:6,max:18,onerror:function(obj){
		        $("#notice_newpwd").html("<p class='tishi'>密码为6-18个字符</p>");
		    }}).regexValidator({regexp:"paw",datatype:"enum",onerror:function(obj){
		        $("#notice_newpwd").html("<p class='tishi'>密码格式不正确</p>");
		    }});

			$("#newpss").formValidator({validatorgroup:"2",onshow:" ",onfocus:" ",oncorrect:"&nbsp;"}).inputValidator({min:6,max:20,onerror:function(obj){
		        $("#notice_newpss").html("<p class='tishi'>密码为6-18个字符</p>");
		    }}).compareValidator({desid:"newpwd",operateor:"=",onerror:"两次密码不同。"});


			//新密码
			$("#newpwd").focus(function(obj){
				$("#notice_newpwd").html('');	
			});
			$("#newpwd").blur(function(obj){
			    var _pwd1 = $("#newpwd").val();
			    re=/^[a-zA-Z0-9]\w{5,17}$/ //匹配IP地址的正则表达式
			    if(!$("#newpwd").val() || re.test(_pwd1)){
			        $("#notice_newpwd").html('');
			    }
			});
			//确认密码
			$("#newpss").focus(function(obj){
				$("#notice_newpss").html('');
				
			});
			$("#newpss").blur(function(obj){
			    var _pwd2 = $("#newpss").val();
			    var _pwd1 = $("#newpwd").val();
			    re=/^[a-zA-Z0-9]\w{5,17}$/ //匹配IP地址的正则表达式
			    if(!$("#newpss").val() || re.test(_pwd2)){
				    if(_pwd2 !=_pwd1 ){
				    	$("#notice_newpss").html("<p class='tishi'>两次密码不同</p>");
				    }
			    }
			});
	   
});
         