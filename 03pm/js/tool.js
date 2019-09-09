function tool(str) {

	var sinadt = new Date(str)
	var nowdt = new Date()
	var absTime = nowdt - sinadt



	if (0 < absTime && absTime <= 1000 * 60) {
		return "刚刚"
	} else if (1000 * 60 < absTime && absTime <= 1000 * 60 * 60) {
		//120*1000+200
		return (new Date(absTime)).getMinutes() + "分钟前"

	} else if (1000 * 60 * 60 < absTime && absTime <= 1000 * 60 * 60 * 24) {
		return sinadt.getHours() + ":" + sinadt.getMinutes()
	} else if (1000 * 60 * 60 * 24 < absTime) {
		return sinadt.getMonth() + 1 + "月" + sinadt.getDate() + "号"
	}


}



function mycreateEle (n1,n2,n3) {
	//var n1="p"
	// var n2="hello"
	//var n3="classname"
	var el=document.createElement(n1)
	el.innerHTML=n2
	el.className=n3
	
	return el
}