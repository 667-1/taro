"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[66145],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57012:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=["components"],s={title:"Taro.requestSubscribeDeviceMessage(option)",sidebar_label:"requestSubscribeDeviceMessage"},p=void 0,o={unversionedId:"apis/open-api/subscribe-message/requestSubscribeDeviceMessage",id:"version-3.x/apis/open-api/subscribe-message/requestSubscribeDeviceMessage",title:"Taro.requestSubscribeDeviceMessage(option)",description:"\u8ba2\u9605\u8bbe\u5907\u6d88\u606f\u63a5\u53e3\uff0c\u8c03\u7528\u540e\u5f39\u51fa\u6388\u6743\u6846\uff0c\u7528\u6237\u540c\u610f\u540e\u4f1a\u5141\u8bb8\u5f00\u53d1\u8005\u7ed9\u7528\u6237\u53d1\u9001\u8ba2\u9605\u6a21\u7248\u6d88\u606f\u3002\u5f53\u7528\u6237\u70b9\u51fb\u201c\u5141\u8bb8\u201d\u6309\u94ae\u65f6\uff0c\u6a21\u677f\u6d88\u606f\u4f1a\u88ab\u6dfb\u52a0\u5230\u7528\u6237\u7684\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u9875\uff0c\u901a\u8fc7 wx.getSetting \u63a5\u53e3\u53ef\u83b7\u53d6\u7528\u6237\u5bf9\u76f8\u5173\u6a21\u677f\u6d88\u606f\u7684\u8ba2\u9605\u72b6\u6001\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/subscribe-message/requestSubscribeDeviceMessage.md",sourceDirName:"apis/open-api/subscribe-message",slug:"/apis/open-api/subscribe-message/requestSubscribeDeviceMessage",permalink:"/taro/docs/apis/open-api/subscribe-message/requestSubscribeDeviceMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/subscribe-message/requestSubscribeDeviceMessage.md",tags:[],version:"3.x",frontMatter:{title:"Taro.requestSubscribeDeviceMessage(option)",sidebar_label:"requestSubscribeDeviceMessage"},sidebar:"version-3.x/API",previous:{title:"requestSubscribeMessage",permalink:"/taro/docs/apis/open-api/subscribe-message/requestSubscribeMessage"},next:{title:"showRedPackage",permalink:"/taro/docs/apis/open-api/redpackage/showRedPackage"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"FailCallbackResult",id:"failcallbackresult",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:4}],level:3},{value:"TemplateReflex",id:"templatereflex",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",children:[],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8ba2\u9605\u8bbe\u5907\u6d88\u606f\u63a5\u53e3\uff0c\u8c03\u7528\u540e\u5f39\u51fa\u6388\u6743\u6846\uff0c\u7528\u6237\u540c\u610f\u540e\u4f1a\u5141\u8bb8\u5f00\u53d1\u8005\u7ed9\u7528\u6237\u53d1\u9001\u8ba2\u9605\u6a21\u7248\u6d88\u606f\u3002\u5f53\u7528\u6237\u70b9\u51fb\u201c\u5141\u8bb8\u201d\u6309\u94ae\u65f6\uff0c\u6a21\u677f\u6d88\u606f\u4f1a\u88ab\u6dfb\u52a0\u5230\u7528\u6237\u7684\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u9875\uff0c\u901a\u8fc7 wx.getSetting \u63a5\u53e3\u53ef\u83b7\u53d6\u7528\u6237\u5bf9\u76f8\u5173\u6a21\u677f\u6d88\u606f\u7684\u8ba2\u9605\u72b6\u6001\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,l.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:a(16710).Z,className:"icon_platform",width:"25px"})," ",(0,l.kt)("img",{title:"H5",src:a(5030).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,l.kt)("img",{title:"React Native",src:a(73555).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeDeviceMessage.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"option"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tmplIds"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string[]")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u8ba2\u9605\u7684\u6d88\u606f\u6a21\u677f\u7684 id \u7684\u96c6\u5408\uff0c\u4e00\u6b21\u8c03\u7528\u6700\u591a\u53ef\u8ba2\u96053\u6761\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sn"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u552f\u4e00\u5e8f\u5217\u53f7\u3002\u7531\u5382\u5546\u5206\u914d\uff0c\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7128\u5b57\u8282\u3002\u5b57\u7b26\u53ea\u63a5\u53d7\u6570\u5b57\uff0c\u5927\u5c0f\u5199\u5b57\u6bcd\uff0c\u4e0b\u5212\u7ebf\uff08_\uff09\u548c\u8fde\u5b57\u7b26\uff08-\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snTicket"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u7968\u636e\uff0c5\u5206\u949f\u5185\u6709\u6548\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modelId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u578b\u53f7 id \u3002\u901a\u8fc7\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0\u6ce8\u518c\u8bbe\u5907\u83b7\u5f97\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"complete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: FailCallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"success"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"failcallbackresult"},"FailCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errCode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u7801\uff0c\u6709\u53ef\u80fd\u4e3a\u7a7a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u9519\u8bef\u4fe1\u606f")))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[TEMPLATE_ID]"),(0,l.kt)("td",{parentName:"tr",align:null},'"accept" or "reject" or "ban" or "filter" or "acceptWithAudio"'),(0,l.kt)("td",{parentName:"tr",align:null},"[TEMPLATE_ID]","\u662f\u52a8\u6001\u7684\u952e\uff0c\u5373\u6a21\u677fid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errMsg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u65f6errMsg\u503c\u4e3a'requestSubscribeMessage:ok'")))),(0,l.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("p",null,"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE \u8fd9\u6761\u6d88\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errMsg": "requestSubscribeDeviceMessage:ok",\n  "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"\n}\n')),(0,l.kt)("h3",{id:"templatereflex"},"TemplateReflex"),(0,l.kt)("p",null,"\u6a21\u7248\u6d88\u606f\u8ba2\u9605\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accept"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7528\u6237\u540c\u610f\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reject"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7528\u6237\u62d2\u7edd\u8ba2\u9605\u8be5\u6761id\u5bf9\u5e94\u7684\u6a21\u677f\u6d88\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ban"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u5df2\u88ab\u540e\u53f0\u5c01\u7981")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u8be5\u6a21\u677f\u56e0\u4e3a\u6a21\u677f\u6807\u9898\u540c\u540d\u88ab\u540e\u53f0\u8fc7\u6ee4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"acceptWithAudio"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7528\u6237\u63a5\u6536\u8ba2\u9605\u6d88\u606f\u5e76\u5f00\u542f\u4e86\u8bed\u97f3\u63d0\u9192")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.requestSubscribeDeviceMessage({\n  tmplIds: ['xxxxx'],\n  sn: 'xxxx',\n  snTicket: 'xxxxx',\n  modelId: 'xxx',\n  success(res) {\n    console.log(res)\n  },\n  fail(res) {\n    console.log(res)\n  }\n})\n")))}d.isMDXComponent=!0},5030:function(e,t,a){t.Z=a.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},73555:function(e,t,a){t.Z=a.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},16710:function(e,t,a){t.Z=a.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);