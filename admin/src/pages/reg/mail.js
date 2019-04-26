"use strict";
const nodemailer = require("nodemailer");

//创建发送邮件的对象
//nodemodules/nodemailer/well-know/service.json存放服务器信息，在里面找各种邮箱的配置信息。下面以qq邮箱为例。
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for othe r ports
    auth: {
      user: "1398647744@qq.com", // 发送方邮箱
      pass: "wtgpgqarkdvlbacg" // smtp授权码（进入到邮箱---设置---账户--
      //POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务--OP3/SMTP服务--默认情况下是关闭的，
     // 点开启，验证后得到授权码，然后复制粘贴过来。若已开启，先关闭再开启来得到授权码。
    }
  });
   
 function sendMail(mail,code){
 	return new Promise((resolve,reject)=>{
 			if(!mail || !code){
 				reject("参数错误")
 			}
 			
		 			//发送邮件信息
		  let mailOptions = {
		    from: '"Fred Foo 👻" <1398647744@qq.com>', // sender address
		    to: `${mail}`, // list of receivers
		    subject: "阿里云", // Subject line
		    text: `欢迎您的注册，验证码是${code}`, // plain text body
		   // html: "<b>Hello world?</b>" // html body
		    //text和html只会在页面出现一个。所以两个用一个就行
		  };
		  transporter.sendMail(mailOptions,(err,data)=>{
		 	if(err){
		 		reject("验证码发送失败")
		 	}else{
		 		resolve("验证码发送成功")
		 	}
		 })
		
		 	})
 
 }
module.exports={sendMail}
