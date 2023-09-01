"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6484],{3941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(4246),a=n(1670);const i={id:"snapshot-testing",title:"Testarea de imagine"},r=void 0,o={unversionedId:"snapshot-testing",id:"snapshot-testing",title:"Testarea de imagine",description:"Testarea de imagine este un instrument foarte util, ori de c\xe2te ori dori\u0163i s\u0103 v\u0103 asigura\u0163i c\u0103 interfa\u0163a nu se schimb\u0103 \xeen mod nea\u015fteptat.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/SnapshotTesting.md",sourceDirName:".",slug:"/snapshot-testing",permalink:"/ro/docs/next/snapshot-testing",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"current",frontMatter:{id:"snapshot-testing",title:"Testarea de imagine"},sidebar:"docs",previous:{title:"Alte resurse",permalink:"/ro/docs/next/more-resources"},next:{title:"Un exemplu asincron",permalink:"/ro/docs/next/tutorial-async"}},c={},l=[{value:"Testarea de Imagine cu Jest",id:"testarea-de-imagine-cu-jest",level:2},{value:"Actualizarea imaginilor",id:"actualizarea-imaginilor",level:3},{value:"Interactive Snapshot Mode",id:"interactive-snapshot-mode",level:3},{value:"Inline Snapshots",id:"inline-snapshots",level:3},{value:"Property Matchers",id:"property-matchers",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Treat snapshots as code",id:"1-treat-snapshots-as-code",level:3},{value:"2. Tests should be deterministic",id:"2-tests-should-be-deterministic",level:3},{value:"3. Use descriptive snapshot names",id:"3-use-descriptive-snapshot-names",level:3},{value:"\xcentreb\u0103ri frecvente",id:"\xeentreb\u0103ri-frecvente",level:2},{value:"Are snapshots written automatically on Continuous Integration (CI) systems?",id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems",level:3},{value:"Ar trebui commit-uite imaginile serializate?",id:"ar-trebui-commit-uite-imaginile-serializate",level:3},{value:"Testarea de imagine func\u021bioneaza numai cu componente React?",id:"testarea-de-imagine-func\u021bioneaza-numai-cu-componente-react",level:3},{value:"Care este diferen\u0163a \xeentre testarea de imagine \u015fi testarea vizual\u0103 de regresii?",id:"care-este-diferen\u0163a-\xeentre-testarea-de-imagine-\u015fi-testarea-vizual\u0103-de-regresii",level:3},{value:"Does snapshot testing replace unit testing?",id:"does-snapshot-testing-replace-unit-testing",level:3},{value:"Care este performan\u0163a testelor de imagine \xeen ceea ce prive\u015fte viteza \u015fi dimensiunea fi\u015fierelor generate?",id:"care-este-performan\u0163a-testelor-de-imagine-\xeen-ceea-ce-prive\u015fte-viteza-\u015fi-dimensiunea-fi\u015fierelor-generate",level:3},{value:"Cum rezolv conflictele \xeen cadrul fi\u015fierelor de imagine?",id:"cum-rezolv-conflictele-\xeen-cadrul-fi\u015fierelor-de-imagine",level:3},{value:"Este posibil s\u0103 se aplice principiile de test-driven development \xeen testarea de imagine?",id:"este-posibil-s\u0103-se-aplice-principiile-de-test-driven-development-\xeen-testarea-de-imagine",level:3},{value:"Does code coverage work with snapshot testing?",id:"does-code-coverage-work-with-snapshot-testing",level:3}];function d(e){const t=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code",admonition:"admonition",h3:"h3",img:"img",br:"br"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Testarea de imagine este un instrument foarte util, ori de c\xe2te ori dori\u0163i s\u0103 v\u0103 asigura\u0163i c\u0103 interfa\u0163a nu se schimb\u0103 \xeen mod nea\u015fteptat."}),"\n",(0,s.jsx)(t.p,{children:"A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component."}),"\n",(0,s.jsx)(t.h2,{id:"testarea-de-imagine-cu-jest",children:"Testarea de Imagine cu Jest"}),"\n",(0,s.jsxs)(t.p,{children:["O abordare similar\u0103 se poate lua atunci c\xe2nd vine vorba de testarea componentelor React. \xcen loc de randarea interfe\u021bei grafic\u0103, care ar necesita construirea \xeentregii aplica\u021bii, pute\u0163i utiliza un test de randare pentru a genera rapid o valoare serializabil\u0103 pentru arborele React. Consider this ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/link.test.js",children:"example test"})," for a ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/Link.js",children:"Link component"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The first time this test is run, Jest creates a ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/__snapshots__/link.test.js.snap",children:"snapshot file"})," that looks like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'exports[`renders correctly 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Imaginea ar trebui s\u0103 fie ad\u0103ugat\u0103 al\u0103turi de modific\u0103rile de cod, \u015fi revizuite ca parte a procesului de code review. Jest uses ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/packages/pretty-format",children:"pretty-format"})," to make snapshots human-readable during code review. On subsequent test runs, Jest will compare the rendered output with the previous snapshot. \xcen cazul \xeen care acestea se potrivesc, testul va trece. If they don't match, either the test runner found a bug in your code (in the ",(0,s.jsx)(t.code,{children:"<Link>"})," component in this case) that should be fixed, or the implementation has changed and the snapshot needs to be updated."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The snapshot is directly scoped to the data you render \u2013 in our example the ",(0,s.jsx)(t.code,{children:"<Link>"})," component with ",(0,s.jsx)(t.code,{children:"page"})," prop passed to it. This implies that even if any other file has missing props (say, ",(0,s.jsx)(t.code,{children:"App.js"}),") in the ",(0,s.jsx)(t.code,{children:"<Link>"})," component, it will still pass the test as the test doesn't know the usage of ",(0,s.jsx)(t.code,{children:"<Link>"})," component and it's scoped only to the ",(0,s.jsx)(t.code,{children:"Link.js"}),". Also, rendering the same component with different props in other snapshot tests will not affect the first one, as the tests don't know about each other."]})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Mai multe informa\u0163ii despre cum testarea de imagine func\u0163ioneaz\u0103 \u015fi de ce am construit-o pot fi g\u0103site pe ",(0,s.jsx)(t.a,{href:"/blog/2016/07/27/jest-14",children:"blog"}),". Va recomandam s\u0103 citi\u021bi ",(0,s.jsx)(t.a,{href:"http://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/",children:"acest articol de blog"})," pentru a \xeen\u021belege mai bine c\xe2nd ar trebui s\u0103 utiliza\u0163i testarea de imagine. De asemenea, recomand\u0103m vizionarea acestui ",(0,s.jsx)(t.a,{href:"https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature?pl=testing-javascript-with-jest-a36c4074",children:"video egghead"})," despre testarea de imagine cu Jest."]})}),"\n",(0,s.jsx)(t.h3,{id:"actualizarea-imaginilor",children:"Actualizarea imaginilor"}),"\n",(0,s.jsx)(t.p,{children:"Este evident atunci c\xe2nd un test e\u0219ueaz\u0103 dup\u0103 ce s-a introdus un bug. C\xe2nd se \xeent\xe2mpl\u0103, rezolva\u021bi problema \u0219i asigura\u021bi-v\u0103 c\u0103 testele trec din nou. Acum, s\u0103 vorbim \xeens\u0103 despre cazul \xeen care un test e\u0219ueaz\u0103 din cauza unei schimb\u0103ri inten\u0163ionate \xeen implementare."}),"\n",(0,s.jsx)(t.p,{children:"O astfel de situa\u0163ie poate ap\u0103rea \xeen cazul \xeen care schimb\u0103m \xeen mod inten\u0163ionat adresa componentei Link din exemplul nostru."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"// Updated test case with a Link to a different address\nit('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.instagram.com\">Instagram</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"\xcen acest caz, Jest va afi\u0219a urm\u0103toarele:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(5310).Z+"",width:"1844",height:"1246"})}),"\n",(0,s.jsx)(t.p,{children:"Din moment ce am actualizat componenta noastre pentru a indica spre o alt\u0103 adres\u0103, este firesc s\u0103 a\u015ftept\u0103m modific\u0103ri \xeen imaginea acestei componente. Test nostru de imagine e\u0219ueaz\u0103 deoarece imagine actualizat\u0103 pentru componenta noastr\u0103 nu mai corespunde cu imaginea de referin\u021b\u0103."}),"\n",(0,s.jsx)(t.p,{children:"To resolve this, we will need to update our snapshot artifacts. You can run Jest with a flag that will tell it to re-generate snapshots:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"jest --updateSnapshot\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Accepta\u021bi modific\u0103rile execut\xe2nd comanda de mai sus. Pute\u0163i utiliza, de asemenea, echivalentul ",(0,s.jsx)(t.code,{children:"-u"})," pentru a regenera imaginile, dac\u0103 prefera\u0163i. Aceasta va regenera imaginile de referin\u021b\u0103 pentru toate testele de imagine. Daca am avea si alte teste de imagine e\u0219uate din cauza unor bug-uri neinten\u0163ionate, va fi nevoie s\u0103 rezolv\u0103m bug-urile \xeenainte de a regenera imaginile pentru a evita stocarea imaginilor cu comportament eronat."]}),"\n",(0,s.jsxs)(t.p,{children:["Dac\u0103 dori\u0163i s\u0103 limita\u021bi testele pentru care se vor regenera imaginile, pute\u0163i specifica o op\u021biune suplimentar\u0103 ",(0,s.jsx)(t.code,{children:"--testNamePattern"})," pentru a re-\xeenregistra imaginile doar pentru acele teste care se potrivesc cu modelul specificat."]}),"\n",(0,s.jsxs)(t.p,{children:["You can try out this functionality by cloning the ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"snapshot example"}),", modifying the ",(0,s.jsx)(t.code,{children:"Link"})," component, and running Jest."]}),"\n",(0,s.jsx)(t.h3,{id:"interactive-snapshot-mode",children:"Interactive Snapshot Mode"}),"\n",(0,s.jsx)(t.p,{children:"Failed snapshots can also be updated interactively in watch mode:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(2003).Z+"",width:"2052",height:"1048"})}),"\n",(0,s.jsx)(t.p,{children:"Once you enter Interactive Snapshot Mode, Jest will step you through the failed snapshots one test at a time and give you the opportunity to review the failed output."}),"\n",(0,s.jsx)(t.p,{children:"From here you can choose to update that snapshot or skip to the next:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(5015).Z+"",width:"1106",height:"697"})}),"\n",(0,s.jsx)(t.p,{children:"Once you're finished, Jest will give you a summary before returning back to watch mode:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(6439).Z+"",width:"1452",height:"400"})}),"\n",(0,s.jsx)(t.h3,{id:"inline-snapshots",children:"Inline Snapshots"}),"\n",(0,s.jsxs)(t.p,{children:["Inline snapshots behave identically to external snapshots (",(0,s.jsx)(t.code,{children:".snap"})," files), except the snapshot values are written automatically back into the source code. This means you can get the benefits of automatically generated snapshots without having to switch to an external file to make sure the correct value was written."]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsxs)(t.p,{children:["First, you write a test, calling ",(0,s.jsx)(t.code,{children:".toMatchInlineSnapshot()"})," with no arguments:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"it('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"https://example.com\">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot();\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The next time you run Jest, ",(0,s.jsx)(t.code,{children:"tree"})," will be evaluated, and a snapshot will be written as an argument to ",(0,s.jsx)(t.code,{children:"toMatchInlineSnapshot"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'it(\'renders correctly\', () => {\n  const tree = renderer\n    .create(<Link page="https://example.com">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot(`\n<a\n  className="normal"\n  href="https://example.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Example Site\n</a>\n`);\n});\n'})}),"\n",(0,s.jsxs)(t.p,{children:["That's all there is to it! You can even update the snapshots with ",(0,s.jsx)(t.code,{children:"--updateSnapshot"})," or using the ",(0,s.jsx)(t.code,{children:"u"})," key in ",(0,s.jsx)(t.code,{children:"--watch"})," mode."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, Jest handles the writing of snapshots into your source code. However, if you're using ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/prettier",children:"prettier"})," in your project, Jest will detect this and delegate the work to prettier instead (including honoring your configuration)."]}),"\n",(0,s.jsx)(t.h3,{id:"property-matchers",children:"Property Matchers"}),"\n",(0,s.jsx)(t.p,{children:"Often there are fields in the object you want to snapshot which are generated (like IDs and Dates). If you try to snapshot these objects, they will force the snapshot to fail on every run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'it(\'will fail every time\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot();\n});\n\n// Snapshot\nexports[`will fail every time 1`] = `\n{\n  "createdAt": 2018-05-19T23:36:09.816Z,\n  "id": 3,\n  "name": "LeBron James",\n}\n`;\n'})}),"\n",(0,s.jsx)(t.p,{children:"For these cases, Jest allows providing an asymmetric matcher for any property. These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'it(\'will check the matchers and pass\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    id: expect.any(Number),\n  });\n});\n\n// Snapshot\nexports[`will check the matchers and pass 1`] = `\n{\n  "createdAt": Any<Date>,\n  "id": Any<Number>,\n  "name": "LeBron James",\n}\n`;\n'})}),"\n",(0,s.jsx)(t.p,{children:"Any given value that is not a matcher will be checked exactly and saved to the snapshot:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"it('will check the values and pass', () => {\n  const user = {\n    createdAt: new Date(),\n    name: 'Bond... James Bond',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    name: 'Bond... James Bond',\n  });\n});\n\n// Snapshot\nexports[`will check the values and pass 1`] = `\n{\n  \"createdAt\": Any<Date>,\n  \"name\": 'Bond... James Bond',\n}\n`;\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsxs)(t.p,{children:["If the case concerns a string not an object then you need to replace random part of that string on your own before testing the snapshot.",(0,s.jsx)(t.br,{}),"\n","You can use for that e.g. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",children:(0,s.jsx)(t.code,{children:"replace()"})})," and ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",children:"regular expressions"}),"."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const randomNumber = Math.round(Math.random() * 100);\nconst stringWithRandomData = `<div id="${randomNumber}">Lorem ipsum</div>`;\nconst stringWithConstantData = stringWithRandomData.replace(/id="\\d+"/, 123);\nexpect(stringWithConstantData).toMatchSnapshot();\n'})}),(0,s.jsxs)(t.p,{children:["Another way is to ",(0,s.jsx)(t.a,{href:"/ro/docs/next/mock-functions",children:"mock"})," the library responsible for generating the random part of the code you're snapshotting."]})]}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(t.p,{children:"Snapshots are a fantastic tool for identifying unexpected interface changes within your application \u2013 whether that interface is an API response, UI, logs, or error messages. As with any testing strategy, there are some best-practices you should be aware of, and guidelines you should follow, in order to use them effectively."}),"\n",(0,s.jsx)(t.h3,{id:"1-treat-snapshots-as-code",children:"1. Treat snapshots as code"}),"\n",(0,s.jsx)(t.p,{children:"Commit snapshots and review them as part of your regular code review process. This means treating snapshots as you would any other type of test or code in your project."}),"\n",(0,s.jsx)(t.p,{children:"Ensure that your snapshots are readable by keeping them focused, short, and by using tools that enforce these stylistic conventions."}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned previously, Jest uses ",(0,s.jsx)(t.a,{href:"https://yarnpkg.com/en/package/pretty-format",children:(0,s.jsx)(t.code,{children:"pretty-format"})})," to make snapshots human-readable, but you may find it useful to introduce additional tools, like ",(0,s.jsx)(t.a,{href:"https://yarnpkg.com/en/package/eslint-plugin-jest",children:(0,s.jsx)(t.code,{children:"eslint-plugin-jest"})})," with its ",(0,s.jsx)(t.a,{href:"https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md",children:(0,s.jsx)(t.code,{children:"no-large-snapshots"})})," option, or ",(0,s.jsx)(t.a,{href:"https://yarnpkg.com/en/package/snapshot-diff",children:(0,s.jsx)(t.code,{children:"snapshot-diff"})})," with its component snapshot comparison feature, to promote committing short, focused assertions."]}),"\n",(0,s.jsx)(t.p,{children:"The goal is to make it easy to review snapshots in pull requests, and fight against the habit of regenerating snapshots when test suites fail instead of examining the root causes of their failure."}),"\n",(0,s.jsx)(t.h3,{id:"2-tests-should-be-deterministic",children:"2. Tests should be deterministic"}),"\n",(0,s.jsx)(t.p,{children:"Testele voastre trebuie s\u0103 fie deterministe. Running the same tests multiple times on a component that has not changed should produce the same results every time. Sunte\u021bi responsabili s\u0103 v\u0103 asigura\u021bi ca imaginile generate nu includ cod specific unor platforme sau alte informatii non-deterministice."}),"\n",(0,s.jsxs)(t.p,{children:["For example, if you have a ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/Clock.js",children:"Clock"})," component that uses ",(0,s.jsx)(t.code,{children:"Date.now()"}),", the snapshot generated from this component will be different every time the test case is run. In this case we can ",(0,s.jsx)(t.a,{href:"/ro/docs/next/mock-functions",children:"mock the Date.now() method"})," to return a consistent value every time the test is run:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"Date.now = jest.fn(() => 1482363367071);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Acum, de fiecare dat\u0103 c\xe2nd se execut\u0103 testul, ",(0,s.jsx)(t.code,{children:"Date.now()"})," va returna ",(0,s.jsx)(t.code,{children:"1482363367071"})," \xeen mod constant. Acest lucru va conduce la acea\u015fi imagine generat\u0103 pentru aceast\u0103 component\u0103 indiferent c\xe2nd s-ar executa testul."]}),"\n",(0,s.jsx)(t.h3,{id:"3-use-descriptive-snapshot-names",children:"3. Use descriptive snapshot names"}),"\n",(0,s.jsx)(t.p,{children:"Always strive to use descriptive test and/or snapshot names for snapshots. The best names describe the expected snapshot content. This makes it easier for reviewers to verify the snapshots during review, and for anyone to know whether or not an outdated snapshot is the correct behavior before updating."}),"\n",(0,s.jsx)(t.p,{children:"For example, compare:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"exports[`<UserName /> should handle some test case`] = `null`;\n\nexports[`<UserName /> should handle some other test case`] = `\n<div>\n  Alan Turing\n</div>\n`;\n"})}),"\n",(0,s.jsx)(t.p,{children:"To:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"exports[`<UserName /> should render null`] = `null`;\n\nexports[`<UserName /> should render Alan Turing`] = `\n<div>\n  Alan Turing\n</div>\n`;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Since the latter describes exactly what's expected in the output, it's more clear to see when it's wrong:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"exports[`<UserName /> should render null`] = `\n<div>\n  Alan Turing\n</div>\n`;\n\nexports[`<UserName /> should render Alan Turing`] = `null`;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\xeentreb\u0103ri-frecvente",children:"\xcentreb\u0103ri frecvente"}),"\n",(0,s.jsx)(t.h3,{id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems",children:"Are snapshots written automatically on Continuous Integration (CI) systems?"}),"\n",(0,s.jsxs)(t.p,{children:["No, as of Jest 20, snapshots in Jest are not automatically written when Jest is run in a CI system without explicitly passing ",(0,s.jsx)(t.code,{children:"--updateSnapshot"}),". Este de a\u015fteptat ca toate imaginile fac parte din codul care se execut\u0103 pe CI \u015fi deoarece noi imagini ar trece automat testele, ele nu ar trebui s\u0103 treac\u0103 testele rulate pe un sistem de CI. Este recomandat s\u0103 se commit-uie \xeentotdeauna toate imaginile pentru a fi men\u0163inute \xeen sistemul de versionare."]}),"\n",(0,s.jsx)(t.h3,{id:"ar-trebui-commit-uite-imaginile-serializate",children:"Ar trebui commit-uite imaginile serializate?"}),"\n",(0,s.jsx)(t.p,{children:"Da, toate fi\u015fierele de imagine ar trebui s\u0103 fie commit-uite al\u0103turi de module pe care le acoper\u0103 \u015fi testele lor. They should be considered part of a test, similar to the value of any other assertion in Jest. De fapt, imaginile reprezint\u0103 starea modulelor surs\u0103 la un anumit moment. \xcen acest fel, atunci c\xe2nd modulele surs\u0103 sunt modificate, Jest poate spune ce anume s-a schimbat de la versiunea anterioar\u0103. Acesta poate oferi \u0219i context suplimentar \xeen timpul code review-ului \xeen care recenzen\u0163ii pot studia mai bine modific\u0103rile."}),"\n",(0,s.jsx)(t.h3,{id:"testarea-de-imagine-func\u021bioneaza-numai-cu-componente-react",children:"Testarea de imagine func\u021bioneaza numai cu componente React?"}),"\n",(0,s.jsxs)(t.p,{children:["Componentele ",(0,s.jsx)(t.a,{href:"/ro/docs/next/tutorial-react",children:"React"})," \u015fi ",(0,s.jsx)(t.a,{href:"/ro/docs/next/tutorial-react-native",children:"React Native"})," sunt un exemplu foarte bun de utilizare. Cu toate acestea, imaginile pot captura orice valoare serializabil\u0103 \u015fi ar trebui utilizate oric\xe2nd dori\u021bi s\u0103 testa\u021bi dac\u0103 rezultatul este corect. Proiectul Jest con\u0163ine multe exemple de testare Jest, rezultatul libr\u0103riei de aser\u021biuni Jest, precum \u015fi loguri din diferite p\u0103r\u0163i ale codului Jest. See an example of ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/e2e/__tests__/console.test.ts",children:"snapshotting CLI output"})," in the Jest repo."]}),"\n",(0,s.jsx)(t.h3,{id:"care-este-diferen\u0163a-\xeentre-testarea-de-imagine-\u015fi-testarea-vizual\u0103-de-regresii",children:"Care este diferen\u0163a \xeentre testarea de imagine \u015fi testarea vizual\u0103 de regresii?"}),"\n",(0,s.jsxs)(t.p,{children:["Testarea de imagine \u015fi testarea vizual\u0103 de regresii sunt dou\u0103 moduri distincte de testare a interfe\u021belor UI, \u015fi ele servesc scopuri diferite. Instrumentele de testare vizual\u0103 fac capturi de ecran ale paginilor web \u015fi compar\u0103 imaginile rezultate pixel cu pixel. With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm. Exist\u0103 diferite compromisuri de luat \xeen considerare \u015fi am enumerat motivele pentru care am construit testarea de imagine pe ",(0,s.jsx)(t.a,{href:"/blog/2016/07/27/jest-14#why-snapshot-testing",children:"blogul Jest"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"does-snapshot-testing-replace-unit-testing",children:"Does snapshot testing replace unit testing?"}),"\n",(0,s.jsx)(t.p,{children:"Testarea de imagine este doar una dintre cele peste 20 asser\u021biuni, care sunt livrate cu Jest. The aim of snapshot testing is not to replace existing unit tests, but to provide additional value and make testing painless. \xcen unele scenarii, testarea de imagine ar putea elimina nevoia de teste unitare pentru un anumit set de functionalitati (ex. componente React), \xeens\u0103 ele pot func\u021biona la fel de bine \xeempreun\u0103."}),"\n",(0,s.jsx)(t.h3,{id:"care-este-performan\u0163a-testelor-de-imagine-\xeen-ceea-ce-prive\u015fte-viteza-\u015fi-dimensiunea-fi\u015fierelor-generate",children:"Care este performan\u0163a testelor de imagine \xeen ceea ce prive\u015fte viteza \u015fi dimensiunea fi\u015fierelor generate?"}),"\n",(0,s.jsxs)(t.p,{children:["Jest a fost rescris av\xe2nd performan\u0163a \xeen prim plan, \u015fi testarea de imagine nu face nicio excep\u0163ie. Deoarece imaginile sunt stocate \xeen fi\u015fiere text, modul acesta de testare este rapid \u015fi de \xeencredere. Jest genereaz\u0103 c\xe2te un fi\u015fier pentru fiecare fi\u015fier de test, care invoc\u0103 metoda ",(0,s.jsx)(t.code,{children:"toMatchSnapshot"}),". The size of the snapshots is pretty small: For reference, the size of all snapshot files in the Jest codebase itself is less than 300 KB."]}),"\n",(0,s.jsx)(t.h3,{id:"cum-rezolv-conflictele-\xeen-cadrul-fi\u015fierelor-de-imagine",children:"Cum rezolv conflictele \xeen cadrul fi\u015fierelor de imagine?"}),"\n",(0,s.jsx)(t.p,{children:"Fi\u015fierele imagine trebuie s\u0103 reprezinte \xeentotdeauna starea actual\u0103 a modulelor pe care le acoper\u0103. Therefore, if you are merging two branches and encounter a conflict in the snapshot files, you can either resolve the conflict manually or update the snapshot file by running Jest and inspecting the result."}),"\n",(0,s.jsx)(t.h3,{id:"este-posibil-s\u0103-se-aplice-principiile-de-test-driven-development-\xeen-testarea-de-imagine",children:"Este posibil s\u0103 se aplice principiile de test-driven development \xeen testarea de imagine?"}),"\n",(0,s.jsx)(t.p,{children:"De\u015fi este posibil s\u0103 se scrie manual fi\u015fierele de imagine, de obicei nu este o metod\u0103 abordabil\u0103. Snapshots help to figure out whether the output of the modules covered by tests is changed, rather than giving guidance to design the code in the first place."}),"\n",(0,s.jsx)(t.h3,{id:"does-code-coverage-work-with-snapshot-testing",children:"Does code coverage work with snapshot testing?"}),"\n",(0,s.jsx)(t.p,{children:"Yes, as well as with any other test."})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},5310:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/failedSnapshotTest-754bd8c54c17338fe046c6273fd3f9d1.png"},2003:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/interactiveSnapshot-58ae38e9cae13140c56d8472453f0595.png"},6439:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/interactiveSnapshotDone-59ee291ee320accbc4bfc4f33b22638a.png"},5015:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/interactiveSnapshotUpdate-a17d8d77f94702048b4d0e0e4c580719.gif"},1670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var s=n(7378);const a=s.createContext({});function i(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||r:i(e),s.createElement(a.Provider,{value:o},t)}}}]);