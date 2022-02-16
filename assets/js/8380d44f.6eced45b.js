"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29295],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,b=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1961:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),l=["components"],i={slug:"2020-12-15-taro-3-1-beta",title:"Taro 3.1 beta \u53d1\u5e03\uff1a \u5f00\u653e\u5f0f\u67b6\u6784\u65b0\u589e 4 \u7aef\u652f\u6301",authors:"JJ",tags:["v3"],description:"\u9762\u5bf9\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u8d8a\u6765\u8d8a\u591a\u7684\u5927\u73af\u5883\uff0cTaro \u662f\u9009\u62e9\u504f\u5b89\u4e00\u9685\uff0c\u53ea\u652f\u6301\u90e8\u5206\u7684\u4e3b\u6d41\u5c0f\u7a0b\u5e8f\uff0c\u8fd8\u662f\u6210\u4e3a\u6240\u6709\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u5f00\u53d1\u3001\u591a\u7aef\u8f6c\u6362\u7684\u57fa\u7840\u8bbe\u65bd"},u="Taro v3.1 \u53d1\u5e03 beta \u7248\u672c",c={permalink:"/taro/blog/2020-12-15-taro-3-1-beta",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-12-15-taro-3-1-beta.md",source:"@site/blog/2020-12-15-taro-3-1-beta.md",title:"Taro 3.1 beta \u53d1\u5e03\uff1a \u5f00\u653e\u5f0f\u67b6\u6784\u65b0\u589e 4 \u7aef\u652f\u6301",description:"\u9762\u5bf9\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u8d8a\u6765\u8d8a\u591a\u7684\u5927\u73af\u5883\uff0cTaro \u662f\u9009\u62e9\u504f\u5b89\u4e00\u9685\uff0c\u53ea\u652f\u6301\u90e8\u5206\u7684\u4e3b\u6d41\u5c0f\u7a0b\u5e8f\uff0c\u8fd8\u662f\u6210\u4e3a\u6240\u6709\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u5f00\u53d1\u3001\u591a\u7aef\u8f6c\u6362\u7684\u57fa\u7840\u8bbe\u65bd",date:"2020-12-15T00:00:00.000Z",formattedDate:"2020\u5e7412\u670815\u65e5",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],readingTime:14.18,truncated:!0,authors:[{name:"JJ",title:"Taro \u56e2\u961f\u6210\u5458",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"}],frontMatter:{slug:"2020-12-15-taro-3-1-beta",title:"Taro 3.1 beta \u53d1\u5e03\uff1a \u5f00\u653e\u5f0f\u67b6\u6784\u65b0\u589e 4 \u7aef\u652f\u6301",authors:"JJ",tags:["v3"],description:"\u9762\u5bf9\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u8d8a\u6765\u8d8a\u591a\u7684\u5927\u73af\u5883\uff0cTaro \u662f\u9009\u62e9\u504f\u5b89\u4e00\u9685\uff0c\u53ea\u652f\u6301\u90e8\u5206\u7684\u4e3b\u6d41\u5c0f\u7a0b\u5e8f\uff0c\u8fd8\u662f\u6210\u4e3a\u6240\u6709\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u5f00\u53d1\u3001\u591a\u7aef\u8f6c\u6362\u7684\u57fa\u7840\u8bbe\u65bd"},prevItem:{title:"Taro \u52a9\u529b\u4eac\u559c\u62fc\u62fc\u9879\u76ee\u6027\u80fd\u4f53\u9a8c\u4f18\u5316",permalink:"/taro/blog/2021-02-08-taro-jxpp"},nextItem:{title:"\u589e\u52a0 React Native \u652f\u6301\u7684 Taro 3.2.0 \u7248\u672c\u6d4b\u8bd5\u901a\u544a",permalink:"/taro/blog/2020-12-02-taro-3-2-0-cannary-1"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4e00\u3001\u5f00\u653e\u5f0f\u67b6\u6784",id:"\u4e00\u5f00\u653e\u5f0f\u67b6\u6784",children:[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:3}],level:2}],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u81ea 7 \u6708\u521d\u6211\u4eec\u6b63\u5f0f\u53d1\u5e03\u4e86 Taro 3\uff0c\u81f3\u4eca\u534a\u5e74\u65f6\u95f4\u5df2\u7136\u7565\u53bb\u3002\u671f\u95f4\u6211\u4eec\u4e0d\u65ad\u5730\u4fee\u590d\u7740\u95ee\u9898\uff0c\u540c\u65f6\u4e5f\u5728\u6784\u60f3\u7740\u4e0b\u4e00\u4e2a minor \u7248\u672c\u3002"),(0,a.kt)("p",null,"\u9762\u5bf9\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u8d8a\u6765\u8d8a\u591a\u7684\u5927\u73af\u5883\uff0cTaro \u662f\u9009\u62e9\u504f\u5b89\u4e00\u9685\uff0c\u53ea\u652f\u6301\u90e8\u5206\u7684\u4e3b\u6d41\u5c0f\u7a0b\u5e8f\uff0c\u8fd8\u662f\u6210\u4e3a\u6240\u6709\u5c0f\u7a0b\u5e8f\u5e73\u53f0\b\u5f00\u53d1\u3001\u591a\u7aef\u8f6c\u6362\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u6211\u4eec\u5728 v3.1 \u7ed9\u51fa\u4e86\u7b54\u6848\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u653e\u5f0f\u67b6\u6784"),"\u3002"),(0,a.kt)("h2",{id:"\u4e00\u5f00\u653e\u5f0f\u67b6\u6784"},"\u4e00\u3001\u5f00\u653e\u5f0f\u67b6\u6784"),(0,a.kt)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,a.kt)("p",null,"\u8fd1\u5e74\u6765\u4e1a\u754c\u63a8\u51fa\u7684\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u8d8a\u6765\u8d8a\u591a\uff0c\u4f46 Taro \u6838\u5fc3\u7ef4\u62a4\u7684\u5e73\u53f0\u53ea\u6709 6 \u4e2a\uff08\u5fae\u4fe1\u3001\u652f\u4ed8\u5b9d\u3001\u767e\u5ea6\u3001\u5934\u6761\u3001QQ\u3001\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff09\uff0c\u56e0\u6b64\u5e38\u5e38\u6709\u540c\u5b66\u63d0\u51fa\u80fd\u4e0d\u80fd\u652f\u6301\u67d0\u67d0\u5e73\u53f0\u7684 Feature Request\u3002"),(0,a.kt)("p",null,"\u57fa\u4e8e\u76ee\u524d\u7684\u67b6\u6784\uff0c\u5bf9\u4e8e\u5355\u4e00\u5e73\u53f0\u7684\u517c\u5bb9\u6027\u4ee3\u7801\u5206\u5e03\u4e8e Taro \u6838\u5fc3\u5e93\u7684\u5404\u4e2a\u89d2\u843d\uff0c\u6d89\u53ca\u7f16\u8bd1\u65f6\u4e0e\u8fd0\u884c\u65f6\u7b49\u90e8\u5206\u3002\u652f\u6301\u4e00\u4e2a\u65b0\u7684\u5e73\u53f0\u9700\u8981\u6539\u52a8\u6240\u6709\u7684\u8fd9\u4e9b\u5730\u65b9\uff0c\u5f00\u53d1\u590d\u6742\u5ea6\u9ad8\uff0c\u540c\u65f6\u793e\u533a\u4e5f\u96be\u4ee5\u53c2\u4e0e\u8d21\u732e\u3002"),(0,a.kt)("p",null,"\u4e3a\u6b64\u6211\u4eec\u840c\u751f\u4e86\u6253\u9020\u4e00\u4e2a\u5f00\u653e\u5f0f\u6846\u67b6\u7684\u60f3\u6cd5\u3002\u76ee\u6807\u662f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u7684\u5f62\u5f0f\u6269\u5c55 Taro \u7684\u7aef\u5e73\u53f0\u652f\u6301\u80fd\u529b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u5f00\u53d1\u8005\u65e0\u9700\u4fee\u6539 Taro \u6838\u5fc3\u5e93\u4ee3\u7801\uff0c\u5373\u53ef\u7f16\u5199\u51fa\u4e00\u4e2a\u7aef\u5e73\u53f0\u63d2\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u4f7f\u7528\u8005\u53ea\u9700\u5b89\u88c5\u3001\u914d\u7f6e\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u5373\u53ef\u628a\u4ee3\u7801\u7f16\u8bd1\u5230\u6307\u5b9a\u5e73\u53f0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u7ee7\u627f\u73b0\u6709\u7684\u7aef\u5e73\u53f0\u63d2\u4ef6\uff0c\u7136\u540e\u5bf9\u5e73\u53f0\u7684\u9002\u914d\u903b\u8f91\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002")))}m.isMDXComponent=!0}}]);