(function($){
	$.fn.extend({
		manage:function(options){
			options = $.extend({
				nameid:''
			}, options);
			return this.each(function(){
				var form = $(this), 
					name=options.nameid,
					chkallobj = $(":checkbox#openAll",form), 
					chksingleobj = $(":checkbox[name='"+name+"']",form);
				
				chkallobj.bind("click",function(event){
					event = event || window.event;
					event.stopPropagation();
					if($(this).attr("checked")=='checked'){
						chksingleobj.attr("checked", true);
					}
					else{
						chksingleobj.attr("checked", false);
					}
				});
				chksingleobj.bind("click",function(event){
					event = event || window.event;
					event.stopPropagation();
					var allopenl=chksingleobj.length,
					openl=$(":checkbox[name='"+name+"']:checked").length;
					if(openl<allopenl){
						chkallobj.attr("checked", false);
					}
					if(openl==allopenl){
						chkallobj.attr("checked", true);
					}			
				});
			});
		}
	});
})(jQuery);