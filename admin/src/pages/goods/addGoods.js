import React,{Component} from "react";
import {
  Form, Input,message, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';

class AddGoods extends  Component{
	handleSubmit=(e)=>{
		//console.log(this)
		this.$axios.get("/addProduct")
		   .then((res)=>{
		   	if(res.err==0){
		   		this.props.hideModal("submit",res.data )
		   		message.success("添加成功",1)
		   	}else{
		   		message.error("添加失败，请重试",1)
		   	}
		   })
	}
	
	render(){
		console.log(this)
		 const { getFieldDecorator } = this.props.form;
		 const { Option } = Select;
		 let columns = this.props.columns
		 console.log(columns)
		return(
		  
			<Form onSubmit={this.handleSubmit}>
			
			 <Form.Item   label="id">
			     {getFieldDecorator('id', {
		            rules: [{
		              type: 'id', message: '请输入Id',
		            }, {
		              required: true, message: '请输入Id',
		            }],
		          })(
		            <Input />
		          )}
			   </Form.Item>
			     <Form.Item
			          label="商品名称"
			        >
			          {getFieldDecorator('name', {
			            rules: [{
			              required: true, message: '请输入商品名称',
			            }, {
			              validator: this.validateToNextPassword,
			            }],
			          })(
			            <Input />
			          )}
			        </Form.Item>
			         <Form.Item
			          label="商品价格"
			        >
			          {getFieldDecorator('price', {
			            rules: [{
			              required: true, message: '请输入商品价格',
			            }, {
			              validator: this.validateToNextPassword,
			            }],
			          })(
			            <Input />
			          )}
			        </Form.Item>
			         <Form.Item
						      label="商品类型"
						    >
						      <Select defaultValue="1">
						        <Option value="1"> 1</Option>
						        <Option value="2"> 2</Option>
						        <Option value="3"> 3</Option>
						      </Select>
					</Form.Item>
				 <Form.Item>
				     <Button onClick={this.handleSubmit}>提交</Button>
				  </Form.Item>
			</Form>
		)
	}
}
const WrappedAddGoods = Form.create()(AddGoods);
export default WrappedAddGoods;