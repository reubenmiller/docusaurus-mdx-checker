"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2318],{1486:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=s(4246),a=s(1670);const i={title:"Jest 23: \ud83d\udd25 Blazing Fast Delightful Testing",author:"Rick Hanlon II",authorURL:"https://twitter.com/rickhanlonii",authorFBID:160800566},r=void 0,o={permalink:"/blog/2018/05/29/jest-23-blazing-fast-delightful-testing",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2018-05-29-jest-23-blazing-fast-delightful-testing.md",source:"@site/blog/2018-05-29-jest-23-blazing-fast-delightful-testing.md",title:"Jest 23: \ud83d\udd25 Blazing Fast Delightful Testing",description:"Today we are excited to announce Jest 23, our largest major release to date! Together with over 100 contributors, we've shipped a ton of features and bug fixes. Thank you to everyone in the community for helping make JavaScript Testing Delightful.",date:"2018-05-29T00:00:00.000Z",formattedDate:"May 29, 2018",tags:[],readingTime:6.17,hasTruncateMarker:!0,authors:[{name:"Rick Hanlon II",url:"https://twitter.com/rickhanlonii"}],frontMatter:{title:"Jest 23: \ud83d\udd25 Blazing Fast Delightful Testing",author:"Rick Hanlon II",authorURL:"https://twitter.com/rickhanlonii",authorFBID:160800566},unlisted:!1,prevItem:{title:"Supporting Jest Open Source",permalink:"/blog/2018/06/27/supporting-jest-open-source"},nextItem:{title:"Jest 22: Refinements & Custom Runners",permalink:"/blog/2017/12/18/jest-22"}},h={authorsImageUrls:[void 0]},c=[{value:"Interactive Snapshot Mode",id:"interactive-snapshot-mode",level:2},{value:"Snapshot Property Matchers",id:"snapshot-property-matchers",level:2},{value:"Custom Asynchronous matchers",id:"custom-asynchronous-matchers",level:2},{value:"Custom Asymmetric Matchers",id:"custom-asymmetric-matchers",level:2},{value:"Jest Each",id:"jest-each",level:2},{value:"New Matchers",id:"new-matchers",level:2},{value:"Debug Hanging Tests",id:"debug-hanging-tests",level:2},{value:"Watch Mode Plugins",id:"watch-mode-plugins",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"Jest Summit",id:"jest-summit",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",img:"img",code:"code",ul:"ul",li:"li",strong:"strong",em:"em"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Today we are excited to announce Jest 23, our largest major release to date! Together with over 100 contributors, we've shipped a ton of features and bug fixes. Thank you to everyone in the community for helping make JavaScript Testing Delightful."}),"\n",(0,n.jsxs)(t.p,{children:["We would also like to welcome both ",(0,n.jsx)(t.a,{href:"https://babeljs.io/",children:"Babel"})," and ",(0,n.jsx)(t.a,{href:"https://webpack.js.org/",children:"webpack"})," to the Jest community! After converting from Mocha to Jest 23 Beta, webpack saw their total test suite time reduced 6x from over 13 minutes to 2 minutes 20 seconds. ",(0,n.jsx)(t.a,{href:"https://twitter.com/search?q=%23blazingmeansgood",children:"#blazingmeansgood"})]}),"\n",(0,n.jsx)(t.p,{children:"Here's are some of the Jest 23 highlights and breaking changes."}),"\n",(0,n.jsxs)(t.p,{children:["For a full list see the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md",children:"changelog"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"interactive-snapshot-mode",children:"Interactive Snapshot Mode"}),"\n",(0,n.jsx)(t.p,{children:"We've added a new default watch menu option we're calling Interactive Snapshot Mode. This new mode allows you to step through each failing snapshot in each failing suite to review your failed snapshots and choose to update or skip each individually."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Interactive snapshot mode in action",src:s(1156).Z+"",width:"1004",height:"732"})}),"\n",(0,n.jsxs)(t.p,{children:["See the Interactive Snapshot Mode docs ",(0,n.jsx)(t.a,{href:"/docs/snapshot-testing#interactive-snapshot-mode",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"snapshot-property-matchers",children:"Snapshot Property Matchers"}),"\n",(0,n.jsx)(t.p,{children:"Often, objects you're snapshotting contain generated values like Dates and IDs. Jest now allows you to pass properties to the snapshot matcher which specify the structure of the data instead of the specific values. These property matchers are then verified before serializing the matcher type (instead of the value), giving you consistent snapshot results across test runs."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Snapshot Property Matchers",src:s(8184).Z+"",width:"2236",height:"1177"})}),"\n",(0,n.jsxs)(t.p,{children:["See the updated ",(0,n.jsx)(t.code,{children:"toMatchSnapshot"})," ",(0,n.jsx)(t.a,{href:"/docs/expect#tomatchsnapshotpropertymatchers-snapshotname",children:"docs"})," or the Property Matcher ",(0,n.jsx)(t.a,{href:"/docs/snapshot-testing#property-matchers",children:"guide"})," for more information."]}),"\n",(0,n.jsx)(t.h2,{id:"custom-asynchronous-matchers",children:"Custom Asynchronous matchers"}),"\n",(0,n.jsxs)(t.p,{children:["We now support asynchronous matchers with ",(0,n.jsx)(t.code,{children:"expect.extends"}),"! Async matchers return a Promise so that you can ",(0,n.jsx)(t.code,{children:"await"})," for the matcher to resolve. As an example:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Custom asynchronous matchers in action",src:s(3403).Z+"",width:"2230",height:"876"})}),"\n",(0,n.jsxs)(t.p,{children:["Docs available ",(0,n.jsx)(t.a,{href:"/docs/expect#expectextendmatchers",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"custom-asymmetric-matchers",children:"Custom Asymmetric Matchers"}),"\n",(0,n.jsx)(t.p,{children:"Asymmetric matchers are a great tool to use when you only care about asymmetric equality. For example, when the left side is expected to be an object with some subset of properties on the right, instead of an exact match. Jest provides a number of asymmetric matchers out of the box, and in this release we're introducing Custom Asymmetric Matchers."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Custom asymmetric matchers in action",src:s(3455).Z+"",width:"2230",height:"1012"})}),"\n",(0,n.jsx)(t.h2,{id:"jest-each",children:"Jest Each"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://twitter.com/mattphillipsio",children:"@mattphillipsio"})," has donated the ",(0,n.jsx)(t.code,{children:"jest-each"})," package to Jest Core (thanks Matt!). ",(0,n.jsx)(t.code,{children:"jest-each"})," is a library inspired by ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/mocha-each",children:(0,n.jsx)(t.code,{children:"mocha-each"})})," and ",(0,n.jsx)(t.a,{href:"http://spockframework.org/spock/docs/1.1/data_driven_testing.html#data-tables",children:"Spock Data Tables"})," which allows you to define a table of test cases, and then run a test for each row with the specified column values. We support both array types and template literals for all flavors of ",(0,n.jsx)(t.code,{children:"describe"})," and ",(0,n.jsx)(t.code,{children:"test"}),". Docs are available ",(0,n.jsx)(t.a,{href:"/docs/api#testeachtable-name-fn",children:"here"}),", and for those not on Jest 23 yet, we're still publishing ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/jest-each",children:(0,n.jsx)(t.code,{children:"jest-each"})})," separately!"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"jest-each in action",src:s(9966).Z+"",width:"2230",height:"1304"})}),"\n",(0,n.jsxs)(t.p,{children:["Huge shout out to Prettier for ",(0,n.jsx)(t.a,{href:"https://github.com/prettier/prettier/pull/4423",children:"fixing"})," the table formatting so quickly (",(0,n.jsx)(t.a,{href:"https://prettier.io/blog/2018/05/23/1.13.0.html#format-new-describeeach-table-in-jest-23-4423-by-ikatyang",children:"see Prettier 1.13"}),")!"]}),"\n",(0,n.jsx)(t.h2,{id:"new-matchers",children:"New Matchers"}),"\n",(0,n.jsxs)(t.p,{children:["We only add matchers to core if we believe they will be useful to a large amount of people in the Jest community, and leave the majority of matchers to the community (see ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/jest-extended",children:"jest-extended"}),"). Some matchers make the cut into core, and Jest 23 adds:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"nthCalledWith"}),"\n",(0,n.jsx)(t.li,{children:"toReturn"}),"\n",(0,n.jsx)(t.li,{children:"toReturnTimes"}),"\n",(0,n.jsx)(t.li,{children:"toReturnWith"}),"\n",(0,n.jsx)(t.li,{children:"lastReturnedWith"}),"\n",(0,n.jsx)(t.li,{children:"nthReturnedWith"}),"\n",(0,n.jsx)(t.li,{children:"toStrictEqual"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"New matchers in action",src:s(3873).Z+"",width:"2230",height:"1276"})}),"\n",(0,n.jsxs)(t.p,{children:["See the updated expect docs ",(0,n.jsx)(t.a,{href:"/docs/expect",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"debug-hanging-tests",children:"Debug Hanging Tests"}),"\n",(0,n.jsxs)(t.p,{children:["A common issue we see on the issue tracker relates to \u201cJest\u201d hanging after a test run. This is usually due to app code leaving handles open, preventing Jest from exiting. In the past, users have resorted to ",(0,n.jsx)(t.code,{children:"--forceExit"})," to fix (not recommended)."]}),"\n",(0,n.jsx)(t.p,{children:"To help debug these issues, we're now detecting when Jest does not exit:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Detecting hanging tests",src:s(8555).Z+"",width:"2236",height:"780"})}),"\n",(0,n.jsxs)(t.p,{children:["And we offer a new flag ",(0,n.jsx)(t.code,{children:"--detectOpenHandles"})," to help find the open handles:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Running detectOpenHandles",src:s(7694).Z+"",width:"2236",height:"1106"})}),"\n",(0,n.jsxs)(t.p,{children:["See the updated CLI docs ",(0,n.jsx)(t.a,{href:"/docs/cli#detectopenhandles",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"watch-mode-plugins",children:"Watch Mode Plugins"}),"\n",(0,n.jsxs)(t.p,{children:["We have completely rewritten the watch mode system to allow adding custom plugins to watch mode. Watch Mode Plugins now make it possible to hook into Jest events and provide custom menu options in the Watch Mode Menu. All of the default Watch Mode prompts are implemented as plugins in this system, and the docs to create your own are available ",(0,n.jsx)(t.a,{href:"/docs/watch-plugins",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["With this change, we're also now able to bring back typeahead support as a Watch Mode Plugin via ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/jest-watch-typeahead",children:"jest-watch-typeahead"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Typeahead plugin in action",src:s(6967).Z+"",width:"1001",height:"731"})}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://github.com/jest-community/jest-watch-typeahead",children:"jest-watch-typeahead"})," for documentation and install instructions. Huge thank you to ",(0,n.jsx)(t.a,{href:"https://twitter.com/rogeliog",children:"@rogeliog"})," for the new watch mode plugin system and the jest-watch-typeahead plugin!"]}),"\n",(0,n.jsx)(t.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,n.jsx)(t.p,{children:"As with every major release, we are making a few breaking changes to make larger changes in the future possible and to push the testing experience to a new level. Here's a list of the biggest changes you may see:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Require test descriptions and functions"}),": We're now failing tests that do not include both a function and a description."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Remove undefined props from React snapshots"}),": Smaller snapshots and proper React behavior."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Remove deprecations"}),": We removed mapCoverage since it's no longer needed. Additionally, we removed ",(0,n.jsx)(t.code,{children:"jest.genMockFunction"})," and ",(0,n.jsx)(t.code,{children:"jest.genMockFn"})," since these are the same as ",(0,n.jsx)(t.code,{children:"jest.fn"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Add snapshot names to failures"}),": We added the snapshot name (if provided) to the snapshot failure message so it's easier to find the snapshot that's failing."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Replace mock timestamps"}),": We replaced mock timestamps with invocationCallOrder since two or mocks may often have the same timestamp, making it impossible to test the call order."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Add results to mock snapshots"}),": We added mock function call results to snapshots so that both the calls and the results of the invocation are tracked."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"other-improvements",children:"Other Improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Watch mode coverage"}),": Coverage is now limited to only the files tested in watch mode or when using ",(0,n.jsx)(t.code,{children:"--onlyChanged"})," and ",(0,n.jsx)(t.code,{children:"--findRelatedTests"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Version documentation"}),": We added docs for each minor release back to Jest 22, and have removed all of the \u201cRequires Jest X.X+\u201d from the docs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Better snapshot summaries"}),": We overhauled the Snapshot Summary output to make obsolete snapshots more informative."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Better stack traces"}),": We added stack traces to asynchronous errors, timeout errors, expect.assertions, and thrown non-errors. We're also indicating the column in the code frame!"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Better React 16 support"}),": Adds snapshot support for ",(0,n.jsx)(t.code,{children:"React.Fragment"}),", ",(0,n.jsx)(t.code,{children:"React.forwardRef"}),", and ",(0,n.jsx)(t.code,{children:"React.createContext"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Track mock return and throw values"}),": Adds ",(0,n.jsx)(t.code,{children:"mock.results"})," that contains the return value or thrown value for each mock call."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Blazing \ud83d\udd25"}),": We've added a blazing badge to the README to indicate that Jest is blazing good."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"jest-summit",children:"Jest Summit"}),"\n",(0,n.jsx)(t.p,{children:"Last week, the Jest Core Team met for the Jest Summit at Facebook London where worked on and released Jest 23, announced the Jest Open Collective, and gave a number of talks:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Christoph Nakazawa"})," \u2013 ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=cAKYQpTC7MA",children:"Intro"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Aaron Abramov"})," \u2013 ",(0,n.jsx)(t.a,{href:"https://youtu.be/cAKYQpTC7MA?t=440",children:"Writing Meaningful Tests"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rick Hanlon II"})," \u2013 ",(0,n.jsx)(t.a,{href:"https://youtu.be/cAKYQpTC7MA?t=1881",children:"Blazing Fast Snapshot Testing in Jest 23"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Simen Bekkhus"})," \u2013 ",(0,n.jsx)(t.a,{href:"https://youtu.be/cAKYQpTC7MA?t=2990",children:"Jest's Delightful Error Messages"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Matt Phillips"})," \u2013 ",(0,n.jsx)(t.a,{href:"https://youtu.be/cAKYQpTC7MA?t=3852",children:"Level up your Jest experience with community packages"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Michele Bertoli"})," \u2013 ",(0,n.jsx)(t.a,{href:"https://youtu.be/cAKYQpTC7MA?t=4582",children:"Snapshot all the things"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Jordan Eldredge"})," \u2013 ",(0,n.jsx)(t.a,{href:"https://youtu.be/cAKYQpTC7MA?t=5185",children:"Webamp: Learn by imitating"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Full talk is available ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=cAKYQpTC7MA",children:"here"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The turnout was amazing, and we were able to meet a lot of the London-based community in person. Thank you to everyone who joined us and for your continued support! Stay tuned for our next post which will outline the Jest Open Collective and the plans we have for the future."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"As always, this release couldn't have been possible without you, the JavaScript community. We are incredibly grateful that we get the opportunity to work on improving JavaScript testing together. If you'd like to contribute to Jest, please don't hesitate to reach out to us on"})," ",(0,n.jsxs)(t.em,{children:[(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest",children:"GitHub"})," or on"]})," ",(0,n.jsxs)(t.em,{children:[(0,n.jsx)(t.a,{href:"https://discord.gg/j6FKKQQrW9",children:"Discord"}),"."]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},3455:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-asymmetric-matchers-12a593708f9e4cec91225d63c49e959e.png"},3403:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-async-matchers-91183e14fbce836540d2079f145dbe97.png"},7694:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-hanging-after-4f446e62ff117f6ae7f669d56057d206.png"},8555:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-hanging-before-867f8f3cfd6d67bb5ce37bf11f053749.png"},1156:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-interactive-3b2c2f9ec0fecc4effbc03fbc3ad1963.gif"},9966:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-jest-each-3d938745102750ad491139ea700842ab.png"},3873:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-new-matchers-8aaaad14f7dc524a46b99503b6ede43b.png"},8184:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-snapshot-matchers-aa63fd590f453650a67eaa0d99f678e3.png"},6967:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/23-typeahead-b16e5a1f51f3b3852df9fcc508c920d1.gif"},1670:(e,t,s)=>{s.d(t,{Zo:()=>o,ah:()=>i});var n=s(7378);const a=n.createContext({});function i(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:i(e),n.createElement(a.Provider,{value:o},t)}}}]);