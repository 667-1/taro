"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78366],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return i}});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),k=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=k(e.components);return l.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=k(a),i=r,h=s["".concat(d,".").concat(i)]||s[i]||u[i]||n;return a?l.createElement(h,o(o({ref:t},c),{},{components:a})):l.createElement(h,o({ref:t},c))}));function i(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var k=2;k<n;k++)o[k]=a[k];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},88775:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return k},toc:function(){return c},default:function(){return s}});var l=a(83117),r=a(80102),n=(a(67294),a(3905)),o=["components"],p={title:"UploadTask",sidebar_label:"UploadTask"},d=void 0,k={unversionedId:"apis/network/upload/UploadTask",id:"version-3.x/apis/network/upload/UploadTask",title:"UploadTask",description:"Listens on the upload progress change event and cancels upload tasks.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/network/upload/UploadTask.md",sourceDirName:"apis/network/upload",slug:"/apis/network/upload/UploadTask",permalink:"/taro/en/docs/apis/network/upload/UploadTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/upload/UploadTask.md",tags:[],version:"3.x",frontMatter:{title:"UploadTask",sidebar_label:"UploadTask"},sidebar:"version-3.x/API",previous:{title:"uploadFile",permalink:"/taro/en/docs/apis/network/upload/uploadFile"},next:{title:"sendSocketMessage",permalink:"/taro/en/docs/apis/network/webSocket/sendSocketMessage"}},c=[{value:"Methods",id:"methods",children:[{value:"abort",id:"abort",children:[{value:"API Support",id:"api-support",children:[],level:4}],level:3},{value:"offHeadersReceived",id:"offheadersreceived",children:[{value:"API Support",id:"api-support-1",children:[],level:4}],level:3},{value:"offProgressUpdate",id:"offprogressupdate",children:[{value:"API Support",id:"api-support-2",children:[],level:4}],level:3},{value:"onHeadersReceived",id:"onheadersreceived",children:[{value:"API Support",id:"api-support-3",children:[],level:4}],level:3},{value:"headersReceived",id:"headersreceived",children:[],level:3},{value:"onProgressUpdate",id:"onprogressupdate",children:[{value:"API Support",id:"api-support-4",children:[],level:4}],level:3},{value:"progress",id:"progress",children:[],level:3}],level:2},{value:"Parameters",id:"parameters",children:[{value:"OffHeadersReceivedCallback",id:"offheadersreceivedcallback",children:[],level:3},{value:"OffProgressUpdateCallback",id:"offprogressupdatecallback",children:[],level:3},{value:"OnHeadersReceivedCallback",id:"onheadersreceivedcallback",children:[],level:3},{value:"OnProgressUpdateCallback",id:"onprogressupdatecallback",children:[],level:3},{value:"OnHeadersReceivedCallbackResult",id:"onheadersreceivedcallbackresult",children:[],level:3},{value:"OnProgressUpdateCallbackResult",id:"onprogressupdatecallbackresult",children:[],level:3}],level:2},{value:"API Support",id:"api-support-5",children:[],level:2}],u={toc:c};function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Listens on the upload progress change event and cancels upload tasks."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.html"},"Reference"))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"abort"},"abort"),(0,n.kt)("p",null,"Aborts upload tasks."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.abort.html"},"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,n.kt)("h4",{id:"api-support"},"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"API"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.abort"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"offheadersreceived"},"offHeadersReceived"),(0,n.kt)("p",null,"Listens on HTTP Response Header event, which will be earlier than the request completion event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.offHeadersReceived.html"},"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OffHeadersReceivedCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OffHeadersReceivedCallback")),(0,n.kt)("td",null,"The callback function for the HTTP Response Header event.")))),(0,n.kt)("h4",{id:"api-support-1"},"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"API"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.offHeadersReceived"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"offprogressupdate"},"offProgressUpdate"),(0,n.kt)("p",null,"Un-listens on the upload progress change event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.offProgressUpdate.html"},"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OffProgressUpdateCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OffProgressUpdateCallback")),(0,n.kt)("td",null,"The callback function for the upload progress change event.")))),(0,n.kt)("h4",{id:"api-support-2"},"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"API"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.offProgressUpdate"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"onheadersreceived"},"onHeadersReceived"),(0,n.kt)("p",null,"Listens on HTTP Response Header event, which will be earlier than the request completion event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.onHeadersReceived.html"},"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnHeadersReceivedCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnHeadersReceivedCallback")),(0,n.kt)("td",null,"The callback function for the HTTP Response Header event.")))),(0,n.kt)("h4",{id:"api-support-3"},"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"API"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.onHeadersReceived"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"headersreceived"},"headersReceived"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnHeadersReceivedCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnHeadersReceivedCallback")),(0,n.kt)("td",null,"The callback function for the HTTP Response Header event")))),(0,n.kt)("h3",{id:"onprogressupdate"},"onProgressUpdate"),(0,n.kt)("p",null,"Listens on the upload progress change event."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/upload/UploadTask.onProgressUpdate.html"},"Reference"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnProgressUpdateCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnProgressUpdateCallback")),(0,n.kt)("td",null,"The callback function for the upload progress change event.")))),(0,n.kt)("h4",{id:"api-support-4"},"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"API"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.onProgressUpdate"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h3",{id:"progress"},"progress"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnProgressUpdateCallback) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"callback"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnProgressUpdateCallback")),(0,n.kt)("td",null,"The callback function for the upload progress change event.")))),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"offheadersreceivedcallback"},"OffHeadersReceivedCallback"),(0,n.kt)("p",null,"The callback function for the HTTP Response Header event"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"res"),(0,n.kt)("td",null,(0,n.kt)("code",null,"CallbackResult"))))),(0,n.kt)("h3",{id:"offprogressupdatecallback"},"OffProgressUpdateCallback"),(0,n.kt)("p",null,"The callback function for the upload progress change event."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: CallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"res"),(0,n.kt)("td",null,(0,n.kt)("code",null,"CallbackResult"))))),(0,n.kt)("h3",{id:"onheadersreceivedcallback"},"OnHeadersReceivedCallback"),(0,n.kt)("p",null,"The callback function for the HTTP Response Header event."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnHeadersReceivedCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnHeadersReceivedCallbackResult"))))),(0,n.kt)("h3",{id:"onprogressupdatecallback"},"OnProgressUpdateCallback"),(0,n.kt)("p",null,"The callback function for the upload progress change event."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnProgressUpdateCallbackResult) => void\n")),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"result"),(0,n.kt)("td",null,(0,n.kt)("code",null,"OnProgressUpdateCallbackResult"))))),(0,n.kt)("h3",{id:"onheadersreceivedcallbackresult"},"OnHeadersReceivedCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"header"),(0,n.kt)("td",null,(0,n.kt)("code",null,"Record<string, any>")),(0,n.kt)("td",null,"HTTP Response Header returned by the developer server")))),(0,n.kt)("h3",{id:"onprogressupdatecallbackresult"},"OnProgressUpdateCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"progress"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Upload progress percentage")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"totalBytesExpectedToSend"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The length of data expected to be uploaded, in bytes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"totalBytesSent"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The length of uploaded data, in bytes")))),(0,n.kt)("h2",{id:"api-support-5"},"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"API"),(0,n.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.abort"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.offHeadersReceived"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.offProgressUpdate"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.onHeadersReceived"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"UploadTask.onProgressUpdate"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);