(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/views/user/mydistribution"],{"39f1":function(n,e,o){"use strict";var t;o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return u})),o.d(e,"a",(function(){return t}));var a=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"529a":function(n,e,o){},5822:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o("cced"),a=getApp(),u=function(){o.e("pages/commponent/user/my-server").then(function(){return resolve(o("c75c"))}.bind(null,o)).catch(o.oe)},r=function(){o.e("pages/commponent/public/loading").then(function(){return resolve(o("ef74"))}.bind(null,o)).catch(o.oe)},c={data:function(){return{colors:"",serverList:[{name:"我的下级",icon:"icon-fenxiao",url:"/pages/views/user/mysubordinate"},{name:"推广分享",icon:"icon-fenxiang1",url:"/pages/views/user/extension"}],isShow:!0,userinfo:(0,t.getUserInfo)()||{}}},components:{myServer:u,loading:r},props:{},onLoad:function(e){var o=this;this.setData({colors:a.globalData.newColor}),n.setNavigationBarColor({backgroundColor:a.globalData.newColor,frontColor:"#ffffff"}),setTimeout((function(){o.setData({isShow:!1})}),600)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onexchange:function(){n.navigateTo({url:"/pages/views/user/exchange/exchange"})}}};e.default=c}).call(this,o("543d")["default"])},9385:function(n,e,o){"use strict";o.r(e);var t=o("5822"),a=o.n(t);for(var u in t)"default"!==u&&function(n){o.d(e,n,(function(){return t[n]}))}(u);e["default"]=a.a},cbad:function(n,e,o){"use strict";var t=o("529a"),a=o.n(t);a.a},edd3:function(n,e,o){"use strict";(function(n){o("fffe");t(o("66fd"));var e=t(o("fe9b"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,o("543d")["createPage"])},fe9b:function(n,e,o){"use strict";o.r(e);var t=o("39f1"),a=o("9385");for(var u in a)"default"!==u&&function(n){o.d(e,n,(function(){return a[n]}))}(u);o("cbad");var r,c=o("f0c5"),i=Object(c["a"])(a["default"],t["b"],t["c"],!1,null,"33cb72b0",null,!1,t["a"],r);e["default"]=i.exports}},[["edd3","common/runtime","common/vendor"]]]);