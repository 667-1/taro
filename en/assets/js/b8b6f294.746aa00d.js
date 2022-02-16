"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10523],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=i(a),k=l,h=s["".concat(d,".").concat(k)]||s[k]||u[k]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88037:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=a(83117),l=a(80102),r=(a(67294),a(3905)),o=["components"],p={title:"UpdateManager",sidebar_label:"UpdateManager"},d=void 0,i={unversionedId:"apis/base/update/UpdateManager",id:"version-3.x/apis/base/update/UpdateManager",title:"UpdateManager",description:"The UpdateManager object, which is used to manage updates. Instances can be obtained via the Taro.getUpdateManager API.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/base/update/UpdateManager.md",sourceDirName:"apis/base/update",slug:"/apis/base/update/UpdateManager",permalink:"/taro/en/docs/apis/base/update/UpdateManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/base/update/UpdateManager.md",tags:[],version:"3.x",frontMatter:{title:"UpdateManager",sidebar_label:"UpdateManager"},sidebar:"version-3.x/API",previous:{title:"getUpdateManager",permalink:"/taro/en/docs/apis/base/update/getUpdateManager"},next:{title:"getLaunchOptionsSync",permalink:"/taro/en/docs/apis/base/weapp/life-cycle/getLaunchOptionsSync"}},c=[{value:"Methods",id:"methods",children:[{value:"applyUpdate",id:"applyupdate",children:[],level:3},{value:"onCheckForUpdate",id:"oncheckforupdate",children:[],level:3},{value:"onUpdateFailed",id:"onupdatefailed",children:[],level:3},{value:"onUpdateReady",id:"onupdateready",children:[],level:3}],level:2},{value:"Parameter",id:"parameter",children:[{value:"OnCheckForUpdateCallback",id:"oncheckforupdatecallback",children:[],level:3},{value:"OnCheckForUpdateResult",id:"oncheckforupdateresult",children:[],level:3}],level:2}],u={toc:c};function s(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The UpdateManager object, which is used to manage updates. Instances can be obtained via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.getUpdateManager")," API."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.html"},"Reference"))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"applyupdate"},"applyUpdate"),(0,r.kt)("p",null,"Forces a Mini Program to restart and update to the latest version. This API is called after the new Mini Program version is downloaded (i.e., when the ",(0,r.kt)("inlineCode",{parentName:"p"},"onUpdateReady")," callback is received)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.applyUpdate.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,r.kt)("h3",{id:"oncheckforupdate"},"onCheckForUpdate"),(0,r.kt)("p",null,"Listens on the event that a request for checking for updates is sent to the WeChat backend. WeChat automatically checks for updates when the Mini program cold starts. The developer does not need to trigger this method."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.onCheckForUpdate.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnCheckForUpdateCallback) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCheckForUpdateCallback")),(0,r.kt)("td",null,"The callback function for the event that a request for checking for updates is sent to the WeChat backend.")))),(0,r.kt)("h3",{id:"onupdatefailed"},"onUpdateFailed"),(0,r.kt)("p",null,"Listens on Mini Program update failure event. The app, instead of the developer, triggers the download when a newer version is available. A callback is performed when the download fails (probably due to network problems)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.onUpdateFailed.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",null,"The callback function for Mini Program update failure event.")))),(0,r.kt)("h3",{id:"onupdateready"},"onUpdateReady"),(0,r.kt)("p",null,"Listens on the event that a newer Mini Program version is available. The app, instead of the developer, triggers the download. A callback is performed after successful download."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/update/UpdateManager.onUpdateReady.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",null,"The callback function for the event that a newer Mini Program version is available.")))),(0,r.kt)("h2",{id:"parameter"},"Parameter"),(0,r.kt)("h3",{id:"oncheckforupdatecallback"},"OnCheckForUpdateCallback"),(0,r.kt)("p",null,"The callback function for the event that a request for checking for updates is sent to the WeChat backend."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnCheckForUpdateResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Parameter"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCheckForUpdateResult"))))),(0,r.kt)("h3",{id:"oncheckforupdateresult"},"OnCheckForUpdateResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"hasUpdate"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",null,"Indicates whether a new version is available")))))}s.isMDXComponent=!0}}]);