"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[49695],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),k=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=k(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,i=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),p=k(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||l;return n?r.createElement(m,c(c({ref:e},u),{},{components:n})):r.createElement(m,c({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,c=new Array(l);c[0]=p;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:o,c[1]=a;for(var k=2;k<l;k++)c[k]=n[k];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14110:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return k},toc:function(){return u},default:function(){return p}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),c=["components"],a={title:"Taro.connectSocket(option)",sidebar_label:"connectSocket"},i=void 0,k={unversionedId:"apis/network/webSocket/connectSocket",id:"version-2.x/apis/network/webSocket/connectSocket",title:"Taro.connectSocket(option)",description:"\u521b\u5efa\u4e00\u4e2a WebSocket \u8fde\u63a5\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb\u76f8\u5173\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-2.x/apis/network/webSocket/connectSocket.md",sourceDirName:"apis/network/webSocket",slug:"/apis/network/webSocket/connectSocket",permalink:"/taro/en/docs/2.x/apis/network/webSocket/connectSocket",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/webSocket/connectSocket.md",tags:[],version:"2.x",frontMatter:{title:"Taro.connectSocket(option)",sidebar_label:"connectSocket"},sidebar:"version-2.x/API",previous:{title:"onSocketClose",permalink:"/taro/en/docs/2.x/apis/network/webSocket/onSocketClose"},next:{title:"closeSocket",permalink:"/taro/en/docs/2.x/apis/network/webSocket/closeSocket"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[],level:3},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[],level:3}],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],s={toc:u};function p(t){var e=t.components,n=(0,o.Z)(t,c);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a WebSocket \u8fde\u63a5\u3002\u4f7f\u7528\u524d\u8bf7\u6ce8\u610f\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"},"\u76f8\u5173\u8bf4\u660e"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e76\u53d1\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1.7.0 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u6700\u591a\u53ef\u4ee5\u540c\u65f6\u5b58\u5728 5 \u4e2a WebSocket \u8fde\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"1.7.0 \u4ee5\u4e0b\u7248\u672c\uff0c\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u540c\u65f6\u53ea\u80fd\u6709\u4e00\u4e2a WebSocket \u8fde\u63a5\uff0c\u5982\u679c\u5f53\u524d\u5df2\u5b58\u5728\u4e00\u4e2a WebSocket \u8fde\u63a5\uff0c\u4f1a\u81ea\u52a8\u5173\u95ed\u8be5\u8fde\u63a5\uff0c\u5e76\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a WebSocket \u8fde\u63a5\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SocketTask>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"url"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668 wss \u63a5\u53e3\u5730\u5740")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"header"),(0,l.kt)("td",null,(0,l.kt)("code",null,"Record<string, any>")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"HTTP Header\uff0cHeader \u4e2d\u4e0d\u80fd\u8bbe\u7f6e Referer")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"protocols"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5b50\u534f\u8bae\u6570\u7ec4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"tcpNoDelay"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5efa\u7acb TCP \u8fde\u63a5\u7684\u65f6\u5019\u7684 TCP_NODELAY \u8bbe\u7f6e")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.connectSocket({\n  url: 'wss://example.qq.com',\n  header:{\n    'content-type': 'application/json'\n  },\n  protocols: ['protocol1']\n})\n")),(0,l.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.connectSocket({\n  url: 'ws://echo.websocket.org/echo',\n  success: function () {\n    console.log('connect success')\n  }\n}).then(task => {\n  task.onOpen(function () {\n    console.log('onOpen')\n    task.send({ data: 'xxx' })\n  })\n  task.onMessage(function (msg) {\n    console.log('onMessage: ', msg)\n    task.close()\n  })\n  task.onError(function () {\n    console.log('onError')\n  })\n  task.onClose(function (e) {\n    console.log('onClose: ', e)\n  })\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.connectSocket"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);