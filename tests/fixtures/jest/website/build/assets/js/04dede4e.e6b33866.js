"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7091],{2599:(e,s,n)=>{n.d(s,{Z:()=>r});n(7378);var t=n(7140);const a={tabItem:"tabItem_wHwb"};var o=n(4246);function r(e){let{children:s,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,r),hidden:n,children:s})}},8447:(e,s,n)=>{n.d(s,{Z:()=>v});var t=n(7378),a=n(7140),o=n(9169),r=n(3620),l=n(9749),i=n(8981),c=n(56),d=n(8796);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:a}}=e;return{value:s,label:n,attributes:t,default:a}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const a=(0,r.k6)(),o=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,i._X)(o),(0,t.useCallback)((e=>{if(!o)return;const s=new URLSearchParams(a.location.search);s.set(o,e),a.replace({...a.location,search:s.toString()})}),[o,a])]}function f(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,o=p(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:o}))),[c,u]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,o]=(0,d.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),j=(()=>{const e=c??f;return h({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=n(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=n(4246);function x(e){let{className:s,block:n,selectedValue:t,selectValue:r,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const s=e.currentTarget,n=i.indexOf(s),a=l[n].value;a!==t&&(c(s),r(a))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;s=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;s=i[n]??i[i.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function y(e){let{lazy:s,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=o.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function w(e){const s=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...e,...s}),(0,b.jsx)(y,{...e,...s})]})}function v(e){const s=(0,g.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(s))}},4406:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=n(4246),a=n(1670),o=n(8447),r=n(2599);const l={id:"webpack",title:"Using with webpack"},i=void 0,c={unversionedId:"webpack",id:"webpack",title:"Using with webpack",description:"Jest can be used in projects that use webpack to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools.",source:"@site/../docs/Webpack.md",sourceDirName:".",slug:"/webpack",permalink:"/docs/next/webpack",draft:!1,unlisted:!1,editUrl:"https://github.com/jestjs/jest/edit/main/website/../docs/Webpack.md",tags:[],version:"current",lastUpdatedBy:"Tom Mrazauskas",lastUpdatedAt:1675596286,formattedLastUpdatedAt:"Feb 5, 2023",frontMatter:{id:"webpack",title:"Using with webpack"},sidebar:"docs",previous:{title:"ECMAScript Modules",permalink:"/docs/next/ecmascript-modules"},next:{title:"Using with puppeteer",permalink:"/docs/next/puppeteer"}},d={},u=[{value:"A webpack example",id:"a-webpack-example",level:2},{value:"Handling Static Assets",id:"handling-static-assets",level:3},{value:"Mocking CSS Modules",id:"mocking-css-modules",level:3},{value:"Configuring Jest to find our files",id:"configuring-jest-to-find-our-files",level:3},{value:"Using with webpack",id:"using-with-webpack",level:2}];function p(e){const s=Object.assign({p:"p",a:"a",em:"em",h2:"h2",pre:"pre",code:"code",h3:"h3",admonition:"admonition"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Jest can be used in projects that use ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," to manage assets, styles, and compilation. webpack ",(0,t.jsx)(s.em,{children:"does"})," offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools."]}),"\n",(0,t.jsx)(s.h2,{id:"a-webpack-example",children:"A webpack example"}),"\n",(0,t.jsx)(s.p,{children:"Let's start with a common sort of webpack config file and translate it to a Jest setup."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="webpack.config.js"',children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?$/,\n        exclude: ['node_modules'],\n        use: ['babel-loader'],\n      },\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader'],\n      },\n      {\n        test: /\\.gif$/,\n        type: 'asset/inline',\n      },\n      {\n        test: /\\.(ttf|eot|svg)$/,\n        type: 'asset/resource',\n      },\n    ],\n  },\n  resolve: {\n    alias: {\n      config$: './configs/app-config.js',\n      react: './vendor/react-master',\n    },\n    extensions: ['.js', '.jsx'],\n    modules: [\n      'node_modules',\n      'bower_components',\n      'shared',\n      '/shared/vendor/modules',\n    ],\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you have JavaScript files that are transformed by Babel, you can ",(0,t.jsx)(s.a,{href:"/docs/next/getting-started#using-babel",children:"enable support for Babel"})," by installing the ",(0,t.jsx)(s.code,{children:"babel-jest"})," plugin. Non-Babel JavaScript transformations can be handled with Jest's ",(0,t.jsx)(s.a,{href:"/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,t.jsx)(s.code,{children:"transform"})})," config option."]}),"\n",(0,t.jsx)(s.h3,{id:"handling-static-assets",children:"Handling Static Assets"}),"\n",(0,t.jsx)(s.p,{children:"Next, let's configure Jest to gracefully handle asset files such as stylesheets and images. Usually, these files aren't particularly useful in tests so we can safely mock them out. However, if you are using CSS Modules then it's better to mock a proxy for your className lookups."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"And the mock files themselves:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/styleMock.js"',children:"module.exports = {};\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/fileMock.js"',children:"module.exports = 'test-file-stub';\n"})}),"\n",(0,t.jsx)(s.h3,{id:"mocking-css-modules",children:"Mocking CSS Modules"}),"\n",(0,t.jsxs)(s.p,{children:["You can use an ",(0,t.jsx)(s.a,{href:"https://github.com/keyanzhang/identity-obj-proxy",children:"ES6 Proxy"})," to mock ",(0,t.jsx)(s.a,{href:"https://github.com/css-modules/css-modules",children:"CSS Modules"}),":"]}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(r.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev identity-obj-proxy\n"})})}),(0,t.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev identity-obj-proxy\n"})})}),(0,t.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev identity-obj-proxy\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Then all your className lookups on the styles object will be returned as-is (e.g., ",(0,t.jsx)(s.code,{children:"styles.foobar === 'foobar'"}),"). This is pretty handy for React ",(0,t.jsx)(s.a,{href:"/docs/next/snapshot-testing",children:"Snapshot Testing"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js (for CSS Modules)"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If ",(0,t.jsx)(s.code,{children:"moduleNameMapper"})," cannot fulfill your requirements, you can use Jest's ",(0,t.jsx)(s.a,{href:"/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,t.jsx)(s.code,{children:"transform"})})," config option to specify how assets are transformed. For example, a transformer that returns the basename of a file (such that ",(0,t.jsx)(s.code,{children:"require('logo.jpg');"})," returns ",(0,t.jsx)(s.code,{children:"'logo'"}),") can be written as:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js (for custom transformers and CSS Modules)"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"We've told Jest to ignore files matching a stylesheet or image extension, and instead, require our mock files. You can adjust the regular expression to match the file types your webpack config handles."}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["Remember to include the default ",(0,t.jsx)(s.code,{children:"babel-jest"})," transformer explicitly, if you wish to use it alongside with additional code preprocessors:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,t.jsx)(s.h3,{id:"configuring-jest-to-find-our-files",children:"Configuring Jest to find our files"}),"\n",(0,t.jsxs)(s.p,{children:["Now that Jest knows how to process our files, we need to tell it how to ",(0,t.jsx)(s.em,{children:"find"})," them. For webpack's ",(0,t.jsx)(s.code,{children:"modules"}),", and ",(0,t.jsx)(s.code,{children:"extensions"})," options there are direct analogs in Jest's ",(0,t.jsx)(s.code,{children:"moduleDirectories"})," and ",(0,t.jsx)(s.code,{children:"moduleFileExtensions"})," options."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"<rootDir>"})," is a special token that gets replaced by Jest with the root of your project. Most of the time this will be the folder where your ",(0,t.jsx)(s.code,{children:"package.json"})," is located unless you specify a custom ",(0,t.jsx)(s.a,{href:"/docs/next/configuration#rootdir-string",children:(0,t.jsx)(s.code,{children:"rootDir"})})," option in your configuration."]})}),"\n",(0,t.jsxs)(s.p,{children:["Similarly, Jest's counterpart for Webpack's ",(0,t.jsx)(s.code,{children:"resolve.roots"})," (an alternative to setting ",(0,t.jsx)(s.code,{children:"NODE_PATH"}),") is ",(0,t.jsx)(s.code,{children:"modulePaths"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["And finally, we have to handle the webpack ",(0,t.jsx)(s.code,{children:"alias"}),". For that, we can make use of the ",(0,t.jsx)(s.code,{children:"moduleNameMapper"})," option again."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n\n    '^react(.*)$': '<rootDir>/vendor/react-master$1',\n    '^config$': '<rootDir>/configs/app-config.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"That's it! webpack is a complex and flexible tool, so you may have to make some adjustments to handle your specific application's needs. Luckily for most projects, Jest should be more than flexible enough to handle your webpack config."}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["For more complex webpack configurations, you may also want to investigate projects such as: ",(0,t.jsx)(s.a,{href:"https://github.com/istarkov/babel-plugin-webpack-loaders",children:"babel-plugin-webpack-loaders"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"using-with-webpack",children:"Using with webpack"}),"\n",(0,t.jsxs)(s.p,{children:["In addition to installing ",(0,t.jsx)(s.code,{children:"babel-jest"})," as described earlier, you'll need to add ",(0,t.jsx)(s.code,{children:"@babel/preset-env"})," like so:"]}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(r.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-env\n"})})}),(0,t.jsx)(r.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @babel/preset-env\n"})})}),(0,t.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-env\n"})})})]}),"\n",(0,t.jsx)(s.p,{children:"Then, you'll want to configure Babel as follows:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:'title=".babelrc"',children:'{\n  "presets": ["@babel/preset-env"]\n}\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Jest caches files to speed up test execution. If you updated ",(0,t.jsx)(s.code,{children:".babelrc"})," and Jest is not working as expected, try clearing the cache by running ",(0,t.jsx)(s.code,{children:"jest --clearCache"}),"."]})}),"\n",(0,t.jsxs)(s.admonition,{type:"tip",children:[(0,t.jsxs)(s.p,{children:["If you use dynamic imports (",(0,t.jsx)(s.code,{children:"import('some-file.js').then(module => ...)"}),"), you need to enable the ",(0,t.jsx)(s.code,{children:"dynamic-import-node"})," plugin."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:'title=".babelrc"',children:'{\n  "presets": [["env", {"modules": false}]],\n\n  "plugins": ["syntax-dynamic-import"],\n\n  "env": {\n    "test": {\n      "plugins": ["dynamic-import-node"]\n    }\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(s.p,{children:["For an example of how to use Jest with webpack with React, you can view one ",(0,t.jsx)(s.a,{href:"https://github.com/jenniferabowd/jest_webpack_example",children:"here"}),"."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>o});var t=n(7378);const a=t.createContext({});function o(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:o(e),t.createElement(a.Provider,{value:l},s)}}}]);