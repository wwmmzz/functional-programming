"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=i,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={},o=void 0,s={unversionedId:"quiz-answers/semigroup-first",id:"quiz-answers/semigroup-first",title:"semigroup-first",description:"Question",source:"@site/docs/quiz-answers/semigroup-first.md",sourceDirName:"quiz-answers",slug:"/quiz-answers/semigroup-first",permalink:"/functional-programming/quiz-answers/semigroup-first",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quiz-answers/semigroup-first.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"semigroup-demo-concat",permalink:"/functional-programming/quiz-answers/semigroup-demo-concat"},next:{title:"semigroup-second",permalink:"/functional-programming/quiz-answers/semigroup-second"}},l={},c=[{value:"Question",id:"question",level:2},{value:"Answer",id:"answer",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"question"},"Question"),(0,i.kt)("p",null,"Is the following semigroup instance lawful (does it respect semigroup laws)?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\n/** Always return the first argument */\nconst first = <A>(): Semigroup<A> => ({\n  concat: (first, _second) => first\n})\n")),(0,i.kt)("h2",{id:"answer"},"Answer"),(0,i.kt)("p",null,"Yes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"first"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"second")," and the result of ",(0,i.kt)("inlineCode",{parentName:"li"},"concat")," (which is ",(0,i.kt)("inlineCode",{parentName:"li"},"first"),") are all of the same type ",(0,i.kt)("inlineCode",{parentName:"li"},"A")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"concat")," is associative:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"concat(concat(first, second), third)")," evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},"concat(first, third)")," which then evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},"first")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"concat(first, concat(second, third))")," evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},"concat(first, second)")," which then evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},"first"))))))}m.isMDXComponent=!0}}]);