import  React,{Component,Fragment} from "react";
import {HashRouter,Switch,Redirect,Route} from "react-router-dom";
import  Admin from "./pages/admin/admin.js";
import Login from "./pages/login/login.js";
import Reg from "./pages/reg/reg.js";
import App from "./App.js";
import Goods from "./pages/goods/goods.js";
import Line1 from "./pages/echart/line/line1.js";
import Line2 from "./pages/echart/line/line2.js";
import Pie1 from "./pages/echart/pie/pie1.js";
import Pie2 from "./pages/echart/pie/pie2.js";
class Router extends Component{
	render(){
		return(
			<Fragment>
			   <App>
			       <HashRouter>
			         <Switch>
			          <Route exact path="/reg" component={Reg}/>
			         <Redirect exact from="/" to="/login"/>
			          {/*<Route path="/admin" component={Admin}/>*/}
			          <Route path="/admin" render={()=>{
			          	return (
			          		<Admin>
			          		
			          		   <Route path="/admin/home" render={()=>{
									      	return(
									      		<div>这里是首页 </div>
									      	)
									      }}/>
						      <Route path="/admin/setting" render={()=>{
									      	return(
									      		<div>这里是设置 </div>
									      	)
							}}/>
							<Route path="/admin/user" render={()=>{
									      	return(
									      		<div>这里是用户 </div>
									      	)
						    }}/>
							<Route path="/admin/echart/zhe/zhe1" component={Line1}/>
							<Route path="/admin/echart/zhe/zhe2" component={Line2}/>
							<Route path="/admin/echart/pie/pie1" component={Pie1}/>
							<Route path="/admin/echart/pie/pie2" component={Pie2}/>
							<Route path="/admin/goods" component={Goods}/>
			          		</Admin>
			          	)
			          }}/>
			          <Route path="/login" component={Login}/>
			         
			          </Switch>
			       </HashRouter>
			   </App>
			</Fragment>
		)
	}
}
export default Router;