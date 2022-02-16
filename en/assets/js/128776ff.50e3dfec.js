"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59381],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,v=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72249:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],c={title:"Taro.onBLEConnectionStateChange(CALLBACK)",sidebar_label:"onBLEConnectionStateChange"},l=void 0,s={unversionedId:"apis/device/ble/onBLEConnectionStateChange",id:"version-1.x/apis/device/ble/onBLEConnectionStateChange",title:"Taro.onBLEConnectionStateChange(CALLBACK)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.onBLEConnectionStateChange\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/onBLEConnectionStateChange.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/onBLEConnectionStateChange",permalink:"/taro/en/docs/1.x/apis/device/ble/onBLEConnectionStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/ble/onBLEConnectionStateChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onBLEConnectionStateChange(CALLBACK)",sidebar_label:"onBLEConnectionStateChange"},sidebar:"version-1.x/API",previous:{title:"onBLECharacteristicValueChange",permalink:"/taro/en/docs/1.x/apis/device/ble/onBLECharacteristicValueChange"},next:{title:"readBLECharacteristicValue",permalink:"/taro/en/docs/1.x/apis/device/ble/readBLECharacteristicValue"}},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBLEConnectionStateChange.html"},(0,a.kt)("inlineCode",{parentName:"a"},"wx.onBLEConnectionStateChange")),"\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.onBLEConnectionStateChange(res => {\n  // \u8be5\u65b9\u6cd5\u56de\u8c03\u4e2d\u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u8fde\u63a5\u610f\u5916\u65ad\u5f00\u7b49\u5f02\u5e38\u60c5\u51b5\n  console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)\n})\n")))}d.isMDXComponent=!0}}]);