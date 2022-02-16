"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45461],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Taro.checkSession(option)",sidebar_label:"checkSession"},c=void 0,s={unversionedId:"apis/open-api/login/checkSession",id:"version-2.x/apis/open-api/login/checkSession",title:"Taro.checkSession(option)",description:"\u68c0\u67e5\u767b\u5f55\u6001\u662f\u5426\u8fc7\u671f\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/login/checkSession.md",sourceDirName:"apis/open-api/login",slug:"/apis/open-api/login/checkSession",permalink:"/taro/docs/2.x/apis/open-api/login/checkSession",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/login/checkSession.md",tags:[],version:"2.x",frontMatter:{title:"Taro.checkSession(option)",sidebar_label:"checkSession"},sidebar:"version-2.x/API",previous:{title:"login",permalink:"/taro/docs/2.x/apis/open-api/login/"},next:{title:"navigateToMiniProgram",permalink:"/taro/docs/2.x/apis/open-api/navigate/navigateToMiniProgram"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u68c0\u67e5\u767b\u5f55\u6001\u662f\u5426\u8fc7\u671f\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7 Taro.login \u63a5\u53e3\u83b7\u5f97\u7684\u7528\u6237\u767b\u5f55\u6001\u62e5\u6709\u4e00\u5b9a\u7684\u65f6\u6548\u6027\u3002\u7528\u6237\u8d8a\u4e45\u672a\u4f7f\u7528\u5c0f\u7a0b\u5e8f\uff0c\u7528\u6237\u767b\u5f55\u6001\u8d8a\u6709\u53ef\u80fd\u5931\u6548\u3002\u53cd\u4e4b\u5982\u679c\u7528\u6237\u4e00\u76f4\u5728\u4f7f\u7528\u5c0f\u7a0b\u5e8f\uff0c\u5219\u7528\u6237\u767b\u5f55\u6001\u4e00\u76f4\u4fdd\u6301\u6709\u6548\u3002\u5177\u4f53\u65f6\u6548\u903b\u8f91\u7531\u5fae\u4fe1\u7ef4\u62a4\uff0c\u5bf9\u5f00\u53d1\u8005\u900f\u660e\u3002\u5f00\u53d1\u8005\u53ea\u9700\u8981\u8c03\u7528 Taro.checkSession \u63a5\u53e3\u68c0\u6d4b\u5f53\u524d\u7528\u6237\u767b\u5f55\u6001\u662f\u5426\u6709\u6548\u3002"),(0,i.kt)("p",null,"\u767b\u5f55\u6001\u8fc7\u671f\u540e\u5f00\u53d1\u8005\u53ef\u4ee5\u518d\u8c03\u7528 Taro.login \u83b7\u53d6\u65b0\u7684\u7528\u6237\u767b\u5f55\u6001\u3002\u8c03\u7528\u6210\u529f\u8bf4\u660e\u5f53\u524d session_key \u672a\u8fc7\u671f\uff0c\u8c03\u7528\u5931\u8d25\u8bf4\u660e session_key \u5df2\u8fc7\u671f\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html"},"\u5c0f\u7a0b\u5e8f\u767b\u5f55"),"\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<CallbackResult>\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u53c2\u6570"),(0,i.kt)("th",null,"\u7c7b\u578b"),(0,i.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,i.kt)("th",null,"\u8bf4\u660e"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"complete"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: CallbackResult) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"fail"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: CallbackResult) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"success"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: CallbackResult) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.checkSession({\n  success: function () {\n    //session_key \u672a\u8fc7\u671f\uff0c\u5e76\u4e14\u5728\u672c\u751f\u547d\u5468\u671f\u4e00\u76f4\u6709\u6548\n  },\n  fail: function () {\n    // session_key \u5df2\u7ecf\u5931\u6548\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c\u767b\u5f55\u6d41\u7a0b\n    Taro.login() //\u91cd\u65b0\u767b\u5f55\n  }\n})\n")),(0,i.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.checkSession"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);