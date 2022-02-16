"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28567],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(u,".").concat(p)]||s[p]||k[p]||a;return n?l.createElement(m,i(i({ref:e},c),{},{components:n})):l.createElement(m,i({ref:e},c))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40215:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var l=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],o={title:"Taro.getImageInfo(option)",sidebar_label:"getImageInfo"},u=void 0,d={unversionedId:"apis/media/image/getImageInfo",id:"version-2.x/apis/media/image/getImageInfo",title:"Taro.getImageInfo(option)",description:"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002",source:"@site/versioned_docs/version-2.x/apis/media/image/getImageInfo.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/getImageInfo",permalink:"/taro/docs/2.x/apis/media/image/getImageInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/image/getImageInfo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getImageInfo(option)",sidebar_label:"getImageInfo"},sidebar:"version-2.x/API",previous:{title:"previewImage",permalink:"/taro/docs/2.x/apis/media/image/previewImage"},next:{title:"compressImage",permalink:"/taro/docs/2.x/apis/media/image/compressImage"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[],level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[],level:3},{value:"orientation",id:"orientation",children:[],level:3}],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[],level:2}],k={toc:c};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"src"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u56fe\u7247\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u3001\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3001\u5b58\u50a8\u6587\u4ef6\u8def\u5f84\u3001\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",null,"\u56fe\u7247\u539f\u59cb\u9ad8\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"orientation"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"up" | "up-mirrored" | "down" | "down-mirrored" | "left-mirrored" | "right" | "right-mirrored" | "left"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"up"')),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sylvana.net/jpegcrop/exif_orientation.html"},"\u62cd\u7167\u65f6\u8bbe\u5907\u65b9\u5411"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"path"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",null,"\u56fe\u7247\u7684\u672c\u5730\u8def\u5f84")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",null,"\u56fe\u7247\u683c\u5f0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"width"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",null,"\u56fe\u7247\u539f\u59cb\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,a.kt)("h3",{id:"orientation"},"orientation"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"up"),(0,a.kt)("td",null,"\u9ed8\u8ba4\u65b9\u5411\uff08\u624b\u673a\u6a2a\u6301\u62cd\u7167\uff09\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 1\u3002\u6216\u65e0 orientation \u4fe1\u606f\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"up-mirrored"),(0,a.kt)("td",null,"\u540c up\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 2")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"down"),(0,a.kt)("td",null,"\u65cb\u8f6c180\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"down-mirrored"),(0,a.kt)("td",null,"\u540c down\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 4")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"left-mirrored"),(0,a.kt)("td",null,"\u540c left\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 5")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"right"),(0,a.kt)("td",null,"\u987a\u65f6\u9488\u65cb\u8f6c90\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"right-mirrored"),(0,a.kt)("td",null,"\u540c right\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 7")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"left"),(0,a.kt)("td",null,"\u9006\u65f6\u9488\u65cb\u8f6c90\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 8")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getImageInfo({\n  src: 'images/a.jpg',\n  success: function (res) {\n    console.log(res.width)\n    console.log(res.height)\n  }\n})\nTaro.chooseImage({\n  success: function (res) {\n    Taro.getImageInfo({\n      src: res.tempFilePaths[0],\n      success: function (res) {\n        console.log(res.width)\n        console.log(res.height)\n      }\n    })\n  }\n})\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.getImageInfo"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);