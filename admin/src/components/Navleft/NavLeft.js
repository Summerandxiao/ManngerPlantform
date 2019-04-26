import React,{Component} from "react";
import "./NavLeft.less";
import {withRouter} from "react-router-dom";
import menuData from "./rootMenu.js";
import { Menu} from 'antd';
const SubMenu = Menu.SubMenu;

console.log(menuData)
class NavLeft extends Component {
	jump(path){
		console.log(this)
		console.log(path)
		this.props.history.push(path)
	}
	renderMenu(data){
		//let data=menuData.menuData
        //console.log(data)
        return data.map((item,index)=>{
        	//根据是否有children判断是一级导航还是二级
        	if(item.children){
        		return(
        			 <SubMenu key={item.id} title={item.name}>
				          {this.renderMenu(item.children)} 
				          
				    </SubMenu>
        		)
        	}else{
        		return (
        			<Menu.Item key={item.id} onClick={this.jump.bind(this,item.path)}>
        			<span>{item.name}</span>
        			
        			</Menu.Item>
        		)
        	}
        })
	}
  render() {
    return (
      <div className="NavLeft">
       <Menu mode="vertical" theme="dark" >
       {this.renderMenu(menuData.menuData)}
       {/*<Menu.Item>首页</Menu.Item>
    
       <Menu.Item><span><Icon type="setting" /><span>用户管理</span></span></Menu.Item>
       <SubMenu key="sub4" title="图表显示">
           <Menu.Item key="9">柱状图</Menu.Item>
           <Menu.Item key="10">饼状图</Menu.Item>
           <Menu.Item key="11">折线图</Menu.Item>
          
    </SubMenu>*/}
  </Menu>,
      </div>
    );
  }
}

export default withRouter(NavLeft) ;
