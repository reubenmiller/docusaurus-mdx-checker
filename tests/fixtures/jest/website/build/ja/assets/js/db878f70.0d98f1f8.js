"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3873],{6225:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>a});var i=s(4246),o=s(1670);const n={id:"migration-guide",title:"Jest\u3078\u306e\u79fb\u884c"},c=void 0,r={unversionedId:"migration-guide",id:"version-29.4/migration-guide",title:"Jest\u3078\u306e\u79fb\u884c",description:"\u65e2\u5b58\u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u3067 Jest\u3092\u8a66\u3057\u3066\u307f\u308b\u5834\u5408\u306b\u306f\u3001Jest\u306b\u5909\u63db\u3059\u308b\u65b9\u6cd5\u304c\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-29.4/MigrationGuide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/ja/docs/29.4/migration-guide",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"29.4",frontMatter:{id:"migration-guide",title:"Jest\u3078\u306e\u79fb\u884c"},sidebar:"docs",previous:{title:"Watch \u30d7\u30e9\u30b0\u30a4\u30f3",permalink:"/ja/docs/29.4/watch-plugins"},next:{title:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",permalink:"/ja/docs/29.4/troubleshooting"}},h={},a=[{value:"jest-codemods",id:"jest-codemods",level:2}];function d(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\u65e2\u5b58\u306e\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u3067 Jest\u3092\u8a66\u3057\u3066\u307f\u308b\u5834\u5408\u306b\u306f\u3001Jest\u306b\u5909\u63db\u3059\u308b\u65b9\u6cd5\u304c\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u3082\u3057 Jasmine\u3082\u3057\u304f\u306f Jasmine like \u306a API (",(0,i.jsx)(t.a,{href:"https://mochajs.org",children:"Mocha"})," \u306a\u3069) \u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001Jest\u3068\u6700\u3082\u4e92\u63db\u6027\u304c\u3042\u308a\u5bb9\u6613\u306b\u79fb\u884c\u3067\u304d\u307e\u3059"]}),"\n",(0,i.jsx)(t.li,{children:"AVA\u3001 (Automattic\u306b\u3088\u308b) Expect.js \u3001Jasmine\u3001Mocha\u3001 proxyquire\u3001 Should.js \u3082\u3057\u304f\u306f Tape\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001Jest Codemods \u306b\u3088\u308a\u81ea\u52d5\u7684\u306b\u79fb\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059(\u4ee5\u4e0b\u3092\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044)\u3002"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"http://chaijs.com/",children:" chai "})," \u304c\u597d\u304d\u306a\u3089\u3001Jest \u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3001chai \u3092\u4f7f\u3044\u7d9a\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u305f\u3060\u3057\u3001Jest \u306e\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u3084\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u4e00\u5ea6\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u3092\u30aa\u30b9\u30b9\u30e1\u3057\u307e\u3059\u3002 Jest Codemods \u306f chai (\u4e0b\u8a18\u53c2\u7167) \u304b\u3089\u79fb\u884c\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"jest-codemods",children:"jest-codemods"}),"\n",(0,i.jsxs)(t.p,{children:["If you are using ",(0,i.jsx)(t.a,{href:"https://github.com/avajs/ava",children:"AVA"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/chaijs/chai",children:"Chai"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/Automattic/expect.js",children:"Expect.js (by Automattic)"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/jasmine/jasmine",children:"Jasmine"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mochajs/mocha",children:"Mocha"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/thlorenz/proxyquire",children:"proxyquire"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/shouldjs/should.js",children:"Should.js"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/substack/tape",children:"Tape"}),", or ",(0,i.jsx)(t.a,{href:"https://sinonjs.org/",children:"Sinon"})," you can use the third-party ",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"jest-codemods"})," to do most of the dirty migration work. \u3053\u306e\u30c4\u30fc\u30eb\u306f",(0,i.jsx)(t.a,{href:"https://github.com/facebook/jscodeshift",children:" jscodeshift"})," \u3092\u4f7f\u7528\u3057\u3066\u3001\u30b3\u30fc\u30c9\u30d9\u30fc\u30b9\u306b\u5bfe\u3057\u3066\u30b3\u30fc\u30c9\u5909\u63db\u3092\u884c\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u65e2\u5b58\u306e\u30c6\u30b9\u30c8\u3092\u5909\u63db\u3059\u308b\u305f\u3081\u306b\u30c6\u30b9\u30c8\u3092\u542b\u3080\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u79fb\u52d5\u3057\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npx jest-codemods\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:" https://github.com/skovhus/jest-codemods"})," \u3067\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>r,ah:()=>n});var i=s(7378);const o=i.createContext({});function n(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function r({components:e,children:t,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:n(e),i.createElement(o.Provider,{value:r},t)}}}]);