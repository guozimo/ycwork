//取消自选
	function zixuan_del(obj,fundCode,page,condition,fundType)
		
		{
		alert(obj);alert(condition);alert(fundType);
		$.ajax({
			url:"/Zixuan_list/zixuan_del/",
			type:"post",
			data:{fundCode:fundCode},
			success:function(result){
				alert(result);
					if(result==1){
						//console.log($(obj).parents());
						$(obj).parents(".qx_fund").remove();
						zixuan_list(page,condition,fundType);
					} 
			
				}
			})
	
	}
	function zixuan_list(page,condition,fundType){
		$.ajax({
			url:"/Zixuan_list/get_zixuan/",
			type:"get",
			data:{page:page,condition:condition,fundType:fundType},
			success:function(result){
				console.log(result);return false;
					if(result==1){
						
					} 
			
				}
			})
	}
//添加自选
function zixuan_add(obj){
	   var fundCode = $(obj).attr('code');
	   $.ajax({
             url:"/Fund_list/zixuan_add/",
             type:"post",
             data:{fundCode:fundCode},
             success:function(result){
                    if(result==1){
                        alert('关注成功');
                        $(obj).text("已关注");
                   }
             }
         })
}
//基金申购
function shengou(thisa,tmp_fundType,fundStatus){
	// alert(tmp_fundType);
	 var tmp_fundName= $(".nr").text();
	var tmp_fundCode= $(".code").text();
	//var tmp_fundType= $(thisa).find(".fundType").val();
	var url_kh="/Op_account/index";
	var url_pg="/Apply_fund/pingu";
	//var url_sg="/Apply_fund/shengou"+"?name="+tmp_fundName+"&code="+tmp_fundCode+"&type="+tmp_fundType+"&fundStatus="+fundStatus;
	var url_sg="/Apply_fund/shengou"+"?name="+tmp_fundName+"&code="+tmp_fundCode+"&type="+tmp_fundType+"&fundStatus="+fundStatus;
	if(fundStatus==4||fundStatus==5){
		alert("停止申购");
		return false;
	}else if(fundStatus==9){
		alert("基金封闭");
		return false;
	}else if(fundStatus=='a'){
		alert("基金终止");
		return false;
	}
	 $.ajax({
		   type: "POST",
		   url: "/Apply_fund/apply",
		   //data: 'uid='+uid,
		   success: function(msg){
			//alert(msg);return false;
				if(msg==0){
					if(window.confirm('您还没有开户，开户才能申购了哦！')){
					 location.href=url_kh; return false;
					}else{
					  return false;
					}
				}
				if(msg==1){
					alert('您还没有做过风险评估或评估已过期,评估后才能申购');  
					//location.href=url_pg; return false;
					location.href=url_pg; return false;
				}
				if(msg==9){
					alert('用户不合法,请重新登录');  
					 return false;
				}
				if(msg==2){
					location.href=url_sg; return false;
				}
				
			
		   }
	   });
}