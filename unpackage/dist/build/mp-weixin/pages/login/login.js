(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0407":function(e,n,t){},2505:function(e,n,t){"use strict";t.r(n);var o=t("bd84"),i=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=i.a},4970:function(e,n,t){"use strict";var o=t("0407"),i=t.n(o);i.a},"5ac7":function(e,n,t){"use strict";(function(e){t("fffe");o(t("66fd"));var n=o(t("a02a"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"81d3":function(e,n,t){"use strict";var o;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},a02a:function(e,n,t){"use strict";t.r(n);var o=t("81d3"),i=t("2505");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("4970");var c,r=t("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"16142e36",null,!1,o["a"],c);n["default"]=s.exports},bd84:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("a34a")),i=t("cced");function a(e){return e&&e.__esModule?e:{default:e}}function c(e,n,t,o,i,a,c){try{var r=e[a](c),s=r.value}catch(u){return void t(u)}r.done?n(s):Promise.resolve(s).then(o,i)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var a=e.apply(n,t);function r(e){c(a,o,i,r,s,"next",e)}function s(e){c(a,o,i,r,s,"throw",e)}r(void 0)}))}}var s=getApp(),u=function(){t.e("pages/commponent/public/navBar").then(function(){return resolve(t("ac49"))}.bind(null,t)).catch(t.oe)},l={data:function(){return{colors:"",isCanUse:e.getStorageSync("isCanUse"),nickName:"",avatarUrl:"",bgImg:[],imgTime:"",imgIndex:0,codeName:"获取验证码",isCode:!0,tel:"",smscode:void 0,isChecked:!1}},props:{},components:{navBar:u},onLoad:function(e){this.wxlogin(),this.setData({colors:s.globalData.newColor})},onReady:function(){},onShow:function(){this.setbImg()},onHide:function(){clearInterval(this.imgTime)},onUnload:function(){clearInterval(this.imgTime)},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getUserInfo:function(){console.log("点了");var n=this;e.getUserInfo({provider:"weixin",success:function(t){console.log(t),n.setData({nickName:t.userInfo.nickName,avatarUrl:t.userInfo.avatarUrl});var o=(new Date).getTime();(0,i.setToken)(o),(0,i.setUserInfo)(t.userInfo);try{e.setStorageSync("isCanUse",1),e.switchTab({url:"/pages/views/tabBar/home"})}catch(a){console.log("缓存失败")}},fail:function(e){}})},setbImg:function(){clearInterval(this.imgTime);var e=this;console.log("执行了");var n=setInterval((function(){var n=e.imgIndex+1;n>=e.bgImg.length&&(n=0),e.setData({imgIndex:n})}),15e3);this.setData({imgTime:n})},onlogin:function(){var n=this;return r(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.isChecked){t.next=2;break}return t.abrupt("return",e.showToast({title:"请勾选用户相关协议",icon:"none"}));case 2:if(n.tel&&n.smscode){t.next=4;break}return t.abrupt("return",e.showToast({title:"手机号或验证码不能为空",icon:"none"}));case 4:e.showLoading({title:"登录中..."}),e.$ajax("/api/login/phone-login",{phone:n.tel,code:n.smscode},"post").then((function(n){(0,i.setToken)(n.token);var t={avatarUrl:n.avatar||"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1635355620,1019286978&fm=26&gp=0.jpg",nickName:n.nickname||"木木"};(0,i.setUserInfo)(t),e.hideLoading(),e.showToast({title:"登陆成功"}),setTimeout((function(){e.navigateBack()}),300)})).catch((function(n){return e.showToast({title:n,icon:"none"})}));case 6:case"end":return t.stop()}}),t)})))()},getCode:function(){if(0!=this.isCode)if(""!=this.tel){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.isCode=!1,this.getPhoneCode()}else e.showToast({title:"请输入手机号",icon:"none"})},getPhoneCode:function(){var n=this;return r(o.default.mark((function t(){var i,a,c;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i="",a=60,c=n,e.$ajax("/api/common/send-sms",{phone:n.tel},"post").then((function(){e.showToast({title:"验证码发送成功~",icon:"none"}),clearInterval(i),i=setInterval((function(){a>=1?(a--,c.codeName=a+"秒重试"):(c.isCode=!0,c.codeName="验证码",clearInterval(i))}),1e3)})).catch((function(n){return e.showToast({title:n,icon:"none"})}));case 4:case"end":return t.stop()}}),t)})))()},wxlogin:function(){e.login({provider:"weixin",success:function(e){console.log("这是用户的code",e)}})},onAuthorize:function(){e.showToast({title:"对接你的公众号登录方法",icon:"none"})},checkboxChange:function(e){e.detail.value.includes("true")?this.isChecked=!0:this.isChecked=!1}}};n.default=l}).call(this,t("543d")["default"])}},[["5ac7","common/runtime","common/vendor"]]]);