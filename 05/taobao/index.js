//引入模块(别人写的具有某些功能的项目)
//有的系统内置模块  有的模块是第三方  有的自定义
//insatll的缩写是i
//第三方模块需要先下载: 小黑窗执行  npm insatll xxx模块名  --save-dev(安装到项目里) -g(安装到全局)  (不写安装到node的安装目录)
//npm init -y: 把自己项目用的第三方依赖  写入依赖清单  package.json  别人只需要执行nmp insatll
var express = require("express")

var app = express()
app.listen(82)
app.get("/index.html", function(req, res) {

	// res.send("hello")
	//__dirname  代表当前文件所在的目录的绝对路
	// console.log("6666"+__dirname)
	res.sendFile(__dirname+"/src/index.html")

})
