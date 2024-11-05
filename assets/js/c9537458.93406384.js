"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6689],{6367:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=r(4848),i=r(8453);const a={id:"elasticsearch-ik",title:"IK\u5206\u8bcd\u5668",sidebar_label:"IK\u5206\u8bcd\u5668"},l=void 0,c={id:"database/Elasticsearch/elasticsearch-ik",title:"IK\u5206\u8bcd\u5668",description:"\u672c\u6587\u6458\u81ea\uff1aElasticsearch\u641c\u7d22\u4e2d\u6587\u5206\u8bcd\u4f18\u5316",source:"@site/docs/database/4-Elasticsearch/1-IK\u5206\u8bcd\u5668.md",sourceDirName:"database/4-Elasticsearch",slug:"/database/Elasticsearch/elasticsearch-ik",permalink:"/docs/docs/database/Elasticsearch/elasticsearch-ik",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/4-Elasticsearch/1-IK\u5206\u8bcd\u5668.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"elasticsearch-ik",title:"IK\u5206\u8bcd\u5668",sidebar_label:"IK\u5206\u8bcd\u5668"},sidebar:"dbSidebar",previous:{title:"ES\u7b80\u6613\u6559\u7a0b",permalink:"/docs/docs/database/Elasticsearch/elasticsearch"},next:{title:"Kingbase\u6570\u636e\u5e93",permalink:"/docs/docs/database/kingbase"}},t={},d=[{value:"IK\u5206\u8bcd\u5668",id:"ik\u5206\u8bcd\u5668",level:2},{value:"\u5206\u8bcd\u6a21\u5f0f",id:"\u5206\u8bcd\u6a21\u5f0f",level:3},{value:"Elasticsearch\u4e4b\u5206\u6790\uff08analysis\uff09\u548c\u5206\u6790\u5668\uff08analyzer\uff09",id:"elasticsearch\u4e4b\u5206\u6790analysis\u548c\u5206\u6790\u5668analyzer",level:3},{value:"character filter\u5b57\u7b26\u8fc7\u6ee4\u5668",id:"character-filter\u5b57\u7b26\u8fc7\u6ee4\u5668",level:4},{value:"tokenizer\u5206\u8bcd\u5668",id:"tokenizer\u5206\u8bcd\u5668",level:4},{value:"token filters\u8868\u5f81\u8fc7\u6ee4\u5668",id:"token-filters\u8868\u5f81\u8fc7\u6ee4\u5668",level:4},{value:"ES\u5206\u8bcd\u6d41\u7a0b",id:"es\u5206\u8bcd\u6d41\u7a0b",level:4},{value:"\u81ea\u5b9a\u4e49analyzer",id:"\u81ea\u5b9a\u4e49analyzer",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u672c\u6587\u6458\u81ea\uff1a",(0,s.jsx)(n.a,{href:"https://www.jianshu.com/p/914f102bc174",children:"Elasticsearch\u641c\u7d22\u4e2d\u6587\u5206\u8bcd\u4f18\u5316"})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"1.\u5f53\u641c\u7d22\u5173\u952e\u8bcd\u5982\uff1a\u201c\u4eba\u6c11\u5e01\u201d\u65f6\uff0c\u5982\u679c\u5206\u8bcd\u5c06\u201c\u4eba\u6c11\u5e01\u201d\u5206\u6210\u201c\u4eba\u201d\uff0c\u201c\u6c11\u201d\uff0c\u201c\u5e01\u201d\u4e09\u4e2a\u5355\u5b57\uff0c\u90a3\u4e48\u641c\u7d22\u8be5\u5173\u952e\u8bcd\u4f1a\u5339\u914d\u5230\u5f88\u591a\u5305\u542b\u8be5\u5355\u5b57\u7684\u65e0\u5173\u5185\u5bb9,\u4f46\u662f\u5982\u679c\u5c06\u8be5\u8bcd\u5206\u8bcd\u6210\u4e00\u4e2a\u6574\u8bcd\u201c\u4eba\u6c11\u5e01\u201d\uff0c\u641c\u7d22\u5355\u5b57\u5982\u201c\u4eba\u201d\u5b57\u53c8\u4e0d\u4f1a\u5339\u914d\u5230\u5305\u542b\u201c\u4eba\u6c11\u5e01\u201d\u5173\u952e\u8bcd\u7684\u5185\u5bb9,\u600e\u4e48\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898,\u65e2\u4fdd\u8bc1\u8986\u76d6\u5ea6\u53c8\u4fdd\u8bc1\u51c6\u786e\u5ea6?"}),"\n",(0,s.jsx)(n.p,{children:"2.\u641c\u7d22\u201cRMB\u201d\u65f6\u53ea\u4f1a\u5339\u914d\u5230\u5305\u542b\u201cRMB\u201d\u5173\u952e\u8bcd\u7684\u5185\u5bb9\uff0c\u5b9e\u9645\u4e0a\uff0c\u201cRMB\u201d\u548c\u201c\u4eba\u6c11\u5e01\u201d\u662f\u540c\u4e49\u8bcd\uff0c\u6211\u4eec\u5e0c\u671b\u7528\u6237\u641c\u7d22\u201cRMB\u201d\u548c\u201c\u4eba\u6c11\u5e01\u201d\u53ef\u4ee5\u76f8\u4e92\u5339\u914d\uff0cES\u540c\u4e49\u8bcd\u600e\u4e48\u914d\u7f6e\uff1f"}),"\n",(0,s.jsx)(n.p,{children:'3.\u7528\u6237\u641c\u7d22\u62fc\u97f3: \u5982"baidu",\u6216\u8005\u62fc\u97f3\u9996\u5b57\u6bcd"bd",\u600e\u4e48\u5339\u914d\u5230"\u767e\u5ea6"\u8fd9\u4e2a\u5173\u952e\u8bcd,\u53c8\u5982\u7528\u6237\u8f93\u5165"\u6446\u6e21"\u8fd9\u4e2a\u8bcd\u4e5f\u80fd\u5339\u914d\u5230"\u767e\u5ea6"\u5173\u952e\u8bcd,\u4e2d\u6587\u62fc\u97f3\u5339\u914d\u600e\u4e48\u505a\u5230?'}),"\n",(0,s.jsx)(n.p,{children:"4.\u600e\u4e48\u4fdd\u8bc1\u641c\u7d22\u5173\u952e\u8bcd\u88ab\u6b63\u786e\u5206\u8bcd,\u901a\u5e38\u6211\u4eec\u4f1a\u91c7\u7528\u81ea\u5b9a\u4e49\u8bcd\u5178\u6765\u505a,\u90a3\u4e48\u600e\u4e48\u83b7\u53d6\u81ea\u5b9a\u4e49\u8bcd\u5178?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u4ece\u4ee5\u4e0b\u51e0\u70b9\u8bb2\u4e00\u4e0b\u600e\u4e48ES\u4e2d\u6587\u5206\u8bcd"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e2d\u6587\u5206\u8bcd\u5668"}),"\n",(0,s.jsx)(n.li,{children:"ES \u5206\u8bcd\u6d41\u7a0b\u4e4b analysis,analyzer,filter,tokenizer"}),"\n",(0,s.jsx)(n.li,{children:"ES\u5185\u7f6e\u5206\u8bcd\u5668"}),"\n",(0,s.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49analyzer"}),"\n",(0,s.jsx)(n.li,{children:"ES\u540c\u4e49\u8bcd\u529f\u80fd\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.li,{children:"ES\u62fc\u5199\u7ea0\u9519"}),"\n",(0,s.jsx)(n.li,{children:"ES\u81ea\u5b9a\u4e49\u8bcd\u5178\u83b7\u53d6"}),"\n",(0,s.jsx)(n.li,{children:"\u505c\u7528\u8bcd"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ik\u5206\u8bcd\u5668",children:"IK\u5206\u8bcd\u5668"}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u8bcd\u6a21\u5f0f",children:"\u5206\u8bcd\u6a21\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["Elasticsearch\u4e2d\u6587\u5206\u8bcd\u6211\u4eec\u91c7\u7528Ik\u5206\u8bcd\uff0cik\u6709\u4e24\u79cd\u5206\u8bcd\u6a21\u5f0f\uff0c",(0,s.jsx)(n.code,{children:"ik_max_word"}),",\u548c",(0,s.jsx)(n.code,{children:"ik_smart"}),"\u6a21\u5f0f"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e24\u79cd\u6a21\u5f0f\u7684\u533a\u522b\uff1a"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ik_max_word"}),": \u4f1a\u5c06\u6587\u672c\u505a\u6700\u7ec6\u7c92\u5ea6\u7684\u62c6\u5206\uff0c\u6bd4\u5982\u4f1a\u5c06\u201c\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u56fd\u6b4c\u201d\u62c6\u5206\u4e3a\u201c\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd,\u4e2d\u534e\u4eba\u6c11,\u4e2d\u534e,\u534e\u4eba,\u4eba\u6c11\u5171\u548c\u56fd,\u4eba\u6c11,\u4eba,\u6c11,\u5171\u548c\u56fd,\u5171\u548c,\u548c,\u56fd\u56fd,\u56fd\u6b4c\u201d\uff0c\u4f1a\u7a77\u5c3d\u5404\u79cd\u53ef\u80fd\u7684\u7ec4\u5408\uff1b\r\n",(0,s.jsx)(n.strong,{children:"ik_smart"}),": \u4f1a\u505a\u6700\u7c97\u7c92\u5ea6\u7684\u62c6\u5206\uff0c\u6bd4\u5982\u4f1a\u5c06\u201c\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd\u56fd\u6b4c\u201d\u62c6\u5206\u4e3a\u201c\u4e2d\u534e\u4eba\u6c11\u5171\u548c\u56fd,\u56fd\u6b4c\u201d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7d22\u5f15\u65f6\uff0c\u4e3a\u4e86\u63d0\u4f9b\u7d22\u5f15\u7684\u8986\u76d6\u8303\u56f4\uff0c\u901a\u5e38\u4f1a\u91c7\u7528",(0,s.jsx)(n.code,{children:"ik_max_word"}),"\u5206\u6790\u5668\uff0c\u4f1a\u4ee5\u6700\u7ec6\u7c92\u5ea6\u5206\u8bcd\u7d22\u5f15\uff0c\u641c\u7d22\u65f6\u4e3a\u4e86\u63d0\u9ad8\u641c\u7d22\u51c6\u786e\u5ea6\uff0c\u4f1a\u91c7\u7528",(0,s.jsx)(n.code,{children:"ik_smart"}),"\u5206\u6790\u5668\uff0c\u4f1a\u4ee5\u7c97\u7c92\u5ea6\u5206\u8bcd\u5b57\u6bb5mapping\u8bbe\u7f6e\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'builder.startObject("fileContent");\r\n{\r\n    builder.field("type", "text");\r\n    builder.field("analyzer", "ik_max_word");\r\n    builder.field("search_analyzer", "ik_smart");\r\n}\r\nbuilder.endObject();\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\u793a\u4f8b\u4e3a\u6784\u5efa\u5b57\u6bb5",(0,s.jsx)(n.code,{children:"fileContent"}),"\u7c7b\u578b\u4e3atext\uff0c\u7d22\u5f15\u65f6\u548c\u67e5\u8be2\u65f6\uff0c\u5206\u522b\u91c7\u7528",(0,s.jsx)(n.code,{children:"ik_max_word"}),"\u548c",(0,s.jsx)(n.code,{children:"ik_smark"}),"\u5206\u6790\u5668\uff1b"]}),"\n",(0,s.jsx)(n.h3,{id:"elasticsearch\u4e4b\u5206\u6790analysis\u548c\u5206\u6790\u5668analyzer",children:"Elasticsearch\u4e4b\u5206\u6790\uff08analysis\uff09\u548c\u5206\u6790\u5668\uff08analyzer\uff09"}),"\n",(0,s.jsxs)(n.p,{children:["analysis\u7d22\u5f15\u5206\u6790\u6a21\u5757\u5145\u5f53analyzer\u5206\u6790\u5668\u7684\u53ef\u914d\u7f6e\u6ce8\u518c\u8868,\u901a\u8fc7analyzer\u5bf9\u6587\u6863\u7d22\u5f15\u9636\u6bb5\u7684\u5b57\u6bb5\u548c\u641c\u7d22String\u8fdb\u884c\u5904\u7406,\u81ea\u5b9a\u4e49analyzer\u65f6,\u901a\u5e38\u9700\u8981",(0,s.jsx)(n.code,{children:"character filter"}),"\uff0c ",(0,s.jsx)(n.code,{children:"tokenizer"}),"\uff0c ",(0,s.jsx)(n.code,{children:"token filters"}),"\u6765\u5b8c\u6210"]}),"\n",(0,s.jsx)(n.h4,{id:"character-filter\u5b57\u7b26\u8fc7\u6ee4\u5668",children:"character filter\u5b57\u7b26\u8fc7\u6ee4\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u5b57\u7b26\u4e32\u7ecf\u8fc7\u8fc7\u6ee4\u5668\uff08character filter\uff09\uff0c\u4ed6\u4eec\u7684\u5de5\u4f5c\u662f\u5728\u5206\u8bcd\u524d\u5904\u7406\u5b57\u7b26\u4e32\u3002\u5b57\u7b26\u8fc7\u6ee4\u5668\u80fd\u591f\u53bb\u9664HTML\u6807\u8bb0\uff0c\u4f8b\u5982\uff1a\u5c06\u201c&lta&gt\u201d\u53d8\u4e3a\u201ca\u201d;"}),"\n",(0,s.jsx)(n.h4,{id:"tokenizer\u5206\u8bcd\u5668",children:"tokenizer\u5206\u8bcd\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u82f1\u6587\u5206\u8bcd\u53ef\u4ee5\u6839\u636e\u7a7a\u683c\u5c06\u5355\u8bcd\u5206\u5f00\uff0c\u4e2d\u6587\u5206\u8bcd\u6bd4\u8f83\u590d\u6742\uff0c\u53ef\u4ee5\u91c7\u7528\u673a\u5668\u5b66\u4e60\u7b97\u6cd5\u6765\u5206\u8bcd\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"token-filters\u8868\u5f81\u8fc7\u6ee4\u5668",children:"token filters\u8868\u5f81\u8fc7\u6ee4\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u540e\uff0c\u6bcf\u4e2a\u8bcd\u90fd\u901a\u8fc7\u6240\u6709\u8868\u5f81\u8fc7\u6ee4\uff08token filters\uff09\uff0c\u4ed6\u53ef\u4ee5\u4fee\u6539\u8bcd\uff08\u4f8b\u5982\u5c06\u201cQuick\u201d\u8f6c\u4e3a\u5c0f\u5199\uff09\uff0c\u53bb\u6389\u8bcd\uff08\u4f8b\u5982\u505c\u7528\u8bcd\u50cf\u201ca\u201d\u3001\u201cand\u201d\u3001\u201cthe\u201d\u7b49\u7b49\uff09\uff0c\u6216\u8005\u589e\u52a0\u8bcd\uff08\u4f8b\u5982\u540c\u4e49\u8bcd\u50cf\u201ca\u201d\u3001\u201cand\u201d\u3001\u201cthe\u201d\u7b49\u7b49\uff09\u6216\u8005\u589e\u52a0\u8bcd\uff08\u4f8b\u5982\u540c\u4e49\u8bcd\u50cf\u201cjump\u201d\u548c\u201cleap\u201d\uff09\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"es\u5206\u8bcd\u6d41\u7a0b",children:"ES\u5206\u8bcd\u6d41\u7a0b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"character filter"})," --\x3e> ",(0,s.jsx)(n.code,{children:"tokenizer"})," --\x3e> ",(0,s.jsx)(n.code,{children:"token filters"})]}),"\n",(0,s.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49analyzer",children:"\u81ea\u5b9a\u4e49analyzer"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);