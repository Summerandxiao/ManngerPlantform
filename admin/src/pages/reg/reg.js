import React,{Component} from "react";
import "./reg.less";

import {
 Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';

class Reg extends Component {
	  handleSubmit = (e) => {
		    e.preventDefault();
		    this.props.form.validateFieldsAndScroll((err, values) => {
		    	if(!err){
		    		this.$axios.get("/reg")
		      	.then((data)=>{
		      		console.log(data)
		      		})
		      		/*this.props.history.push("/login")*/
		    	}
		    	
		      
		    })
		  }
    getYan=()=>{
    	 let detail = this.props.form.getFieldValue("email")
    	 console.log(detail)
    	 var xhr = new XMLHttpRequest()
    	 xhr.open("get","/getEmailCode?email="+detail)
    	 xhr.send()
    	 xhr.onload=function(){
    	 	    console.log(xhr.responseText)
    	 }
    }
 
 render() {
    const { getFieldDecorator } = this.props.form;
    
    return ( 
      <Card  title="Reg"  style={{ width: 500 }} className="Reg">
           <Form  onSubmit={this.handleSubmit}>
	        <Form.Item label="邮箱">
	          {getFieldDecorator('email', {
	            rules: [{
	              type: 'email', message: '邮箱格式错误!',
	            }, {
	              required: true, message: '请输入邮箱！',
	            },
	            {
	            	pattern:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,message:"邮箱格式错误"
	            	
	            }
	            ],
	          })(
	            <Input />
	          )}
	        </Form.Item>
	         <Form.Item label="密码">
		          {getFieldDecorator('password', {
		            rules: [{
		              required: true, message: '请输入密码!',
		            }, {
		              validator: this.validateToNextPassword,
		            }],
		          })(
		            <Input type="password" />
		          )}
		        </Form.Item>
		        <Form.Item label="验证码">
		          {getFieldDecorator('yanzhengma', {
		            rules: [{
		              required: true, message: '请输入验证码!',
		            }, {
		              validator: this.validateToNextPassword,
		            }],
		          })(
		            <Input />
		          )}
		          <Button onClick={this.getYan}>获取验证码</Button>
		       </Form.Item>
		      <Form.Item>
		        <Button type="primary" htmlType="submit" className="login-form-button">
             注册
          </Button>
         </Form.Item>
         </Form>
      </Card>
    );
  }
}
const WrappedNormalRegForm = Form.create()(Reg);
export default WrappedNormalRegForm;
