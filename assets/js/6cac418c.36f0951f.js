"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[30307],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,b=d["".concat(i,".").concat(m)]||d[m]||s[m]||p;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<p;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37095:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=a(83117),r=a(80102),p=(a(67294),a(3905)),o=["components"],l={title:"Taro.updateWeChatApp(option)",sidebar_label:"updateWeChatApp"},i=void 0,u={unversionedId:"apis/base/update/updateWeChatApp",id:"version-3.x/apis/base/update/updateWeChatApp",title:"Taro.updateWeChatApp(option)",description:"\u66f4\u65b0\u5ba2\u6237\u7aef\u7248\u672c\u3002\u5f53\u5224\u65ad\u7528\u6237\u5c0f\u7a0b\u5e8f\u6240\u5728\u5ba2\u6237\u7aef\u7248\u672c\u8fc7\u4f4e\u65f6\uff0c\u53ef\u4f7f\u7528\u8be5\u63a5\u53e3\u8df3\u8f6c\u5230\u66f4\u65b0\u5fae\u4fe1\u9875\u9762\u3002",source:"@site/versioned_docs/version-3.x/apis/base/update/updateWeChatApp.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/updateWeChatApp",permalink:"/taro/docs/apis/base/update/updateWeChatApp",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/base/update/updateWeChatApp.md",tags:[],version:"3.x",frontMatter:{title:"Taro.updateWeChatApp(option)",sidebar_label:"updateWeChatApp"},sidebar:"version-3.x/API",previous:{title:"getAppAuthorizeSetting",permalink:"/taro/docs/apis/base/system/getAppAuthorizeSetting"},next:{title:"getUpdateManager",permalink:"/taro/docs/apis/base/update/getUpdateManager"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2}],s={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u66f4\u65b0\u5ba2\u6237\u7aef\u7248\u672c\u3002\u5f53\u5224\u65ad\u7528\u6237\u5c0f\u7a0b\u5e8f\u6240\u5728\u5ba2\u6237\u7aef\u7248\u672c\u8fc7\u4f4e\u65f6\uff0c\u53ef\u4f7f\u7528\u8be5\u63a5\u53e3\u8df3\u8f6c\u5230\u66f4\u65b0\u5fae\u4fe1\u9875\u9762\u3002"),(0,p.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,p.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,p.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,p.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.updateWeChatApp.html"},"\u53c2\u8003\u6587\u6863"))),(0,p.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,p.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,p.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"option"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,p.kt)("h3",{id:"option"},"Option"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,p.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,p.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,p.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"success"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,p.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"fail"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,p.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"complete"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,p.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))))}d.isMDXComponent=!0},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);