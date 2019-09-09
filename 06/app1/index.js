var express = require("express")
var app = express()

//数据库的工具的配置
var mysql = require('mysql');

app.listen(81)

//静态资源托管
//__dirname 代表一个字符串:当前文件所在的目录的绝对路径
app.use(express.static(__dirname + "/src"))


// 用户给后端传数据  后端接受 并响应  /info.json
app.get("/info.json", function(req, res) {
	console.log(req.query.userid, req.query.password)
	if (req.query.userid == "abc" && req.query.password == "123") {

		res.send('{"name":"xxxx"}')
	} else {
		res.send("密码错误")
	}
})



//
// 肖申克的救赎  / The Shawshank Redemption  / 月黑高飞(港) / 刺激1995(台)

//管理员的页面的接口
//    http://ip:ports/addMovie
app.get("/addMovie", function(req, res) {
	console.log(req.query)

	//把前端传过来的数据添加到数据库中(写入磁盘)
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'h5_chengxin_20190719'
	});

	connection.connect();
	var sql =
		'INSERT  INTO top250 (name,daoyan,yanyuan,rank,label,img,description,count)VALUES("' + req.query.name + '","' + req
		.query.daoyan + '","' + req.query.yanyuan + '","' + req.query.rank + '","' + req.query.label + '","' + req.query.img +
		'","' + req.query.description + '",' + req.query.count + ')'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.send("我要帮你添加到数据库去")
	});

	connection.end();





})








// 加载数据库中所有电影的接口
//   /loadALL
app.get("/loadALL",function(req,res){
	 	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'h5_chengxin_20190719'
	});

	connection.connect();
	var sql ='select *from top250;'
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});

	connection.end();
})


/// 通过关键字查询数据库的电影数据  传给前端

//   /seach
app.get("/seach",function(req,res){
	
	 	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'h5_chengxin_20190719'
	});

	connection.connect();
	var sql ='select * from top250 WHERE label LIKE "%'+req.query.label+'%" '
	connection.query(sql, function(error, results) {
		if (error) {
			console.log(error)
		}
		console.log(results)
		res.json(results)
	});

	connection.end();
})