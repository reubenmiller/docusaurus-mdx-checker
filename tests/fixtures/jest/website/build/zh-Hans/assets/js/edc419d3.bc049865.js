"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5039],{6600:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=n(4246),c=n(1670);const o={id:"bypassing-module-mocks",title:"\u7ed5\u8fc7\u6a21\u5757\u6a21\u62df"},r=void 0,i={unversionedId:"bypassing-module-mocks",id:"version-29.4/bypassing-module-mocks",title:"\u7ed5\u8fc7\u6a21\u5757\u6a21\u62df",description:"Jest\u5141\u8bb8\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u6a21\u62df\u6574\u4e2a\u6a21\u5757\u3002\u8fd9\u5bf9\u4e8e\u4f60\u6d4b\u8bd5\u88ab\u6d4b\u4ee3\u7801\u662f\u5426\u6b63\u5e38\u8c03\u7528\u67d0\u4e2a\u6a21\u5757\u7684\u51fd\u6570\u662f\u5f88\u6709\u7528\u7684\u3002 \u7136\u800c\uff0c\u4f60\u53ef\u80fd\u53ea\u60f3\u6a21\u62df\u90e8\u5206\u6a21\u5757\uff0c\u5269\u4e0b\u7684\u5219\u4f7f\u7528\u539f\u751f\u7684\u5b9e\u73b0\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-29.4/BypassingModuleMocks.md",sourceDirName:".",slug:"/bypassing-module-mocks",permalink:"/zh-Hans/docs/29.4/bypassing-module-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"29.4",frontMatter:{id:"bypassing-module-mocks",title:"\u7ed5\u8fc7\u6a21\u5757\u6a21\u62df"},sidebar:"docs",previous:{title:"ES6 \u7c7b\u6a21\u62df",permalink:"/zh-Hans/docs/29.4/es6-class-mocks"},next:{title:"ECMAScript Modules",permalink:"/zh-Hans/docs/29.4/ecmascript-modules"}},d={},a=[];function l(e){const s=Object.assign({p:"p",code:"code",pre:"pre"},(0,c.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Jest\u5141\u8bb8\u5728\u6d4b\u8bd5\u7528\u4f8b\u4e2d\u6a21\u62df\u6574\u4e2a\u6a21\u5757\u3002\u8fd9\u5bf9\u4e8e\u4f60\u6d4b\u8bd5\u88ab\u6d4b\u4ee3\u7801\u662f\u5426\u6b63\u5e38\u8c03\u7528\u67d0\u4e2a\u6a21\u5757\u7684\u51fd\u6570\u662f\u5f88\u6709\u7528\u7684\u3002 \u7136\u800c\uff0c\u4f60\u53ef\u80fd\u53ea\u60f3\u6a21\u62df\u90e8\u5206\u6a21\u5757\uff0c\u5269\u4e0b\u7684\u5219\u4f7f\u7528\u539f\u751f\u7684\u5b9e\u73b0\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u8003\u8651\u4e3a\u8fd9\u4e2a ",(0,t.jsx)(s.code,{children:"createUser"}),"\u51fd\u6570\u7f16\u5199\u4e00\u4e2a\u6d4b\u8bd5\u7528\u4f8b:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="createUser.js"',children:"import fetch from 'node-fetch';\n\nexport const createUser = async () => {\n  const response = await fetch('https://website.com/users', {method: 'POST'});\n  const userId = await response.text();\n  return userId;\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u4e0a\u8ff0\u6d4b\u8bd5\u4ee3\u7801\u6a21\u62df ",(0,t.jsx)(s.code,{children:"fetch"})," \u51fd\u6570\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u786e\u4fdd\u5b83\u5728\u8c03\u7528\u7684\u65f6\u5019\u4e0d\u4f1a\u53d1\u51fa\u771f\u5b9e\u7684\u7f51\u7edc\u8bf7\u6c42\u3002 \u4f46\u662f\uff0c\u60a8\u8fd8\u9700\u8981\u4f7f\u7528\u4e00\u4e2a",(0,t.jsx)(s.code,{children:"Response"}),"(\u5305\u88c5\u5728 ",(0,t.jsx)(s.code,{children:"Promise"}),"\u4e2d) \u6765\u6a21\u62df",(0,t.jsx)(s.code,{children:"fetch"}),"\u7684\u8fd4\u56de\u503c\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u51fd\u6570\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u5df2\u7ecf\u521b\u5efa\u7528\u6237\u7684ID\u3002 \u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u7f16\u5199\u8fd9\u6837\u7684\u6d4b\u8bd5:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"jest.mock('node-fetch');\n\nimport fetch, {Response} from 'node-fetch';\nimport {createUser} from './createUser';\n\ntest('createUser calls fetch with the right args and returns the user id', async () => {\n  fetch.mockReturnValue(Promise.resolve(new Response('4')));\n\n  const userId = await createUser();\n\n  expect(fetch).toHaveBeenCalledTimes(1);\n  expect(fetch).toHaveBeenCalledWith('https://website.com/users', {\n    method: 'POST',\n  });\n  expect(userId).toBe('4');\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u4f46\u662f\uff0c\u8fd0\u884c\u8be5\u6d4b\u8bd5\u4f60\u4f1a\u53d1\u73b0 ",(0,t.jsx)(s.code,{children:"createUser"})," \u51fd\u6570\u6267\u884c\u5931\u8d25\uff0c\u5e76\u629b\u51fa\u9519\u8bef: ",(0,t.jsx)(s.code,{children:"TypeError: response.text is not a function"}),"\u3002 \u8fd9\u662f\u56e0\u4e3a\u4ece ",(0,t.jsx)(s.code,{children:"node-fetch"}),"\u5bfc\u5165\u7684 ",(0,t.jsx)(s.code,{children:"Response"})," \u7c7b\u5df2\u7ecf\u88ab\u6a21\u62df\u4e86(\u7531\u6d4b\u8bd5\u6587\u4ef6\u9876\u90e8\u7684",(0,t.jsx)(s.code,{children:"jest.mock"}),"\u8c03\u7528) \uff0c\u6240\u4ee5\u5b83\u4e0d\u518d\u5177\u5907\u539f\u6709\u7684\u884c\u4e3a\uff0c\u5373\u4e0d\u5b58\u5728 text \u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u4e3a\u4e86\u89e3\u51b3\u8fd9\u6837\u7684\u95ee\u9898\uff0cJest \u63d0\u4f9b\u4e86 ",(0,t.jsx)(s.code,{children:"jest.requireActual"}),"\u3002 \u8981\u4f7f\u4e0a\u8ff0\u6d4b\u8bd5\u7528\u4f8b\u5de5\u4f5c\uff0c\u8bf7\u5bf9\u6d4b\u8bd5\u6587\u4ef6\u4e2d\u5bfc\u5165\u7684\u5185\u5bb9\u505a\u5982\u4e0b\u66f4\u6539:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"// \u4fee\u6539\u524d\njest.mock('node-fetch');\nimport fetch, {Response} from 'node-fetch';\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"// \u4fee\u6539\u540e\njest.mock('node-fetch');\nimport fetch from 'node-fetch';\nconst {Response} = jest.requireActual('node-fetch');\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u6d4b\u8bd5\u6587\u4ef6\u5c06\u4ece ",(0,t.jsx)(s.code,{children:"node-fetch"})," \u5bfc\u5165\u771f\u5b9e\u7684 ",(0,t.jsx)(s.code,{children:"Response"})," \u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u6a21\u62df\u7684\u5bf9\u8c61\u3002 \u610f\u5473\u7740\u6d4b\u8bd5\u7528\u4f8b\u73b0\u5728\u5c06\u6b63\u786e\u901a\u8fc7\u3002"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>o});var t=n(7378);const c=t.createContext({});function o(e){const s=t.useContext(c);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:o(e),t.createElement(c.Provider,{value:i},s)}}}]);