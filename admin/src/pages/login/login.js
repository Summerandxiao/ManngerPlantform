import React, { Component } from 'react';
import "./login.less";
import {Form, Icon, Input, message,Button, Checkbox,Card} from 'antd';
class Login extends Component {
	 login=(e)=>{
	 	 
	 	e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	    //	console.log(err,values)
	      if (!err) {
	       // console.log('Received values of form: ', values);
	     /* setTimeout(()=>{
	      	message.success("登录成功，1秒内自动跳转",1,()=>{
	      		this.props.history.push("/admin")
	      	})
	      	
	      },1000)*/
	     this.$axios.get("/login",{query:{name:123,ps:"456"}})
	      .then((data)=>{
	      	  //console.log(data)
	      	  if(data.err===0){
	      	  	 message.success("登录成功，1秒内自动跳转",1,()=>{
	      		         this.props.history.push("/admin")
	      	     })
	      	  }else{
	      	  	 message.error("登录失败请重试",1)
	      	  }
	      })
	      .catch((err)=>{
	      	 console.log(err)
	      })
	      
	      }
	    })
	  /* //获取全部input框里内容
	    let data = this.props.form.getFieldsValue()
	    console.log(data)
	    //获取userName框的值
	     let detail = this.props.form.getFieldValue("userName")
	    console.log(detail)*/
	  }
	 
  goReg=(e)=>{
  		e.preventDefault();
  	this.props.history.push("/reg")
  }
 
 
 render() {
  	console.log(this)
  	 const { getFieldDecorator } = this.props.form;
    return ( 
      <Card  title="Login"  style={{ width: 300 }} className="Login">
      <Form onSubmit={this.login} className="login-form">
         <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '用户名不能为空' },
            { max: 10, message: '用户名不能超过10位' },
            { min: 3, message: '最少3位' },
            { pattern: /^[a-z]./i, message: '第一位为字母' }
            ]
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}

         </Form.Item>
         <Form.Item>
						{getFieldDecorator('password', {
				            rules: [{ required: true, message: '请输入密码!' }],
				          })(
				            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
				          )}
         </Form.Item>
         <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="" onClick={this.goReg}>register now!</a>
        </Form.Item>
      </Form>
      </Card>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;
