function fontColor(n){
	var code,str;
	code = document.getElementsByTagName(n);
	for(var i=0;i<code.length;i++){
		str = parseFloat(code[i].innerHTML);
		if(str < 0){
			code[i].style.color = "#7cbe5f";
		} else if (str > 0){
			code[i].style.color = "#E76565";
		}
	}	
}