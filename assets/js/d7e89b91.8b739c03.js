"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37541],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||p;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(83117),a=n(80102),p=(n(67294),n(3905)),o=["components"],i={title:"Taro.onAppHide(callback)",sidebar_label:"onAppHide"},l=void 0,c={unversionedId:"apis/base/weapp/app-event/onAppHide",id:"version-2.x/apis/base/weapp/app-event/onAppHide",title:"Taro.onAppHide(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onHide \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002",source:"@site/versioned_docs/version-2.x/apis/base/weapp/app-event/onAppHide.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppHide",permalink:"/taro/docs/2.x/apis/base/weapp/app-event/onAppHide",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/weapp/app-event/onAppHide.md",tags:[],version:"2.x",frontMatter:{title:"Taro.onAppHide(callback)",sidebar_label:"onAppHide"},sidebar:"version-2.x/API",previous:{title:"onAppShow",permalink:"/taro/docs/2.x/apis/base/weapp/app-event/onAppShow"},next:{title:"offPageNotFound",permalink:"/taro/docs/2.x/apis/base/weapp/app-event/offPageNotFound"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],d={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",(0,p.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onhide"},(0,p.kt)("inlineCode",{parentName:"a"},"App.onHide"))," \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html"},"\u53c2\u8003\u6587\u6863"))),(0,p.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,p.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,p.kt)("table",null,(0,p.kt)("thead",null,(0,p.kt)("tr",null,(0,p.kt)("th",null,"\u53c2\u6570"),(0,p.kt)("th",null,"\u7c7b\u578b"),(0,p.kt)("th",null,"\u8bf4\u660e"))),(0,p.kt)("tbody",null,(0,p.kt)("tr",null,(0,p.kt)("td",null,"callback"),(0,p.kt)("td",null,(0,p.kt)("code",null,"(res: CallbackResult) => void")),(0,p.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,p.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"API"),(0,p.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,p.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,p.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"Taro.onAppHide"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);