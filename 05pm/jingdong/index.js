var express=require("express")
var app=express()
app.listen(8081)


//中间件

	// app.use(function(req,res,next) {
	// 	
	// 	console.log(req.url)
	// 	res.sendFile(__dirname+req.url)
	// 	//前端无论请求后端什么接口  只要访问8081端口  就会执行者个函数
	// 	// next()
	// })
	

//配置静态资源的托管的目录	
app.use(express.static(__dirname))

app.get("/view/my/test.php",(req,res)=>{
	res.send('{"name":"jack"}')
})
	
	
	

// 
// app.get("/index.html",(req,res)=>{
// 	res.sendFile(__dirname+"/index.html")
// 	
// })
// 
// 
// //   http://10.19.248.186:8081/src/img/1.jpg
// app.get("/src/img/1.jpg",(req,res)=>{
// 	res.sendFile(__dirname+"/src/img/1.jpg")
// })
// 
// 
// 
// //  http://10.19.248.186:8081/view/my/my.html
// app.get("/view/my/my.html",(req,res)=>{
// 	res.sendFile(__dirname+"/view/my/my.html")
// })
// 
// 
// // http://10.19.248.186:8081/view/my/img/5.jpg
// app.get("/view/my/img/5.jpg",(req,res)=>{
// 	res.sendFile(__dirname+"/view/my/img/5.jpg")
// })
// 
// 
// //http://10.19.248.186:8081/view/my/css/my.css
// app.get("/view/my/css/my.css",(req,res)=>{
// 	res.sendFile(__dirname+"/view/my/css/my.css")
// })
// 
// 
// //http://10.19.248.186:8081/view/my/js/mytool.js
// app.get("/view/my/js/mytool.js",(req,res)=>{
// 	res.sendFile(__dirname+"/view/my/js/mytool.js")
// })
// 
// 
// 
// // json接口
// // test.php
// 
// app.get("/view/my/test.php",(req,res)=>{
// 	
// 	
// 	res.send('{"name":"jack"}')
// })
// 


