(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"assets/js/"+({}[e]||e)+"."+{"chunk-1b7e14bc":"07a80a78","chunk-33384957":"0519b2eb","chunk-584a00fd":"d9109c3e","chunk-5e472657":"13662df3"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1b7e14bc":1,"chunk-33384957":1,"chunk-584a00fd":1,"chunk-5e472657":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-1b7e14bc":"01a05ab3","chunk-33384957":"bed83986","chunk-584a00fd":"f39b261d","chunk-5e472657":"f6cf41e2"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"025c":function(e,t,n){"use strict";var r=n("dc2c"),o=n.n(r);o.a},4673:function(e,t,n){},"4a8e":function(e,t,n){"use strict";var r=n("4673"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"mainbody"},[n("router-view")],1),n("Footer")],1)},a=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",{staticClass:"inner"},[r("router-link",{attrs:{to:{name:"home"}}},[r("img",{attrs:{src:n("d686"),alt:""}})]),e.isLogin?r("ul",{staticClass:"header_nav"},[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("首页")])],1),r("li",[r("router-link",{attrs:{to:{name:"user",params:{loginname:e.userInfo.loginname}}}},[e._v("\n                  个人中心\n              ")])],1),r("li",{on:{click:e.logout}},[e._v("退出")])]):r("ul",{staticClass:"header_nav"},[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("首页")])],1),r("li",[r("router-link",{attrs:{to:"/login"}},[e._v("登录")])],1)])],1)])},i=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f62");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"Header",data:function(){return{}},computed:f({},Object(s["b"])(["isLogin","userInfo"])),methods:{logout:function(){this.$store.commit("logout"),alert("已退出登录！"),this.$router.push("/login")},getStatus:function(){this.$store.dispatch("checkLogin")}},mounted:function(){this.getStatus()}},d=p,h=(n("4a8e"),n("2877")),g=Object(h["a"])(d,c,i,!1,null,"f78137d0",null),m=g.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("ul",[r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[e._v("源码地址")])]),r("li",[r("a",{attrs:{href:"https://cnodejs.org",target:"_blank"}},[r("img",{attrs:{src:n("d686"),alt:"cnode"}})])])])])}],k={name:"Header"},y=k,w=(n("025c"),Object(h["a"])(y,b,v,!1,null,"b0b22ffe",null)),O=w.exports,_={name:"App",components:{Header:m,Footer:O}},j=_,P=(n("7faf"),Object(h["a"])(j,o,a,!1,null,null,null)),S=P.exports,E=n("8c4f");r["a"].use(E["a"]);var I=new E["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-1b7e14bc").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-584a00fd").then(n.bind(null,"a55b"))}},{path:"/topic/:id",name:"topic",component:function(){return n.e("chunk-5e472657").then(n.bind(null,"3213"))}},{path:"/user/:loginname",name:"user",component:function(){return n.e("chunk-33384957").then(n.bind(null,"1511"))}}]}),L=n("bc3a"),x=n.n(L);r["a"].use(s["a"]);var C=new s["a"].Store({state:{accesstoken:window.localStorage.token||"",isLogin:!1,userInfo:{loginname:"",id:"",avatar_url:""}},mutations:{logout:function(e){window.localStorage.removeItem("token"),e.accesstoken="",e.isLogin=!1},updateLogin:function(e,t){t.accesstoken?(window.localStorage.token=e.accesstoken=t.accesstoken,e.userInfo=t.userInfo):e.userInfo=t,e.isLogin=!0}},actions:{login:function(e,t){e.commit("updateLogin",t)},checkLogin:function(e){if(e.state.accesstoken)return x.a.post("https://cnodejs.org/api/v1/accesstoken",{accesstoken:e.state.accesstoken}).then((function(t){e.dispatch("login",t.data)})).catch((function(e){console.log(e)}))}}});n("dc46");r["a"].prototype.$http=x.a,r["a"].config.productionTip=!1,new r["a"]({router:I,store:C,render:function(e){return e(S)}}).$mount("#app"),r["a"].filter("formatDate",(function(e){if(!e)return"";var t=new Date(e),n=(new Date).getTime()-t.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"})),r["a"].filter("formatTab",(function(e){if(e.top)return"置顶";if(e.good)return"精华";switch(e.tab){case"ask":return"问答";case"share":return"分享";case"job":return"招聘";case"dev":return"客户端测试";default:return"其他"}}))},"7faf":function(e,t,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(e,t,n){},d686:function(e,t,n){e.exports=n.p+"assets/img/cnodejs_light.86f6a7c2.svg"},dc2c:function(e,t,n){},dc46:function(e,t,n){}});
//# sourceMappingURL=app.2fcd88eb.js.map