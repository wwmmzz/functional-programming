"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[765],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const r={},i="Modelling composition with Semigroups",p={unversionedId:"Modelling composition with Semigroups",id:"Modelling composition with Semigroups",title:"Modelling composition with Semigroups",description:"A semigroup is a recipe to combine two, or more, values.",source:"@site/docs/3. Modelling composition with Semigroups.md",sourceDirName:".",slug:"/Modelling composition with Semigroups",permalink:"/functional-programming/Modelling composition with Semigroups",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The two pillars of functional programming",permalink:"/functional-programming/The two pillars of functional programming"},next:{title:"Modelling equivalence with Eq",permalink:"/functional-programming/Modelling equivalence with Eq"}},l={},s=[{value:"Definition of a Magma",id:"definition-of-a-magma",level:2},{value:"Definition of a Semigroup",id:"definition-of-a-semigroup",level:2},{value:"The <code>concatAll</code> function",id:"the-concatall-function",level:2},{value:"The dual semigroup",id:"the-dual-semigroup",level:2},{value:"Semigroup product",id:"semigroup-product",level:2},{value:"Finding a Semigroup instance for any type",id:"finding-a-semigroup-instance-for-any-type",level:2},{value:"Order-derivable Semigroups",id:"order-derivable-semigroups",level:2}],m={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modelling-composition-with-semigroups"},"Modelling composition with Semigroups"),(0,o.kt)("p",null,"A semigroup is a recipe to combine two, or more, values."),(0,o.kt)("p",null,"A semigroup is an ",(0,o.kt)("strong",{parentName:"p"},"algebra"),", which is generally defined as a specific combination of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"one or more sets"),(0,o.kt)("li",{parentName:"ul"},"one or more operations on those sets"),(0,o.kt)("li",{parentName:"ul"},"zero or more laws on the previous operations")),(0,o.kt)("p",null,"Algebras are how mathematicians try to capture an idea in its purest form, eliminating everything that is superfluous."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When an algebra is modified the only allowed operations are those defined by the algebra itself according to its own laws")),(0,o.kt)("p",null,"Algebras can be thought of as an abstraction of ",(0,o.kt)("strong",{parentName:"p"},"interfaces"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When an interface is modified the only allowed operations are those defined by the interface itself according to its own laws")),(0,o.kt)("p",null,"Before getting into semigroups, let's see first an example of an algebra, a ",(0,o.kt)("em",{parentName:"p"},"magma"),"."),(0,o.kt)("h2",{id:"definition-of-a-magma"},"Definition of a Magma"),(0,o.kt)("p",null,"A Magma is a very simple algebra:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a set or type (A)"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"concat")," operation"),(0,o.kt)("li",{parentName:"ul"},"no laws to obey")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": in most cases the terms ",(0,o.kt)("em",{parentName:"p"},"set")," and ",(0,o.kt)("em",{parentName:"p"},"type")," can be used interchangeably."),(0,o.kt)("p",null,"We can use a TypeScript ",(0,o.kt)("inlineCode",{parentName:"p"},"interface")," to model a Magma."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Magma<A> {\n  readonly concat: (first: A, second: A) => A\n}\n")),(0,o.kt)("p",null,"Thus, we have have the ingredients for an algebra:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a set ",(0,o.kt)("inlineCode",{parentName:"li"},"A")),(0,o.kt)("li",{parentName:"ul"},"an operation on the set ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"concat"),". This operation is said to be ",(0,o.kt)("em",{parentName:"li"},"closed on")," the set ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," which means that whichever elements ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," we apply the operation on the result will still be an element of ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),". Since the result is still an ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),", it can be used again as an input for ",(0,o.kt)("inlineCode",{parentName:"li"},"concat")," and the operation can be repeated how many times we want. In other words ",(0,o.kt)("inlineCode",{parentName:"li"},"concat")," is a ",(0,o.kt)("inlineCode",{parentName:"li"},"combinator")," for the type ",(0,o.kt)("inlineCode",{parentName:"li"},"A"),".")),(0,o.kt)("p",null,"Let's implement a concrete instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"Magma<A>")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," being the ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Magma } from 'fp-ts/Magma'\n\nconst MagmaSub: Magma<number> = {\n  concat: (first, second) => first - second\n}\n\n// helper\nconst getPipeableConcat = <A>(M: Magma<A>) => (second: A) => (first: A): A =>\n  M.concat(first, second)\n\nconst concat = getPipeableConcat(MagmaSub)\n\n// usage example\n\nimport { pipe } from 'fp-ts/function'\n\npipe(10, concat(2), concat(3), concat(1), concat(2), console.log)\n// => 2\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". The fact that ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," is a ",(0,o.kt)("em",{parentName:"p"},"closed")," operation isn't a trivial detail. If ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," is the set of natural numbers (defined as positive integers) instead of the JavaScript number type (a set of positive and negative floats), could we define a ",(0,o.kt)("inlineCode",{parentName:"p"},"Magma<Natural>")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," implemented like in ",(0,o.kt)("inlineCode",{parentName:"p"},"MagmaSub"),"? Can you think of any other ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," operation on natural numbers for which the ",(0,o.kt)("inlineCode",{parentName:"p"},"closure")," property isn't valid?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/functional-programming/quiz-answers/magma-concat-closed"},"answer here"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Definition"),". Given ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," a non empty set and ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," a binary operation ",(0,o.kt)("em",{parentName:"p"},"closed on")," (or ",(0,o.kt)("em",{parentName:"p"},"internal to"),") ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", then the pair ",(0,o.kt)("inlineCode",{parentName:"p"},"(A, *)")," is called a ",(0,o.kt)("em",{parentName:"p"},"magma"),"."),(0,o.kt)("p",null,"Magmas do not obey any law, they only have the closure requirement. Let's see an algebra that do requires another law: semigroups."),(0,o.kt)("h2",{id:"definition-of-a-semigroup"},"Definition of a Semigroup"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Given a ",(0,o.kt)("inlineCode",{parentName:"p"},"Magma")," if the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," operation is ",(0,o.kt)("strong",{parentName:"p"},"associative")," then it's a ",(0,o.kt)("em",{parentName:"p"},"semigroup"),".")),(0,o.kt)("p",null,'The term "associative" means that the equation:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(x * y) * z = x * (y * z)\n\n// or\nconcat(concat(a, b), c) = concat(a, concat(b, c))\n")),(0,o.kt)("p",null,"holds for any ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"In layman terms ",(0,o.kt)("em",{parentName:"p"},"associativity")," tells us that we do not have to worry about parentheses in expressions and that we can simply write ",(0,o.kt)("inlineCode",{parentName:"p"},"x * y * z")," (there's no ambiguity)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"String concatenation benefits from associativity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'("a" + "b") + "c" = "a" + ("b" + "c") = "abc"\n')),(0,o.kt)("p",null,"Every semigroup is a magma, but not every magma is a semigroup."),(0,o.kt)("center",null,(0,o.kt)("img",{src:"images/semigroup.png",width:"300",alt:"Magma vs Semigroup"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"The previous ",(0,o.kt)("inlineCode",{parentName:"p"},"MagmaSub")," is not a semigroup because its ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," operation is not associative."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'fp-ts/function'\nimport { Magma } from 'fp-ts/Magma'\n\nconst MagmaSub: Magma<number> = {\n  concat: (first, second) => first - second\n}\n\npipe(MagmaSub.concat(MagmaSub.concat(1, 2), 3), console.log) // => -4\npipe(MagmaSub.concat(1, MagmaSub.concat(2, 3)), console.log) // => 2\n")),(0,o.kt)("p",null,"Semigroups capture the essence of parallelizable operations"),(0,o.kt)("p",null,"If we know that there is such an operation that follows the associativity law, we can further split a computation into two sub computations, each of them could be further split into sub computations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"a * b * c * d * e * f * g * h = ((a * b) * (c * d)) * ((e * f) * (g * h))\n")),(0,o.kt)("p",null,"Sub computations can be run in parallel mode."),(0,o.kt)("p",null,"As for ",(0,o.kt)("inlineCode",{parentName:"p"},"Magma"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup"),"s are implemented through a TypeScript ",(0,o.kt)("inlineCode",{parentName:"p"},"interface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// fp-ts/lib/Semigroup.ts\n\ninterface Semigroup<A> extends Magma<A> {}\n")),(0,o.kt)("p",null,"The following law has to hold true:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Associativity"),": If ",(0,o.kt)("inlineCode",{parentName:"li"},"S")," is a semigroup the following has to hold true:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"S.concat(S.concat(x, y), z) = S.concat(x, S.concat(y, z))\n")),(0,o.kt)("p",null,"for every ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),". Sadly it is not possible to encode this law using TypeScript's type system."),(0,o.kt)("p",null,"Let's implement a semigroup for some ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadonlyArray<string>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as Se from 'fp-ts/Semigroup'\n\nconst Semigroup: Se.Semigroup<ReadonlyArray<string>> = {\n  concat: (first, second) => first.concat(second)\n}\n")),(0,o.kt)("p",null,"The name ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," makes sense for arrays (as we'll see later) but, depending on the context and the type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," on whom we're implementing an instance, the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," semigroup operation may have different interpretations and meanings:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"concatenation"'),(0,o.kt)("li",{parentName:"ul"},'"combination"'),(0,o.kt)("li",{parentName:"ul"},'"merging"'),(0,o.kt)("li",{parentName:"ul"},'"fusion"'),(0,o.kt)("li",{parentName:"ul"},'"selection"'),(0,o.kt)("li",{parentName:"ul"},'"sum"'),(0,o.kt)("li",{parentName:"ul"},'"substitution"')),(0,o.kt)("p",null,"and many others."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"This is how to implement the semigroup ",(0,o.kt)("inlineCode",{parentName:"p"},"(number, +)")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," is the usual addition of numbers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\n/** number `Semigroup` under addition */\nconst SemigroupSum: Semigroup<number> = {\n  concat: (first, second) => first + second\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". Can the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," combinator defined in the demo ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/enricopolanski/functional-programming/blob/master/src/01_retry.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"01_retry.ts"))," be used to define a ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup")," instance for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RetryPolicy")," type?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/functional-programming/quiz-answers/semigroup-demo-concat"},"answer here"))),(0,o.kt)("p",null,"This is the implementation for the semigroup ",(0,o.kt)("inlineCode",{parentName:"p"},"(number, *)")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," is the usual number multiplication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\n/** number `Semigroup` under multiplication */\nconst SemigroupProduct: Semigroup<number> = {\n  concat: (first, second) => first * second\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," It is a common mistake to think about the ",(0,o.kt)("em",{parentName:"p"},"semigroup of numbers"),", but for the same type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," it is possible to define more ",(0,o.kt)("strong",{parentName:"p"},"instances")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup<A>"),". We've seen how for ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," we can define a semigroup under ",(0,o.kt)("em",{parentName:"p"},"addition")," and ",(0,o.kt)("em",{parentName:"p"},"multiplication"),". It is also possible to have ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup"),"s that share the same operation but differ in types. ",(0,o.kt)("inlineCode",{parentName:"p"},"SemigroupSum")," could've been implemented on natural numbers instead of unsigned floats like ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("p",null,"Another example, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\nconst SemigroupString: Semigroup<string> = {\n  concat: (first, second) => first + second\n}\n")),(0,o.kt)("p",null,"Another two examples, this time with the ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\nconst SemigroupAll: Semigroup<boolean> = {\n  concat: (first, second) => first && second\n}\n\nconst SemigroupAny: Semigroup<boolean> = {\n  concat: (first, second) => first || second\n}\n")),(0,o.kt)("h2",{id:"the-concatall-function"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"concatAll")," function"),(0,o.kt)("p",null,"By definition ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," combines merely two elements of ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," every time. Is it possible to combine any number of them?"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"concatAll")," function takes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an instance of a semigroup"),(0,o.kt)("li",{parentName:"ul"},"an initial value"),(0,o.kt)("li",{parentName:"ul"},"an array of elements")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as S from 'fp-ts/Semigroup'\nimport * as N from 'fp-ts/number'\n\nconst sum = S.concatAll(N.SemigroupSum)(2)\n\nconsole.log(sum([1, 2, 3, 4])) // => 12\n\nconst product = S.concatAll(N.SemigroupProduct)(3)\n\nconsole.log(product([1, 2, 3, 4])) // => 72\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". Why do I need to provide an initial value?"),(0,o.kt)("p",null,"-> See the ",(0,o.kt)("a",{parentName:"p",href:"/functional-programming/quiz-answers/semigroup-concatAll-initial-value"},"answer here")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Lets provide some applications of ",(0,o.kt)("inlineCode",{parentName:"p"},"concatAll"),", by reimplementing some popular functions from the JavaScript standard library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as B from 'fp-ts/boolean'\nimport { concatAll } from 'fp-ts/Semigroup'\nimport * as S from 'fp-ts/struct'\n\nconst every = <A>(predicate: (a: A) => boolean) => (\n  as: ReadonlyArray<A>\n): boolean => concatAll(B.SemigroupAll)(true)(as.map(predicate))\n\nconst some = <A>(predicate: (a: A) => boolean) => (\n  as: ReadonlyArray<A>\n): boolean => concatAll(B.SemigroupAny)(false)(as.map(predicate))\n\nconst assign: (as: ReadonlyArray<object>) => object = concatAll(\n  S.getAssignSemigroup<object>()\n)({})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". Is the following semigroup instance lawful (does it respect semigroup laws)?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/functional-programming/quiz-answers/semigroup-first"},"answer here"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\n/** Always return the first argument */\nconst first = <A>(): Semigroup<A> => ({\n  concat: (first, _second) => first\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". Is the following semigroup instance lawful?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/functional-programming/quiz-answers/semigroup-second"},"answer here"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\n/** Always return the second argument */\nconst last = <A>(): Semigroup<A> => ({\n  concat: (_first, second) => second\n})\n")),(0,o.kt)("h2",{id:"the-dual-semigroup"},"The dual semigroup"),(0,o.kt)("p",null,"Given a semigroup instance, it is possible to obtain a new semigroup instance by simply swapping the order in which the operands are combined:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'fp-ts/function'\nimport { Semigroup } from 'fp-ts/Semigroup'\nimport * as S from 'fp-ts/string'\n\n// This is a Semigroup combinator\nconst reverse = <A>(S: Semigroup<A>): Semigroup<A> => ({\n  concat: (first, second) => S.concat(second, first)\n})\n\npipe(S.Semigroup.concat('a', 'b'), console.log) // => 'ab'\npipe(reverse(S.Semigroup).concat('a', 'b'), console.log) // => 'ba'\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". This combinator makes sense because, generally speaking, the ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," operation is not ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Commutative_property"},(0,o.kt)("strong",{parentName:"a"},"commutative")),", can you find an example where ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," is commutative and one where it isn't?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/functional-programming/quiz-answers/semigroup-commutative"},"answer here"))),(0,o.kt)("h2",{id:"semigroup-product"},"Semigroup product"),(0,o.kt)("p",null,"Let's try defining a semigroup instance for more complex types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as N from 'fp-ts/number'\nimport { Semigroup } from 'fp-ts/Semigroup'\n\n// models a vector starting at the origin\ntype Vector = {\n  readonly x: number\n  readonly y: number\n}\n\n// models a sum of two vectors\nconst SemigroupVector: Semigroup<Vector> = {\n  concat: (first, second) => ({\n    x: N.SemigroupSum.concat(first.x, second.x),\n    y: N.SemigroupSum.concat(first.y, second.y)\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const v1: Vector = { x: 1, y: 1 }\nconst v2: Vector = { x: 1, y: 2 }\n\nconsole.log(SemigroupVector.concat(v1, v2)) // => { x: 2, y: 3 }\n")),(0,o.kt)("center",null,(0,o.kt)("img",{src:"images/semigroupVector.png",width:"300",alt:"SemigroupVector"})),(0,o.kt)("p",null,"Too much boilerplate? The good news is that the ",(0,o.kt)("strong",{parentName:"p"},"mathematical theory")," behind semigroups tells us we can implement a semigroup instance for a struct like ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," if we can implement a semigroup instance for each of its fields."),(0,o.kt)("p",null,"Conveniently the ",(0,o.kt)("inlineCode",{parentName:"p"},"fp-ts/Semigroup")," module exports a ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," combinator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { struct } from 'fp-ts/Semigroup'\n\n// models the sum of two vectors\nconst SemigroupVector: Semigroup<Vector> = struct({\n  x: N.SemigroupSum,\n  y: N.SemigroupSum\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),". There is a combinator similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"struct")," that works with tuples: ",(0,o.kt)("inlineCode",{parentName:"p"},"tuple")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as N from 'fp-ts/number'\nimport { Semigroup, tuple } from 'fp-ts/Semigroup'\n\n// models a vector starting from origin\ntype Vector = readonly [number, number]\n\n// models the sum of two vectors\nconst SemigroupVector: Semigroup<Vector> = tuple(N.SemigroupSum, N.SemigroupSum)\n\nconst v1: Vector = [1, 1]\nconst v2: Vector = [1, 2]\n\nconsole.log(SemigroupVector.concat(v1, v2)) // => [2, 3]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". Is it true that given any ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup<A>")," and having chosen any ",(0,o.kt)("inlineCode",{parentName:"p"},"middle")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),", if I insert it between the two ",(0,o.kt)("inlineCode",{parentName:"p"},"concat")," parameters the result is still a semigroup?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { pipe } from 'fp-ts/function'\nimport { Semigroup } from 'fp-ts/Semigroup'\nimport * as S from 'fp-ts/string'\n\nexport const intercalate = <A>(middle: A) => (\n  S: Semigroup<A>\n): Semigroup<A> => ({\n  concat: (first, second) => S.concat(S.concat(first, middle), second)\n})\n\nconst SemigroupIntercalate = pipe(S.Semigroup, intercalate('|'))\n\npipe(\n  SemigroupIntercalate.concat('a', SemigroupIntercalate.concat('b', 'c')),\n  console.log\n) // => 'a|b|c'\n")),(0,o.kt)("h2",{id:"finding-a-semigroup-instance-for-any-type"},"Finding a Semigroup instance for any type"),(0,o.kt)("p",null,"The associativity property is a very strong requirement, what happens if, given a specific type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," we can't find an associative operation on ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"?"),(0,o.kt)("p",null,"Suppose we have a type ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type User = {\n  readonly id: number\n  readonly name: string\n}\n")),(0,o.kt)("p",null,"and that inside my database we have multiple copies of the same ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," (e.g. they could be historical entries of its modifications)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// internal APIs\ndeclare const getCurrent: (id: number) => User\ndeclare const getHistory: (id: number) => ReadonlyArray<User>\n")),(0,o.kt)("p",null,"and that we need to implement a public API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export declare const getUser: (id: number) => User\n")),(0,o.kt)("p",null,"which takes into account all of its copies depending on some criteria. The criteria should be to return the most recent copy, or the oldest one, or the current one, etc.."),(0,o.kt)("p",null,"Naturally we can define a specific API for each of these criterias:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export declare const getMostRecentUser: (id: number) => User\nexport declare const getLeastRecentUser: (id: number) => User\nexport declare const getCurrentUser: (id: number) => User\n// etc...\n")),(0,o.kt)("p",null,"Thus, to return a value of type ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," I need to consider all the copies and make a ",(0,o.kt)("inlineCode",{parentName:"p"},"merge")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"selection"),") of them, meaning I can model the criteria problem with a ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup<User>"),"."),(0,o.kt)("p",null,'That being said, it is not really clear right now what it means to "merge two ',(0,o.kt)("inlineCode",{parentName:"p"},"User"),'s" nor if this merge operation is associative.'),(0,o.kt)("p",null,"You can ",(0,o.kt)("strong",{parentName:"p"},"always")," define a Semigroup instance for ",(0,o.kt)("strong",{parentName:"p"},"any")," given type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," by defining a semigroup instance not for ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," itself but for ",(0,o.kt)("inlineCode",{parentName:"p"},"NonEmptyArray<A>")," called the ",(0,o.kt)("strong",{parentName:"p"},"free semigroup")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\n// represents a non-empty array, meaning an array that has at least one element A\ntype ReadonlyNonEmptyArray<A> = ReadonlyArray<A> & {\n  readonly 0: A\n}\n\n// the concatenation of two NonEmptyArrays is still a NonEmptyArray\nconst getSemigroup = <A>(): Semigroup<ReadonlyNonEmptyArray<A>> => ({\n  concat: (first, second) => [first[0], ...first.slice(1), ...second]\n})\n")),(0,o.kt)("p",null,"and then we can map the elements of ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),' to "singletons" of ',(0,o.kt)("inlineCode",{parentName:"p"},"ReadonlyNonEmptyArray<A>"),", meaning arrays with only one element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// insert an element into a non empty array\nconst of = <A>(a: A): ReadonlyNonEmptyArray<A> => [a]\n")),(0,o.kt)("p",null,"Let's apply this technique to the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  getSemigroup,\n  of,\n  ReadonlyNonEmptyArray\n} from 'fp-ts/ReadonlyNonEmptyArray'\nimport { Semigroup } from 'fp-ts/Semigroup'\n\ntype User = {\n  readonly id: number\n  readonly name: string\n}\n\n// this semigroup is not for the `User` type but for `ReadonlyNonEmptyArray<User>`\nconst S: Semigroup<ReadonlyNonEmptyArray<User>> = getSemigroup<User>()\n\ndeclare const user1: User\ndeclare const user2: User\ndeclare const user3: User\n\n// const merge: ReadonlyNonEmptyArray<User>\nconst merge = S.concat(S.concat(of(user1), of(user2)), of(user3))\n\n// I can get the same result by \"packing\" the users manually into an array\nconst merge2: ReadonlyNonEmptyArray<User> = [user1, user2, user3]\n")),(0,o.kt)("p",null,"Thus, the free semigroup of ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," is merely another semigroup in which the elements are all possible, non empty, finite sequences of ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"The free semigroup of ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," can be seen as a ",(0,o.kt)("em",{parentName:"p"},"lazy")," way to ",(0,o.kt)("inlineCode",{parentName:"p"},"concat"),"enate elements of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," while preserving their data content."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"merge")," value, containing ",(0,o.kt)("inlineCode",{parentName:"p"},"[user1, user2, user3]"),", tells us which are the elements to concatenate and in which order they are."),(0,o.kt)("p",null,"Now I have three possible options to design the ",(0,o.kt)("inlineCode",{parentName:"p"},"getUser")," API:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"I can define ",(0,o.kt)("inlineCode",{parentName:"li"},"Semigroup<User>")," and I want to get straight into ",(0,o.kt)("inlineCode",{parentName:"li"},"merge"),"ing.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"declare const SemigroupUser: Semigroup<User>\n\nexport const getUser = (id: number): User => {\n  const current = getCurrent(id)\n  const history = getHistory(id)\n  return concatAll(SemigroupUser)(current)(history)\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"I can't define ",(0,o.kt)("inlineCode",{parentName:"li"},"Semigroup<User>")," or I want to leave the merging strategy open to implementation, thus I'll ask it to the API consumer:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const getUser = (SemigroupUser: Semigroup<User>) => (\n  id: number\n): User => {\n  const current = getCurrent(id)\n  const history = getHistory(id)\n  // merge immediately\n  return concatAll(SemigroupUser)(current)(history)\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"I can't define ",(0,o.kt)("inlineCode",{parentName:"li"},"Semigroup<User>")," nor I want to require it.")),(0,o.kt)("p",null,"In this case the free semigroup of ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," can come to the rescue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const getUser = (id: number): ReadonlyNonEmptyArray<User> => {\n  const current = getCurrent(id)\n  const history = getHistory(id)\n  // I DO NOT proceed with merging and return the free semigroup of User\n  return [current, ...history]\n}\n")),(0,o.kt)("p",null,"It should be noted that, even when I do have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup<A>")," instance, using a free semigroup might be still convenient for the following reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"avoids executing possibly expensive and pointless computations"),(0,o.kt)("li",{parentName:"ul"},"avoids passing around the semigroup instance"),(0,o.kt)("li",{parentName:"ul"},"allows the API consumer to decide which is the correct merging strategy (by using ",(0,o.kt)("inlineCode",{parentName:"li"},"concatAll"),").")),(0,o.kt)("h2",{id:"order-derivable-semigroups"},"Order-derivable Semigroups"),(0,o.kt)("p",null,"Given that ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," is ",(0,o.kt)("strong",{parentName:"p"},"a total order")," (meaning that whichever ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," we choose, one of those two conditions has to hold true: ",(0,o.kt)("inlineCode",{parentName:"p"},"x <= y")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"y <= x"),") we can define another two ",(0,o.kt)("inlineCode",{parentName:"p"},"Semigroup<number>")," instances using the ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"max")," operations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Semigroup } from 'fp-ts/Semigroup'\n\nconst SemigroupMin: Semigroup<number> = {\n  concat: (first, second) => Math.min(first, second)\n}\n\nconst SemigroupMax: Semigroup<number> = {\n  concat: (first, second) => Math.max(first, second)\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quiz"),". Why is it so important that ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," is a ",(0,o.kt)("em",{parentName:"p"},"total")," order?"),(0,o.kt)("p",null,"It would be very useful to define such semigroups (",(0,o.kt)("inlineCode",{parentName:"p"},"SemigroupMin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SemigroupMax"),") for different types than ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("p",null,"Is it possible to capture the notion of being ",(0,o.kt)("em",{parentName:"p"},"totally ordered")," for other types?"),(0,o.kt)("p",null,"To speak about ",(0,o.kt)("em",{parentName:"p"},"ordering")," we first need to capture the notion of ",(0,o.kt)("em",{parentName:"p"},"equality"),"."))}c.isMDXComponent=!0}}]);