(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/tabBar/user"],{"0e41":function(n,e,o){},"4d6a":function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o("cced"),i=getApp(),r=function(){o.e("pages/commponent/user/my-account").then(function(){return resolve(o("d09a"))}.bind(null,o)).catch(o.oe)},a=function(){o.e("pages/commponent/user/list-cell").then(function(){return resolve(o("a438"))}.bind(null,o)).catch(o.oe)},c=function(){o.e("pages/commponent/user/my-order").then(function(){return resolve(o("38ec"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("pages/commponent/user/my-footprint").then(function(){return resolve(o("508d"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("pages/commponent/user/my-server").then(function(){return resolve(o("c75c"))}.bind(null,o)).catch(o.oe)},l={data:function(){return{colors:"",startY:0,moving:!1,coverTransform:"translateY(0px)",coverTransition:"0s",orderText:[{name:"全部",icon:"icon-daifahuo",url:"",id:0},{name:"待付款",icon:"icon-daifukuan",url:"",id:1},{name:"待收货",icon:"icon-daishouhuo1",url:"",id:2},{name:"待评价",icon:"icon-daipingjia",url:"/pages/views/order/evaluateList",id:4}],logList:[{name:"真巧 巧克力涂层甜甜圈 早餐蛋糕手撕面包休闲小零食办公室小吃零嘴下午茶点心 500g甜甜圈（拉花款）",img:"/static/images/goods/one.jpg"},{name:"巧妈妈 鸡蛋布甸 下午茶休闲零食儿童果冻布丁125g双层果酱味smzdm 4杯鸡蛋布甸（双层）",img:"/static/images/goods/four.jpg"}],serverList:[{name:"我的收藏",icon:"icon-shoucang",url:"/pages/views/user/mycollection",id:1,elseUrl:""},{name:"地址管理",icon:"icon-dizhi",url:"/pages/views/user/myaddress",id:2,elseUrl:""},{name:"分享",icon:"icon-fenxiang1",url:"/pages/views/user/extension",id:7,elseUrl:""},{name:"联系我们",icon:"icon-kefu1",url:"",id:8,elseUrl:"",phoneNumber:"18811126599"},{name:"设置",icon:"icon-shezhi2",url:"../setting/index",id:9,elseUrl:""}],oldcolor:"",userdata:{}}},components:{myAccount:r,listCell:a,myOrder:c,myFootprint:s,myServer:u},props:{},onLoad:function(n){},onReady:function(){},onShow:function(){var e=i.globalData.newColor,o=this.colors,r=(0,t.getUserInfo)()||{};if(this.setData({colors:e,userdata:r}),o!==e){var a=(0,t.getConfig)(),c=a.tabList;if(n.setTabBarStyle({selectedColor:e}),c)for(var s=0;s<c.length;s++){var u=c[s];n.setTabBarItem({index:s,selectedIconPath:u})}}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onLogin:function(){(0,t.getToken)();(0,t.getToken)()||n.navigateTo({url:"../../login/login"})},coverTouchStart:function(n){this.setData({startY:n.touches[0].clientY,coverTransition:"transform .2s linear"})},moveHandle:function(){},coverTouchMove:function(n){var e=n.touches[0].clientY,o=this.startY,t=e-o;t<0?this.setData({moving:!1}):(this.setData({moving:!0}),t>=60&&(t=60),t>0&&t<=60&&this.setData({coverTransform:"translateY(".concat(t,"px)")}))},coverTouchEnd:function(n){0!=this.moving&&this.setData({coverTransform:"translateY(0px)",moving:!1,coverTransition:"transform 0.3s cubic-bezier(.21,1.93,.53,.64)"})}}};e.default=l}).call(this,o("543d")["default"])},"5d0b":function(n,e,o){"use strict";var t=o("0e41"),i=o.n(t);i.a},"6e49":function(n,e,o){"use strict";o.r(e);var t=o("ecc9"),i=o("ff2c");for(var r in i)"default"!==r&&function(n){o.d(e,n,(function(){return i[n]}))}(r);o("5d0b");var a,c=o("f0c5"),s=Object(c["a"])(i["default"],t["b"],t["c"],!1,null,"a8b114c4",null,!1,t["a"],a);e["default"]=s.exports},a375:function(n,e,o){"use strict";(function(n){o("fffe");t(o("66fd"));var e=t(o("6e49"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,o("543d")["createPage"])},ecc9:function(n,e,o){"use strict";var t;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return t}));var i=function(){var n=this,e=n.$createElement;n._self._c},r=[]},ff2c:function(n,e,o){"use strict";o.r(e);var t=o("4d6a"),i=o.n(t);for(var r in t)"default"!==r&&function(n){o.d(e,n,(function(){return t[n]}))}(r);e["default"]=i.a}},[["a375","common/runtime","common/vendor"]]]);