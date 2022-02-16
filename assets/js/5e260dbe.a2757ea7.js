"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[94524],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),p=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,k=m["".concat(d,".").concat(s)]||m[s]||u[s]||o;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66394:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Taro.createVideoContext(videoId, componentInstance)",sidebar_label:"createVideoContext"},d=void 0,p={unversionedId:"apis/multimedia/video/createVideoContext",id:"version-1.x/apis/multimedia/video/createVideoContext",title:"Taro.createVideoContext(videoId, componentInstance)",description:"\u521b\u5efa video \u4e0a\u4e0b\u6587 VideoContext \u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/video/createVideoContext.md",sourceDirName:"apis/multimedia/video",slug:"/apis/multimedia/video/createVideoContext",permalink:"/taro/docs/1.x/apis/multimedia/video/createVideoContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/video/createVideoContext.md",tags:[],version:"1.x",frontMatter:{title:"Taro.createVideoContext(videoId, componentInstance)",sidebar_label:"createVideoContext"},sidebar:"version-1.x/API",previous:{title:"saveVideoToPhotosAlbum",permalink:"/taro/docs/1.x/apis/multimedia/video/saveVideoToPhotosAlbum"},next:{title:"uploadFile",permalink:"/taro/docs/1.x/apis/network/fileTransfer/uploadFile"}},c=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"string videoId",id:"string-videoid",children:[],level:3},{value:"Component componentInstance",id:"component-componentinstance",children:[],level:3}],level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[{value:"object VideoContext",id:"object-videocontext",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[],level:2}],u={toc:c};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa video \u4e0a\u4e0b\u6587 VideoContext \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.createVideoContext.html"},(0,o.kt)("inlineCode",{parentName:"a"},"wx.createVideoContext")),"\u3002"),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"string-videoid"},"string videoId"),(0,o.kt)("p",null,"<","Video",">"," \u7ec4\u4ef6\u7684 id"),(0,o.kt)("h3",{id:"component-componentinstance"},"Component componentInstance"),(0,o.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e0b\uff0c\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u7684this\uff0c\u4ee5\u64cd\u4f5c\u7ec4\u4ef6\u5185 ","<","Video",">"," \u7ec4\u4ef6"),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("h3",{id:"object-videocontext"},"object VideoContext"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"play()"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u64ad\u653e\u89c6\u9891")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pause()"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6682\u505c\u89c6\u9891")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stop()"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u89c6\u9891")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"seek(number position)"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sendDanmu(object data)"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u5f39\u5e55")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"playbackRate(number rate)"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u500d\u901f\u64ad\u653e")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"requestFullScreen(object object)"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8fdb\u5165\u5168\u5c4f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"exitFullScreen()"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa\u5168\u5c4f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"showStatusBar()"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hideStatusBar()"),(0,o.kt)("td",{parentName:"tr",align:null},"function"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9690\u85cf\u72b6\u6001\u680f\uff0c\u4ec5\u5728iOS\u5168\u5c4f\u4e0b\u6709\u6548")))),(0,o.kt)("p",null,"\u6ce8: IOS\u7cfb\u7edf\u4e0b\uff0ch5\u7aef\u90e8\u5206VideoContext\u7684\u5c5e\u6027\u672a\u5b8c\u5168\u5b9e\u73b0\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nconst videoContext = Taro.createVideoContext('myVideo')\n")),(0,o.kt)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.createVideoContext"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);