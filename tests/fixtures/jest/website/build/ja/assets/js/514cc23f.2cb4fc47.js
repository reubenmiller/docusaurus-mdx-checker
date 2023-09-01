"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6189],{4345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var a=t(4246),i=t(1670);const s={id:"timer-mocks",title:"\u30bf\u30a4\u30de\u30fc\u30e2\u30c3\u30af"},r=void 0,c={unversionedId:"timer-mocks",id:"timer-mocks",title:"\u30bf\u30a4\u30de\u30fc\u30e2\u30c3\u30af",description:"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest \u306f \u30bf\u30a4\u30de\u30fc\u95a2\u6570\u3092\u81ea\u5206\u3067\u6642\u9593\u7d4c\u904e\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u308b\u95a2\u6570\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30b0\u30ec\u30fc\u30c8\u30fb\u30b9\u30b3\u30c3\u30c8!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/TimerMocks.md",sourceDirName:".",slug:"/timer-mocks",permalink:"/ja/docs/next/timer-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"current",frontMatter:{id:"timer-mocks",title:"\u30bf\u30a4\u30de\u30fc\u30e2\u30c3\u30af"},sidebar:"docs",previous:{title:"\u975e\u540c\u671f\u306e\u4e8b\u4f8b",permalink:"/ja/docs/next/tutorial-async"},next:{title:"\u30de\u30cb\u30e5\u30a2\u30eb\u30e2\u30c3\u30af",permalink:"/ja/docs/next/manual-mocks"}},l={},o=[{value:"Enable Fake Timers",id:"enable-fake-timers",level:2},{value:"\u3059\u3079\u3066\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b",id:"\u3059\u3079\u3066\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u5f85\u6a5f\u4e2d\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b",id:"\u5f85\u6a5f\u4e2d\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u6307\u5b9a\u3057\u305f\u6642\u9593\u3067\u30bf\u30a4\u30de\u30fc\u3092\u9032\u3081\u308b",id:"\u6307\u5b9a\u3057\u305f\u6642\u9593\u3067\u30bf\u30a4\u30de\u30fc\u3092\u9032\u3081\u308b",level:2},{value:"Selective Faking",id:"selective-faking",level:2}];function m(e){const n=Object.assign({p:"p",code:"code",a:"a",admonition:"admonition",h2:"h2",pre:"pre"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The native timer functions (i.e., ",(0,a.jsx)(n.code,{children:"setTimeout()"}),", ",(0,a.jsx)(n.code,{children:"setInterval()"}),", ",(0,a.jsx)(n.code,{children:"clearTimeout()"}),", ",(0,a.jsx)(n.code,{children:"clearInterval()"}),") are less than ideal for a testing environment since they depend on real time to elapse. Jest \u306f \u30bf\u30a4\u30de\u30fc\u95a2\u6570\u3092\u81ea\u5206\u3067\u6642\u9593\u7d4c\u904e\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u308b\u95a2\u6570\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY",children:"\u30b0\u30ec\u30fc\u30c8\u30fb\u30b9\u30b3\u30c3\u30c8!"})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Also see ",(0,a.jsx)(n.a,{href:"/ja/docs/next/jest-object#fake-timers",children:"Fake Timers API"})," documentation."]})}),"\n",(0,a.jsx)(n.h2,{id:"enable-fake-timers",children:"Enable Fake Timers"}),"\n",(0,a.jsxs)(n.p,{children:["In the following example we enable fake timers by calling ",(0,a.jsx)(n.code,{children:"jest.useFakeTimers()"}),". This is replacing the original implementation of ",(0,a.jsx)(n.code,{children:"setTimeout()"})," and other timer functions. ",(0,a.jsx)(n.code,{children:"jest.useRealTimers()"})," \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30bf\u30a4\u30de\u30fc\u306f\u901a\u5e38\u306e\u52d5\u4f5c\u306b\u5fa9\u5143\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u3059\u3079\u3066\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b",children:"\u3059\u3079\u3066\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u5bfe\u3059\u308b\u5225\u306e\u30c6\u30b9\u30c8\u3068\u3057\u3066\u5f15\u6570\u3067\u6e21\u3057\u305f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u95a2\u6570\u304c1\u79d2\u5f8c\u306b\u547c\u3070\u308c\u305f\u304b\u78ba\u8a8d\u3059\u308b\u30b1\u30fc\u30b9\u3092\u8003\u3048\u307e\u3059\u3002 \u3053\u308c\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f Jest \u306e\u30bf\u30a4\u30de\u30fc\u7ba1\u7406\u7528\u306e API \u3092\u4f7f\u3063\u3066\u30c6\u30b9\u30c8\u4e2d\u306b\u6642\u9593\u3092\u9032\u3081\u3066\u3084\u308a\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5f85\u6a5f\u4e2d\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b",children:"\u5f85\u6a5f\u4e2d\u306e\u30bf\u30a4\u30de\u30fc\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,a.jsx)(n.p,{children:'There are also scenarios where you might have a recursive timer \u2013 that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop, throwing the following error: "Aborting after running 100000 timers, assuming an infinite loop!"'}),"\n",(0,a.jsxs)(n.p,{children:["If that is your case, using ",(0,a.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})," will solve the problem:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="infiniteTimerGame.js"',children:"function infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! 10 seconds before the next game starts...\");\n    callback && callback();\n\n    // Schedule the next game in 10 seconds\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // At this point in time, there should have been a single call to\n    // setTimeout to schedule the end of the game in 1 second.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Fast forward and exhaust only currently pending timers\n    // (but not any new timers that get created during that process)\n    jest.runOnlyPendingTimers();\n\n    // At this point, our 1-second timer should have fired its callback\n    expect(callback).toBeCalled();\n\n    // And it should have created a new timer to start the game over in\n    // 10 seconds\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"For debugging or any other reason you can change the limit of timers that will be run before throwing an error:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.useFakeTimers({timerLimit: 100});\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u6307\u5b9a\u3057\u305f\u6642\u9593\u3067\u30bf\u30a4\u30de\u30fc\u3092\u9032\u3081\u308b",children:"\u6307\u5b9a\u3057\u305f\u6642\u9593\u3067\u30bf\u30a4\u30de\u30fc\u3092\u9032\u3081\u308b"}),"\n",(0,a.jsxs)(n.p,{children:["\u5225\u306e\u53ef\u80fd\u6027\u3068\u3057\u3066\u306f ",(0,a.jsx)(n.code,{children:"jest.advanceTimersByTime(msToRun)"})," \u3092\u4f7f\u3046\u3053\u3068\u3067\u3059\u3002 \u3053\u306e API \u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u30bf\u30a4\u30de\u30fc\u306f ",(0,a.jsx)(n.code,{children:"msToRun"})," \u30df\u30ea\u79d2\u3067\u9032\u307f\u307e\u3059\u3002 \u3053\u306e API \u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u30bf\u30a4\u30de\u30fc\u306f ",(0,a.jsx)(n.code,{children:"msToRun"}),' \u30df\u30ea\u79d2\u9032\u307f\u307e\u3059\u3002 setTimeout() \u307e\u305f\u306f setInterval() \u7d4c\u7531\u3067\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\u3055\u308c\u4fdd\u7559\u4e2d\u3067\u3042\u3063\u305f\u3001\u305d\u306e\u6642\u9593\u5185\u306b\u5b9f\u884c\u4e88\u5b9a\u306e "macro-tasks" \u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6700\u5f8c\u306b\u3001\u4fdd\u7559\u4e2d\u306e\u3059\u3079\u3066\u306e\u30bf\u30a4\u30de\u30fc\u3092\u30af\u30ea\u30a2\u3059\u308b\u3053\u3068\u306f\u30c6\u30b9\u30c8\u306b\u3088\u3063\u3066\u306f\u5f79\u7acb\u3064\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u306b Jest \u306b\u306f ",(0,a.jsx)(n.code,{children:"jest.clearAllTimers()"})," \u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"selective-faking",children:"Selective Faking"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes your code may require to avoid overwriting the original implementation of one or another API. If that is the case, you can use ",(0,a.jsx)(n.code,{children:"doNotFake"})," option. For example, here is how you could provide a custom mock function for ",(0,a.jsx)(n.code,{children:"performance.mark()"})," in jsdom environment:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('allows mocking `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(m,e)})):m(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>s});var a=t(7378);const i=a.createContext({});function s(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:s(e),a.createElement(i.Provider,{value:c},n)}}}]);