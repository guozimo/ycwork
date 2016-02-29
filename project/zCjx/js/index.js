function move(){
	var valHei = $("body").outerHeight();
	var widHei = $(window).outerHeight();
	if(valHei<widHei){
		$(".footer").addClass("fixedFot");
	}else{
		$(".footer").removeClass("fixedFot");
	};
}
move();
$(window).resize(function(){
	move();
});