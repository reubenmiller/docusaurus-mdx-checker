"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7683],{3606:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=t(4246),a=t(1670);const n={id:"snapshot-testing",title:"Teste de Snapshot"},r=void 0,i={unversionedId:"snapshot-testing",id:"version-29.6/snapshot-testing",title:"Teste de Snapshot",description:"Testes de snapshot s\xe3o ferramentas bem \xfateis sempre que voc\xea desejar garantir que sua UI n\xe3o seja alterada inesperadamente.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.6/SnapshotTesting.md",sourceDirName:".",slug:"/snapshot-testing",permalink:"/pt-BR/docs/snapshot-testing",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.6",frontMatter:{id:"snapshot-testing",title:"Teste de Snapshot"},sidebar:"docs",previous:{title:"Mais Recursos",permalink:"/pt-BR/docs/more-resources"},next:{title:"Um Exemplo de Async",permalink:"/pt-BR/docs/tutorial-async"}},d={},c=[{value:"Testes de Snapshot com Jest",id:"testes-de-snapshot-com-jest",level:2},{value:"Atualizando Snapshots",id:"atualizando-snapshots",level:3},{value:"Modo de Snapshot Interativo",id:"modo-de-snapshot-interativo",level:3},{value:"Inline Snapshots",id:"inline-snapshots",level:3},{value:"Property Matchers",id:"property-matchers",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Treat snapshots as code",id:"1-treat-snapshots-as-code",level:3},{value:"2. Tests should be deterministic",id:"2-tests-should-be-deterministic",level:3},{value:"3. Use descriptive snapshot names",id:"3-use-descriptive-snapshot-names",level:3},{value:"Perguntas Frequentes",id:"perguntas-frequentes",level:2},{value:"Are snapshots written automatically on Continuous Integration (CI) systems?",id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems",level:3},{value:"Arquivos de snapshot devem ser comitados (committed, em ingl\xeas)?",id:"arquivos-de-snapshot-devem-ser-comitados-committed-em-ingl\xeas",level:3},{value:"Teste de snapshot s\xf3 funciona com componentes React?",id:"teste-de-snapshot-s\xf3-funciona-com-componentes-react",level:3},{value:"Qual \xe9 a diferen\xe7a entre teste de snapshot e teste de regress\xe3o visual?",id:"qual-\xe9-a-diferen\xe7a-entre-teste-de-snapshot-e-teste-de-regress\xe3o-visual",level:3},{value:"Teste de snapshot substitui teste unit\xe1rio?",id:"teste-de-snapshot-substitui-teste-unit\xe1rio",level:3},{value:"Qual \xe9 o desempenho do teste de snapshot no que diz respeito a velocidade e tamanho dos arquivos gerados?",id:"qual-\xe9-o-desempenho-do-teste-de-snapshot-no-que-diz-respeito-a-velocidade-e-tamanho-dos-arquivos-gerados",level:3},{value:"Como eu resolvo conflitos dentro de arquivos de snapshot?",id:"como-eu-resolvo-conflitos-dentro-de-arquivos-de-snapshot",level:3},{value:"\xc9 poss\xedvel aplicar os princ\xedpios de desenvolvimento orientado a testes com teste de snapshot?",id:"\xe9-poss\xedvel-aplicar-os-princ\xedpios-de-desenvolvimento-orientado-a-testes-com-teste-de-snapshot",level:3},{value:"Cobertura de c\xf3digo funciona com testes de snapshot?",id:"cobertura-de-c\xf3digo-funciona-com-testes-de-snapshot",level:3}];function p(e){const s=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code",admonition:"admonition",h3:"h3",img:"img",br:"br"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Testes de snapshot s\xe3o ferramentas bem \xfateis sempre que voc\xea desejar garantir que sua UI n\xe3o seja alterada inesperadamente."}),"\n",(0,o.jsx)(s.p,{children:"Um caso comum de teste de snapshot \xe9 renderizar um componente de UI, obter uma captura disso, ent\xe3o compar\xe1-lo para com uma imagem de refer\xeancia armazenada com o teste. O teste ir\xe1 falhar se as duas imagens n\xe3o coincidirem: quer a mudan\xe7a seja inesperada, ou a captura de tela precisa ser atualizada para a nova vers\xe3o do componente da UI."}),"\n",(0,o.jsx)(s.h2,{id:"testes-de-snapshot-com-jest",children:"Testes de Snapshot com Jest"}),"\n",(0,o.jsxs)(s.p,{children:["Uma abordagem semelhante pode ser tomada quando se trata de testar seus componentes React. Em vez de renderizar a interface gr\xe1fica do usu\xe1rio, ou UI, que iria precisar construir o aplicativo inteiro, voc\xea pode usar um renderizador de teste para gerar rapidamente um valor serializ\xe1vel para sua \xe1rvore React. Consider this ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/link.test.js",children:"example test"})," for a ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/Link.js",children:"Link component"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The first time this test is run, Jest creates a ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/__snapshots__/link.test.js.snap",children:"snapshot file"})," that looks like this:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'exports[`renders correctly 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,o.jsxs)(s.p,{children:["O artefato do snapshot deve ser comitado (committed, em ingl\xeas) junto com as altera\xe7\xf5es de c\xf3digo, e revisado como parte de seu processo de revis\xe3o de c\xf3digo. Jest uses ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/packages/pretty-format",children:"pretty-format"})," to make snapshots human-readable during code review. Nas pr\xf3ximas vezes em que o teste for executado, o Jest ir\xe1 comparar a sa\xedda renderizada com o snapshot gerado anteriormente. Se coincidirem, o teste passar\xe1. Se n\xe3o coinciderem, isso pode significar que o test runner achou um bug no seu c\xf3digo (neste caso, no componente ",(0,o.jsx)(s.code,{children:"<Link>"}),") que deve ser resolvido ou pode significar que a implementa\xe7\xe3o mudou e o snapshot precisa ser atualizado."]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["The snapshot is directly scoped to the data you render \u2013 in our example the ",(0,o.jsx)(s.code,{children:"<Link>"})," component with ",(0,o.jsx)(s.code,{children:"page"})," prop passed to it. This implies that even if any other file has missing props (say, ",(0,o.jsx)(s.code,{children:"App.js"}),") in the ",(0,o.jsx)(s.code,{children:"<Link>"})," component, it will still pass the test as the test doesn't know the usage of ",(0,o.jsx)(s.code,{children:"<Link>"})," component and it's scoped only to the ",(0,o.jsx)(s.code,{children:"Link.js"}),". Da mesma maneira, renderizar o mesmo componente com propriedades diferentes em outros testes de snapshots n\xe3o afetar\xe1 o primeiro teste, j\xe1 que os testes n\xe3o se conhecem."]})}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["Mais informa\xe7\xf5es sobre como testes de snapshot funcionam e por que os constru\xedmos podem ser encontradas no ",(0,o.jsx)(s.a,{href:"https://jestjs.io/blog/2016/07/27/jest-14.html",children:"post de lan\xe7amento no blog"}),". N\xf3s recomendamos ler ",(0,o.jsx)(s.a,{href:"http://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/",children:"este post no blog"})," para obter uma boa base de quando voc\xea deve usar teste de snapshot. Tamb\xe9m recomendamos assistir este ",(0,o.jsx)(s.a,{href:"https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature?pl=testing-javascript-with-jest-a36c4074",children:"v\xeddeo no egghead"})," sobre Testes de Snapshot com Jest."]})}),"\n",(0,o.jsx)(s.h3,{id:"atualizando-snapshots",children:"Atualizando Snapshots"}),"\n",(0,o.jsx)(s.p,{children:"\xc9 simples de detectar quando um snapshot falhar depois que um bug foi introduzido. Quando isso acontecer, v\xe1 em frente e corrija o problema e certifique-se de que seus testes de snapshot est\xe3o passando novamente. Agora, vamos falar sobre o caso de quando um teste de snapshot est\xe1 falhando devido a uma altera\xe7\xe3o intencional da implementa\xe7\xe3o."}),"\n",(0,o.jsx)(s.p,{children:"Uma situa\xe7\xe3o assim pode ocorrer se n\xf3s intencionalmente mudarmos o endere\xe7o que para onde o componente Link aponta em no nosso exemplo."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"// Caso de teste atualizado com um Link para um endere\xe7o diferente\nit('renderiza corretamente', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.instagram.com\">Instagram</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,o.jsx)(s.p,{children:"Nesse caso, Jest ir\xe1 imprimir esta sa\xedda:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:t(5310).Z+"",width:"1844",height:"1246"})}),"\n",(0,o.jsx)(s.p,{children:"Uma vez que acabamos de atualizar nosso componente para apontar para um endere\xe7o diferente, \xe9 razo\xe1vel esperar mudan\xe7as no snapshot para este componente. Nosso caso de teste de snapshot est\xe1 falhando porque o snapshot para nosso componente atualizado j\xe1 n\xe3o coincide com o artefato de snapshot para este caso de teste."}),"\n",(0,o.jsx)(s.p,{children:"Para resolver esse problema, precisamos atualizar nossos artefatos de snapshot. Voc\xea pode executar Jest com uma flag que ir\xe1 dizer para re-gerar snapshots:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"jest --updateSnapshot\n"})}),"\n",(0,o.jsxs)(s.p,{children:["V\xe1 em frente e aceite as altera\xe7\xf5es executando o comando acima. Voc\xea tamb\xe9m pode usar o caractere \xfanico equivalente ",(0,o.jsx)(s.code,{children:"-u"})," como flag para re-gerar snapshots, se preferir. Isso ir\xe1 re-gerar artefatos de snapshot para todos testes de snapshot que falharam. Se tiv\xe9ssemos mais algum teste de snapshot falhando devido a um bug n\xe3o intencional, precisamos corrigir o bug antes de re-gerar snapshots para evitar a grava\xe7\xe3o de snapshot do bug."]}),"\n",(0,o.jsxs)(s.p,{children:["Se voc\xea gostaria de limitar quais casos de teste snapshot devem ser gerados novamente, voc\xea pode passar uma flag adicional ",(0,o.jsx)(s.code,{children:"--testNamePattern"})," para re-gravar snapshots somente para aqueles testes que correspondem ao padr\xe3o."]}),"\n",(0,o.jsxs)(s.p,{children:["You can try out this functionality by cloning the ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"snapshot example"}),", modifying the ",(0,o.jsx)(s.code,{children:"Link"})," component, and running Jest."]}),"\n",(0,o.jsx)(s.h3,{id:"modo-de-snapshot-interativo",children:"Modo de Snapshot Interativo"}),"\n",(0,o.jsx)(s.p,{children:'Os snapshots que falharam tamb\xe9m podem ser atualizados de forma interativa no modo "watch":'}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:t(2003).Z+"",width:"2052",height:"1048"})}),"\n",(0,o.jsx)(s.p,{children:"Uma vez que voc\xea entra o Modo de Snapshot Interativo, Jest ir\xe1 passo a passo nos snapshots com falhas, um conjunto de teste por vez, e dar-lhe a oportunidade de revisar o resultado que falhou."}),"\n",(0,o.jsx)(s.p,{children:"A partir daqui voc\xea pode optar por atualizar esse snapshot ou pular para o pr\xf3ximo:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:t(5015).Z+"",width:"1106",height:"697"})}),"\n",(0,o.jsx)(s.p,{children:'Uma vez terminado, Jest ir\xe1 fornecer-lhe um resumo antes de retornar para o modo "watch":'}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:t(6439).Z+"",width:"1452",height:"400"})}),"\n",(0,o.jsx)(s.h3,{id:"inline-snapshots",children:"Inline Snapshots"}),"\n",(0,o.jsxs)(s.p,{children:["Inline snapshots se comportam de forma id\xeantica aos snapshots externos (arquivos ",(0,o.jsx)(s.code,{children:".snap"}),"), exceto os valores de snapshot que s\xe3o escritos automaticamente no c\xf3digo fonte. Isso significa que voc\xea pode obter os benef\xedcios de snapshots gerados automaticamente sem precisar alternar para um arquivo externo para certificar-se de que o valor correto foi escrito."]}),"\n",(0,o.jsx)(s.p,{children:"Example:"}),"\n",(0,o.jsxs)(s.p,{children:["Primeiro, voc\xea escreve um teste, chamando ",(0,o.jsx)(s.code,{children:".toMatchInlineSnapshot()"})," sem argumentos:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:"it('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"https://example.com\">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot();\n});\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Na pr\xf3xima vez que voc\xea executar o Jest, ",(0,o.jsx)(s.code,{children:"tree"})," ser\xe1 calculado, e um snapshot ser\xe1 escrito como um argumento para ",(0,o.jsx)(s.code,{children:"toMatchInlineSnapshot"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:'it(\'renders correctly\', () => {\n  const tree = renderer\n    .create(<Link page="https://example.com">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot(`\n<a\n  className="normal"\n  href="https://example.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Example Site\n</a>\n`);\n});\n'})}),"\n",(0,o.jsxs)(s.p,{children:["\xc9 tudo o que h\xe1 nisso! Voc\xea pode at\xe9 mesmo atualizar os snapshots com ",(0,o.jsx)(s.code,{children:"--updateSnapshot"})," ou usando a chave ",(0,o.jsx)(s.code,{children:"u"})," no modo ",(0,o.jsx)(s.code,{children:"--watch"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["By default, Jest handles the writing of snapshots into your source code. However, if you're using ",(0,o.jsx)(s.a,{href:"https://www.npmjs.com/package/prettier",children:"prettier"})," in your project, Jest will detect this and delegate the work to prettier instead (including honoring your configuration)."]}),"\n",(0,o.jsx)(s.h3,{id:"property-matchers",children:"Property Matchers"}),"\n",(0,o.jsx)(s.p,{children:"Often there are fields in the object you want to snapshot which are generated (like IDs and Dates). If you try to snapshot these objects, they will force the snapshot to fail on every run:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'it(\'will fail every time\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot();\n});\n\n// Snapshot\nexports[`will fail every time 1`] = `\n{\n  "createdAt": 2018-05-19T23:36:09.816Z,\n  "id": 3,\n  "name": "LeBron James",\n}\n`;\n'})}),"\n",(0,o.jsx)(s.p,{children:"For these cases, Jest allows providing an asymmetric matcher for any property. These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'it(\'will check the matchers and pass\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    id: expect.any(Number),\n  });\n});\n\n// Snapshot\nexports[`will check the matchers and pass 1`] = `\n{\n  "createdAt": Any<Date>,\n  "id": Any<Number>,\n  "name": "LeBron James",\n}\n`;\n'})}),"\n",(0,o.jsx)(s.p,{children:"Qualquer valor dado que n\xe3o combina ser\xe1 verificado exatamente e salvo no snapshot:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:"it('will check the matchers and pass', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: 'LeBron James',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    id: expect.any(Number),\n  });\n});\n\n// Snapshot\nexports[`will check the matchers and pass 1`] = ` James Bond',\n  });\n});\n\n// Snapshot\nexports[`will check the values and pass 1`] = `\n{\n  \"createdAt\": Any<Date>,\n  \"name\": 'Bond... \"LeBron James\",\n}\n`;\n"})}),"\n",(0,o.jsxs)(s.admonition,{type:"tip",children:[(0,o.jsxs)(s.p,{children:["If the case concerns a string not an object then you need to replace random part of that string on your own before testing the snapshot.",(0,o.jsx)(s.br,{}),"\n","You can use for that e.g. ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",children:(0,o.jsx)(s.code,{children:"replace()"})})," and ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",children:"regular expressions"}),"."]}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-javascript",children:'const randomNumber = Math.round(Math.random() * 100);\nconst stringWithRandomData = `<div id="${randomNumber}">Lorem ipsum</div>`;\nconst stringWithConstantData = stringWithRandomData.replace(/id="\\d+"/, 123);\nexpect(stringWithConstantData).toMatchSnapshot();\n'})}),(0,o.jsxs)(s.p,{children:["Another way is to ",(0,o.jsx)(s.a,{href:"/pt-BR/docs/mock-functions",children:"mock"})," the library responsible for generating the random part of the code you're snapshotting."]})]}),"\n",(0,o.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsx)(s.p,{children:"Snapshots are a fantastic tool for identifying unexpected interface changes within your application \u2013 whether that interface is an API response, UI, logs, or error messages. As with any testing strategy, there are some best-practices you should be aware of, and guidelines you should follow, in order to use them effectively."}),"\n",(0,o.jsx)(s.h3,{id:"1-treat-snapshots-as-code",children:"1. Treat snapshots as code"}),"\n",(0,o.jsx)(s.p,{children:"Commit snapshots and review them as part of your regular code review process. This means treating snapshots as you would any other type of test or code in your project."}),"\n",(0,o.jsx)(s.p,{children:"Ensure that your snapshots are readable by keeping them focused, short, and by using tools that enforce these stylistic conventions."}),"\n",(0,o.jsxs)(s.p,{children:["As mentioned previously, Jest uses ",(0,o.jsx)(s.a,{href:"https://yarnpkg.com/en/package/pretty-format",children:(0,o.jsx)(s.code,{children:"pretty-format"})})," to make snapshots human-readable, but you may find it useful to introduce additional tools, like ",(0,o.jsx)(s.a,{href:"https://yarnpkg.com/en/package/eslint-plugin-jest",children:(0,o.jsx)(s.code,{children:"eslint-plugin-jest"})})," with its ",(0,o.jsx)(s.a,{href:"https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md",children:(0,o.jsx)(s.code,{children:"no-large-snapshots"})})," option, or ",(0,o.jsx)(s.a,{href:"https://yarnpkg.com/en/package/snapshot-diff",children:(0,o.jsx)(s.code,{children:"snapshot-diff"})})," with its component snapshot comparison feature, to promote committing short, focused assertions."]}),"\n",(0,o.jsx)(s.p,{children:"The goal is to make it easy to review snapshots in pull requests, and fight against the habit of regenerating snapshots when test suites fail instead of examining the root causes of their failure."}),"\n",(0,o.jsx)(s.h3,{id:"2-tests-should-be-deterministic",children:"2. Tests should be deterministic"}),"\n",(0,o.jsx)(s.p,{children:"Seus testes devem ser determin\xedsticos. Running the same tests multiple times on a component that has not changed should produce the same results every time. Voc\xea \xe9 respons\xe1vel por certificar-se de que seus snapshots gerados n\xe3o incluem dados espec\xedficos de plataforma ou outros n\xe3o determin\xedsticos."}),"\n",(0,o.jsxs)(s.p,{children:["For example, if you have a ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/Clock.js",children:"Clock"})," component that uses ",(0,o.jsx)(s.code,{children:"Date.now()"}),", the snapshot generated from this component will be different every time the test case is run. Neste caso podemos ",(0,o.jsx)(s.a,{href:"/pt-BR/docs/mock-functions",children:"simular o m\xe9todo Date.now()"})," para retornar um valor consistente toda vez que o teste \xe9 executado:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"Date.now = jest.fn(() => 1482363367071);\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Agora, toda vez que o caso de teste de snapshot \xe9 executado, ",(0,o.jsx)(s.code,{children:"Date.now()"})," retornar\xe1 consistentemente ",(0,o.jsx)(s.code,{children:"1482363367071"}),". Isso resultar\xe1 no mesmo snapshot sendo gerado para este componente independentemente de quando o teste \xe9 executado."]}),"\n",(0,o.jsx)(s.h3,{id:"3-use-descriptive-snapshot-names",children:"3. Use descriptive snapshot names"}),"\n",(0,o.jsx)(s.p,{children:"Always strive to use descriptive test and/or snapshot names for snapshots. The best names describe the expected snapshot content. This makes it easier for reviewers to verify the snapshots during review, and for anyone to know whether or not an outdated snapshot is the correct behavior before updating."}),"\n",(0,o.jsx)(s.p,{children:"For example, compare:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"exports[`<UserName /> should handle some test case`] = `null`;\n\nexports[`<UserName /> should handle some other test case`] = `\n<div>\n  Alan Turing\n</div>\n`;\n"})}),"\n",(0,o.jsx)(s.p,{children:"Para:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"exports[`<UserName /> should render null`] = `null`;\n\nexports[`<UserName /> should render Alan Turing`] = `\n<div>\n  Alan Turing\n</div>\n`;\n"})}),"\n",(0,o.jsx)(s.p,{children:"Since the latter describes exactly what's expected in the output, it's more clear to see when it's wrong:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"exports[`<UserName /> should render null`] = `\n<div>\n  Alan Turing\n</div>\n`;\n\nexports[`<UserName /> should render Alan Turing`] = `null`;\n"})}),"\n",(0,o.jsx)(s.h2,{id:"perguntas-frequentes",children:"Perguntas Frequentes"}),"\n",(0,o.jsx)(s.h3,{id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems",children:"Are snapshots written automatically on Continuous Integration (CI) systems?"}),"\n",(0,o.jsxs)(s.p,{children:["No, as of Jest 20, snapshots in Jest are not automatically written when Jest is run in a CI system without explicitly passing ",(0,o.jsx)(s.code,{children:"--updateSnapshot"}),". Espera-se que todos os snapshots s\xe3o parte do c\xf3digo que \xe9 executado em CI e como novos snapshots passam automaticamente, eles n\xe3o devem passar um teste executado em um sistema de CI. \xc9 recomend\xe1vel sempre dar commit em todos os snapshots e mant\xea-los no controle de vers\xe3o."]}),"\n",(0,o.jsx)(s.h3,{id:"arquivos-de-snapshot-devem-ser-comitados-committed-em-ingl\xeas",children:"Arquivos de snapshot devem ser comitados (committed, em ingl\xeas)?"}),"\n",(0,o.jsx)(s.p,{children:"Sim, todos os arquivos de snapshot devem ser comitados juntamente com os m\xf3dulos que eles cobrem e seus testes. Eles devem ser considerados parte de um teste, similar ao valor de qualquer outra verifica\xe7\xe3o em Jest. Na verdade, snapshots representam o estado dos m\xf3dulos fonte em qualquer ponto no tempo. Desta forma, quando os m\xf3dulos fonte s\xe3o modificados, Jest pode dizer o que mudou da vers\xe3o anterior. Tamb\xe9m pode fornecer um monte de contexto adicional durante a revis\xe3o do c\xf3digo na qual os revisores podem estudar melhor as altera\xe7\xf5es."}),"\n",(0,o.jsx)(s.h3,{id:"teste-de-snapshot-s\xf3-funciona-com-componentes-react",children:"Teste de snapshot s\xf3 funciona com componentes React?"}),"\n",(0,o.jsxs)(s.p,{children:["Componentes ",(0,o.jsx)(s.a,{href:"/pt-BR/docs/tutorial-react",children:"React"})," e ",(0,o.jsx)(s.a,{href:"/pt-BR/docs/tutorial-react-native",children:"React Native"})," s\xe3o um bom caso de uso para testes de snapshot. No entanto, snapshots podem capturar qualquer valor que pode ser serializado e devem ser usados sempre que o objetivo \xe9 testar se a sa\xedda \xe9 correta. O reposit\xf3rio Jest cont\xe9m muitos exemplos de testes da sa\xedda do pr\xf3prio Jest, a sa\xedda da biblioteca de verifica\xe7\xe3o do Jest, bem como mensagens de log de v\xe1rias partes do c\xf3digo do Jest. See an example of ",(0,o.jsx)(s.a,{href:"https://github.com/jestjs/jest/blob/main/e2e/__tests__/console.test.ts",children:"snapshotting CLI output"})," in the Jest repo."]}),"\n",(0,o.jsx)(s.h3,{id:"qual-\xe9-a-diferen\xe7a-entre-teste-de-snapshot-e-teste-de-regress\xe3o-visual",children:"Qual \xe9 a diferen\xe7a entre teste de snapshot e teste de regress\xe3o visual?"}),"\n",(0,o.jsxs)(s.p,{children:["Teste de snapshot e teste de regress\xe3o visual s\xe3o duas maneiras distintas de testar interfaces de usu\xe1rio, ou UIs, e eles servem para finalidades diferentes. Ferramentas de teste de regress\xe3o visual tiram screenshots de p\xe1ginas da web e comparam as imagens resultantes pixel por pixel. Com testes de snapshot os valores s\xe3o serializados, armazenados dentro de arquivos de texto e comparados usando um algoritmo de compara\xe7\xe3o. There are different trade-offs to consider and we listed the reasons why snapshot testing was built in the ",(0,o.jsx)(s.a,{href:"https://jestjs.io/blog/2016/07/27/jest-14.html#why-snapshot-testing",children:"Jest blog"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"teste-de-snapshot-substitui-teste-unit\xe1rio",children:"Teste de snapshot substitui teste unit\xe1rio?"}),"\n",(0,o.jsx)(s.p,{children:"Teste de snapshot \xe9 apenas um das mais de 20 verifica\xe7\xf5es que acompanham Jest. O objetivo do teste de snapshot n\xe3o \xe9 substituir os testes unit\xe1rios existentes, mas fornecer valor adicional e tornar os testes mais f\xe1ceis. Em alguns cen\xe1rios, teste de snapshot podem potencialmente eliminar a necessidade de testes unit\xe1rios para um determinado conjunto de funcionalidades (por exemplo, componentes React), mas tamb\xe9m podem trabalhar juntos."}),"\n",(0,o.jsx)(s.h3,{id:"qual-\xe9-o-desempenho-do-teste-de-snapshot-no-que-diz-respeito-a-velocidade-e-tamanho-dos-arquivos-gerados",children:"Qual \xe9 o desempenho do teste de snapshot no que diz respeito a velocidade e tamanho dos arquivos gerados?"}),"\n",(0,o.jsxs)(s.p,{children:["Jest foi reescrito tendo desempenho em mente, e teste de snapshot n\xe3o \xe9 uma exce\xe7\xe3o. Como os snapshots s\xe3o armazenados dentro de arquivos de texto, esta forma de teste \xe9 r\xe1pida e confi\xe1vel. Jest gera um novo arquivo para cada arquivo de teste que invoca o matcher ",(0,o.jsx)(s.code,{children:"toMatchSnapshot"}),". The size of the snapshots is pretty small: For reference, the size of all snapshot files in the Jest codebase itself is less than 300 KB."]}),"\n",(0,o.jsx)(s.h3,{id:"como-eu-resolvo-conflitos-dentro-de-arquivos-de-snapshot",children:"Como eu resolvo conflitos dentro de arquivos de snapshot?"}),"\n",(0,o.jsx)(s.p,{children:"Arquivos de snapshot sempre devem representar o estado atual dos m\xf3dulos que est\xe3o cobrindo. Portanto, se voc\xea estiver dando merge em duas branches e encontra um conflito nos arquivos de snapshot, voc\xea pode resolver o conflito manualmente ou atualizar o arquivo de snapshot executando Jest e inspecionar o resultado."}),"\n",(0,o.jsx)(s.h3,{id:"\xe9-poss\xedvel-aplicar-os-princ\xedpios-de-desenvolvimento-orientado-a-testes-com-teste-de-snapshot",children:"\xc9 poss\xedvel aplicar os princ\xedpios de desenvolvimento orientado a testes com teste de snapshot?"}),"\n",(0,o.jsx)(s.p,{children:"Embora seja poss\xedvel escrever arquivos de snapshot manualmente, isto geralmente n\xe3o \xe9 amig\xe1vel. Snapshots ajudam a descobrir se a sa\xedda dos m\xf3dulos cobertos por testes foi alterada, ao inv\xe9s de dar orienta\xe7\xe3o para a concep\xe7\xe3o do c\xf3digo."}),"\n",(0,o.jsx)(s.h3,{id:"cobertura-de-c\xf3digo-funciona-com-testes-de-snapshot",children:"Cobertura de c\xf3digo funciona com testes de snapshot?"}),"\n",(0,o.jsx)(s.p,{children:"Sim, assim como com qualquer outro teste."})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(p,e)})):p(e)}},5310:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/failedSnapshotTest-754bd8c54c17338fe046c6273fd3f9d1.png"},2003:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/interactiveSnapshot-58ae38e9cae13140c56d8472453f0595.png"},6439:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/interactiveSnapshotDone-59ee291ee320accbc4bfc4f33b22638a.png"},5015:(e,s,t)=>{t.d(s,{Z:()=>o});const o=t.p+"assets/images/interactiveSnapshotUpdate-a17d8d77f94702048b4d0e0e4c580719.gif"},1670:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>n});var o=t(7378);const a=o.createContext({});function n(e){const s=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||r:n(e),o.createElement(a.Provider,{value:i},s)}}}]);