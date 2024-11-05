"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5689],{9504:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var s=r(4848),l=r(8453);const d={id:"zookeeper-guide",title:"Zookeeper\u5f00\u53d1\u8005\u6307\u5357",sidebar_label:"Zookeeper\u5f00\u53d1\u8005\u6307\u5357"},c=void 0,i={id:"server/Zookeeper/zookeeper-guide",title:"Zookeeper\u5f00\u53d1\u8005\u6307\u5357",description:"https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html",source:"@site/docs/server/6-Zookeeper/2-Zookeeper\u5f00\u53d1\u8005\u6307\u5357.md",sourceDirName:"server/6-Zookeeper",slug:"/server/Zookeeper/zookeeper-guide",permalink:"/docs/docs/server/Zookeeper/zookeeper-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/server/6-Zookeeper/2-Zookeeper\u5f00\u53d1\u8005\u6307\u5357.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"zookeeper-guide",title:"Zookeeper\u5f00\u53d1\u8005\u6307\u5357",sidebar_label:"Zookeeper\u5f00\u53d1\u8005\u6307\u5357"},sidebar:"serverSidebar",previous:{title:"Zookeeper\u5b89\u88c5",permalink:"/docs/docs/server/Zookeeper/zookeeper"},next:{title:"Zookeeper\u5ba2\u6237\u7aefCurator",permalink:"/docs/docs/server/Zookeeper/curator"}},o={},h=[{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:2},{value:"\u8282\u70b9",id:"\u8282\u70b9",level:2},{value:"Watches\u76d1\u542c",id:"watches\u76d1\u542c",level:3},{value:"\u6570\u636e\u8bbf\u95ee",id:"\u6570\u636e\u8bbf\u95ee",level:3},{value:"\u8282\u70b9\u7c7b\u578b",id:"\u8282\u70b9\u7c7b\u578b",level:3},{value:"\u6743\u9650\u63a7\u5236",id:"\u6743\u9650\u63a7\u5236",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u6743\u9650\u6a21\u5f0f",id:"\u6743\u9650\u6a21\u5f0f",level:3},{value:"\u6388\u6743\u7684\u5bf9\u8c61",id:"\u6388\u6743\u7684\u5bf9\u8c61",level:3},{value:"\u6388\u4e88\u7684\u6743\u9650",id:"\u6388\u4e88\u7684\u6743\u9650",level:3},{value:"\u6388\u6743\u7684\u76f8\u5173\u547d\u4ee4",id:"\u6388\u6743\u7684\u76f8\u5173\u547d\u4ee4",level:3},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:3},{value:"acl \u8d85\u7ea7\u7ba1\u7406\u5458",id:"acl-\u8d85\u7ea7\u7ba1\u7406\u5458",level:3},{value:"\u672a\u5b8c\u5f85\u7eed",id:"\u672a\u5b8c\u5f85\u7eed",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html",children:"https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6570\u636e\u6a21\u578b",children:"\u6570\u636e\u6a21\u578b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ZooKeeper"}),"\u6709\u4e00\u4e2a\u5206\u5c42\u7684\u540d\u79f0\u7a7a\u95f4\uff0c\u5f88\u50cf\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u3002\u552f\u4e00\u7684\u533a\u522b\u662f\u540d\u79f0\u7a7a\u95f4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u53ef\u4ee5\u6709\u4e0e\u5176\u5173\u8054\u7684\u6570\u636e\u4ee5\u53ca\u5b50\u8282\u70b9\u3002\u8fd9\u5c31\u50cf\u62e5\u6709\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf\uff0c\u5b83\u5141\u8bb8\u4e00\u4e2a\u6587\u4ef6\u540c\u65f6\u4e5f\u662f\u4e00\u4e2a\u76ee\u5f55\u3002\u8282\u70b9\u7684\u8def\u5f84\u59cb\u7ec8\u8868\u793a\u4e3a\u89c4\u8303\u3001\u7edd\u5bf9\u3001\u659c\u6760\u5206\u9694\u7684\u8def\u5f84\uff1b\u6ca1\u6709\u76f8\u5bf9\u8def\u5f84\u3002\u4efb\u4f55",(0,s.jsx)(n.code,{children:"unicode"}),"\u5b57\u7b26\u90fd\u53ef\u4ee5\u5728\u53d7\u4ee5\u4e0b\u7ea6\u675f\u7684\u8def\u5f84\u4e2d\u4f7f\u7528\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7a7a\u5b57\u7b26\uff08\\u0000\uff09\u4e0d\u80fd\u662f\u8def\u5f84\u540d\u7684\u4e00\u90e8\u5206\u3002\uff08\u8fd9\u4f1a\u5bfc\u81f4C\u7ed1\u5b9a\u51fa\u73b0\u95ee\u9898\u3002\uff09"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u5b57\u7b26\u4e0d\u80fd\u4f7f\u7528\uff0c\u56e0\u4e3a\u5b83\u4eec\u663e\u793a\u4e0d\u597d\uff0c\u6216\u5448\u73b0\u65b9\u5f0f\u6df7\u4e71\uff08\\u0001 - \\u001F and \\u007F\uff09"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\\u009F"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u5b57\u7b26\u4e0d\u5141\u8bb8\uff1a\\ud800 - uF8FF, \\uFFF0 - uFFFF"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e0d\u5141\u8bb8\u4f7f\u7528\u201c.\u201d\u6216\u8005\u201c..\u201d\u6307\u793a\u8def\u5f84\u4e0a\u7684\u8282\u70b9"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u201czookeeper\u201d\u8282\u70b9\u88ab\u4fdd\u7559\uff0c\u4e0d\u5141\u8bb8\u4f7f\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8282\u70b9",children:"\u8282\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"ZooKeeper\u6811\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u90fd\u79f0\u4e3aznode\u3002Znode\u7ef4\u62a4\u4e00\u4e2astat\u7ed3\u6784\uff0c\u5176\u4e2d\u5305\u62ec\u6570\u636e\u66f4\u6539\u3001acl\u66f4\u6539\u7684\u7248\u672c\u53f7\uff0c\u4ee5\u53ca\u4e00\u4e2a\u65f6\u95f4\u6233\u3002\u7248\u672c\u53f7\u548c\u65f6\u95f4\u6233\u5141\u8bb8ZooKeeper\u9a8c\u8bc1\u7f13\u5b58\u5e76\u534f\u8c03\u66f4\u65b0\u3002\u6bcf\u6b21znode\u7684\u6570\u636e\u66f4\u6539\u65f6\uff0c\u7248\u672c\u53f7\u90fd\u4f1a\u589e\u52a0\u3002\u6bcf\u5f53\u5ba2\u6237\u7aef\u68c0\u7d22\u6570\u636e\u65f6\uff0c\u5b83\u4e5f\u4f1a\u63a5\u6536\u6570\u636e\u7684\u7248\u672c\u3002\u5f53\u5ba2\u6237\u7aef\u6267\u884c\u66f4\u65b0\u6216\u5220\u9664\u65f6\uff0c\u5b83\u5fc5\u987b\u63d0\u4f9b\u5b83\u6b63\u5728\u66f4\u6539\u7684znode\u7684\u6570\u636e\u7248\u672c\u3002\u5982\u679c\u5b83\u63d0\u4f9b\u7684\u7248\u672c\u4e0e\u6570\u636e\u7684\u5b9e\u9645\u7248\u672c\u4e0d\u5339\u914d\uff0c\u5219\u66f4\u65b0\u5c06\u5931\u8d25\u3002\uff08\u6b64\u884c\u4e3a\u53ef\u4ee5\u88ab\u8986\u76d6\uff09"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5728ZooKeeper\u6587\u6863\u4e2d\uff0cznode\u6307\u6570\u636e\u8282\u70b9\u3002Servers\u662f\u6307\u7ec4\u6210ZooKeeper\u670d\u52a1\u7684\u673a\u5668\uff1bquorum\u5bf9\u7b49\u70b9\u662f\u6307\u7ec4\u6210\u96c6\u7fa4\u7684\u670d\u52a1\u5668\uff1b\u5ba2\u6237\u7aef\u662f\u6307\u4f7f\u7528ZooKeeper\u670d\u52a1\u7684\u4efb\u4f55\u4e3b\u673a\u6216\u8fdb\u7a0b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Znode\u662f\u7a0b\u5e8f\u5458\u8bbf\u95ee\u7684\u4e3b\u8981\u5b9e\u4f53\u3002\u5b83\u4eec\u6709\u51e0\u4e2a\u7279\u70b9\u503c\u5f97\u5728\u6b64\u63d0\u53ca\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"watches\u76d1\u542c",children:"Watches\u76d1\u542c"}),"\n",(0,s.jsxs)(n.p,{children:["\u5ba2\u6237\u53ef\u4ee5\u5728znodes\u4e0a\u8bbe\u7f6e\u76d1\u542c\u3002\u5bf9\u8be5znode\u7684\u66f4\u6539\u4f1a\u89e6\u53d1\u76d1\u542c\uff0c\u7136\u540e\u6e05\u9664\u8be5\u76d1\u542c\u7a0b\u5e8f\uff08\u4e00\u6b21\u6027\u76d1\u542c\uff09\u3002\u5f53\u76d1\u89c6\u89e6\u53d1\u65f6\uff0cZooKeeper\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u901a\u77e5\u3002\u6709\u5173\u76d1\u542c\u5668\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.jsx)(n.a,{href:"https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html#ch_zkWatches",children:"ZooKeeper watches"}),"\u90e8\u5206\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6570\u636e\u8bbf\u95ee",children:"\u6570\u636e\u8bbf\u95ee"}),"\n",(0,s.jsx)(n.p,{children:"\u5b58\u50a8\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u6bcf\u4e2aznode\u7684\u6570\u636e\u90fd\u662f\u539f\u5b50\u8bfb\u53d6\u548c\u5199\u5165\u7684\u3002\u8bfb\u64cd\u4f5c\u83b7\u53d6\u4e0eznode\u5173\u8054\u7684\u6240\u6709\u6570\u636e\u5b57\u8282\uff0c\u5199\u64cd\u4f5c\u66ff\u6362\u6240\u6709\u6570\u636e\u3002\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4e00\u4e2a\u8bbf\u95ee\u63a7\u5236\u5217\u8868\uff08ACL\uff09\uff0c\u7528\u4e8e\u9650\u5236\u8c01\u53ef\u4ee5\u505a\u4ec0\u4e48\u3002"}),"\n",(0,s.jsx)(n.p,{children:"ZooKeeper\u5e76\u4e0d\u662f\u4e3a\u901a\u7528\u6570\u636e\u5e93\u6216\u5927\u578b\u5bf9\u8c61\u5b58\u50a8\u800c\u8bbe\u8ba1\u7684\u3002\u76f8\u53cd\uff0c\u5b83\u7ba1\u7406\u534f\u8c03\u6570\u636e\u3002\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u4ee5\u914d\u7f6e\u3001\u72b6\u6001\u4fe1\u606f\u3001\u4f1a\u5408\u7b49\u5f62\u5f0f\u51fa\u73b0\u3002\u5404\u79cd\u5f62\u5f0f\u7684\u534f\u8c03\u6570\u636e\u7684\u4e00\u4e2a\u5171\u540c\u7279\u70b9\u662f\u5b83\u4eec\u76f8\u5bf9\u8f83\u5c0f\uff1a\u4ee5\u5343\u5b57\u8282\u4e3a\u5355\u4f4d\u3002ZooKeeper\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u5b9e\u73b0\u90fd\u8fdb\u884c\u4e86\u5065\u5168\u6027\u68c0\u67e5\uff0c\u4ee5\u786e\u4fddznode\u7684\u6570\u636e\u5c11\u4e8e1M\uff0c\u4f46\u6570\u636e\u5e94\u8be5\u6bd4\u5e73\u5747\u503c\u5c11\u5f97\u591a\u3002\u5728\u76f8\u5bf9\u8f83\u5927\u7684\u6570\u636e\u5927\u5c0f\u4e0a\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u67d0\u4e9b\u64cd\u4f5c\u6bd4\u5176\u4ed6\u64cd\u4f5c\u82b1\u8d39\u66f4\u591a\u7684\u65f6\u95f4\uff0c\u5e76\u4f1a\u5f71\u54cd\u67d0\u4e9b\u64cd\u4f5c\u7684\u5ef6\u8fdf\uff0c\u56e0\u4e3a\u9700\u8981\u989d\u5916\u7684\u65f6\u95f4\u624d\u80fd\u901a\u8fc7\u7f51\u7edc\u5c06\u66f4\u591a\u6570\u636e\u79fb\u52a8\u5230\u5b58\u50a8\u4ecb\u8d28\u4e0a\u3002\u5982\u679c\u9700\u8981\u5927\u6570\u636e\u5b58\u50a8\uff0c\u5904\u7406\u6b64\u7c7b\u6570\u636e\u7684\u901a\u5e38\u6a21\u5f0f\u662f\u5c06\u5176\u5b58\u50a8\u5728\u5927\u5bb9\u91cf\u5b58\u50a8\u7cfb\u7edf\uff08\u5982NFS\u6216HDFS\uff09\u4e0a\uff0c\u5e76\u5728ZooKeeper\u4e2d\u5b58\u50a8\u6307\u5411\u5b58\u50a8\u4f4d\u7f6e\u7684\u6307\u9488\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8282\u70b9\u7c7b\u578b",children:"\u8282\u70b9\u7c7b\u578b"}),"\n",(0,s.jsx)(n.p,{children:"zk\u4e2d\u7684\u8282\u70b9\u67097\u4e2d\u7c7b\u578b\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6301\u4e45\u6027\u8282\u70b9"}),"\uff1a\u4e0d\u4e3b\u52a8\u5220\u9664\uff0c\u4e00\u76f4\u5b58\u5728\u7684\u8282\u70b9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6301\u4e45\u6027\u987a\u5e8f\u8282\u70b9"}),"\uff1a\u540c\u6301\u4e45\u6027\u8282\u70b9\uff0c\u4f46\u662fzk\u670d\u52a1\u4f1a\u5728\u8282\u70b9\u540e\uff0c\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u6570\u5b57\u7684\u540e\u7f00"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4e34\u65f6\u8282\u70b9"}),"\uff1a\u5ba2\u6237\u7aef\u8fde\u63a5\u5173\u95ed\u6216\u56e0\u5f02\u5e38\u65ad\u5f00\uff0czk\u670d\u52a1\u5668\u5c06\u5220\u9664\u8be5\u8282\u70b9"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u4e34\u65f6\u987a\u5e8f\u8282\u70b9"}),"\uff1a\u540c\u4e34\u65f6\u8282\u70b9\uff0c\u4f46\u662fzk\u670d\u52a1\u4f1a\u5728\u8282\u70b9\u540e\uff0c\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u6570\u5b57\u7684\u540e\u7f00"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5bb9\u5668\u8282\u70b9"}),"\uff1a\u5bb9\u5668\u8282\u70b9\u548c\u6301\u4e45\u6027\u8282\u70b9\u4e00\u6837\uff0c\u4ed6\u662f\u4e13\u4e3a\u5b58\u653e\u5b50\u8282\u70b9\u7684\u8282\u70b9\u3002\u5982\u679c\u5bb9\u5668\u8282\u70b9\u7684\u5b50\u8282\u70b9\u6570\u4e3a0\u65f6\uff0czk\u670d\u52a1\u5728\u672a\u6765\u53ef\u80fd\u5220\u9664\u8be5\u8282\u70b9\uff08\u5b9a\u65f6\uff0c\u6216\u8005zk\u670d\u52a1\u542f\u52a8\u65f6\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6301\u4e45TTL\u8282\u70b9"}),"\uff1aTTL\u662ftime to live\u7684\u7f29\u5199\uff0c\u6307\u5e26\u6709\u5b58\u6d3b\u65f6\u95f4\u7684\u8282\u70b9\u3002\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u5f53\u8be5\u8282\u70b9\u4e0b\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u8bdd\uff0c\u8d85\u8fc7\u4e86TTL\u7684\u5b58\u6d3b\u65f6\u95f4\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\u3002TTL\u8282\u70b9\u7684\u542f\u7528\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\uff0c",(0,s.jsx)(n.code,{children:"zookeeper.extendedTypesEnabled"}),"\u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"true"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u6301\u4e45\u987a\u5e8fTTL\u8282\u70b9"}),"\uff1a\u7565"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5bb9\u5668\u8282\u70b9\u548c\u6301\u4e45TTL\u8282\u70b9\u4e3a",(0,s.jsx)(n.code,{children:"3.6.0"})," \u7248\u672c\u65b0\u589e"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6743\u9650\u63a7\u5236",children:"\u6743\u9650\u63a7\u5236"}),"\n",(0,s.jsx)(n.h3,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(n.p,{children:"\u200b\tzookeeper\u7c7b\u4f3c\u4e8e\u6587\u4ef6\u7cfb\u7edf\uff0cclient\u53ef\u4ee5\u521b\u5efa\u8282\u70b9\uff0c\u66f4\u65b0\u8282\u70b9\uff0c\u5220\u9664\u8282\u70b9\uff0c\u90a3\u4e48\u5982\u4f55\u505a\u5230\u8282\u70b9\u7684\u6743\u9650\u7684\u63a7\u5236\u5462\uff1fzookeeper\u7684access control list \u8bbf\u95ee\u63a7\u5236\u5217\u8868\u53ef\u4ee5\u81ea\u8026\u5230\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u200b\tacl\u6743\u9650\u63a7\u5236\uff0c\u4f7f\u7528scheme\uff1aid\uff1apermission\u6765\u8868\u793a\uff0c\u4e3b\u8981\u6db5\u76d63\u4e2a\u65b9\u9762\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6743\u9650\u6a21\u5f0f(scheme)\uff1a\u6388\u6743\u7684\u7b56\u7565"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6388\u6743\u5bf9\u8c61(id)\uff1a\u6388\u6743\u7684\u5bf9\u8c61"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6743\u9650(permission)\uff1a\u6388\u4e88\u7684\u6743\u9650"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u5176\u7279\u6027\u5982\u4e0b\uff1a"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"zookeeper\u7684\u6743\u9650\u63a7\u5236\u662f\u57fa\u4e8e\u6bcf\u4e2aznode\u8282\u70b9\u7684\uff0c\u9700\u8981\u5bf9\u6bcf\u4e2a\u8282\u70b9\u8bbe\u7f6e\u6743\u9650"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6bcf\u4e2aznode\u652f\u6301\u8bbe\u7f6e\u591a\u79cd\u6743\u9650\u63a7\u5236\u65b9\u6848\u548c\u591a\u4e2a\u6743\u9650"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b50\u8282\u70b9\u4e0d\u4f1a\u7ee7\u627f\u7236\u8282\u70b9\u7684\u6743\u9650\uff0c\u5ba2\u6237\u70b9\u65e0\u6743\u8bbf\u95ee\u67d0\u4e2a\u8282\u70b9\uff0c\u4f46\u53ef\u80fd\u53ef\u4ee5\u8bbf\u95ee\u4ed6\u7684\u5b50\u8282\u70b9"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"//\u5c06\u8282\u70b9\u6743\u9650\u8bbe\u7f6e\u4e3aIp:192.168.60.130\u7684\u5ba2\u6237\u7aef\u53ef\u4ee5\u5bf9\u8282\u70b9\u8fdb\u884c\u589e\u3001\u5220\u3001\u8be5\u3001\u67e5\u3001\u6743\u9650\u7ba1\u7406\r\nsetAcl /test2 ip:192.168.60.130:rewda\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6743\u9650\u6a21\u5f0f",children:"\u6743\u9650\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u91c7\u7528\u4f55\u79cd\u65b9\u5f0f\u6388\u6743"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"\u65b9\u6848"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"world"}),(0,s.jsx)(n.td,{children:"\u53ea\u6709\u4e00\u4e2a\u7528\u6237\uff1aanyone\uff0c\u4ee3\u8868\u767b\u5f55zooleeper\u6240\u6709\u4eba\uff08\u9ed8\u8ba4\uff09"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ip"}),(0,s.jsx)(n.td,{children:"\u5bf9\u5ba2\u6237\u7aef\u4f7f\u7528ip\u5730\u5740\u8ba4\u8bc1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"auth"}),(0,s.jsx)(n.td,{children:"\u4f7f\u7528\u5df2\u6dfb\u52a0\u8ba4\u8bc1\u7684\u7528\u6237\u8ba4\u8bc1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"digest"}),(0,s.jsx)(n.td,{children:"\u4f7f\u7528\u201c\u7528\u6237\u540d\uff1a\u5bc6\u7801\u201d\u65b9\u5f0f\u8ba4\u8bc1"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u6388\u6743\u7684\u5bf9\u8c61",children:"\u6388\u6743\u7684\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.p,{children:"\u7ed9\u8c01\u6388\u6743"}),"\n",(0,s.jsx)(n.p,{children:"\u6388\u6743\u5bf9\u8c61ID\u662f\u6307\uff0c\u6743\u9650\u8d4b\u4e88\u7684\u5b9e\u4f53\u4f8b\u5982\uff1aip\u5730\u5740\u6216\u7528\u6237\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6388\u4e88\u7684\u6743\u9650",children:"\u6388\u4e88\u7684\u6743\u9650"}),"\n",(0,s.jsx)(n.p,{children:"\u6388\u4e88\u4ec0\u4e48\u6743\u9650"}),"\n",(0,s.jsx)(n.p,{children:"create\u3001delete\u3001read\u3001writer\u3001admin\u4e5f\u5c31\u662f\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\u3001\u7ba1\u7406\u6743\u9650\uff0c\u8fd95\u4e2d\u6743\u9650\u7b80\u5199\u4e3acdrwa\u3001\u6ce8\u610f\uff1a\u8fd95\u4e2d\u6743\u9650\u4e2d\uff0cdelete\u662f\u6307\u5bf9\u5b50\u8282\u70b9\u7684\u5220\u9664\u6743\u9650\uff0c\u5176\u4ed64\u79cd\u6743\u9650\u503c\u5bf9\u81ea\u8eab\u8282\u70b9\u7684\u6743\u9650\u64cd\u4f5c\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u6743\u9650"}),(0,s.jsx)(n.th,{children:"ACL\u7b80\u5199"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"create"}),(0,s.jsx)(n.td,{children:"c"}),(0,s.jsx)(n.td,{children:"\u53ef\u4ee5\u521b\u5efa\u5b50\u8282\u70b9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"delete"}),(0,s.jsx)(n.td,{children:"d"}),(0,s.jsx)(n.td,{children:"\u53ef\u4ee5\u5220\u9664\u5b50\u8282\u70b9(\u4ec5\u4e0b\u4e00\u7ea7\u8282\u70b9)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"read"}),(0,s.jsx)(n.td,{children:"r"}),(0,s.jsx)(n.td,{children:"\u53ef\u4ee5\u8bfb\u53d6\u8282\u70b9\u6570\u636e\u53ca\u663e\u793a\u5b50\u8282\u70b9\u5217\u8868"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"write"}),(0,s.jsx)(n.td,{children:"w"}),(0,s.jsx)(n.td,{children:"\u53ef\u4ee5\u8bbe\u7f6e\u8282\u70b9\u6570\u636e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"admin"}),(0,s.jsx)(n.td,{children:"a"}),(0,s.jsx)(n.td,{children:"\u53ef\u4ee5\u8bbe\u7f6e\u8282\u70b9\u8bbf\u95ee\u63a7\u5236\u5217\u8868\u6743\u9650"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u6388\u6743\u7684\u76f8\u5173\u547d\u4ee4",children:"\u6388\u6743\u7684\u76f8\u5173\u547d\u4ee4"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u547d\u4ee4"}),(0,s.jsx)(n.th,{children:"\u4f7f\u7528\u65b9\u5f0f"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"getAcl"}),(0,s.jsx)(n.td,{children:"getAcl path"}),(0,s.jsx)(n.td,{children:"\u8bfb\u53d6ACL\u6743\u9650"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"setAcl"}),(0,s.jsx)(n.td,{children:"setAcl path acl"}),(0,s.jsx)(n.td,{children:"\u8bbe\u7f6eACL\u6743\u9650"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"addauth"}),(0,s.jsx)(n.td,{children:"addauth scheme auth"}),(0,s.jsx)(n.td,{children:"\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u6848\u4f8b",children:"\u6848\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"world\u6388\u6743\u6a21\u5f0f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"setAcl <path> world:anyone:<acl>\r\nsetAcl /hadoop world:anyone:cdrwa\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6848\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"[zk: localhost:2181(CONNECTED) 2] getAcl /hadoop\r\n'world,'anyone   #world\u65b9\u5f0f\u5bf9\u6240\u6709\u7528\u6237\u8fdb\u884c\u6388\u6743\r\n: cdrwa          #\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\u3001\u7ba1\u7406\r\n[zk: localhost:2181(CONNECTED) 3] \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"IP \u6388\u6743\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"#\u9700\u8981\u4e24\u53f0\u673a\u5668\u6765\u8fdb\u884c\u8fde\u63a5 192.168.60.129  192.168.60.130 \r\n#\u4f7f\u7528 192.168.60.129  \u767b\u5f55zookeeper\r\nzkCli.sh -server 192.168.60.130\r\n#\u4f7f\u7528\u672c\u673a  192.168.60.130 zookeeper\r\nzkCli.sh -server 192.168.60.130    \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Auth\u6388\u6743\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"addauth digest <user>:<password> #\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237\r\nsetAcl <path>auth:<user>:<acl>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6848\u4f8b"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"[zk: localhost:2181(CONNECTED) 0] create /hadoop3 \"hadoop3\"\r\nCreated /hadoop3\r\n[zk: localhost:2181(CONNECTED) 1] getAcl /hadoop3\r\n'world,'anyone\r\n: cdrwa\r\n[zk: localhost:2181(CONNECTED) 2] addauth digest tyx:123\r\n[zk: localhost:2181(CONNECTED) 3] setAcl /hadoop3 auth:tyx:cdrwa\r\ncZxid = 0x16\r\nctime = Thu May 14 20:29:34 CST 2020\r\nmZxid = 0x16\r\nmtime = Thu May 14 20:29:34 CST 2020\r\npZxid = 0x16\r\ncversion = 0\r\ndataVersion = 0\r\naclVersion = 1\r\nephemeralOwner = 0x0\r\ndataLength = 7\r\nnumChildren = 0\r\n[zk: localhost:2181(CONNECTED) 7] getAcl /hadoop3\r\n'digest,'tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=\r\n: cdrwa\r\n[zk: localhost:2181(CONNECTED) 8]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Digest \u6388\u6743\u6a21\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"setAcl <path> digest:<user>:<password>:<acl>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u7684\u5bc6\u7801\u662f\u7ecf\u8fc7SHA1\u53caBASE64\u5904\u7406\u7684\u5bc6\u6587\uff0c\u5728SHEEL\u4e2d\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u8ba1\u7b97\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"echo -n <user>:<password> | openssl dgst -binary -sha1 | openssl base64\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5148\u6765\u8ba1\u7b97\u4e00\u4e2a\u5bc6\u6587"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"echo -n tyx:123 | openssl dgst -binary -sha1 | openssl base64\r\n#\u5f97\u5230\u7684\u5bc6\u6587\r\n[root@centos zookeeper-3.4.14]# echo -n tyx:123 | openssl dgst -binary -sha1 | openssl base64\r\nnSk0WYb+XoISHNhIQiQ1BGsZHjE=\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6848\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"[zk: localhost:2181(CONNECTED) 8] create /hadoop4 \"hadoop4\"\r\nCreated /hadoop4\r\n[zk: localhost:2181(CONNECTED) 10] getAcl /hadoop4\r\n'world,'anyone\r\n: cdrwa\r\n//\u4f7f\u7528digest\u8fdb\u884c\u6388\u6743\r\n[zk: localhost:2181(CONNECTED) 11] setAcl /hadoop4 digest:tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=:cdrwa\r\n\r\n//\u8be5\u8282\u70b9\u7684\u6743\u9650\r\n[zk: localhost:2181(CONNECTED) 13] getAcl /hadoop4\r\n'digest,'tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=\r\n: cdrwa\r\n//\u6ca1\u6709\u6743\u9650\r\n[zk: localhost:2181(CONNECTED) 0] get /hadoop4\r\nAuthentication is not valid : /hadoop4\r\n//\u6dfb\u52a0\u6388\u6743\u7528\u6237\r\n[zk: localhost:2181(CONNECTED) 1] addauth digest tyx:123\r\n[zk: localhost:2181(CONNECTED) 2] get /hadoop4\r\nhadoop4\r\ncZxid = 0x19\r\nctime = Thu May 14 21:12:46 CST 2020\r\nmZxid = 0x19\r\nmtime = Thu May 14 21:12:46 CST 2020\r\npZxid = 0x19\r\ncversion = 0\r\ndataVersion = 0\r\naclVersion = 1\r\nephemeralOwner = 0x0\r\ndataLength = 7\r\nnumChildren = 0\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u591a\u79cd\u5bc6\u5ba4\u6388\u6743\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u591a\u79cd\u6a21\u5f0f\u6388\u6743"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'[zk: localhost:2181(CONNECTED) 8] create /hadoop4 "hadoop4"\r\nCreated /hadoop4\r\n//\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237\r\n[zk: localhost:2181(CONNECTED) 8] addauth digest itcast:123456\r\n[zk: localhost:2181(CONNECTED) 8] setAcl /hadoop4 ip:192.168.60.129:cdrwa,auth:tyx:123:cdrwa,digest:tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=:cdrwa\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"acl-\u8d85\u7ea7\u7ba1\u7406\u5458",children:"acl \u8d85\u7ea7\u7ba1\u7406\u5458"}),"\n",(0,s.jsx)(n.p,{children:"zookeeper\u7684\u6743\u9650\u7ba1\u7406\u6a21\u5f0f\u6709\u4e00\u79cd\u53eb\u505asuper\uff0c\u8be5\u6a21\u5f0f\u63d0\u4f9b\u4e00\u4e2a\u8d85\u7ba1\uff0c\u53ef\u4ee5\u65b9\u963f\u658c\u7684\u8bbf\u95ee\u4efb\u4f55\u6743\u9650\u7684\u8282\u70b9"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8bbe\u8fd9\u4e2a\u8d85\u7ba1\u662f\uff1asuper\uff1aadmin\uff0c\u9700\u8981\u5148\u4e3a\u8d85\u7ba1\u751f\u6210\u5bc6\u7801\u7684\u5bc6\u6587"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"echo -n super:admin | openssl dgst -binary -sha1 | openssl base64\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u90a3\u4e48\u6253\u5f00zookeeper\u76ee\u5f55\u4e0b\u7684/bin/zkServer.sh \u670d\u52a1\u5668\u811a\u672c\uff0c\u627e\u5230\u5982\u4e0b\u4e00\u884c\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"F:/sinomatrix/%E6%96%87%E6%A1%A3/golang/Zookeeper%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B/images/image-20200514212640310.png",alt:"image-20200514212640310"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e4b\u540e\u542f\u52a8zookeeper\uff0c\u8f93\u5165\u5982\u4e0b\u7684\u547d\u4ee4\u6dfb\u52a0\u6743\u9650"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"addauth digest super:admin  #\u6dfb\u52a0\u8ba4\u8bc1\u7528\u6237\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u672a\u5b8c\u5f85\u7eed",children:"\u672a\u5b8c\u5f85\u7eed"})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(6540);const l={},d=s.createContext(l);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);