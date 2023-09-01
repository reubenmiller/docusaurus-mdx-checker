"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[343],{2599:(e,t,n)=>{n.d(t,{Z:()=>o});n(7378);var r=n(7140);const a={tabItem:"tabItem_wHwb"};var s=n(4246);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},8447:(e,t,n)=>{n.d(t,{Z:()=>q});var r=n(7378),a=n(7140),s=n(9169),o=n(3620),u=n(9749),i=n(8981),l=n(56),c=n(8796);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=l??f;return p({value:e,tabValues:s})?e:null})();(0,u.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(362);const v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=n(4246);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=u[n].value;a!==r&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(x,{...e,...t})]})}function q(e){const t=(0,b.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},9642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>u,metadata:()=>l,toc:()=>d});var r=n(4246),a=n(1670),s=n(8447),o=n(2599);const u={id:"tutorial-jquery",title:"Manipula\xe7\xe3o DOM"},i=void 0,l={unversionedId:"tutorial-jquery",id:"version-29.6/tutorial-jquery",title:"Manipula\xe7\xe3o DOM",description:"Outra classe de fun\xe7\xf5es que \xe9 frequentemente considerada dif\xedcil de testar \xe9 o c\xf3digo que manipula diretamente o DOM. Vamos ver como podemos testar o seguinte trecho de c\xf3digo jQuery, que escuta um evento de clique, busca alguns dados de forma ass\xedncrona e define o conte\xfado de um span.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.6/TutorialjQuery.md",sourceDirName:".",slug:"/tutorial-jquery",permalink:"/pt-BR/docs/tutorial-jquery",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.6",frontMatter:{id:"tutorial-jquery",title:"Manipula\xe7\xe3o DOM"},sidebar:"docs",previous:{title:"Using with DynamoDB",permalink:"/pt-BR/docs/dynamodb"},next:{title:"Watch Plugins",permalink:"/pt-BR/docs/watch-plugins"}},c={},d=[];function m(e){const t=Object.assign({p:"p",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Outra classe de fun\xe7\xf5es que \xe9 frequentemente considerada dif\xedcil de testar \xe9 o c\xf3digo que manipula diretamente o DOM. Vamos ver como podemos testar o seguinte trecho de c\xf3digo jQuery, que escuta um evento de clique, busca alguns dados de forma ass\xedncrona e define o conte\xfado de um span."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="displayUser.js"',children:"'use strict';\n\nconst $ = require('jquery');\nconst fetchCurrentUser = require('./fetchCurrentUser.js');\n\n$('#button').click(() => {\n  fetchCurrentUser(user => {\n    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');\n    $('#username').text(user.fullName + ' - ' + loggedText);\n  });\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Novamente, n\xf3s criamos um arquivo de teste na pasta ",(0,r.jsx)(t.code,{children:"__tests__/"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/displayUser-test.js"',children:"'use strict';\n\njest.mock('.. fetchCurrentUser');\n\ntest('mostra um usu\xe1rio ap\xf3s um clique', () => {\n  // Configure nosso corpo do documento\n  document.body.innerHTML =\n    '<div>+\n    '  <span id=\"username\" />' +\n    '  <button id=\"button\" />' +\n    '</div>';\n\n  // Este m\xf3dulo possui um efeito lateral\n  require('. /displayUser');\n\n  const $ = require('jquery');\n  const fetchCurrentUser = require('.. fetchCurrentUser');\n\n  // Chama a fun\xe7\xe3o de simula\xe7\xe3o fetchCurrentUser para invocar automaticamente\n  // seu callback com alguns dados\n  fetchCurrentUser. ockImplementation(cb => {\n    cb({\n      fullName: 'Johnny Cash',\n      loggedIn: true,\n    });\n  });\n\n  // Usa o jquery para simular um clique no nosso bot\xe3o\n  $('#button'). lick();\n\n  // Verifica se a fun\xe7\xe3o fetchCurrentUser foi chamada, e que o texto interno do elemento\n  // span #username foi atualizado como esperar\xedamos.\n  expect(fetchCurrentUser).toBeCalled();\n  expect($('#username').text()).toBe('Johnny Cash - Logado');\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["N\xf3s est\xe3o simulamos ",(0,r.jsx)(t.code,{children:"fetchCurrentUser.js"})," para que nosso teste n\xe3o fa\xe7a uma solicita\xe7\xe3o de rede real, mas em vez disso resolve os dados da simula\xe7\xe3o localmente. Isso garante que nosso teste pode ser conclu\xeddo em milissegundos, em vez de segundos e garante uma r\xe1pida itera\xe7\xe3o de teste unit\xe1rio."]}),"\n",(0,r.jsxs)(t.p,{children:["Al\xe9m disso, a fun\xe7\xe3o sendo testada adiciona uma captura de evento no elemento ",(0,r.jsx)(t.code,{children:"#button"})," do DOM, por isso, precisamos configurar o nosso DOM corretamente para o teste. ",(0,r.jsx)(t.code,{children:"jsdom"})," e o pacote ",(0,r.jsx)(t.code,{children:"jest-environment-jsdom"}),", simulam um ambiente DOM como se voc\xea estivesse no navegador. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!"]}),"\n",(0,r.jsxs)(t.p,{children:["Para come\xe7ar com o ",(0,r.jsx)(t.a,{href:"/pt-BR/docs/configuration#testenvironment-string",children:"ambiente de teste"}),"do JSDOM, o pacote ",(0,r.jsx)(t.code,{children:"jest-environment-jsdom"})," deve ser instalado, se ainda n\xe3o estiver:"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest-environment-jsdom\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add --dev jest-environment-jsdom\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev jest-environment-jsdom\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The code for this example is available at ",(0,r.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/jquery",children:"examples/jquery"}),"."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},1670:(e,t,n)=>{n.d(t,{Zo:()=>u,ah:()=>s});var r=n(7378);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||o:s(e),r.createElement(a.Provider,{value:u},t)}}}]);