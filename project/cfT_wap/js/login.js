$(function(){
	//地址框获取鼠标焦点 
   $('.input_username input,.input_keyword input,.txt-box textarea').focus(function(){ 
        var inp_val = $(this).val(); //得到当前文本框的值 
        if( inp_val == this.defaultValue ){ //使用defaultValue属性 
         $(this).val('').addClass('on'); //如果符合条件，则情况文本框的内容 
        } 
   }); 
   //地址框失去焦点 
   $('.input_username input,.input_keyword input,.txt-box textarea').blur(function(){ 
        var inp_val = $(this).val(); //得到当前文本框的值 
        if( inp_val == "" ){ 
         $(this).val(this.defaultValue).removeClass('on'); //如果符合条件，则设置内容 
        } 
   }); 
	
})
