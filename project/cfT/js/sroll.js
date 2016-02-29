$(function(){
	function srcoll(BoxId){
	  var sclBar = document.getElementById(BoxId);
	  var sclList = sclBar.getElementsByTagName('li');
	  var sclLen = sclList.length;
	  var sclHeight = 41;
	  var sclSpd = 1;
	  var sclList = document.getElementById(BoxId).getElementsByTagName('li');
	  if(sclList.length <= 10){
	  		sclBar.innerHTML = sclBar.innerHTML;
	  }else{
	  		sclBar.innerHTML += sclBar.innerHTML;
	  }

	  if (!sclLen) return;
	  
	  function sclRun() {
	   sclBar.scrollTop += sclSpd;
	   if (sclBar.scrollTop == sclHeight * sclLen) {
	    sclBar.scrollTop = 0;
	   }
	   if (sclBar.scrollTop % sclHeight == 0) {
	    setTimeout(sclRun, 50);
	   } else {
	    setTimeout(sclRun, 50);
	   }
	  }
	  
	  for (var i = 0; i < sclList.length; i++) {
	   sclList[i].onmouseover = function () {
	    sclSpd = 0;
	   };
	  
	   sclList[i].onmouseout = function () {
	    sclSpd = 1;
	   };
	  }
	  setTimeout(sclRun, 50);
	}
	srcoll('carouselContent');
	srcoll('Red_envelope');

})