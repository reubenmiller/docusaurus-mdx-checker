"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6145],{2599:(e,n,t)=>{t.d(n,{Z:()=>o});t(7378);var a=t(7140);const r={tabItem:"tabItem_wHwb"};var s=t(4246);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7378),r=t(7140),s=t(9169),o=t(3620),l=t(9749),i=t(8981),c=t(56),u=t(8796);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=c??b;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var y=t(4246);function g(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=b(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,y.jsx)(g,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(n))}},8900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(4246),r=t(1670),s=t(8447),o=t(2599);const l={id:"dynamodb",title:"Using with DynamoDB"},i=void 0,c={unversionedId:"dynamodb",id:"version-29.6/dynamodb",title:"Using with DynamoDB",description:"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with DynamoDB.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/version-29.6/DynamoDB.md",sourceDirName:".",slug:"/dynamodb",permalink:"/ro/docs/dynamodb",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"29.6",frontMatter:{id:"dynamodb",title:"Using with DynamoDB"},sidebar:"docs",previous:{title:"Using with MongoDB",permalink:"/ro/docs/mongodb"},next:{title:"Manipularea DOM",permalink:"/ro/docs/tutorial-jquery"}},u={},d=[{value:"Use jest-dynamodb Preset",id:"use-jest-dynamodb-preset",level:2}];function h(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["With the ",(0,a.jsx)(n.a,{href:"/ro/docs/configuration#globalsetup-string",children:"Global Setup/Teardown"})," and ",(0,a.jsx)(n.a,{href:"/ro/docs/configuration#testenvironment-string",children:"Async Test Environment"})," APIs, Jest can work smoothly with ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/dynamodb/",children:"DynamoDB"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"use-jest-dynamodb-preset",children:"Use jest-dynamodb Preset"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"Jest DynamoDB"})," provides all required configuration to run your tests using DynamoDB."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["First, install ",(0,a.jsx)(n.code,{children:"@shelf/jest-dynamodb"})]}),"\n"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(o.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @shelf/jest-dynamodb\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @shelf/jest-dynamodb\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @shelf/jest-dynamodb\n"})})})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Specify preset in your Jest configuration:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "@shelf/jest-dynamodb"\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["Create ",(0,a.jsx)(n.code,{children:"jest-dynamodb-config.js"})," and define DynamoDB tables"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property",children:"Create Table API"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  tables: [\n    {\n      TableName: `files`,\n      KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],\n      AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],\n      ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},\n    },\n    // etc\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Configure DynamoDB client"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const {DocumentClient} = require('aws-sdk/clients/dynamodb');\n\nconst isTest = process.env.JEST_WORKER_ID;\nconst config = {\n  convertEmptyValues: true,\n  ...(isTest && {\n    endpoint: 'localhost:8000',\n    sslEnabled: false,\n    region: 'local-env',\n  }),\n};\n\nconst ddb = new DocumentClient(config);\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Write tests"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"it('should insert item into table', async () => {\n  await ddb\n    .put({TableName: 'files', Item: {id: '1', hello: 'world'}})\n    .promise();\n\n  const {Item} = await ddb.get({TableName: 'files', Key: {id: '1'}}).promise();\n\n  expect(Item).toEqual({\n    id: '1',\n    hello: 'world',\n  });\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"There's no need to load any dependencies."}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"documentation"})," for details."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>s});var a=t(7378);const r=a.createContext({});function s(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:s(e),a.createElement(r.Provider,{value:l},n)}}}]);