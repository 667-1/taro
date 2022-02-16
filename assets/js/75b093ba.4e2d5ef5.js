"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28830],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||c;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38013:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(83117),o=r(80102),c=(r(67294),r(3905)),a=["components"],i={title:"Taro.createUDPSocket()",sidebar_label:"createUDPSocket"},p=void 0,l={unversionedId:"apis/network/udp/createUDPSocket",id:"apis/network/udp/createUDPSocket",title:"Taro.createUDPSocket()",description:"\u521b\u5efa\u4e00\u4e2a UDP Socket \u5b9e\u4f8b\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/docs/apis/network/udp/createUDPSocket.md",sourceDirName:"apis/network/udp",slug:"/apis/network/udp/createUDPSocket",permalink:"/taro/docs/next/apis/network/udp/createUDPSocket",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/udp/createUDPSocket.md",tags:[],version:"current",frontMatter:{title:"Taro.createUDPSocket()",sidebar_label:"createUDPSocket"},sidebar:"API",previous:{title:"TCPSocket",permalink:"/taro/docs/next/apis/network/tcp/TCPSocket"},next:{title:"UDPSocket",permalink:"/taro/docs/next/apis/network/udp/UDPSocket"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2}],u={toc:s};function f(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a UDP Socket \u5b9e\u4f8b\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u76f8\u5173\u8bf4\u660e"),"\u3002"),(0,c.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,c.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(16710).Z,className:"icon_platform",width:"25px"})," ",(0,c.kt)("img",{title:"H5",src:r(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,c.kt)("img",{title:"React Native",src:r(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/wx.createUDPSocket.html"},"\u53c2\u8003\u6587\u6863"))),(0,c.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-tsx"},"() => UDPSocket\n")))}f.isMDXComponent=!0},5030:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);