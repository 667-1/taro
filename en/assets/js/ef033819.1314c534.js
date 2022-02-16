"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28942],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(n),h=r,k=s["".concat(c,".").concat(h)]||s[h]||d[h]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30044:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],u={title:"Taro.onBluetoothAdapterStateChange(callback)",sidebar_label:"onBluetoothAdapterStateChange"},c=void 0,i={unversionedId:"apis/device/bluetooth/onBluetoothAdapterStateChange",id:"version-3.x/apis/device/bluetooth/onBluetoothAdapterStateChange",title:"Taro.onBluetoothAdapterStateChange(callback)",description:"Listens on the Bluetooth adapter status change event.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/onBluetoothAdapterStateChange.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/onBluetoothAdapterStateChange",permalink:"/taro/en/docs/apis/device/bluetooth/onBluetoothAdapterStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/onBluetoothAdapterStateChange.md",tags:[],version:"3.x",frontMatter:{title:"Taro.onBluetoothAdapterStateChange(callback)",sidebar_label:"onBluetoothAdapterStateChange"},sidebar:"version-3.x/API",previous:{title:"onBluetoothDeviceFound",permalink:"/taro/en/docs/apis/device/bluetooth/onBluetoothDeviceFound"},next:{title:"offBluetoothDeviceFound",permalink:"/taro/en/docs/apis/device/bluetooth/offBluetoothDeviceFound"}},p=[{value:"Type",id:"type",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[],level:3},{value:"CallbackResult",id:"callbackresult",children:[],level:3}],level:2},{value:"Sample Code",id:"sample-code",children:[],level:2},{value:"API Support",id:"api-support",children:[],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Listens on the Bluetooth adapter status change event."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"The callback function for the Bluetooth adapter status change event."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"available"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"Indicates whether the Bluetooth adapter is available")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"discovering"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"Indicates whether the Bluetooth adapter is in the discovery status")))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onBluetoothAdapterStateChange(function (res) {\n  console.log('adapterState changed, now is', res)\n})\n")),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onBluetoothAdapterStateChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);