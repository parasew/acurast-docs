(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[676],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7477:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7462),o=n(7294),a=n(2949);const s=[],i=(0,o.lazy)((()=>Promise.all([n.e(532),n.e(302)]).then(n.bind(n,2302))));const l=function(e){let t;const{colorMode:n}=(0,a.I)();return o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading")},o.createElement(i,(0,r.Z)({},e,{editorWillMount:function(n){t=n,n.editor.defineTheme("vs-dark",{base:"vs-dark",inherit:!0,rules:[{background:"121212"}],colors:{"editor.background":"#121212"}}),n.languages.typescript.typescriptDefaults.setCompilerOptions({target:n.languages.typescript.ScriptTarget.ES2017,allowNonTsExtensions:!0,moduleResolution:n.languages.typescript.ModuleResolutionKind.NodeJs,module:n.languages.typescript.ModuleKind.ESNext,typeRoots:["node_modules/@types"]}),s.forEach((e=>{const t="file:///node_modules/"+e.name;n.languages.typescript.typescriptDefaults.addExtraLib(e.dts,t)})),e.editorWillMount&&e.editorWillMount(n)},editorWillUnmount:()=>{},editorDidMount:function(n){n.setModel(t.editor.createModel(e.value,"typescript",t.Uri.parse("file:///main-"+Math.random()+".ts")))},theme:"dark"===n?"vs-dark":"vs-light"})))}},35:(e,t,n)=>{"use strict";n.d(t,{l:()=>k});var r=n(7462),o=n(7294);const a="browserWindow_my1Q",s="browserWindowHeader_jXSR",i="buttons_uHc7",l="browserWindowAddressBar_Pd8y",c="dot_giz1",p="browserWindowMenuIcon_Vhuh",u="bar_rrRL",d="browserWindowBody_Idgs";const m=function(e){let{children:t,minHeight:n,url:r}=e;return o.createElement("div",{className:a,style:{minHeight:n}},o.createElement("div",{className:s},o.createElement("div",{className:i},o.createElement("span",{className:c,style:{background:"#f25f58"}}),o.createElement("span",{className:c,style:{background:"#fbbe3c"}}),o.createElement("span",{className:c,style:{background:"#58cb42"}})),o.createElement("div",{className:l},r),o.createElement("div",{className:p},o.createElement("div",null,o.createElement("span",{className:u}),o.createElement("span",{className:u}),o.createElement("span",{className:u})))),o.createElement("div",{className:d},t))};var y=n(7477),g=n(2949);const h=()=>{const{colorMode:e}=(0,g.I)();return o.createElement("svg",{style:{width:"24px"},className:"margin-right--sm",width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"dark"===e?"#fff":"#3880ff"},o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},o.createElement("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),o.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},o.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))};var f=n(6420),b=n(920);const E=e=>{let{code:t}=e;const[n,a]=(0,o.useState)(t.props.children.props.children),[s,i]=(0,o.useState)(b.T.INIT),[l,c]=(0,o.useState)(""),[p,u]=(0,o.useState)(!0),d=async()=>{c(""),i(b.T.INIT)},g={width:800,height:18*(1+n.split("\n").length)};return o.createElement(o.Fragment,null,p?t:o.createElement(y.Z,(0,r.Z)({},g,{language:"typescript",value:n,onChange:e=>{a(e)},options:{scrollBeyondLastLine:!1,minimap:{enabled:!1},wordWrap:"on"}})),o.createElement("button",{className:"button button--secondary margin-bottom--lg margin-right--xs",onClick:()=>{(async()=>{u(!p)})()}},p?"Edit Code":"Show Example"),o.createElement("button",{className:"button button--secondary margin-bottom--lg",onClick:()=>{(async()=>{(0,f.s)(n)})()}},"Copy Share URL"),o.createElement(m,{minHeight:"",url:"https://example.com"},o.createElement("button",{className:"button button--primary margin-right--xs",onClick:()=>{(async()=>{s!==b.T.STARTED&&(await d(),i(b.T.STARTED),setTimeout((async()=>{await(0,f.M)(n,c),i(b.T.ENDED)}),10))})()}},"Run Code"),o.createElement("button",{className:"button button--secondary",onClick:()=>{d()}},"Clear Output"),s!==b.T.INIT?o.createElement(o.Fragment,null,o.createElement("h4",{className:"margin-vert--md"},"Output"),o.createElement("pre",null,o.createElement("span",{className:"d-align-items--center"},s===b.T.STARTED?o.createElement(o.Fragment,null,o.createElement(h,null)):"",l||s===b.T.ENDED?l:"Waiting for output..."))):""))},k=e=>o.createElement(E,{code:e.children})},920:(e,t,n)=>{"use strict";let r;n.d(t,{T:()=>r}),function(e){e[e.INIT=0]="INIT",e[e.STARTED=1]="STARTED",e[e.ENDED=2]="ENDED"}(r||(r={}))},1509:(e,t,n)=>{"use strict";n.d(t,{N:()=>r});const r='export const fulfill = (payload: any) => {\n  console.log("fulfill", payload);\n  return payload;\n};\n\nexport const pack = (payload: any) => {\n  console.log("pack");\n  return payload;\n};\n\nexport const sign = (payload: any) => {\n  console.log("sign");\n  return payload;\n};\n\nexport const httpGET = async (\n  url: string,\n  headers: any,\n  successCallback: (response: any, certificate?: any, payload?: any) => string,\n  errorCallback: (error: Error) => void\n) => {\n  console.log("httpGET");\n  const response = await fetch(\n    "https://cors-proxy.airgap.prod.gke.papers.tech/proxy-with-fingerprint?url=" +\n      url,\n    {\n      method: "GET",\n      mode: "cors",\n      headers: headers,\n    }\n  );\n\n  // TODO: Handle non-json responses\n  const jsonPromise = response.json();\n  jsonPromise.then((res) => {\n    console.log("response", res);\n    successCallback(\n      JSON.stringify(res),\n      response.headers.get("X-Fingerprint256")\n    );\n  });\n\n  return jsonPromise;\n};\n\nexport const httpPOST = async (\n  url: string,\n  body: any,\n  headers: any,\n  successCallback: (payload: any, certificate?: any, response?: any) => string,\n  errorCallback: (error: Error) => void\n) => {\n  console.log("httpPOST");\n  const response = await fetch(url, {\n    method: "POST",\n    mode: "cors",\n    headers: headers,\n    body: body,\n  });\n\n  const text = response.text();\n\n  text.then((res) => {\n    successCallback(res);\n  });\n\n  return text;\n};\n\nexport const attest = (\n  nonce: string,\n  successCallback: (payload: any, certificate: any, response: any) => string,\n  errorCallback: (error: Error) => void\n) => {\n  console.log("attest");\n};\n\nexport const ownAddress = () => {\n  return "tz1xxxxxxx";\n};\n\nexport const generateSecureRandomHex = (): string => {\n  var buf = new Uint8Array(4);\n  window.crypto.getRandomValues(buf);\n  return Array.from(buf)\n    .map((x) => x.toString(16))\n    .join("");\n};\n\nexport const _STD_ = {\n  chains: {\n    ethereum: {\n      fulfill: async (rpc: string, destination: string, payload: string, extra: Record<string, any>, onSuccess: (opHash: string) => void, onError: (err: any) => void) => {\n        onSuccess("0x0123456789");\n      }\n    }\n  },\n  random: {\n    generateSecureRandomHex,\n  }\n};\n'},6420:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>runCoinlibCode,s:()=>copyShareUrl});var typescript__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5423),typescript__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(typescript__WEBPACK_IMPORTED_MODULE_0__),_predefined_methods_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1509);function replaceAll(e,t,n){return e.split(t).join(n)}const removeImports=e=>{const t=e.split("\n");let n=!0;return t.map((e=>{e.trim().startsWith("import")&&(n=!1);const t=n?e:void 0;return e.indexOf("@airgap/coinlib-core")>=0&&(n=!0),t})).filter((e=>!!e)).join("\n")},runCoinlibCode=(rawCode,setOutput)=>{let code=rawCode;const coinlib={};let output="";const appendOutput=e=>{output+="\n"+e,setOutput(output.trim())},myLog=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log("CODE_RUNNER:",...t),appendOutput(t.map((e=>"object"==typeof e?JSON.stringify(e,null,2):e)).join(" "))};let runnable;return code=replaceAll(code,"console.log(","progress("),code=code.replace(/(^|\s+)(print[(])/g,"progress("),code=removeImports(code),code=typescript__WEBPACK_IMPORTED_MODULE_0__.transpile("({\n      run: async (coinlib: any, progress: any): string => {\n        Object.keys(coinlib).forEach(key => {\n          window[key] = coinlib[key]\n        })\n        return (async () => {\n          "+_predefined_methods_string__WEBPACK_IMPORTED_MODULE_1__.N+";\n          "+code+";\n          if (typeof result !== 'undefined') {\n            return result\n          }\n        })()\n      })"),new Promise((resolve=>{try{runnable=eval(code),runnable.run(coinlib,myLog).then((e=>{e&&appendOutput("Returned:\n"+JSON.stringify(e,null,2)),resolve(e)})).catch((e=>{console.warn(e),appendOutput(JSON.stringify(e,null,2)),resolve(e)}))}catch(e){appendOutput(e),console.error(e),resolve(e)}}))},copyShareUrl=e=>{const t="https://"+window.location.host+"/playground?code="+btoa(e);navigator.clipboard.writeText(t).catch((e=>console.error("Failed to copy to url!",e)))}},6826:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),a=n(35),s=n(941),i=n(4996);const l={title:"Introduction",slug:"/developers/introduction"},c="Developers",p={unversionedId:"developers/introduction",id:"developers/introduction",title:"Introduction",description:"Consumers or Developers are the ones that are in need of interoperability for their decentralized applications. Consumers can define in accessible Javascript code their requirements and get access to computational ressources through the Acurast Marketplace by being matched with Processors.",source:"@site/docs/developers/introduction.mdx",sourceDirName:"developers",slug:"/developers/introduction",permalink:"/developers/introduction",draft:!1,editUrl:"https://github.com/acurast/acurast-docs/docs/developers/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/developers/introduction"},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"How To Get Started",permalink:"/developers/get-started"}},u={},d=[{value:"Get Started",id:"get-started",level:2},{value:"Examples",id:"examples",level:2},{value:"HTTPS GET Request",id:"https-get-request",level:3},{value:"Verifiable Randomness",id:"verifiable-randomness",level:3}],m={toc:d};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developers"},"Developers"),(0,o.kt)("p",null,"Consumers or Developers are the ones that are in need of interoperability for their decentralized applications. Consumers can define in accessible Javascript code their requirements and get access to computational ressources through the Acurast Marketplace by being matched with Processors."),(0,o.kt)("p",null,"The so-called Acurast Jobs are executed by Processors in their Trusted Execution Environment that provide the Output of the Job and a Proof of Execution to the defined desintation chain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Developers can define their requirements in code and have access complete access to ",(0,o.kt)("a",{parentName:"strong",href:"/acurast-protocol/interoperability/enterprise"},"Acurast's Interoperability Modules"))),(0,o.kt)(s.Z,{sources:{light:(0,i.Z)("/img/acurast-consumer-flow.png"),dark:(0,i.Z)("/img/acurast-consumer-flow.png")},mdxType:"ThemedImage"}),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"Get access to interoperability resources through the Acurast Console. Read more on the steps on ",(0,o.kt)("a",{parentName:"p",href:"get-started"},"How To Get Started"),", based on your production or testing needs."),(0,o.kt)("p",null,"Not sure if your ecosystem is supported? Take a look at ",(0,o.kt)("a",{parentName:"p",href:"/integrations/introduction"},"Ecosystems & Integrations"),"."),(0,o.kt)("div",{class:"padding-vert--md"}),(0,o.kt)(s.Z,{sources:{light:(0,i.Z)("/img/acurast-consumer.png"),dark:(0,i.Z)("/img/acurast-console.png")},mdxType:"ThemedImage"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.acurast.com/"},"Acurast Console")," and log in with your ",(0,o.kt)("a",{parentName:"li",href:"https://www.talisman.xyz/wallet"},"Talisman Wallet")," or your ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/extension/"},"PolkadotJS Extension"),"."),(0,o.kt)("li",{parentName:"ol"},'Fund Account - Get Testnet funds for your account with "Fund Account", to be able to create Jobs.'),(0,o.kt)("li",{parentName:"ol"},'Go to "Create Job" and select your destination, the ecosystem you\'re building in.'),(0,o.kt)("li",{parentName:"ol"},'Select an existing template adapt it or write your own code that fits your needs. Test your code with "Test Code".'),(0,o.kt)("li",{parentName:"ol"},"Select your own Processor or use public ones."),(0,o.kt)("li",{parentName:"ol"},"Define your execution schedule with the parameters such as start and endtime, interval etc."),(0,o.kt)("li",{parentName:"ol"},"Specify your usage parameters."),(0,o.kt)("li",{parentName:"ol"},"Specify your addtional parameters such as the reward."),(0,o.kt)("li",{parentName:"ol"},"Publish your Job and wait for your first fulfillment.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Code examples for the ",(0,o.kt)("a",{parentName:"p",href:"/acurast-protocol/interoperability/enterprise"},"Acurast Enterprise")," interoperability module for off-chain data and computation."),(0,o.kt)("h3",{id:"https-get-request"},"HTTPS GET Request"),(0,o.kt)("p",null,"Request from an API with the result of an asset price."),(0,o.kt)(a.l,{mdxType:"RunnableCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'httpGET(\n  "https://api.binance.com/api/v3/ticker/price?symbol=BNBBTC",\n  {},\n  (response, certificate) => {\n    console.log("response", response);\n    const price = JSON.parse(response)["price"] * 10 ** 6;\n    console.log("price", price);\n    const payload = { price: price, timestamp: Date.now() / 1000 };\n    const packedPayload = pack(payload);\n    const signature = sign(payload);\n    httpPOST(\n      "https://oracle.free.beeceptor.com",\n      JSON.stringify({\n        signature: signature,\n        certificate: certificate,\n        payload: packedPayload,\n      }),\n      {},\n      (response, certificate) => {},\n      (errorMessage) => {}\n    );\n  },\n  (errorMessage) => {}\n);\n'))),(0,o.kt)("div",{class:"padding-vert--md"}),(0,o.kt)("h3",{id:"verifiable-randomness"},"Verifiable Randomness"),(0,o.kt)("p",null,"Getting a randomized output from the Trusted Execution Environment."),(0,o.kt)(a.l,{mdxType:"RunnableCode"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"return fulfill(generateSecureRandomHex());\n"))))}y.isMDXComponent=!0},3411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=3411,e.exports=t},2183:()=>{},3024:()=>{},2715:()=>{},3611:()=>{},8353:()=>{},1210:()=>{},3454:()=>{}}]);