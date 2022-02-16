"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37243],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=l(r),f=o,m=g["".concat(u,".").concat(f)]||g[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4788:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={slug:"2020-05-26-taro-3-rc",title:"Taro 3.0 RC\uff1aReact/Vue/Nerv \u4efb\u4f60\u9009",author:"yuche",author_url:"https://github.com/yuche",author_image_url:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800",tags:["v3"],description:"Beta \u7248\u53d1\u5e03\u540e\uff0c\u793e\u533a\u5f88\u591a\u5f00\u53d1\u8005\u4f7f\u7528\u4e0a\u4e86 Taro Next\uff0c\u4ed6\u4eec\u7684\u5e2e\u52a9\u548c\u8d5e\u8a89\u52a0\u4e0a\u6211\u4eec\u5185\u90e8\u9879\u76ee\u4f7f\u7528\u7684\u826f\u597d\u53cd\u9988\uff0cBeta \u53d1\u5e03\u4e00\u4e2a\u6708\u4e4b\u540e\uff0c\u6211\u4eec\u975e\u5e38\u81ea\u4fe1\u5730\u53d1\u5e03\u4e86\u5019\u9009\u7248\uff08RC\uff09\u7248\u672c\u3002"},u=void 0,l={permalink:"/taro/en/blog/2020-05-26-taro-3-rc",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-05-26-taro-3-rc.md",source:"@site/blog/2020-05-26-taro-3-rc.md",title:"Taro 3.0 RC\uff1aReact/Vue/Nerv \u4efb\u4f60\u9009",description:"Beta \u7248\u53d1\u5e03\u540e\uff0c\u793e\u533a\u5f88\u591a\u5f00\u53d1\u8005\u4f7f\u7528\u4e0a\u4e86 Taro Next\uff0c\u4ed6\u4eec\u7684\u5e2e\u52a9\u548c\u8d5e\u8a89\u52a0\u4e0a\u6211\u4eec\u5185\u90e8\u9879\u76ee\u4f7f\u7528\u7684\u826f\u597d\u53cd\u9988\uff0cBeta \u53d1\u5e03\u4e00\u4e2a\u6708\u4e4b\u540e\uff0c\u6211\u4eec\u975e\u5e38\u81ea\u4fe1\u5730\u53d1\u5e03\u4e86\u5019\u9009\u7248\uff08RC\uff09\u7248\u672c\u3002",date:"2020-05-26T00:00:00.000Z",formattedDate:"May 26, 2020",tags:[{label:"v3",permalink:"/taro/en/blog/tags/v-3"}],readingTime:8.75,truncated:!0,authors:[{name:"yuche",url:"https://github.com/yuche",imageURL:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800"}],frontMatter:{slug:"2020-05-26-taro-3-rc",title:"Taro 3.0 RC\uff1aReact/Vue/Nerv \u4efb\u4f60\u9009",author:"yuche",author_url:"https://github.com/yuche",author_image_url:"https://static.geekbang.org/ck/5cb53de0e50c0.jpeg?imageView2/0/w/800",tags:["v3"],description:"Beta \u7248\u53d1\u5e03\u540e\uff0c\u793e\u533a\u5f88\u591a\u5f00\u53d1\u8005\u4f7f\u7528\u4e0a\u4e86 Taro Next\uff0c\u4ed6\u4eec\u7684\u5e2e\u52a9\u548c\u8d5e\u8a89\u52a0\u4e0a\u6211\u4eec\u5185\u90e8\u9879\u76ee\u4f7f\u7528\u7684\u826f\u597d\u53cd\u9988\uff0cBeta \u53d1\u5e03\u4e00\u4e2a\u6708\u4e4b\u540e\uff0c\u6211\u4eec\u975e\u5e38\u81ea\u4fe1\u5730\u53d1\u5e03\u4e86\u5019\u9009\u7248\uff08RC\uff09\u7248\u672c\u3002"},prevItem:{title:"Taro 3 \u6b63\u5f0f\u7248\u53d1\u5e03\uff1a\u5f00\u653e\u5f0f\u8de8\u7aef\u8de8\u6846\u67b6\u89e3\u51b3\u65b9\u6848",permalink:"/taro/en/blog/2020-07-01-taro-3-0-0"},nextItem:{title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",permalink:"/taro/en/blog/2020-04-27-taro-build-jd"}},p={authorsImageUrls:[void 0]},s=[],g={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img13.360buyimg.com/ling/jfs/t1/131780/5/388/2331933/5ecce529E0df55626/0514d956b8866772.png",alt:null})),(0,a.kt)("p",null,"\u5728 Taro Next \u9884\u89c8\u7248\uff08Alpha\uff09\u7248\u672c\u4e4b\u540e\uff0c\u6211\u4eec\u6ca1\u6709\u505c\u4e0b\u8fed\u4ee3\u7684\u6b65\u4f10\uff0c\u7ecf\u8fc7\u4e24\u4e2a\u6708\u7684\u5f00\u53d1\u548c\u6570\u767e\u6b21\u63d0\u4ea4\u4e4b\u540e\uff0c\u6211\u4eec\u8c28\u614e\u4f46\u575a\u5b9a\u5730\u53d1\u5e03 Taro Next \u6d4b\u8bd5\uff08Beta\uff09 \u7248\uff0cBeta \u7248\u53d1\u5e03\u540e\uff0c\u793e\u533a\u5f88\u591a\u5f00\u53d1\u8005\u4f7f\u7528\u4e0a\u4e86 Taro Next\uff0c\u4ed6\u4eec\u7684\u5e2e\u52a9\u548c\u8d5e\u8a89\u52a0\u4e0a\u6211\u4eec\u5185\u90e8\u9879\u76ee\u4f7f\u7528\u7684\u826f\u597d\u53cd\u9988\uff0cBeta \u53d1\u5e03\u4e00\u4e2a\u6708\u4e4b\u540e\uff0c\u6211\u4eec\u975e\u5e38\u81ea\u4fe1\u5730\u53d1\u5e03\u4e86\u5019\u9009\u7248\uff08RC\uff09\u7248\u672c\u3002"))}f.isMDXComponent=!0}}]);