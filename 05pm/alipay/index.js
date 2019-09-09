
var express=require("express")

var app=express()


app.listen(8081)



//   http://localhost:8081/666
app.get("/666",function(req,res){
	
	//读取文件  然后发送给请求者
	var str=__dirname+"/src/index.html"
	// res.send(str)
	res.sendFile(str)
	
})

// http://localhost:8081/my.html
app.get("/my.html",function(req,res) {
	
	var path=__dirname+"/src/my.html"
	res.sendFile(path)
})



// http://ip:port/news.json
app.get("/news.json",function(req,res) {
	// res.status(404)
	
	
	var data='{"name":"jack"}'
	
	
	res.send(data)
})


// http://ip:port/1.jpg
app.get("/1.jpg",function(req,res) {
       res.sendFile(__dirname+"/src/img/1.jpg")
})


 // http://ip:port/js/tool.js
 app.get("/js/tool.js",function(req,res) {
        res.sendFile(__dirname+"/src/js/tool.js")
 })
 