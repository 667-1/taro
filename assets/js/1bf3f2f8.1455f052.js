"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[2151],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37358:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Taro.getSetting(option)",sidebar_label:"getSetting"},p=void 0,s={unversionedId:"apis/open-api/settings/getSetting",id:"version-3.x/apis/open-api/settings/getSetting",title:"Taro.getSetting(option)",description:"\u83b7\u53d6\u7528\u6237\u7684\u5f53\u524d\u8bbe\u7f6e\u3002\u8fd4\u56de\u503c\u4e2d\u53ea\u4f1a\u51fa\u73b0\u5c0f\u7a0b\u5e8f\u5df2\u7ecf\u5411\u7528\u6237\u8bf7\u6c42\u8fc7\u7684\u6743\u9650\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/settings/getSetting.md",sourceDirName:"apis/open-api/settings",slug:"/apis/open-api/settings/getSetting",permalink:"/taro/docs/apis/open-api/settings/getSetting",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/settings/getSetting.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getSetting(option)",sidebar_label:"getSetting"},sidebar:"version-3.x/API",previous:{title:"openSetting",permalink:"/taro/docs/apis/open-api/settings/openSetting"},next:{title:"AuthSetting",permalink:"/taro/docs/apis/open-api/settings/AuthSetting"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:c};function m(t){var e=t.components,o=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u7684\u5f53\u524d\u8bbe\u7f6e\u3002",(0,i.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c\u4e2d\u53ea\u4f1a\u51fa\u73b0\u5c0f\u7a0b\u5e8f\u5df2\u7ecf\u5411\u7528\u6237\u8bf7\u6c42\u8fc7\u7684",(0,i.kt)("a",{parentName:"strong",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"},"\u6743\u9650")),"\u3002"),(0,i.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,i.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(16710).Z,className:"icon_platform",width:"25px"})," ",(0,i.kt)("img",{title:"H5",src:n(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,i.kt)("img",{title:"React Native",src:n(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"option"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"complete"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"fail"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"success"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,i.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authSetting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AuthSetting")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6388\u6743\u7ed3\u679c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subscriptionsSetting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SubscriptionsSetting")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u8ba2\u9605\u6d88\u606f\u8bbe\u7f6e\uff0c\u63a5\u53e3\u53c2\u6570 withSubscriptions \u503c\u4e3a true \u65f6\u624d\u4f1a\u8fd4\u56de\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"miniprogramAuthSetting"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AuthSetting")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\uff0c\u5f53\u524d\u5bbf\u4e3b\u5c0f\u7a0b\u5e8f\u7684\u7528\u6237\u6388\u6743\u7ed3\u679c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7ed3\u679c")))),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'Taro.getSetting({\n  success: function (res) {\n    console.log(res.authSetting)\n    // res.authSetting = {\n    //   "scope.userInfo": true,\n    //   "scope.userLocation": true\n    // }\n  }\n})\n')))}m.isMDXComponent=!0},5030:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);