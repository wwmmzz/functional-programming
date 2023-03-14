"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="The two pillars of functional programming",l={unversionedId:"The two pillars of functional programming",id:"The two pillars of functional programming",title:"The two pillars of functional programming",description:"Functional programming is based on the following two pillars:",source:"@site/docs/2. The two pillars of functional programming.md",sourceDirName:".",slug:"/The two pillars of functional programming",permalink:"/functional-programming/The two pillars of functional programming",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2. The two pillars of functional programming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is functional programming",permalink:"/functional-programming/"},next:{title:"Modelling composition with Semigroups",permalink:"/functional-programming/Modelling composition with Semigroups"}},s={},p=[{value:"Referential transparency",id:"referential-transparency",level:2},{value:"Composition",id:"composition",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-two-pillars-of-functional-programming"},"The two pillars of functional programming"),(0,a.kt)("p",null,"Functional programming is based on the following two pillars:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Referential transparency"),(0,a.kt)("li",{parentName:"ul"},"Composition (as universal design pattern)")),(0,a.kt)("p",null,"All of the remaining content derives directly or indirectly from those two points."),(0,a.kt)("h2",{id:"referential-transparency"},"Referential transparency"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Definition"),". An ",(0,a.kt)("strong",{parentName:"p"},"expression")," is said to be ",(0,a.kt)("em",{parentName:"p"},"referentially transparent")," if it can be replaced with its corresponding value without changing the program's behavior")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," (referential transparency implies the use of pure functions)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const double = (n: number): number => n * 2\n\nconst x = double(2)\nconst y = double(2)\n")),(0,a.kt)("p",null,"The expression ",(0,a.kt)("inlineCode",{parentName:"p"},"double(2)")," has the referential transparency property because it is replaceable with its value, the number 4."),(0,a.kt)("p",null,"Thus I can proceed with the following refactor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const x = 4\nconst y = x\n")),(0,a.kt)("p",null,"Not every expression is referentially transparent, let's see an example."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," (referential transparency implies not throwing exceptions)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const inverse = (n: number): number => {\n  if (n === 0) throw new Error('cannot divide by zero')\n  return 1 / n\n}\n\nconst x = inverse(0) + 1\n")),(0,a.kt)("p",null,"I can't replace ",(0,a.kt)("inlineCode",{parentName:"p"},"inverse(0)")," with its value, thus it is not referentially transparent."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")," (referential transparency requires the use of immutable data structures)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const xs = [1, 2, 3]\n\nconst append = (xs: Array<number>): void => {\n  xs.push(4)\n}\n\nappend(xs)\n\nconst ys = xs\n")),(0,a.kt)("p",null,"On the last line I cannot replace ",(0,a.kt)("inlineCode",{parentName:"p"},"xs")," with its initial value ",(0,a.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," since it has been changed by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"append"),"."),(0,a.kt)("p",null,"Why is referential transparency so important? Because it allows us to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"reason about code locally"),", there is no need to know external context in order to understand a fragment of code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"refactor")," without changing our system's behaviour")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quiz"),". Suppose we have the following program:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// In TypeScript `declare` allows to introduce a definition without requiring an implementation\ndeclare const question: (message: string) => Promise<string>\n\nconst x = await question('What is your name?')\nconst y = await question('What is your name?')\n")),(0,a.kt)("p",null,"Can I refactor in this way? Does the program's behavior change or is it going to change?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const x = await question('What is your name?')\nconst y = x\n")),(0,a.kt)("p",null,"The answer is: there's no way to know without reading ",(0,a.kt)("inlineCode",{parentName:"p"},"question"),"'s ",(0,a.kt)("em",{parentName:"p"},"implementation"),"."),(0,a.kt)("p",null,"As you can see, refactoring a program including non-referentially transparent expressions might be challenging.\nIn functional programming, where every expression is referentially transparent, the cognitive load required to make changes is severely reduced."),(0,a.kt)("h2",{id:"composition"},"Composition"),(0,a.kt)("p",null,"Functional programming's fundamental pattern is ",(0,a.kt)("em",{parentName:"p"},"composition"),": we compose small units of code accomplishing very specific tasks into larger and complex units."),(0,a.kt)("p",null,'An example of a "from the smallest to the largest" composition pattern we can think of:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"composing two or more primitive values (numbers or strings)"),(0,a.kt)("li",{parentName:"ul"},"composing two or more functions"),(0,a.kt)("li",{parentName:"ul"},"composing entire programs")),(0,a.kt)("p",null,"In the very last example we can speak of ",(0,a.kt)("em",{parentName:"p"},"modular programming"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By modular programming I mean the process of building large programs by gluing together smaller programs - Simon Peyton Jones")),(0,a.kt)("p",null,"This programming style is achievable through the use of combinators."),(0,a.kt)("p",null,"The term ",(0,a.kt)("strong",{parentName:"p"},"combinator")," refers to the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.haskell.org/Combinator"},"combinator pattern"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A style of organizing libraries centered around the idea of combining things. Usually there is some type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),', some "primitive" values of type ',(0,a.kt)("inlineCode",{parentName:"p"},"T"),', and some "combinators" which can combine values of type ',(0,a.kt)("inlineCode",{parentName:"p"},"T")," in various ways to build up more complex values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"))),(0,a.kt)("p",null,"The general concept of a combinator is rather vague and it can appear in different forms, but the simplest one is this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"combinator: Thing -> Thing\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),". The function ",(0,a.kt)("inlineCode",{parentName:"p"},"double")," combines two numbers."),(0,a.kt)("p",null,"The goal of a combinator is to create new ",(0,a.kt)("em",{parentName:"p"},"Thing"),"s from ",(0,a.kt)("em",{parentName:"p"},"Thing"),"s already defined."),(0,a.kt)("p",null,"Since the output of a combinator, the new ",(0,a.kt)("em",{parentName:"p"},"Thing"),", can be passed around as input to other programs and combinators, we obtain a combinatorial explosion of opportunities, which makes this pattern extremely powerful."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'fp-ts/function'\n\nconst double = (n: number): number => n * 2\n\nconsole.log(pipe(2, double, double, double)) // => 16\n")),(0,a.kt)("p",null,"Thus the usual design you can find in a functional module is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a model for some type ",(0,a.kt)("inlineCode",{parentName:"li"},"T")),(0,a.kt)("li",{parentName:"ul"},'a small set of "primitives" of type ',(0,a.kt)("inlineCode",{parentName:"li"},"T")),(0,a.kt)("li",{parentName:"ul"},"a set of combinators to combine the primitives in larger structures")),(0,a.kt)("p",null,"Let's try to implement such a module:"),(0,a.kt)("p",null,"As you can see from the previous demo, with merely 3 primitives and two combinators we've been able to express a pretty complex policy."),(0,a.kt)("p",null,"Think at how just adding a single new primitive, or a single combinator to those already defined, adds expressive possibilities exponentially."),(0,a.kt)("p",null,"Of the two combinators in ",(0,a.kt)("inlineCode",{parentName:"p"},"01_retry.ts")," a special mention goes to ",(0,a.kt)("inlineCode",{parentName:"p"},"concat")," since it refers to a very powerful functional programming abstraction: semigroups."))}c.isMDXComponent=!0}}]);