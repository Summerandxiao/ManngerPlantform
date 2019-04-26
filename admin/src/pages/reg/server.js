const express = require("express");
const app = express();
const mail = require("./mail.js");
let auth={}
app.get("/getEmailCode",(req,res)=>{
	const email = req.query.email
	const code = parseInt(Math.random()*10000)
	auth[email]=code
	mail.sendMail(email,code)
	   .then((data)=>{
	   	console.log(data)
	   	res.send({err:0,msg:"验证码发送成功"})
	   })
	   .catch((err)=>{
	   	res.send({err:1,msg:"验证码发送失败"})
	   })
})

app.listen(8081,()=>{
	console.log("success")
})
