"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16219],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74538:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={title:"\u4f7f\u7528 MobX"},p=void 0,s={unversionedId:"mobx",id:"version-2.x/mobx",title:"\u4f7f\u7528 MobX",description:"\u81ea 1.2.0-beta.1 \u5f00\u59cb\u652f\u6301",source:"@site/versioned_docs/version-2.x/mobx.md",sourceDirName:".",slug:"/mobx",permalink:"/taro/docs/2.x/mobx",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/mobx.md",tags:[],version:"2.x",frontMatter:{title:"\u4f7f\u7528 MobX"},sidebar:"version-2.x/docs",previous:{title:"\u4f7f\u7528 Redux",permalink:"/taro/docs/2.x/redux"},next:{title:"\u4f7f\u7528 CSS Modules",permalink:"/taro/docs/2.x/css-modules"}},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"API",id:"api",children:[{value:"onError",id:"onerror",children:[],level:3},{value:"isUsingStaticRendering",id:"isusingstaticrendering",children:[],level:3},{value:"useStaticRendering",id:"usestaticrendering",children:[],level:3},{value:"useLocalStore",id:"uselocalstore",children:[],level:3},{value:"useAsObservableSource",id:"useasobservablesource",children:[],level:3},{value:"observer",id:"observer",children:[],level:3},{value:"Provider",id:"provider",children:[],level:3},{value:"inject",id:"inject",children:[],level:3},{value:"PropTypes",id:"proptypes",children:[],level:3}],level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",children:[],level:2}],c={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2.0-beta.1")," \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mobx.js.org/"},"MobX")," \u4e3a\u590d\u6742\u9879\u76ee\u4e2d\u72b6\u6001\u7ba1\u7406\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u9ad8\u6548\u7684\u673a\u5236\uff1bTaro \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mobx")," \u6765\u8ba9\u5f00\u53d1\u4eba\u5458\u5728\u4f7f\u7528 MobX \u7684\u8fc7\u7a0b\u4e2d\u83b7\u5f97\u66f4\u52a0\u826f\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add mobx@4.8.0 @tarojs/mobx @tarojs/mobx-h5 @tarojs/mobx-rn\n# \u6216\u8005\u4f7f\u7528 npm\n$ npm install --save mobx@4.8.0 @tarojs/mobx @tarojs/mobx-h5 @tarojs/mobx-rn\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"onerror"},"onError"),(0,a.kt)("p",null,"Mobx \u5f02\u5e38\u76d1\u542c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { onError } from '@tarojs/mobx'\n\nonError(error => {\n  console.log('mobx global error listener:', error)\n})\n")),(0,a.kt)("h3",{id:"isusingstaticrendering"},"isUsingStaticRendering"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"1.3.6")," \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u5224\u65ad\u662f\u5426\u5f00\u542f\u4e86\u670d\u52a1\u7aef\u6e32\u67d3\uff08\u8be5\u72b6\u6001\u4e3a\u5168\u5c40\u72b6\u6001\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { isUsingStaticRendering } from '@tarojs/mobx'\n\nif (isUsingStaticRendering()) {\n  //...\n}\n")),(0,a.kt)("h3",{id:"usestaticrendering"},"useStaticRendering"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"1.3.6")," \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u6e32\u67d3\u72b6\u6001\u8bbe\u7f6e\uff08\u8be5\u72b6\u6001\u4e3a\u5168\u5c40\u72b6\u6001\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useStaticRendering } from '@tarojs/mobx'\n\nuseStaticRendering(false)\n")),(0,a.kt)("h3",{id:"uselocalstore"},"useLocalStore"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"1.3.6")," \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u5c06\u5bf9\u8c61\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"observable")," \u5bf9\u8c61\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"getter")," \u4f1a\u88ab\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"computed")," \u5c5e\u6027\uff0c\u65b9\u6cd5\u4f1a\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u8fdb\u884c\u7ed1\u5b9a\u5e76\u81ea\u52a8\u6267\u884c\n",(0,a.kt)("a",{parentName:"p",href:"https://mobx.js.org/refguide/action.html"},"mobx transactions"),"\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\nimport { View, Text, Button } from '@tarojs/components'\nimport { useLocalStore,  observer } from '@tarojs/mobx'\n\nimport './index.scss'\n\nfunction Index() {\n  const store = useLocalStore(() => ({\n    counter: 0,\n    increment() {\n      store.counter++\n    },\n    decrement() {\n      store.counter--\n    },\n    incrementAsync() {\n      setTimeout(() => store.counter++, 1000)\n    }\n  }))\n\n  const { counter, increment, decrement, incrementAsync } = store;\n  return (\n    <View>\n      <Button onClick={increment}>+</Button>\n      <Button onClick={decrement}>-</Button>\n      <Button onClick={incrementAsync}>Add Async</Button>\n      <Text>{counter}</Text>\n    </View>\n  )\n}\n\nexport default observer(Index)\n")),(0,a.kt)("h3",{id:"useasobservablesource"},"useAsObservableSource"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"1.3.6")," \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalStore")," \u7684\u533a\u522b\u662f\uff0c\u5b83\u5c06\u7eaf\uff08\u4e0d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"getter")," \u6216\u65b9\u6cd5\uff09\u5bf9\u8c61\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"observable"),"\uff0c\u4e3b\u8981\u4f7f\u7528\u573a\u666f\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u5bf9\u8c61\u67d0\u4e2a\u5c5e\u6027\u7684\u503c\u9700\u7ecf\u8fc7\u590d\u6742\u8fd0\u7b97\u624d\u80fd\u83b7\u5f97\uff0c\u53ef\u901a\u8fc7\u8be5\u65b9\u6cd5\u8fdb\u884c\u5305\u88c5\uff0c\u8fd9\u6837\u5728\u7ec4\u4ef6\u7684\u751f\u547d\u5468\u671f\u4e2d\u8be5\u8fd0\u7b97\u53ea\u9700\u8981\u8fd0\u7b97\u4e00\u6b21\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u822c\u60c5\u51b5\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalStore")," \u4ec5\u7528\u4e8e\u7ec4\u4ef6\u5185\u90e8\uff0c\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalStore")," \u4e2d\u7684\u5bf9\u8c61\u9700\u8981\u4f9d\u8d56\u5916\u90e8\u4f20\u9012\u7684\u5c5e\u6027\uff0c\u90a3\u4e48\u53ef\u901a\u8fc7\n",(0,a.kt)("inlineCode",{parentName:"p"},"useAsObservableSource")," \u5c06\u8fd9\u4e9b\u5c5e\u6027\u8fdb\u884c\u8f6c\u6362\uff0c\u800c\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalStore")," \u5bf9\u8c61\u4e2d\u8fdb\u884c\u5f15\u7528\uff0c\u8fd9\u6837\u5728\u5916\u90e8\u5c5e\u6027\u6539\u53d8\u65f6\u81ea\u52a8\u901a\u77e5\n",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalStore")," \u5bf9\u8c61\u5bf9\u53d8\u5316\u8fdb\u884c\u54cd\u5e94\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\nimport { View, Button, Text } from '@tarojs/components'\nimport { useAsObservableSource, useLocalStore, observer } from '@tarojs/mobx'\n\nfunction Multiplier(props) {\n  const observableProps = useAsObservableSource(props)\n  const store = useLocalStore(() => ({\n    counter: 1,\n    get multiplied() {\n      return observableProps.multiplier * store.counter\n    },\n    increment() {\n      store.counter += 1\n    }\n  }))\n  const { multiplier } = observableProps\n  const { multiplied, counter, increment } = store\n  return (\n    <View>\n      <Text>multiplier({multiplier}) * counter({counter}) = {multiplied}</Text>\n      <Button onClick={increment}>Increment Counter</Button>\n    </View>\n  )\n}\n\nexport default observer(Multiplier)\n")),(0,a.kt)("p",{parentName:"li"},"\u8be5\u573a\u666f\u4e5f\u53ef\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalStore")," \u4e2d\u7684\u7b2c\u4e8c\u79cd\u7528\u6cd5\u6765\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\nimport { View, Button, Text } from '@tarojs/components'\nimport { useLocalStore, observer } from '@tarojs/mobx'\n\nfunction Multiplier(props) {\n  const store = useLocalStore(source => ({\n    counter: 1,\n\n    get multiplier() {\n      return source.multiplier\n    },\n\n    get multiplied() {\n      return source.multiplier * store.counter\n    },\n    increment() {\n      store.counter += 1\n    }\n  }), props)\n  const { multiplied, counter, increment, multiplier } = store\n  return (\n    <View>\n      <Text>multiplier({multiplier}) * counter({counter}) = {multiplied}</Text>\n      <Button onClick={increment}>Increment Counter</Button>\n    </View>\n  )\n}\n\nexport default observer(Multiplier)\n")))),(0,a.kt)("h3",{id:"observer"},"observer"),(0,a.kt)("p",null,"\u5c06\u7ec4\u4ef6\u8bbe\u7f6e\u4e3a\u76d1\u542c\u8005\uff0c\u4ee5\u4fbf\u5728\u53ef\u89c2\u5bdf\u5bf9\u8c61\u7684\u503c\u6539\u53d8\u540e\u89e6\u53d1\u9875\u9762\u7684\u91cd\u65b0\u6e32\u67d3\u3002"),(0,a.kt)("p",null,"\u6ce8\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"JSX")," \u4e2d\u5bf9\u53ef\u89c2\u5bdf\u5bf9\u8c61\u8fdb\u884c\u5f15\u7528\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u9519\u8bef\uff0c\u5728\u5c0f\u7a0b\u5e8f\u4e2d\u503c\u6539\u53d8\u540e\u5c06\u65e0\u6cd5\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\nconst { counterStore } = this.props\nreturn (\n  <Text>{counterStore.counter}</Text>\n)\n\n// \u6b63\u786e\nconst { counterStore: { counter } } = this.props\nreturn (\n  <Text>{counter}</Text>\n)\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mobx")," \u901a\u8fc7\u76d1\u542c\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"render"),"\uff08\u5c0f\u7a0b\u5e8f\u7f16\u8bd1\u540e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"_createData"),"\uff09\u65b9\u6cd5\u6765\u89e6\u53d1\u66f4\u65b0\uff1b\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"JSX"),"\n\u7684\u4ee3\u7801\u4f1a\u88ab\u7f16\u8bd1\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"wxml")," \u6587\u4ef6\u4e2d\uff0c\u6b64\u65f6\u5bf9\u53ef\u89c2\u5bdf\u5bf9\u8c61\u7684\u5f15\u7528\uff08\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"counterStore.counter"),"\uff09\u65e9\u5df2\u8131\u79bb\u4e86\n",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mobx")," \u7684\u76d1\u63a7\uff0c\u6545\u6b64\u5bf9\u8be5\u5c5e\u6027\u7684\u66f4\u6539\u5e76\u4e0d\u4f1a\u89e6\u53d1\u66f4\u65b0\u64cd\u4f5c\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@observable")," \u88c5\u9970\u5668\u6765\u5b9a\u4e49\u53ef\u89c2\u5bdf\u5bf9\u8c61\u65f6\uff0c\u8bf7\u786e\u4fdd\u8be5\u5c5e\u6027\u5df2\u7ecf\u521d\u59cb\u5316\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"@observable counter // \u9519\u8bef\uff0c\u503c\u6539\u53d8\u540e\u5c06\u65e0\u6cd5\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\n@observable counter = 0 // \u6b63\u786e\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"isUsingStaticRendering")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8be5\u65b9\u6cd5\u4e0d\u505a\u4efb\u4f55\u4e8b\u60c5\u3002"))),(0,a.kt)("h3",{id:"provider"},"Provider"),(0,a.kt)("p",null,"\u5168\u5c40 ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u8bbe\u7f6e\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\nimport { Provider } from '@tarojs/mobx'\nimport Index from './pages/index'\nimport counterStore from './store/counter'\n\nconst store = {\n  counterStore\n}\n\nclass App extends Component {\n  config = {\n    pages: [\n      'pages/index/index'\n    ],\n    window: {\n      backgroundTextStyle: 'light',\n      navigationBarBackgroundColor: '#fff',\n      navigationBarTitleText: 'WeChat',\n      navigationBarTextStyle: 'black'\n    }\n  }\n\n  render () {\n    return (\n      <Provider store={store}>\n        <Index />\n      </Provider>\n    )\n  }\n}\n\nTaro.render(<App />, document.getElementById('app'))\n")),(0,a.kt)("p",null,"\u6ce8\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," \u5fc5\u987b\u4f5c\u7528\u4e8e\u5165\u53e3\u6587\u4ef6\uff08\u5373\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"src/app.js"),"\uff09\uff0c\u5728\u5176\u4ed6\u5730\u65b9\u4f7f\u7528\u65e0\u6548\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u5d4c\u5957\uff0c\u5373\u5168\u5c40\u53ea\u80fd\u5b58\u5728\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"mobx-react")," \u4e2d\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"store"),"\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Provider store1={xxxx} store2={xxxx}>\n  <XXX />\n</Provider>\n")),(0,a.kt)("p",{parentName:"li"},"\u800c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mobx")," \u4e2d\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const store = {\n  store1: xxxx,\n  store2: xxxx\n}\n<Provider store={store}>\n  <XXX />\n</Provider>\n")))),(0,a.kt)("h3",{id:"inject"},"inject"),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," \u4e2d\u8bbe\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u63d0\u53d6\u5230\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u4e2d\uff0c\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"API")," \u53ea\u9002\u7528\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"\u7c7b\u7ec4\u4ef6"),"\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\nimport { observer, inject } from '@tarojs/mobx'\n\nimport './index.scss'\n\n@inject('counterStore')\n@observer\nclass Index extends Component {\n  //...\n}\n\nexport default Index\n")),(0,a.kt)("p",null,"\u6216"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\nimport { observer, inject } from '@tarojs/mobx'\n\nimport './index.scss'\n\n@inject((stores, props) => ({\n  counterStore: stores.counterStore\n}))\n@observer\nclass Index extends Component {\n  //...\n}\n\nexport default Index\n")),(0,a.kt)("p",null,"\u6ce8\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e0\u8bba\u4ee5\u4f55\u79cd\u65b9\u5f0f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"inject"),"\uff0c\u5176\u540e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"observer")," \u5747\u4e0d\u80fd\u7701\u7565\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0d\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"inject")," \u4e2d\u5f15\u7528\u53ef\u89c2\u5bdf\u5bf9\u8c61\uff0c\u8fd9\u5c06\u5bfc\u81f4\u5c5e\u6027\u6539\u53d8\u540e\u9875\u9762\u4e0d\u66f4\u65b0\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u9519\u8bef\n@inject((stores, props) => ({\n  counter: stores.counterStore.counter\n}))\n\n// \u6b63\u786e\n@inject((stores, props) => ({\n  counterStore: stores.counterStore\n}))\n")))),(0,a.kt)("h3",{id:"proptypes"},"PropTypes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"1.3.6")," \u5f00\u59cb\u652f\u6301")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/mobx")," \u63d0\u4f9b\u4e86\u4ee5\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"PropTypes")," \u6765\u9a8c\u8bc1 Mobx \u7684\u7ed3\u6784\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"observableArray"),(0,a.kt)("li",{parentName:"ul"},"observableArrayOf"),(0,a.kt)("li",{parentName:"ul"},"observableMap"),(0,a.kt)("li",{parentName:"ul"},"observableObject"),(0,a.kt)("li",{parentName:"ul"},"arrayOrObservableArray"),(0,a.kt)("li",{parentName:"ul"},"arrayOrObservableArrayOf"),(0,a.kt)("li",{parentName:"ul"},"objectOrObservableObject")),(0,a.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanjingboy/taro-mobx-sample"},"taro-mobx-sample")))}m.isMDXComponent=!0}}]);