"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[842],{7296:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var c=s(4848),r=s(8453);const d={},o=void 0,l={id:"cloud/docker/\u4e3aDocker\u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",title:"\u4e3aDocker\u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",description:"https://docs.docker.com/engine/daemon/remote-access/",source:"@site/docs/cloud/1-docker/4-\u4e3aDocker\u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee.md",sourceDirName:"cloud/1-docker",slug:"/cloud/docker/\u4e3aDocker\u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",permalink:"/docs/docs/cloud/docker/\u4e3aDocker\u5b88\u62a4\u8fdb\u7a0b\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"cloudSidebar",previous:{title:"Docker\u5bb9\u5668\u95f4\u901a\u8baf",permalink:"/docs/docs/cloud/docker/Docker\u5bb9\u5668\u95f4\u901a\u8baf"},next:{title:"Kubernetes\u8be6\u7ec6\u6559\u7a0b",permalink:"/docs/docs/cloud/k8s/k8s"}},i={},t=[{value:"\u542f\u52a8\u8fdc\u7a0b\u8bbf\u95ee",id:"\u542f\u52a8\u8fdc\u7a0b\u8bbf\u95ee",level:2},{value:"\u4f7f\u7528<code>systemd</code>\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",id:"\u4f7f\u7528systemd\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",level:3},{value:"\u4f7f\u7528<code>daemon.json</code>\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",id:"\u4f7f\u7528daemonjson\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",level:3},{value:"\u5141\u8bb8\u8fdc\u7a0b\u8bbf\u95ee\u901a\u8fc7\u9632\u706b\u5899",id:"\u5141\u8bb8\u8fdc\u7a0b\u8bbf\u95ee\u901a\u8fc7\u9632\u706b\u5899",level:3},{value:"\u9644\u52a0\u4fe1\u606f",id:"\u9644\u52a0\u4fe1\u606f",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/daemon/remote-access/",children:"https://docs.docker.com/engine/daemon/remote-access/"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDocker\u5b88\u62a4\u8fdb\u7a0b\u4fa6\u542cUnix\u5957\u63a5\u5b57\u4e0a\u7684\u8fde\u63a5\uff0c\u4ee5\u63a5\u53d7\u6765\u81ea\u672c\u5730\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u4fa6\u542cIP\u548c\u7aef\u53e3\u4ee5\u53caUnix\u5957\u63a5\u5b57\uff0c\u6765\u914d\u7f6eDocker\u63a5\u53d7\u6765\u81ea\u8fdc\u7a0b\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u3002"}),"\n",(0,c.jsxs)(n.admonition,{type:"warning",children:[(0,c.jsx)(n.p,{children:"\u5c06Docker\u914d\u7f6e\u4e3a\u63a5\u53d7\u6765\u81ea\u8fdc\u7a0b\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u53ef\u80fd\u4f1a\u4f7f\u60a8\u5bb9\u6613\u53d7\u5230\u672a\u7ecf\u6388\u6743\u7684\u4e3b\u673a\u8bbf\u95ee\u548c\u5176\u4ed6\u653b\u51fb\u3002"}),(0,c.jsxs)(n.p,{children:["\u4e0d\u5efa\u8bae\u4f7f\u7528",(0,c.jsx)(n.strong,{children:"\u65e0TLS"}),"\u7684\u8fdc\u7a0b\u8bbf\u95ee\uff0c\u5e76\u4e14\u5728\u5c06\u6765\u7684\u7248\u672c\u4e2d\u9700\u8981\u660e\u786e\u7684\u9009\u62e9\u52a0\u5165\u3002\u6709\u5173\u5982\u4f55\u4f7f\u7528TLS\u8bc1\u4e66\u6765\u4fdd\u62a4\u6b64\u8fde\u63a5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.jsx)(n.a,{href:"https://docs.docker.com/engine/security/protect-access/",children:"\u4fdd\u62a4Docker\u5b88\u62a4\u7a0b\u5e8f\u5957\u63a5\u5b57"}),"\u3002"]})]}),"\n",(0,c.jsx)(n.h2,{id:"\u542f\u52a8\u8fdc\u7a0b\u8bbf\u95ee",children:"\u542f\u52a8\u8fdc\u7a0b\u8bbf\u95ee"}),"\n",(0,c.jsx)(n.p,{children:"\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u542f\u52a8\u8fdc\u7a0b\u8bbf\u95ee\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528",(0,c.jsx)(n.code,{children:"systemd"}),"\u5206\u53d1\u7684",(0,c.jsx)(n.code,{children:"docker.service"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4fee\u6539",(0,c.jsx)(n.code,{children:"daemon.json"}),"\u914d\u7f6e\u6587\u4ef6"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsxs)(n.p,{children:["\u540c\u65f6\u4f7f\u7528\u4ee5\u4e0a\u4e24\u79cd\u65b9\u5f0f\u4fa6\u542c\u5ba2\u6237\u7aef\u8fde\u63a5\uff0c\u4f1a\u5bfc\u81f4",(0,c.jsx)(n.code,{children:"Docker"}),"\u65e0\u6cd5\u542f\u52a8"]})}),"\n",(0,c.jsxs)(n.h3,{id:"\u4f7f\u7528systemd\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",children:["\u4f7f\u7528",(0,c.jsx)(n.code,{children:"systemd"}),"\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u4f7f\u7528",(0,c.jsx)(n.code,{children:"sudo systemctl edit docker.service"}),"\u6253\u5f00\u7f16\u8f91",(0,c.jsx)(n.code,{children:"docker.service"}),"\u6587\u4ef6"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6dfb\u52a0\u6216\u4fee\u6539\u5185\u5bb9\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff08\u5c06tcp\u5730\u5740\u6539\u4e3a\u60a8\u81ea\u5df1\u7684\u914d\u7f6e\uff09"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-textile",children:"[Service]\r\nExecStart=\r\nExecStart=/usr/bin/dockerd -H fd:// -H tcp://127.0.0.1:2375\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"3",children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4fdd\u5b58\u6587\u4ef6"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u91cd\u65b0\u52a0\u8f7d",(0,c.jsx)(n.code,{children:"systemctl"}),"\u914d\u7f6e"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"5",children:["\n",(0,c.jsx)(n.li,{children:"\u91cd\u542fDocker\u670d\u52a1"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo systemctl restart docker.service\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"6",children:["\n",(0,c.jsx)(n.li,{children:"\u9a8c\u8bc1\u662f\u5426\u751f\u6548"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo netstat -lntp | grep dockerd\r\n\r\ntcp        0      0 127.0.0.1:2375          0.0.0.0:*               LISTEN      3758/dockerd\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"\u4f7f\u7528daemonjson\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee",children:["\u4f7f\u7528",(0,c.jsx)(n.code,{children:"daemon.json"}),"\u914d\u7f6e\u8fdc\u7a0b\u8bbf\u95ee"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5728",(0,c.jsx)(n.code,{children:"/etc/docker/daemon.json"}),"\u4e2d\u6dfb\u52a0",(0,c.jsx)(n.code,{children:"hosts"}),"\u96c6\u5408\uff0c\u8fde\u63a5Unix\u5957\u63a5\u5b57\u548cIP\u5730\u5740"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\r\n    "hosts": ["unix:///var/run/docker.sock", "tcp://127.0.0.1:2375"]\r\n}\n'})}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u91cd\u542fDocker"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u9a8c\u8bc1\u662f\u5426\u751f\u6548"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-shell",children:"sudo netstat -lntp | grep dockerd\r\n\r\ntcp        0      0 127.0.0.1:2375          0.0.0.0:*               LISTEN      3758/dockerd\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5141\u8bb8\u8fdc\u7a0b\u8bbf\u95ee\u901a\u8fc7\u9632\u706b\u5899",children:"\u5141\u8bb8\u8fdc\u7a0b\u8bbf\u95ee\u901a\u8fc7\u9632\u706b\u5899"}),"\n",(0,c.jsxs)(n.p,{children:["Docker\u5b88\u62a4\u8fdb\u7a0b\u8fdc\u7a0b\u8bbf\u95ee\u7aef\u53e3\u9ed8\u8ba4\u662f",(0,c.jsx)(n.code,{children:"2375"}),"\uff0c\u5982\u679c\u4f7f\u7528\u7684",(0,c.jsx)(n.code,{children:"TLS"}),"\u52a0\u5bc6\u4f20\u8f93\uff0c\u5219\u4e3a",(0,c.jsx)(n.code,{children:"2376"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9644\u52a0\u4fe1\u606f",children:"\u9644\u52a0\u4fe1\u606f"}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u5173\u8fdc\u7a0b\u8bbf\u95ee\u5b88\u62a4\u7a0b\u5e8f\u7684\u914d\u7f6e\u9009\u9879\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.jsx)(n.a,{href:"https://docs.docker.com/reference/cli/dockerd/#bind-docker-to-another-hostport-or-a-unix-socket",children:"dockerd CLI\u53c2\u8003"}),"\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var c=s(6540);const r={},d=c.createContext(r);function o(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);