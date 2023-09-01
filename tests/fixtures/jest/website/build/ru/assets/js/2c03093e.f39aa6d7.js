"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3102],{568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var o=t(4246),c=t(1670);const s={id:"mock-functions",title:"Mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},a=void 0,l={unversionedId:"mock-functions",id:"version-29.5/mock-functions",title:"Mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",description:"Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-29.5/MockFunctions.md",sourceDirName:".",slug:"/mock-functions",permalink:"/ru/docs/29.5/mock-functions",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.5",frontMatter:{id:"mock-functions",title:"Mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},sidebar:"docs",previous:{title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0430",permalink:"/ru/docs/29.5/setup-teardown"},next:{title:"Jest Platform",permalink:"/ru/docs/29.5/jest-platform"}},i={},r=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2},{value:"<code>.mock</code> \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e",id:"mock-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e",level:2},{value:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u0430\u043c\u0438",id:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435-\u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u0430\u043c\u0438",level:2},{value:"\u041c\u043e\u043a\u0438\u043d\u0433 (\u0438\u043c\u0438\u0442\u0430\u0446\u0438\u0438) \u043c\u043e\u0434\u0443\u043b\u0435\u0439",id:"\u043c\u043e\u043a\u0438\u043d\u0433-\u0438\u043c\u0438\u0442\u0430\u0446\u0438\u0438-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",level:2},{value:"Mocking Partials",id:"mocking-partials",level:2},{value:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u043e\u0432",id:"\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438-\u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u043e\u0432",level:2},{value:"Mock Names",id:"mock-names",level:2},{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043c\u0430\u0442\u0447\u0435\u0440\u044b",id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435-\u043c\u0430\u0442\u0447\u0435\u0440\u044b",level:2}];function d(e){const n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,c.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with ",(0,o.jsx)(n.code,{children:"new"}),", and allowing test-time configuration of return values."]}),"\n",(0,o.jsxs)(n.p,{children:["There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a ",(0,o.jsx)(n.a,{href:"/ru/docs/29.5/manual-mocks",children:(0,o.jsx)(n.code,{children:"manual mock"})})," to override a module dependency."]}),"\n",(0,o.jsx)(n.h2,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,o.jsxs)(n.p,{children:["\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c, \u0447\u0442\u043e \u043c\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,o.jsx)(n.code,{children:"forEach"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="forEach.js"',children:"export function forEach(items, callback) {\n  for (let index = 0; index < items.length; index++) {\n    callback(items[index]);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u043a-\u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u043e\u043a\u0430 \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u0432\u044b\u0437\u0432\u0430\u043d\u0430 \u043a\u0430\u043a \u043e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="forEach.test.js"',children:"const forEach = require('./forEach');\n\nconst mockCallback = jest.fn(x => 42 + x);\n\ntest('forEach mock function', () => {\n  forEach([0, 1], mockCallback);\n\n  // The mock function was called twice\n  expect(mockCallback.mock.calls).toHaveLength(2);\n\n  // The first argument of the first call to the function was 0\n  expect(mockCallback.mock.calls[0][0]).toBe(0);\n\n  // The first argument of the second call to the function was 1\n  expect(mockCallback.mock.calls[1][0]).toBe(1);\n\n  // The return value of the first call to the function was 42\n  expect(mockCallback.mock.results[0].value).toBe(42);\n});\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"mock-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e",children:[(0,o.jsx)(n.code,{children:".mock"})," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"]}),"\n",(0,o.jsxs)(n.p,{children:["\u0423 \u0432\u0441\u0435\u0445 \u043c\u043e\u043a-\u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0435\u0441\u0442\u044c \u043e\u0441\u043e\u0431\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,o.jsx)(n.code,{children:".mock"}),", \u0433\u0434\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u0435 \u043e \u0442\u043e\u043c \u043a\u0430\u043a \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u0432\u044b\u0437\u0432\u0430\u043d\u0430 \u0438 \u0447\u0442\u043e \u043e\u043d\u0430 \u0432\u0435\u0440\u043d\u0443\u043b\u0430. \u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,o.jsx)(n.code,{children:".mock"})," \u0442\u0430\u043a\u0436\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,o.jsx)(n.code,{children:"this"})," \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430, \u0442\u0430\u043a \u0447\u0442\u043e \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMock1 = jest.fn();\nconst a = new myMock1();\nconsole.log(myMock1.mock.instances);\n// > [ <a> ]\n\nconst myMock2 = jest.fn();\nconst b = {};\nconst bound = myMock2.bind(b);\nbound();\nconsole.log(myMock2.mock.contexts);\n// > [ <b> ]\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u042d\u0442\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043c\u043e\u043a\u0430 \u043e\u0447\u0435\u043d\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u044b \u0432 \u0442\u0435\u0441\u0442\u0430\u0445 \u0447\u0442\u043e\u0431\u044b \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u044d\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f, \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044e\u0442\u0441\u044f, \u0438\u043b\u0438 \u0447\u0442\u043e \u043e\u043d\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// The function was called exactly once\nexpect(someMockFunction.mock.calls).toHaveLength(1);\n\n// The first arg of the first call to the function was 'first arg'\nexpect(someMockFunction.mock.calls[0][0]).toBe('first arg');\n\n// The second arg of the first call to the function was 'second arg'\nexpect(someMockFunction.mock.calls[0][1]).toBe('second arg');\n\n// The return value of the first call to the function was 'return value'\nexpect(someMockFunction.mock.results[0].value).toBe('return value');\n\n// The function was called with a certain `this` context: the `element` object.\nexpect(someMockFunction.mock.contexts[0]).toBe(element);\n\n// This function was instantiated exactly twice\nexpect(someMockFunction.mock.instances.length).toBe(2);\n\n// The object returned by the first instantiation of this function\n// had a `name` property whose value was set to 'test'\nexpect(someMockFunction.mock.instances[0].name).toBe('test');\n\n// The first argument of the last call to the function was 'test'\nexpect(someMockFunction.mock.lastCall[0]).toBe('test');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435-\u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u0430\u043c\u0438",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u0430\u043c\u0438"}),"\n",(0,o.jsx)(n.p,{children:"\u041c\u043e\u043a-\u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0432\u0430\u0448 \u043a\u043e\u0434 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMock = jest.fn();\nconsole.log(myMock());\n// > undefined\n\nmyMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);\n\nconsole.log(myMock(), myMock(), myMock(), myMock());\n// > 10, 'x', true, true\n"})}),"\n",(0,o.jsx)(n.p,{children:"Mock functions are also very effective in code that uses a functional continuation-passing style. Code written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component they're standing in for, in favor of injecting values directly into the test right before they're used."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const filterTestFn = jest.fn();\n\n// Make the mock return `true` for the first call,\n// and `false` for the second call\nfilterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);\n\nconst result = [11, 12].filter(num => filterTestFn(num));\n\nconsole.log(result);\n// > [11]\nconsole.log(filterTestFn.mock.calls[0][0]); // 11\nconsole.log(filterTestFn.mock.calls[1][0]); // 12\n"})}),"\n",(0,o.jsx)(n.p,{children:"Most real-world examples actually involve getting ahold of a mock function on a dependent component and configuring that, but the technique is the same. In these cases, try to avoid the temptation to implement logic inside of any function that's not directly being tested."}),"\n",(0,o.jsx)(n.h2,{id:"\u043c\u043e\u043a\u0438\u043d\u0433-\u0438\u043c\u0438\u0442\u0430\u0446\u0438\u0438-\u043c\u043e\u0434\u0443\u043b\u0435\u0439",children:"\u041c\u043e\u043a\u0438\u043d\u0433 (\u0438\u043c\u0438\u0442\u0430\u0446\u0438\u0438) \u043c\u043e\u0434\u0443\u043b\u0435\u0439"}),"\n",(0,o.jsxs)(n.p,{children:["\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u043b\u0430\u0441\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0437 \u043d\u0430\u0448\u0435\u0433\u043e API. \u042d\u0442\u043e\u0442 \u043a\u043b\u0430\u0441\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,o.jsx)(n.a,{href:"https://github.com/axios/axios",children:"axios"})," \u0434\u043b\u044f \u0432\u044b\u0437\u043e\u0432\u0430 API, \u0430 \u0437\u0430\u0442\u0435\u043c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ",(0,o.jsx)(n.code,{children:"data"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="users.js"',children:"import axios from 'axios';\n\nclass Users {\n  static all() {\n    return axios.get('/users.json').then(resp => resp.data);\n  }\n}\n\nexport default Users;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, in order to test this method without actually hitting the API (and thus creating slow and fragile tests), we can use the ",(0,o.jsx)(n.code,{children:"jest.mock(...)"})," function to automatically mock the axios module."]}),"\n",(0,o.jsxs)(n.p,{children:["Once we mock the module we can provide a ",(0,o.jsx)(n.code,{children:"mockResolvedValue"})," for ",(0,o.jsx)(n.code,{children:".get"})," that returns the data we want our test to assert against. In effect, we are saying that we want ",(0,o.jsx)(n.code,{children:"axios.get('/users.json')"})," to return a fake response."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="users.test.js"',children:"import axios from 'axios';\nimport Users from './users';\n\njest.mock('axios');\n\ntest('should fetch users', () => {\n  const users = [{name: 'Bob'}];\n  const resp = {data: users};\n  axios.get.mockResolvedValue(resp);\n\n  // or you could use the following depending on your use case:\n  // axios.get.mockImplementation(() => Promise.resolve(resp))\n\n  return Users.all().then(data => expect(data).toEqual(users));\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mocking-partials",children:"Mocking Partials"}),"\n",(0,o.jsx)(n.p,{children:"Subsets of a module can be mocked and the rest of the module can keep their actual implementation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="foo-bar-baz.js"',children:"export const foo = 'foo';\nexport const bar = () => 'bar';\nexport default () => 'baz';\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"//test.js\nimport defaultExport, {bar, foo} from '../foo-bar-baz';\n\njest.mock('../foo-bar-baz', () => {\n  const originalModule = jest.requireActual('../foo-bar-baz');\n\n  //Mock the default export and named export 'foo'\n  return {\n    __esModule: true,\n    ...originalModule,\n    default: jest.fn(() => 'mocked baz'),\n    foo: 'mocked foo',\n  };\n});\n\ntest('should do a partial mock', () => {\n  const defaultExportResult = defaultExport();\n  expect(defaultExportResult).toBe('mocked baz');\n  expect(defaultExport).toHaveBeenCalled();\n\n  expect(foo).toBe('mocked foo');\n  expect(bar()).toBe('bar');\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438-\u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u043e\u0432",children:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043c\u0438\u0442\u0430\u0442\u043e\u0440\u043e\u0432"}),"\n",(0,o.jsxs)(n.p,{children:["Still, there are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function. This can be done with ",(0,o.jsx)(n.code,{children:"jest.fn"})," or the ",(0,o.jsx)(n.code,{children:"mockImplementationOnce"})," method on mock functions."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest.fn(cb => cb(null, true));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"mockImplementation"})," method is useful when you need to define the default implementation of a mock function that is created from another module:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="foo.js"',children:"module.exports = function () {\n  // some implementation;\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="test.js"',children:"jest.mock('../foo'); // this happens automatically with automocking\nconst foo = require('../foo');\n\n// foo is a mock function\nfoo.mockImplementation(() => 42);\nfoo();\n// > 42\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results, use the ",(0,o.jsx)(n.code,{children:"mockImplementationOnce"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n\nmyMockFn((err, val) => console.log(val));\n// > false\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When the mocked function runs out of implementations defined with ",(0,o.jsx)(n.code,{children:"mockImplementationOnce"}),", it will execute the default implementation set with ",(0,o.jsx)(n.code,{children:"jest.fn"})," (if it is defined):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn(() => 'default')\n  .mockImplementationOnce(() => 'first call')\n  .mockImplementationOnce(() => 'second call');\n\nconsole.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());\n// > 'first call', 'second call', 'default', 'default'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For cases where we have methods that are typically chained (and thus always need to return ",(0,o.jsx)(n.code,{children:"this"}),"), we have a sugary API to simplify this in the form of a ",(0,o.jsx)(n.code,{children:".mockReturnThis()"})," function that also sits on all mocks:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myObj = {\n  myMethod: jest.fn().mockReturnThis(),\n};\n\n// is the same as\n\nconst otherObj = {\n  myMethod: jest.fn(function () {\n    return this;\n  }),\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mock-names",children:"Mock Names"}),"\n",(0,o.jsxs)(n.p,{children:["You can optionally provide a name for your mock functions, which will be displayed instead of ",(0,o.jsx)(n.code,{children:"'jest.fn()'"})," in the test error output. Use ",(0,o.jsx)(n.a,{href:"MockFunctionAPI.md/#mockfnmocknamename",children:(0,o.jsx)(n.code,{children:".mockName()"})})," if you want to be able to quickly identify the mock function reporting an error in your test output."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn()\n  .mockReturnValue('default')\n  .mockImplementation(scalar => 42 + scalar)\n  .mockName('add42');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435-\u043c\u0430\u0442\u0447\u0435\u0440\u044b",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043c\u0430\u0442\u0447\u0435\u0440\u044b"}),"\n",(0,o.jsx)(n.p,{children:"Finally, in order to make it less demanding to assert how mock functions have been called, we've added some custom matcher functions for you:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// The mock function was called at least once\nexpect(mockFunc).toHaveBeenCalled();\n\n// The mock function was called at least once with the specified args\nexpect(mockFunc).toHaveBeenCalledWith(arg1, arg2);\n\n// The last call to the mock function was called with the specified args\nexpect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);\n\n// All calls and the name of the mock is written as a snapshot\nexpect(mockFunc).toMatchSnapshot();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["These matchers are sugar for common forms of inspecting the ",(0,o.jsx)(n.code,{children:".mock"})," property. You can always do this manually yourself if that's more to your taste or if you need to do something more specific:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// The mock function was called at least once\nexpect(mockFunc.mock.calls.length).toBeGreaterThan(0);\n\n// The mock function was called at least once with the specified args\nexpect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);\n\n// The last call to the mock function was called with the specified args\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([\n  arg1,\n  arg2,\n]);\n\n// The first arg of the last call to the mock function was `42`\n// (note that there is no sugar helper for this specific of an assertion)\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);\n\n// A snapshot will check that a mock was invoked the same number of times,\n// in the same order, with the same arguments. It will also assert on the name.\nexpect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);\nexpect(mockFunc.getMockName()).toBe('a mock name');\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0441 \u043f\u043e\u043b\u043d\u044b\u043c \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 ",(0,o.jsx)(n.a,{href:"/ru/docs/29.5/expect",children:"\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e"}),"."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>s});var o=t(7378);const c=o.createContext({});function s(e){const n=o.useContext(c);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:s(e),o.createElement(c.Provider,{value:l},n)}}}]);