 var express = require("express");
 var app = express();
 var server = require("http").Server(app);
 var io = require("socket.io")(server);
 app.use(express.static(__dirname+"/static"))
 app.get("./sendReward",(req,res)=>{
 	sendAll();
 	res.send("发送中奖成功")
 })
 let clients=[]
 io.on("connection",(client)=>{
 	clients.push(client)
 	console.log("客户端连接")
 	//后端触发前端的监听的自定义事件：hehe.
 	//client.emit("hehe","欢迎光临")
 	client.on("bckApi",(msg)=>{
 	console.log(msg)
 })
 	//soxket封装的群发广播模板
 	/*setTimeout(()=>{
 		//发送给除了本对象之后的客户端
 			client.broadcast.emit("reword","恭喜中奖")
 	},5000)*/
 
 	
 })
 function sendAll(){
 	 for(var i = 0 ; i < clients.length ; i++){
 	 	const element = clients[i]
 	 	element.emit("reward","恭喜中奖")
 	 }
 }
 
 server.listen(8081,()=>{
 	console.log("success")
 });
