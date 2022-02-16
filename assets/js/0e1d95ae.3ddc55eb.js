"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[13445],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,k=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(k,l(l({ref:e},d),{},{components:n})):r.createElement(k,l({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38871:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},c=void 0,p={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"version-3.x/apis/device/ibeacon/IBeaconInfo",title:"IBeaconInfo",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",sourceDirName:"apis/device/ibeacon",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/taro/docs/apis/device/ibeacon/IBeaconInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",tags:[],version:"3.x",frontMatter:{title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},sidebar:"version-3.x/API",previous:{title:"getBeacons",permalink:"/taro/docs/apis/device/ibeacon/getBeacons"},next:{title:"stopHCE",permalink:"/taro/docs/apis/device/nfc/stopHCE"}},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Proximity",id:"proximity",children:[],level:3}],level:2}],u={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Beacon \u8bbe\u5907\u5e7f\u64ad\u7684 uuid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"major"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Beacon \u8bbe\u5907\u7684\u4e3b ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Beacon \u8bbe\u5907\u7684\u6b21 ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"proximity"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"keyof Proximity")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u8bbe\u5907\u8ddd\u79bb\u7684\u679a\u4e3e\u503c\uff08\u4ec5iOS\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accuracy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"Beacon \u8bbe\u5907\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d m\u3002iOS \u4e0a\uff0cproximity \u4e3a 0 \u65f6\uff0caccuracy \u4e3a -1\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rssi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6\uff0c\u5355\u4f4d dBm")))),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"proximity"},"Proximity"),(0,i.kt)("p",null,"proximity \u7684\u5408\u6cd5\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4fe1\u53f7\u592a\u5f31\u4e0d\u8db3\u4ee5\u8ba1\u7b97\u8ddd\u79bb\uff0c\u6216\u975e iOS \u8bbe\u5907")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5341\u5206\u8fd1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6bd4\u8f83\u8fd1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8fdc")))))}m.isMDXComponent=!0}}]);