"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4891],{9250:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=o(4246),t=o(1670);const s={id:"setup-teardown",title:"Configura\xe7\xe3o e Desmontagem"},r=void 0,c={unversionedId:"setup-teardown",id:"version-29.4/setup-teardown",title:"Configura\xe7\xe3o e Desmontagem",description:"Muitas vezes ao escrever testes voc\xea tem algum trabalho de configura\xe7\xe3o que precisa acontecer antes de executar testes, e voc\xea tem algum trabalho de acabamento que precisa acontecer ap\xf3s os testes executarem. Jest fornece fun\xe7\xf5es de auxilio para lidar com isso.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.4/SetupAndTeardown.md",sourceDirName:".",slug:"/setup-teardown",permalink:"/pt-BR/docs/29.4/setup-teardown",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.4",frontMatter:{id:"setup-teardown",title:"Configura\xe7\xe3o e Desmontagem"},sidebar:"docs",previous:{title:"Testando C\xf3digo Ass\xedncrono",permalink:"/pt-BR/docs/29.4/asynchronous"},next:{title:"Fun\xe7\xf5es de Simula\xe7\xe3o",permalink:"/pt-BR/docs/29.4/mock-functions"}},i={},d=[{value:"Repeating Setup",id:"repeating-setup",level:2},{value:"Configura\xe7\xe3o \xdanica",id:"configura\xe7\xe3o-\xfanica",level:2},{value:"Escopo",id:"escopo",level:2},{value:"Order of Execution",id:"order-of-execution",level:2},{value:"Conselho geral",id:"conselho-geral",level:2}];function l(e){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a",em:"em",admonition:"admonition"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Muitas vezes ao escrever testes voc\xea tem algum trabalho de configura\xe7\xe3o que precisa acontecer antes de executar testes, e voc\xea tem algum trabalho de acabamento que precisa acontecer ap\xf3s os testes executarem. Jest fornece fun\xe7\xf5es de auxilio para lidar com isso."}),"\n",(0,a.jsx)(n.h2,{id:"repeating-setup",children:"Repeating Setup"}),"\n",(0,a.jsxs)(n.p,{children:["Se voc\xea tem algo que precisa ser executado repetidamente antes ou depois para muitos testes, voc\xea pode usar os hooks ",(0,a.jsx)(n.code,{children:"beforeEach"})," e ",(0,a.jsx)(n.code,{children:"afterEach"})," para isso."]}),"\n",(0,a.jsxs)(n.p,{children:["Por exemplo, digamos que v\xe1rios testes interagem com um banco de dados de cidades. Voc\xea tem um m\xe9todo ",(0,a.jsx)(n.code,{children:"initializeCityDatabase()"})," que deve ser chamado antes de cada um destes testes e um m\xe9todo ",(0,a.jsx)(n.code,{children:"clearCityDatabase()"})," que deve ser chamado depois de cada um destes testes. Voc\xea pode fazer isso com:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  initializeCityDatabase();\n});\n\nafterEach(() => {\n  clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"beforeEach"})," e ",(0,a.jsx)(n.code,{children:"afterEach"})," podem lidar com c\xf3digo ass\xedncrono da mesma forma que ",(0,a.jsx)(n.a,{href:"/pt-BR/docs/29.4/asynchronous",children:"testes podem lidar com c\xf3digo ass\xedncrono"})," - podem tanto levar um par\xe2metro ",(0,a.jsx)(n.code,{children:"done"})," ou retornar uma promessa. Por exemplo, se ",(0,a.jsx)(n.code,{children:"initializeCityDatabase()"})," tiver retornado uma promessa que resolve quando o banco de dados foi inicializado, gostar\xedamos de retornar essa promessa:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  return initializeCityDatabase();\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configura\xe7\xe3o-\xfanica",children:"Configura\xe7\xe3o \xdanica"}),"\n",(0,a.jsxs)(n.p,{children:['Em alguns casos, voc\xea s\xf3 precisa executar ou configurar algo uma vez, no in\xedcio de um arquivo. Isto pode ser especialmente inc\xf4modo quando a instala\xe7\xe3o \xe9 ass\xedncrona, portanto, n\xe3o pode fazer isso "inline". Jest fornece os ',(0,a.jsx)(n.code,{children:"hooks beforeAll"})," e ",(0,a.jsx)(n.code,{children:"afterAll"})," para lidar com essa situa\xe7\xe3o."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, if both ",(0,a.jsx)(n.code,{children:"initializeCityDatabase()"})," and ",(0,a.jsx)(n.code,{children:"clearCityDatabase()"})," returned promises, and the city database could be reused between tests, we could change our test code to:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"beforeAll(() => {\n  return initializeCityDatabase();\n});\n\nafterAll(() => {\n  return clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"escopo",children:"Escopo"}),"\n",(0,a.jsxs)(n.p,{children:["The top level ",(0,a.jsx)(n.code,{children:"before*"})," and ",(0,a.jsx)(n.code,{children:"after*"})," hooks apply to every test in a file. The hooks declared inside a ",(0,a.jsx)(n.code,{children:"describe"})," block apply only to the tests within that ",(0,a.jsx)(n.code,{children:"describe"})," block."]}),"\n",(0,a.jsx)(n.p,{children:"Por exemplo, digamos que n\xf3s n\xe3o temos apenas um banco de dados de cidades, mas tamb\xe9m um banco de dados de alimentos. N\xf3s podemos fazer uma configura\xe7\xe3o diferente para diferentes testes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Applies to all tests in this file\nbeforeEach(() => {\n  return initializeCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n\ndescribe('matching cities to foods', () => {\n  // Applies only to tests in this describe block\n  beforeEach(() => {\n    return initializeFoodDatabase();\n  });\n\n  test('Vienna <3 veal', () => {\n    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);\n  });\n\n  test('San Juan <3 plantains', () => {\n    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Observe que o ",(0,a.jsx)(n.code,{children:"beforeeach"})," de n\xedvel superior \xe9 executado antes do ",(0,a.jsx)(n.code,{children:"beforeEach"})," dentro do bloco ",(0,a.jsx)(n.code,{children:"describe"}),". Isso pode ajudar a ilustrar a ordem de execu\xe7\xe3o de todos os hooks."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"beforeAll(() => console.log('1 - beforeAll'));\nafterAll(() => console.log('1 - afterAll'));\nbeforeEach(() => console.log('1 - beforeEach'));\nafterEach(() => console.log('1 - afterEach'));\n\ntest('', () => console.log('1 - test'));\n\ndescribe('Scoped / Nested block', () => {\n  beforeAll(() => console.log('2 - beforeAll'));\n  afterAll(() => console.log('2 - afterAll'));\n  beforeEach(() => console.log('2 - beforeEach'));\n  afterEach(() => console.log('2 - afterEach'));\n\n  test('', () => console.log('2 - test'));\n});\n\n// 1 - beforeAll\n// 1 - beforeEach\n// 1 - test\n// 1 - afterEach\n// 2 - beforeAll\n// 1 - beforeEach\n// 2 - beforeEach\n// 2 - test\n// 2 - afterEach\n// 1 - afterEach\n// 2 - afterAll\n// 1 - afterAll\n"})}),"\n",(0,a.jsx)(n.h2,{id:"order-of-execution",children:"Order of Execution"}),"\n",(0,a.jsxs)(n.p,{children:["Jest executes all describe handlers in a test file ",(0,a.jsx)(n.em,{children:"before"})," it executes any of the actual tests. This is another reason to do setup and teardown inside ",(0,a.jsx)(n.code,{children:"before*"})," and ",(0,a.jsx)(n.code,{children:"after*"})," handlers rather than inside the ",(0,a.jsx)(n.code,{children:"describe"})," blocks. Once the ",(0,a.jsx)(n.code,{children:"describe"})," blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on."]}),"\n",(0,a.jsx)(n.p,{children:"Considere o seguinte arquivo de teste ilustrativo e a sa\xedda:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"describe('describe outer', () => {\n  console.log('describe outer-a');\n\n  describe('describe inner 1', () => {\n    console.log('describe inner 1');\n\n    test('test 1', () => console.log('test 1'));\n  });\n\n  console.log('describe outer-b');\n\n  test('test 2', () => console.log('test 2'));\n\n  describe('describe inner 2', () => {\n    console.log('describe inner 2');\n\n    test('test 3', () => console.log('test 3'));\n  });\n\n  console.log('describe outer-c');\n});\n\n// describe outer-a\n// describe inner 1\n// describe outer-b\n// describe inner 2\n// describe outer-c\n// test 1\n// test 2\n// test 3\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Just like the ",(0,a.jsx)(n.code,{children:"describe"})," and ",(0,a.jsx)(n.code,{children:"test"})," blocks Jest calls the ",(0,a.jsx)(n.code,{children:"before*"})," and ",(0,a.jsx)(n.code,{children:"after*"})," hooks in the order of declaration. Note that the ",(0,a.jsx)(n.code,{children:"after*"})," hooks of the enclosing scope are called first. For example, here is how you can set up and tear down resources which depend on each other:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"beforeEach(() => console.log('connection setup'));\nbeforeEach(() => console.log('database setup'));\n\nafterEach(() => console.log('database teardown'));\nafterEach(() => console.log('connection teardown'));\n\ntest('test 1', () => console.log('test 1'));\n\ndescribe('extra', () => {\n  beforeEach(() => console.log('extra database setup'));\n  afterEach(() => console.log('extra database teardown'));\n\n  test('test 2', () => console.log('test 2'));\n});\n\n// connection setup\n// database setup\n// test 1\n// database teardown\n// connection teardown\n\n// connection setup\n// database setup\n// extra database setup\n// test 2\n// extra database teardown\n// database teardown\n// connection teardown\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["If you are using ",(0,a.jsx)(n.code,{children:"jasmine2"})," test runner, take into account that it calls the ",(0,a.jsx)(n.code,{children:"after*"})," hooks in the reverse order of declaration. To have identical output, the above example should be altered like this:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:"  beforeEach(() => console.log('connection setup'));\n+ afterEach(() => console.log('connection teardown'));\n\n  beforeEach(() => console.log('database setup'));\n+ afterEach(() => console.log('database teardown'));\n\n- afterEach(() => console.log('database teardown'));\n- afterEach(() => console.log('connection teardown'));\n\n  // ...\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"conselho-geral",children:"Conselho geral"}),"\n",(0,a.jsxs)(n.p,{children:["Se um teste est\xe1 falhando, uma das primeiras coisas a verificar deveria ser se o teste est\xe1 falhando quando \xe9 o \xfanico teste que \xe9 executado. Para executar apenas um \xfanico teste com Jest, altere temporariamente o comando ",(0,a.jsx)(n.code,{children:"test"})," para ",(0,a.jsx)(n.code,{children:"test.only"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"test.only('this will be the only test that runs', () => {\n  expect(true).toBe(false);\n});\n\ntest('this test will not run', () => {\n  expect('A').toBe('A');\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Se voc\xea tiver uma teste que muitas vezes falha quando ele \xe9 executado como parte de um conjunto maior, mas n\xe3o falha quando voc\xea execut\xe1-lo sozinho, \xe9 uma boa aposta que algo de um teste diferente est\xe1 interferindo com ele. Muitas vezes, voc\xea pode consertar isso, limpando algum estado compartilhado com ",(0,a.jsx)(n.code,{children:"beforeEach"}),". Se voc\xea n\xe3o tem certeza se algum estado compartilhado est\xe1 sendo modificado, voc\xea tamb\xe9m pode tentar um ",(0,a.jsx)(n.code,{children:"beforeEach"})," para emitir um log dos dados."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},1670:(e,n,o)=>{o.d(n,{Zo:()=>c,ah:()=>s});var a=o(7378);const t=a.createContext({});function s(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:o}){let c;return c=o?"function"==typeof e?e({}):e||r:s(e),a.createElement(t.Provider,{value:c},n)}}}]);