$(function(){
	$('.login').one('click',function(){
		var style = '<style type="text/css">'+
		'*{list-style:none; margin:0;padding:0;}a{text-decoration:none;}'+
		'.loginbox{ width: 454px; height: 392px; background: url(http://ys.mfstatic.com/project/passport/images/register/loginbox.png) 0 0 no-repeat;position: absolute; left: 50%; top: 50%;z-index: 110; margin-left: -227px; margin-top: -196px; overflow: hidden;}'+
		'.dltop{ width: 400px; height: 60px; border-bottom: solid 1px #cccccc; margin-left: 26px;}'+
		'.dlhh{ font-size: 20px; color: #666666; font-weight: bold; padding-top: 21px; display: block; float: left;}'+
		'.loginbox a{ font-size: 14px; color: #259be5; float: right; padding-top: 37px;}'+
		'.zhsz{vertical-align: middle; padding-left: 50px; margin-bottom: 10px;}'+
		'.zhsz label{font-size: 16px; color: #666666; font-weight: bold;vertical-align: middle; display: inline-block; margin-right: 19px;}'+
		'.zhsz input{ width: 240px;height: 44px; outline: none; border: none; background: url(http://ys.mfstatic.com/project/passport/images/register/loginbox.png) 0 -398px no-repeat; line-height: 44px; padding-left: 20px;}'+
		'.mt37{ margin-top: 37px;}'+
		'.loginin{ width: 260px; height: 42px; color: #fff; font-size: 16px; text-align: center; line-height: 42px; border: none; overflow: hidden; background: url(http://ys.mfstatic.com/project/passport/images/register/loginbox.png) 0 -450px no-repeat; margin-left: 100px; display: block; outline: none;}'+
		'.zcboxbot{ width: 260px; margin-left: 100px;}'+
		'.mfzc{ font-size: 14px;color: #259be5; font-weight: bold; width: 100%; text-align: right; line-height: 34px; height: 34px; cursor: pointer;}'+
		'.fl{ float: left;}'+
		'.huilinea{ width: 69px; height: 21px;border-bottom: solid 1px #dddddd;}'+
		'.qqdl{ height: 30px;}'+
		'.tx{ width: 30px; height: 30px; margin-left:20px; margin-right: 20px; display: inline;  overflow: hidden; background: url(http://ys.mfstatic.com/project/passport/images/register/loginbox.png) -279px -399px no-repeat; margin-top: 5px; cursor: pointer;}'+
		'.qq{ width: 30px; height: 30px; overflow: hidden; margin-right: 20px; background: url(http://ys.mfstatic.com/project/passport/images/register/loginbox.png) -314px -399px no-repeat; margin-top: 5px; cursor: pointer;}'+
		'.colsexx{ width: 33px;height: 33px; cursor: pointer; position: absolute;right: 0; top: 0;z-index: 112; /*float: right;*/ overflow: hidden; background: url(http://ys.mfstatic.com/project/passport/images/register/loginbox.png) -352px -396px no-repeat;}'+
		'.loginbox .colsexx a{width: 16px; height: 16px; padding-top: 0; margin-top: 8px;margin-right: 8px; overflow:hidden; background: url(http://ys.mfstatic.com/project/passport/images/register/icon.png)  -105px -47px no-repeat; display: inline-block; transition:none;}'+
		'.loginbox .colsexx a:hover{background: url(http://ys.mfstatic.com/project/passport/images/register/icon.png)  -149px -46px no-repeat;}'+
		'.fonts{ line-height: 14px; padding-left: 115px; font-size: 14px; margin-bottom: 10px; height: 14px;}'+
		'.fonts.error{ color: red;}'+
		'</style>';
		var callback_url = encodeURI(window.location.href);
		$('body').append(style+'<form id="loginForm" autocomplete="off" name="regForm" action="http://passport.mfniu.com?url='+callback_url+'" method="post"><div class="loginbox" id="loginbox">\
			<div class="colsexx">\
				<a></a>\
			</div>\
			<div class="dltop clearfix" id="dltop">\
				<span class="dlhh">登录</span>\
				<a href="http://passport.mfniu.com/regemail/">5秒快速注册</a>\
				<input type="hidden" value="1" name="username_type" id="username_type">\
			</div>\
			<div>\
				<div class="zhsz mt37 mb30">\
					<label>账号:</label>\
					<input type="text" name="name" id="name">\
				</div><p id="name_eorr" class="fonts error"></p>\
				<div class="zhsz">\
					<label>密码:</label>\
					<input type="password" name="password" id="password">\
				</div><p class="fonts error" id="pass_eorr"></p>\
				<input type="button" value="登录" class="loginin">\
				<div class="zcboxbot">\
					<p class="mfzc">免费注册</p>\
					<div class="qqdl">\
						<div class="huilinea fl"></div>\
						<div class="tx fl"></div>\
						<div class="qq fl"></div>\
						<div class="huilinea fl"></div>\
					</div>\
				</div>\
			</div>\
		</div>\
		<div class="blackbox"></div></form>');
		$('.login').click(function(){
			$('.loginbox').show();
			$('.blackbox').show();
		})
	});
	console.log();

	$("body").on('click','.colsexx',function(){
		$('.loginbox').hide();
		$('.blackbox').hide();
	})

	$("body").on('click','.loginin',function(){
		valid_name();
		valid_password();
		setTimeout('formsubmit()',1000);
	})

	$("body").on('blur','#name',function(){
		valid_name();
	})

	$("body").on('blur','#password',function(){
		valid_password();
	})

	//提交用户信息
	function formsubmit(){
		var name_eorr = $('#name_eorr').html();
		if(name_eorr){
			return false;
		}
		var pass_eorr = $('#pass_eorr').html();
		if(pass_eorr){
			return false;
		}
		$('#loginForm').submit();
	}
	
	
	//验证用户名
	function valid_name(){
		var username = $('#name').val();
		var phone = valid_phone(username);
		var email = valid_email(username);
		if(!phone && !email){
			$('#name_eorr').html('请输入手机号/邮箱');
			return false;
		}
		if(phone){
			$('#username_type').val('1');
		}else if(email){
			$('#username_type').val('2');
		}
		
		var username_type = $('#username_type').val();

		$.ajax({
		   type: "POST",
		   url: "http://passport.mfniu.com/ajax/valid_phone_email?username="+username+"&username_type="+username_type+"&ajax=1",
		   data: "username="+username+"&username_type="+username_type+"&ajax=1",
		   success: function(data){
					var obj = JSON.parse(data);
					if(obj.Status == 1 && obj.ErrorCode == 18){
						$('#name_eorr').html('');
					}else{
						$('#name_eorr').html('帐号不存在！');
					}
		   }
		});
	}
	//验证密码
	function valid_password(){
		var username = $('#name').val();
		var password = $('#password').val();
		if(password.length < 6 || password.length > 18){
			$('#pass_eorr').html('密码为6-18个字符');
			return false;
		}

		$.ajax({
		   type: "POST",
		   url: "http://passport.mfniu.com/ajax/valid_password?username="+username+"&password="+password+"&ajax=1",
		   data: "username="+username+"&password="+password+"&ajax=1",
		   success: function(data){
					var obj = JSON.parse(data);
					if(obj.Status == 1){
						$('#password').html('');
					}else{
						$('#pass_eorr').html('密码错误！');
					}
		   }
		});


		$('#pass_eorr').html('');
		return true;
	}

	//验证是否是手机号
	function valid_phone(tel){
		 var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		 if (reg.test(tel)) {
			 return true;
		 }else{
			 return false;
		 };
	}
	//验证是否邮箱
	function valid_email(email){
		var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		if (reg.test(email)) {
			return true;
		}else{
			return false;
		};
	}

})
