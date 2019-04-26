export default{
	menuData:[
		{
			name:"首页",
			path:"/admin/home",
			id:"0"
		},
		{
			name:"设置",
			path:"/admin/setting",
			id:"1"
		},
	   {
			name:"用户管理",
			path:"/admin/user",
			id:"2",
			children:[
			{
				name:"用户添加",
				path:"/admin/user/add",
				id:"20"
			},{
				name:"管理员管理",
				path:"/admin/user/root",
				id:"21"
				
			}
			]
		},
		{
			name:"图表展示",
			path:"/admin/echart",
			id:"3",
			children:[
			{
				name:"饼状图",
			    path:"/admin/echart/pie",
			    id:"30",
			    children:[
			    {
			    	name:"饼1",
			    	path:"/admin/echart/pie/pie1",
			    	id:"300"
			    },
			    {
			    	name:"饼2",
			    	path:"/admin/echart/pie/pie2",
			    	id:"301"
			    }
			    ]
			},
			 {
			   	name:"折线图",
			    path:"/admin/echart/zhe",
			    id:"31",
			    children:[
			    {
			    	name:"折1",
			    	path:"/admin/echart/zhe/zhe1",
			    	id:"310"
			    	
			    },
			    {
			    	name:"折2",
			    	path:"/admin/echart/zhe/zhe2",
			    	id:"311"
			    }
			    ]
			}
			]
		},
		{
			    	name:"商品管理",
			    	path:"/admin/goods",
			    	id:"4"
			    }
	
	]
}
