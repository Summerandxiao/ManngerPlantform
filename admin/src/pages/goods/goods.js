import React, { Component } from 'react';
import "./goods.less";
import {Modal,Card,Table,Button,Popconfirm,Pagination , Spin,message} from "antd";
//import TableData from "./data.js";
import AddGoods from "./addGoods.js";
import UpdateGoods from "./updateGoods.js";
class Goods extends Component {
	constructor(){
		super()
		this.state={
			dataSource:[],
			spinning:true,
			  modalShow:false,
		      modalShowUpdate:false,
		      selInfo:{}
		}
		this.columns=[ {
		        title:'id',
		        dataIndex:'_id',
		        key:'_id' ,
		        fixed:"left",
		        width:80
		      }, {
			  title: '商品名称',
			  dataIndex: 'name',
			  key: 'name',
			  width:120
			}, {
			  title: '商品价格',
			  dataIndex: 'price',
			  key: 'price',
			  width:120,
			  sorter:(a,b)=>{
			  	return a.price - b.price
			  },
			 render(text){
			         return <span>${text}</span>
			      }
			}, 
			{
			     title:'商品类型',
			      dataIndex:'type',
			      key:'type',
			      width:120,
			      render(text){
			          let types=['热菜','凉菜','猛龙过江','辣椒炒月饼','火山飘雪']
			         return <span>{types[text]}</span>
			      } 
			},{
			  title: '图片',
			  dataIndex: 'imgPath',
			  key: 'imgPath',
			  width:80,
			  render:(data)=>{
			  	
			  	return(
			  		<img width="30"  src={`http://47.95.207.1:8080${data}`} />
			  	)
			    }
			  
			  },{
				  title: '操作',
				  dataIndex: 'operation',
				  key: 'operation',
				  width:140,
				  fixed:"right",
				  render:(tmp,data)=>{
				  	
				  	return(
				  		<div>
				  		      <Popconfirm title="确认删除吗？" onConfirm={this.del.bind(this,data)} okText="确定" cancelText="取消">
  		  		                  <Button size="small" type="danger">删除</Button>
  		  		              </Popconfirm>
				  		  <Button size="small" onClick={this.update.bind(this,data)}>修改</Button>
				  		</div>
				  	)
			    }
			}
      ]
	}
	update(data){
		console.log(data)
		this.setState({modalShowUpdate:true,selInfo:data})
	}
	del(data){
		
		     this.$axios.get('/delProduct')
				    .then((result)=>{
				      if(result.err==0){
				        message.success('删除成功',1)
				        this.loadTableData()
				      }else{
				        message.error('删除失败',1)
				      }
				    })
  }
	addProduct(){
		this.setState({modalShow:true})
	}
	hideModal(type,data){
		if(type=="cancel"){
			this.setState({modalShow:false,modalShowUpdate:false})
		}else{
			 console.log(this)
		      let dataSource=this.state.dataSource
		      
		      dataSource.push(data)
		      this.setState({dataSource,modalShow:false,modalShowUpdate:false})
		      
  
		}
		 
	}
	changePage(page,pagesize){
		console.log(page,pagesize)
		this.loadTableData()
	}
	componentDidMount(){
		this.loadTableData()
		
	}
	loadTableData(){
		this.$axios.get("/getProduct")
		 .then((data)=>{
		 	//console.log(data)
		 	this.setState({dataSource:data.data,spinning:false})
		 })
	}
  render() {
  	let {dataSource,spinning,modalShow,modalShowUpdate,selInfo} = this.state
    return (
      <Card className="card">
       <Button onClick={this.addProduct.bind(this)}>添加商品</Button>
      <Spin spinning={spinning}>
            <Table rowKey="_id" dataSource={dataSource} columns={this.columns}
            scroll={{y:160,x:1000}}
            pagination={false}
            bordered
            />
            <Pagination simple defaultCurrent={2} total={50} onChange={this.changePage.bind(this)}/>
      </Spin>
      <Modal
          title="添加商品"
          visible={modalShow}
          footer={null}
          onCancel={this.hideModal.bind(this,"cancel")}
          onOk={this.hideModal.bind(this,"submit")}
          
        >
          <AddGoods columns={this.columns} hideModal={this.hideModal.bind(this)}/>
        </Modal>
        <Modal
          title="修改商品"
          visible={modalShowUpdate}
          footer={null}
          onCancel={this.hideModal.bind(this,"cancel")}
          onOk={this.hideModal.bind(this,"submit")}
          
        >
          <UpdateGoods info={selInfo} hideModal={this.hideModal.bind(this)}/>
        </Modal>
            
     </Card>
    );
  }
}

export default Goods;
