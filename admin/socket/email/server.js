const express = require("express");
const app = express();
const mail = require("./mail.js")

//radius memche 数据库let auth = {}
app.get("/getEmailCode",(req,res)=>{
	let email = req.query.email
	let code = parseInt(Math.random()*10000)
	//auth[email]=code
	mail.sendMail(email,code)
	.then((data)=>{
		console.log(data)
		res.send({err:0,msg:"验证码发送成功"})
	})
	.catch((err)=>{
		console.log(err)
		res.send({err:1,msg:"验证码发送失败"})
	})
})
app.get("/reg",(req,res)=>{
	//验证邮箱和验证码是否匹配
	let {eamilcode,pass}=req.query
	if(auth[email]&&auth[email]==code){
		//走注册逻辑
		//注册成功
		res.send({err:0,msg:"注册成功"})
	}else{
		res.send({err:1,msg:"验证码错误"})
	}
})
app.listen(3000,()=>{
	console.log("sucess")
})
