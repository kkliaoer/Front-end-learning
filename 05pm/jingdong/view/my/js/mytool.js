function my$ (url,callback) {
    
	var xhr=new XMLHttpRequest()
	xhr.open("GET",url,true)
	xhr.send()
	xhr.onreadystatechange=function  () {
	if(xhr.readyState==4){
		callback(xhr.responseText)  
	}	
	}


	
}

