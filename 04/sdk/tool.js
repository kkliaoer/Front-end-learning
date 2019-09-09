function load (n1,n2) {
	var xhr=new XMLHttpRequest()
	xhr.open("get",n1,true)
	xhr.send()
	xhr.onreadystatechange=function() {
		if(xhr.readyState==4&&xhr.status==200){
			var str=xhr.responseText
			// console.log(str)
			n2(str)
		}
	}
	
}