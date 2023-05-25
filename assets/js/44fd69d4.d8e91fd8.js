"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={title:"Introduction",slug:"/acurast-protocol/introduction"},i=void 0,l={unversionedId:"acurast-protocol/introduction",id:"acurast-protocol/introduction",title:"Introduction",description:"Acurast leverages a Substrate Runtime consisting of multiple Substrate Pallets for the Acurast Protocol.",source:"@site/docs/acurast-protocol/introduction.mdx",sourceDirName:"acurast-protocol",slug:"/acurast-protocol/introduction",permalink:"/acurast-protocol/introduction",draft:!1,editUrl:"https://github.com/acurast/acurast-docs/docs/acurast-protocol/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/acurast-protocol/introduction"},sidebar:"docs",previous:{title:"Acurast Marketplace",permalink:"/acurast-marketplace"},next:{title:"Enterprise",permalink:"/acurast-protocol/interoperability/enterprise"}},s={},c=[{value:"Features",id:"features",level:2},{value:"Interoperability Modules",id:"interoperability-modules",level:2},{value:"Enterprise - Web2",id:"enterprise---web2",level:3},{value:"Hyperdrive - Web3",id:"hyperdrive---web3",level:3},{value:"Singularity - AI",id:"singularity---ai",level:3},{value:"Mesh - IoT",id:"mesh---iot",level:3},{value:"Networks",id:"networks",level:2},{value:"Kusama",id:"kusama",level:3},{value:"Polkadot",id:"polkadot",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Acurast leverages a Substrate Runtime consisting of multiple Substrate Pallets for the Acurast Protocol."),(0,o.kt)("p",null,"The Acurast protocol follows a permissionless philosophy and is optimized for the proidig access to a decentralized network of computation ressources. By separating the crucial computation tasks from other dApps, Acurast is capable of mitigating known problematic situations related to network congestion. Scalability through purpose built native components helps Acurast achieve a much-needed level of service in the Web3 space."),(0,o.kt)("p",null,"Acurast has secured a Kusama Parachain slot for its incentivized testnet and will participate in a Polkadot Parachain auctions for a Parachain slot. Gaining access to Polkadot\u2019s and Kusama\u2019s security and the ability to communicate with other Parachains through the Cross-Consensus Message Format (XCM)."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"The main capabilites of the Acurast protocol are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acurast Marketplace",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Acurast Job Matching Engine"),(0,o.kt)("li",{parentName:"ul"},"Acurast Marketplace Reputation System"),(0,o.kt)("li",{parentName:"ul"},"Acurast Execution Verification Engine"))),(0,o.kt)("li",{parentName:"ul"},"Proof of Stake Consensus"),(0,o.kt)("li",{parentName:"ul"},"Interoperability with ",(0,o.kt)("a",{parentName:"li",href:"/acurast-protocol/interoperability/hyperdrive"},"Hyperdrive")),(0,o.kt)("li",{parentName:"ul"},"Acurast Token Staking")),(0,o.kt)("h2",{id:"interoperability-modules"},"Interoperability Modules"),(0,o.kt)("p",null,"Through Acurast modular interoperability, four modules, focusing on different verticals are introduced. All of them leveraging Acurast's confidential computing layer and the Acurast Marketplace."),(0,o.kt)("h3",{id:"enterprise---web2"},"Enterprise - Web2"),(0,o.kt)("p",null,"Focused on the legacy ",(0,o.kt)("strong",{parentName:"p"},"Web2"),' world, giving access to public or permissioned APIs and computation. Off-chain data and computation that is being brought on-chain in a verfiable way. Sometimes also reffered as "Oracle".'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/acurast-protocol/interoperability/enterprise"},"Enterprise \u2192")),(0,o.kt)("h3",{id:"hyperdrive---web3"},"Hyperdrive - Web3"),(0,o.kt)("p",null,"Seamless cross-chain communication between two ",(0,o.kt)("strong",{parentName:"p"},"Web3")," ecosystem, executing context completely trustlessly on an other chain through Acurast's computational layer."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/acurast-protocol/interoperability/hyperdrive"},"Hyperdrive \u2192")),(0,o.kt)("h3",{id:"singularity---ai"},"Singularity - AI"),(0,o.kt)("p",null,"Utilizing Aurast's decentralized confidential computing ressources for ",(0,o.kt)("strong",{parentName:"p"},"Artificial Inteligence")," language model learning in a trustless contact where the data context is not exposed."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/acurast-protocol/interoperability/singularity"},"Singularity \u2192")),(0,o.kt)("h3",{id:"mesh---iot"},"Mesh - IoT"),(0,o.kt)("p",null,"Leveraging the mobile device nature of the Acurast Processor with its built in Bluetooth modules for communication with ",(0,o.kt)("strong",{parentName:"p"},"IoT")," devices."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/acurast-protocol/interoperability/mesh"},"Mesh \u2192")),(0,o.kt)("h2",{id:"networks"},"Networks"),(0,o.kt)("h3",{id:"kusama"},"Kusama"),(0,o.kt)("p",null,"Acurast has secured a Parachain slot on Kusama in Auction #76 and is scheduled to launch its incetivized testnet soon."),(0,o.kt)("h3",{id:"polkadot"},"Polkadot"),(0,o.kt)("p",null,"Anticipated launch on Polkadot is Q4 of 2023."))}p.isMDXComponent=!0}}]);