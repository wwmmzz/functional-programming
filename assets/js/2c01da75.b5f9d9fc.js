"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[459],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,d=c["".concat(s,".").concat(m)]||c[m]||f[m]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,l={unversionedId:"quiz-answers/for-loop",id:"quiz-answers/for-loop",title:"for-loop",description:"Question",source:"@site/docs/quiz-answers/for-loop.md",sourceDirName:"quiz-answers",slug:"/quiz-answers/for-loop",permalink:"/functional-programming/quiz-answers/for-loop",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monads",permalink:"/functional-programming/Monads"},next:{title:"javascript-includes",permalink:"/functional-programming/quiz-answers/javascript-includes"}},s={},p=[{value:"Question",id:"question",level:2},{value:"Answer",id:"answer",level:2}],u={toc:p},c="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"question"},"Question"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// input\nconst xs: Array<number> = [1, 2, 3]\n\n// transformation\nconst double = (n: number): number => n * 2\n\n// result: I want an array where each `xs`' element is doubled\nconst ys: Array<number> = []\nfor (let i = 0; i <= xs.length; i++) {\n  ys.push(double(xs[i]))\n}\n")),(0,o.kt)("p",null,"Is the ",(0,o.kt)("inlineCode",{parentName:"p"},"for loop")," correct?"),(0,o.kt)("h2",{id:"answer"},"Answer"),(0,o.kt)("p",null,"No, it's not. The condition ",(0,o.kt)("inlineCode",{parentName:"p"},"i <= xs.length")," should be ",(0,o.kt)("inlineCode",{parentName:"p"},"i < xs.length"),"."),(0,o.kt)("p",null,"As it is coded, ",(0,o.kt)("inlineCode",{parentName:"p"},"ys"),"'s value is ",(0,o.kt)("inlineCode",{parentName:"p"},"[ 2, 4, 6, NaN ]")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"[ 2, 4, 6 ]")))}f.isMDXComponent=!0}}]);