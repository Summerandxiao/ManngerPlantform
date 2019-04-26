import React, { Component } from 'react';
import "./admin.less";
import NavLeft from "../../components/Navleft/NavLeft.js";
import { Row, Col } from 'antd';

class Admin extends Component {
  render() {
    return (
      
      <Row  className="Admin">
      {/*左边布局*/}
         <Col span={4} className="left">
          <NavLeft/>
         </Col>
        {/*右边布局*/}
          <Col span={20} className="right">
              {/*顶部*/}
              <div className="top">头部</div>
               {/*中间*/}
              <div className="center">
                 {this.props.children}
              </div>
             <div className="footer">底部</div>
	         </Col>
	       </Row>
       
    );
  }
}

export default Admin;
