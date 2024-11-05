"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3176],{6456:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var c=o(4848),s=o(8453);const n={id:"build-image",title:"\u5236\u4f5cdocker\u955c\u50cf",sidebar_label:"\u5236\u4f5cdocker\u955c\u50cf"},d=void 0,i={id:"cloud/docker/build-image",title:"\u5236\u4f5cdocker\u955c\u50cf",description:"1. \u9996\u5148\uff0c\u5b89\u88c5docker-desktop",source:"@site/docs/cloud/1-docker/1-build-image.md",sourceDirName:"cloud/1-docker",slug:"/cloud/docker/build-image",permalink:"/docs/docs/cloud/docker/build-image",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cloud/1-docker/1-build-image.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"build-image",title:"\u5236\u4f5cdocker\u955c\u50cf",sidebar_label:"\u5236\u4f5cdocker\u955c\u50cf"},sidebar:"cloudSidebar",previous:{title:"Docker\u2014\u4ece\u5165\u95e8\u5230\u5b9e\u8df5",permalink:"/docs/docs/cloud/docker/docker"},next:{title:"Kubernetes\u8be6\u7ec6\u6559\u7a0b",permalink:"/docs/docs/cloud/k8s/k8s"}},t={},l=[];function a(e){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.ol,{children:["\n",(0,c.jsx)(r.li,{children:"\u9996\u5148\uff0c\u5b89\u88c5docker-desktop"}),"\n"]}),"\n",(0,c.jsxs)(r.p,{children:["\u4e0b\u8f7d\u94fe\u63a5",(0,c.jsx)(r.a,{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows",children:"Docker Desktop for Windows by Docker | Docker Hub"})]}),"\n",(0,c.jsx)(r.p,{children:"1.1 windows\u4e0b\u5b89\u88c5docker-desktop"}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.code,{children:"\u5b89\u88c5\u6b65\u9aa4\uff1a"})}),"\n",(0,c.jsx)(r.p,{children:"(1) \u53cc\u51fbDocker Desktop Installer.exe\u8fd0\u884c\u5b89\u88c5\u7a0b\u5e8f\u3002"}),"\n",(0,c.jsx)(r.p,{children:"(2) \u5982\u679c\u5c1a\u672a\u4e0b\u8f7d\u5b89\u88c5\u7a0b\u5e8f\uff08Docker Desktop Installer.exe\uff09\uff0c\u5219\u53ef\u4ee5\u4eceDocker Hub\u4e2d\u83b7\u53d6\u5b83\u3002"}),"\n",(0,c.jsx)(r.p,{children:"(3) \u6309\u7167\u5b89\u88c5\u5411\u5bfc\u4e0a\u7684\u8bf4\u660e\u63a5\u53d7\u8bb8\u53ef\u8bc1\uff0c\u6388\u6743\u5b89\u88c5\u7a0b\u5e8f\uff0c\u7136\u540e\u7ee7\u7eed\u5b89\u88c5\u3002"}),"\n",(0,c.jsx)(r.p,{children:"(4)\u51fa\u73b0\u63d0\u793a\u65f6\uff0c\u8bf7\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u60a8\u7684\u7cfb\u7edf\u5bc6\u7801\u6388\u6743Docker Desktop Installer\u3002 \u9700\u8981\u7279\u6743\u8bbf\u95ee\u624d\u80fd\u5b89\u88c5\u7f51\u7edc\u7ec4\u4ef6\uff0c\u5230Docker\u5e94\u7528\u7a0b\u5e8f\u7684\u94fe\u63a5\u4ee5\u53ca\u7ba1\u7406Hyper-V VM\u3002"}),"\n",(0,c.jsx)(r.p,{children:"(5)\u5728\u5b89\u88c5\u5b8c\u6210\u5bf9\u8bdd\u6846\u4e0a\u5355\u51fb\u5b8c\u6210\uff0c\u7136\u540e\u542f\u52a8Docker Desktop\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.code,{children:"\u542f\u52a8Docker Desktop\uff1a"})}),"\n",(0,c.jsx)(r.p,{children:"Docker Desktop\u5728\u5b89\u88c5\u540e\u4e0d\u4f1a\u81ea\u52a8\u542f\u52a8\u3002 \u8981\u542f\u52a8Docker Desktop\uff0c\u6211\u4eec\u53ef\u4ee5\u641c\u7d22Docker\uff0c\u7136\u540e\u5728\u641c\u7d22\u7ed3\u679c\u4e2d\u9009\u62e9Docker Desktop\u3002\u6216\u8005\u684c\u9762\u6709\u5feb\u6377\u65b9\u5f0f\uff0c\u53ef\u4ee5\u4ece\u5feb\u6377\u65b9\u5f0f\u542f\u52a8\u3002"}),"\n",(0,c.jsx)(r.p,{children:"\u6211\u4eec\u53ef\u4ee5\u521b\u5efadocker\u8d26\u6237\uff0c\u7136\u540e\u7528docker\u8d26\u6237\u767b\u5f55docker desktop\u3002\u5982\u679c\u662f\u672c\u5730\u6253\u5305\uff0c\u4e0d\u4e0a\u4f20Docker Hub\uff0c\u53ef\u4ee5\u4e0d\u767b\u5f55\u3002"}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.code,{children:"\u4f7f\u7528Docker Desktop\uff1a"})}),"\n",(0,c.jsx)(r.p,{children:"\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2acmd\u7a97\u53e3\u6216\u8005power shell\u3002\u6267\u884c\u547d\u4ee4 docker --version\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"Docker version 20.10.11, build dea9396\n"})}),"\n",(0,c.jsxs)(r.ol,{start:"2",children:["\n",(0,c.jsx)(r.li,{children:"\u5236\u4f5c\u955c\u50cf"}),"\n"]}),"\n",(0,c.jsx)(r.p,{children:"(1) \u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u6bd4\u5982D:/docker/sso\u3002"}),"\n",(0,c.jsx)(r.p,{children:"(2) \u5728\u4e00\u4e2a\u7a7a\u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a Dockerfile \u6587\u4ef6\u3002Dockerfile \u662f\u4e00\u4e2a\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684\u6587\u672c\u6587\u4ef6\uff0c\u6587\u672c\u5185\u5bb9\u5305\u542b\u4e86\u4e00\u6761\u6761\u6784\u5efa\u955c\u50cf\u6240\u9700\u7684\u6307\u4ee4\u548c\u8bf4\u660e\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:'#\u4ecetomcat\u6784\u5efa\u955c\u50cf\uff0ctomcat\u7248\u672c\u662f8.0.33\r\nFROM tomcat:8.0.33\r\n#\u6784\u5efa\u8005\r\nMAINTAINER lc\r\n\r\n#\u5c06target\u4e0b\u7684xx.war\u62f7\u8d1d\u5230/usr/local/tomcat/webapps/\u4e0b\r\nADD sso.war /usr/local/tomcat/webapps/\r\n\r\n#\u914d\u7f6e\u7aef\u53e3\u53f7\r\nEXPOSE 8080\r\n#\u8bbe\u7f6e\u7b49\u5f85\r\nADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait\r\nRUN chmod +x /wait\r\n\r\n#\u65f6\u533a\u8bbe\u7f6e\r\nENV TZ=Asia/Shanghai\r\nRUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone\r\n\r\nCMD /wait\r\n#\u8bbe\u7f6e\u542f\u52a8\u547d\u4ee4\r\nENTRYPOINT ["/usr/local/tomcat/bin/catalina.sh","run"]\n'})}),"\n",(0,c.jsx)(r.p,{children:"(3) \u628a\u6784\u5efa\u7684\u5185\u5bb9\u590d\u5236\u5230\u6b64\u76ee\u5f55\u4e0b\u3002\u6bd4\u5982\u6253sso\u7684\u955c\u50cf\uff0c\u5c31\u628asso.war\u590d\u5236\u5230D:/docker/sso\u4e0b\u3002"}),"\n",(0,c.jsx)(r.p,{children:"(4) \u6267\u884cdocker build\u547d\u4ee4\u5f00\u59cb\u6784\u5efa\u955c\u50cf\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"docker build -t sso:1.6.39 .\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u8bf4\u660e\uff1a1.6.39\u662f\u7248\u672c\u53f7\u3002\u6700\u540e\u7684 ",(0,c.jsx)(r.code,{children:"."})," \u4ee3\u8868\u672c\u6b21\u6267\u884c\u7684\u4e0a\u4e0b\u6587\u8def\u5f84\u3002"]}),"\n",(0,c.jsx)(r.p,{children:"\u4e0a\u4e0b\u6587\u8def\u5f84\uff0c\u662f\u6307 docker \u5728\u6784\u5efa\u955c\u50cf\uff0c\u6709\u65f6\u5019\u60f3\u8981\u4f7f\u7528\u5230\u672c\u673a\u7684\u6587\u4ef6\uff08\u6bd4\u5982\u590d\u5236\uff09\uff0cdocker build \u547d\u4ee4\u5f97\u77e5\u8fd9\u4e2a\u8def\u5f84\u540e\uff0c\u4f1a\u5c06\u8def\u5f84\u4e0b\u7684\u6240\u6709\u5185\u5bb9\u6253\u5305\u3002"}),"\n",(0,c.jsx)(r.p,{children:"\u4e0a\u4e0b\u6587\u8def\u5f84\u4e0b\u4e0d\u8981\u653e\u65e0\u7528\u7684\u6587\u4ef6\uff0c\u56e0\u4e3a\u4f1a\u4e00\u8d77\u6253\u5305\u53d1\u9001\u7ed9 docker \u5f15\u64ce\uff0c\u5982\u679c\u6587\u4ef6\u8fc7\u591a\u4f1a\u9020\u6210\u8fc7\u7a0b\u7f13\u6162\u3002"}),"\n",(0,c.jsx)(r.p,{children:"(5) \u6267\u884cdocker images\u67e5\u770b\u955c\u50cf\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"docker images\r\n#\u770b\u5230\u4e0b\u9762\u7684\u7ed3\u679c\uff0c\u5c31\u8bf4\u660e\u955c\u50cf\u6784\u5efa\u6210\u529f\r\nsso      1.6.39         4319433e7a2c   5 years ago     408MB\n"})}),"\n",(0,c.jsx)(r.p,{children:"(6) \u8fd0\u884c\u955c\u50cf\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:"docker run  --env redis1.sinomatrix.sinosoft.com=redisIP:port --env zk1.sinomatrix.sinosoft.com=zookeeper://ip:port --name sso -d sso:1.6.39 -p 8081:8081\r\n#\u542f\u52a8\u6210\u529f\uff0c\u8f93\u51fa\r\nbf664c054f17ee4802b25a0fbc764e2ba26b3f2cf1f070ec403f60a3f488c5a5\n"})}),"\n",(0,c.jsx)(r.p,{children:"(7) \u6267\u884c\u547d\u4ee4docker ps\uff0c\u5217\u51fa\u7a97\u53e3\u5217\u8868\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-bash",children:'bf6-6bc5e4a6a101_569\r\nbf664c054f17   sso:1.6.39     "/usr/local/tomcat/b\u2026"   2 minutes ago    Up 2 minutes    8080-8081/tcp       sso\n'})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>d,x:()=>i});var c=o(6540);const s={},n=c.createContext(s);function d(e){const r=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),c.createElement(n.Provider,{value:r},e.children)}}}]);