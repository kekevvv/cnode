(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b7e14bc"],{"3a5e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("div",[n("img",{attrs:{src:a("cf1c"),alt:""}})]):t._e()},s=[],r={name:"Loading",props:{isLoading:{type:Boolean,defaulte:!1}}},o=r,i=a("2877"),c=Object(i["a"])(o,n,s,!1,null,"029716fb",null);e["a"]=c.exports},"5ea5":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",[t.isLogin?a("div",[a("div",{staticClass:"top"},[t._v("用户信息")]),a("div",{staticClass:"info"},[a("router-link",{attrs:{to:{name:"user",params:{loginname:t.user.loginname}}}},[a("img",{staticClass:"avatar",attrs:{src:t.user.avatar_url,alt:""}})]),a("router-link",{attrs:{to:{name:"user",params:{loginname:t.user.loginname}}}},[t._v(t._s(this.user.loginname))]),a("p",[t._v("积分："+t._s(t.user.score))]),a("p",[t._v("注册时间："+t._s(t._f("formatDate")(t.user.create_at)))])],1)]):a("div",{staticClass:"other"},[a("p",[t._v("CNode：Node.js专业中文社区")]),a("p",[t._v("当前是游客状态，您可以 "),a("span",[a("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1)])])])},s=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("2f62");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"Sidebar",props:{home:{type:String},loginname:{type:String}},data:function(){return{user:{avatar_url:"",id:"",create_at:"",githubUsername:"",loginname:"",score:""}}},computed:c({},Object(o["b"])(["isLogin","userInfo"])),methods:{getUserInfo:function(){var t=this;"true"===this.home?this.$store.dispatch("checkLogin").then((function(e){t.$http.get("https://cnodejs.org/api/v1/user/".concat(t.userInfo.loginname)).then((function(e){t.user=e.data.data})).catch((function(t){console.log(t)}))})):this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.loginname)).then((function(e){t.user=e.data.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getUserInfo()}},l=u,p=(a("b8d8"),a("2877")),f=Object(p["a"])(l,n,s,!1,null,"5f2e5f91",null);e["a"]=f.exports},"68e5":function(t,e,a){},"7f7f":function(t,e,a){var n=a("86cc").f,s=Function.prototype,r=/^\s*function ([^ (]*)/,o="name";o in s||a("9e1e")&&n(s,o,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},b8d8:function(t,e,a){"use strict";var n=a("68e5"),s=a.n(n);s.a},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoading?a("Loading",{attrs:{isLoading:t.isLoading}}):a("main",[a("div",{staticClass:"sidebar"},[a("Sidebar",{attrs:{home:"true"}})],1),a("div",{staticClass:"content"},[a("router-link",{attrs:{to:{name:"test",params:{msg:"hhh"}}}}),a("nav",[a("router-link",{class:{active:!t.$route.query.tab},attrs:{to:"/"}},[t._v("全部")]),a("router-link",{class:{active:"good"===t.$route.query.tab},attrs:{to:"/?tab=good"}},[t._v("精华")]),a("router-link",{class:{active:"share"===t.$route.query.tab},attrs:{to:"/?tab=share"}},[t._v("分享")]),a("router-link",{class:{active:"ask"===t.$route.query.tab},attrs:{to:"/?tab=ask"}},[t._v("问答")]),a("router-link",{class:{active:"job"===t.$route.query.tab},attrs:{to:"/?tab=job"}},[t._v("招聘")]),a("router-link",{class:{active:"dev"===t.$route.query.tab},attrs:{to:"/?tab=dev"}},[t._v("客户端测试")])],1),a("ul",{staticClass:"topicList"},t._l(t.topics,(function(e){return a("li",[a("router-link",{attrs:{to:{name:"user",params:{loginname:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})]),a("span",{staticClass:"count"},[a("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),t._v("/"),a("span",{staticClass:"visit_count"},[t._v(t._s(e.visit_count))])]),a("span",{class:{top:e.top||e.good,tab:!e.good&&!e.top}},[t._v(t._s(t._f("formatTab")(e)))]),a("span",{staticClass:"title"},[a("router-link",{attrs:{to:{name:"topic",params:{id:e.id}}}},[t._v(t._s(e.title))])],1),a("span",{staticClass:"last_reply_time"},[t._v(t._s(t._f("formatDate")(e.last_reply_at)))])],1)})),0)],1)])],1)},s=[],r=(a("7f7f"),a("3a5e")),o=a("5ea5"),i={name:"Home",data:function(){return{isLoading:!1,topics:[]}},created:function(){this.isLoading=!0,this.fetchTopics()},methods:{fetchTopics:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{limit:30,page:1,tab:this.$route.query.tab}}).then((function(e){t.isLoading=!1,t.topics=e.data.data})).catch((function(t){console.log(t)}))}},watch:{$route:function(t,e){"home"===t.name&&(this.isLoading=!0,this.fetchTopics())}},components:{Loading:r["a"],Sidebar:o["a"]}},c=i,u=(a("d42c"),a("2877")),l=Object(u["a"])(c,n,s,!1,null,"bab31bcc",null);e["default"]=l.exports},cf1c:function(t,e,a){t.exports=a.p+"img/loading.078fcd09.gif"},d42c:function(t,e,a){"use strict";var n=a("fce8"),s=a.n(n);s.a},fce8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1b7e14bc.346aaa3f.js.map