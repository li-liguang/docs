"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7921],{2212:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var r=s(4848),c=s(8453);const d={id:"baremetal",title:"\u88f8\u91d1\u5c5e\u5b89\u88c5",sidebar_label:"\u88f8\u91d1\u5c5e\u5b89\u88c5"},o=void 0,l={id:"cloud/k8s/baremetal",title:"\u88f8\u91d1\u5c5e\u5b89\u88c5",description:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/baremetal.md",source:"@site/docs/cloud/2-k8s/baremetal.md",sourceDirName:"cloud/2-k8s",slug:"/cloud/k8s/baremetal",permalink:"/docs/docs/cloud/k8s/baremetal",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"baremetal",title:"\u88f8\u91d1\u5c5e\u5b89\u88c5",sidebar_label:"\u88f8\u91d1\u5c5e\u5b89\u88c5"},sidebar:"cloudSidebar",previous:{title:"Kubernetes\u96c6\u7fa4\u7684\u4e00\u4e9b\u4f7f\u7528\u6280\u5de7",permalink:"/docs/docs/cloud/k8s/Kubernetes\u96c6\u7fa4\u4f7f\u7528\u6280\u5de7"},next:{title:"\u521b\u5efa\u5916\u90e8NFS\u5b58\u50a8\u7c7b",permalink:"/docs/docs/cloud/k8s/nfs-subdir-external-provisioner"}},i={},t=[{value:"\u7eaf\u8f6f\u4ef6\u89e3\u51b3\u65b9\u6848\uff1aMetalLB",id:"\u7eaf\u8f6f\u4ef6\u89e3\u51b3\u65b9\u6848metallb",level:2},{value:"Over a NodePort Service",id:"over-a-nodeport-service",level:2},{value:"\u901a\u8fc7\u4e3b\u673a\u7f51\u7edc",id:"\u901a\u8fc7\u4e3b\u673a\u7f51\u7edc",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/baremetal.md",children:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/baremetal.md"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4f20\u7edf\u4e91\u73af\u5883\u4e2d\uff0c\u7f51\u7edc\u8d1f\u8f7d\u5e73\u8861\u5668\u53ef\u6309\u9700\u63d0\u4f9b\uff0c\u4e00\u4e2a\u5355\u72ec\u7684Kubernetes\u6e05\u5355\u8db3\u591f\u63d0\u4f9b\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"nginx-ingress-controller"}),"\u5916\u90e8\u5ba2\u6237\u7aef\u5355\u70b9\u63a5\u89e6\uff0c\u5e76\u4e14\uff0c\u95f4\u63a5\u5730\uff0c\u5bf9\u4e8e\u4efb\u4f55\u4e00\u4e2a\u5728\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u5e94\u7528\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u88f8\u91d1\u5c5e\u73af\u5883\u7f3a\u4e4f\u8fd9\u4e2a\uff0c\u9700\u8981\u7a0d\u5fae\u4e0d\u540c\u7684\u8bbe\u7f6e\u624d\u80fd\u63d0\u4f9b\u4e0e\u5916\u90e8\u6d88\u8d39\u8005\u76f8\u540c\u7684\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7eaf\u8f6f\u4ef6\u89e3\u51b3\u65b9\u6848metallb",children:"\u7eaf\u8f6f\u4ef6\u89e3\u51b3\u65b9\u6848\uff1aMetalLB"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MetalLB"}),"\u4e3ak8s\u96c6\u7fa4\u63d0\u4f9b\u4e00\u4e2a\u7f51\u7edc\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u5b9e\u73b0\uff0c\u6709\u6548\u5730\u5141\u8bb8\u5728\u4efb\u4f55\u96c6\u7fa4\u4e2d\u4f7f\u7528LoadBalancer\u670d\u52a1\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u8282\u6f14\u793a\u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u4f7f\u7528",(0,r.jsx)(n.code,{children:"MetalLB"})," \u7684",(0,r.jsx)(n.code,{children:"Layer 2"}),"\u914d\u7f6e\u6a21\u5f0f\u5b9e\u73b0",(0,r.jsx)(n.code,{children:"nginx-ingress-controlelr"}),"\u5177\u6709\u53ef\u516c\u5f00\u8bbf\u95ee\u7684\u8282\u70b9\u3002\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\uff0c\u4e00\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e2d\u4e3a",(0,r.jsx)(n.code,{children:"ingress-nginx"}),"service\u670d\u52a1IP\u5438\u5f15\u6240\u6709\u7684\u6d41\u91cf\u3002\u8be6\u60c5\u8bf7\u67e5\u770b",(0,r.jsx)(n.a,{href:"https://metallb.universe.tf/usage/#traffic-policies",children:"\u6d41\u91cf\u7b56\u7565"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"MetalLB in L2 mode",src:s(2189).A+"",width:"756",height:"447"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MetalLB"}),"\u53ef\u4ee5\u7528\u4e00\u4e2a\u5355\u72ec\u7684K8S\u6e05\u5355\u90e8\u7f72\uff0c\u6216\u8005\u4f7f\u7528Helm\u5b89\u88c5\u3002\u672c\u4f8b\u7684\u5176\u4f59\u90e8\u5206\u5047\u8bbe",(0,r.jsx)(n.code,{children:"MetalLB"}),"\u5df2\u7ecf\u6309\u7167",(0,r.jsx)(n.a,{href:"https://metallb.universe.tf/installation/",children:"\u5b89\u88c5\u8bf4\u660e"}),"\u90e8\u7f72\u4e86\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"MetalLB"}),"\u9700\u8981\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"IP"}),"\u5730\u5740\u6c60\uff0c\u4e3a\u4e86\u53ef\u4ee5\u83b7\u5f97",(0,r.jsx)(n.code,{children:"ingress-nginx"}),"\u670d\u52a1\u7684\u6240\u6709\u6743\u3002\u8fd9\u4e2a\u5730\u5740\u6c60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u547d\u540d\u4e3a",(0,r.jsx)(n.code,{children:"config"}),"\u7684",(0,r.jsx)(n.code,{children:"ConfigMap"}),"\u5b9a\u4e49\uff08\u4e0e",(0,r.jsx)(n.code,{children:"MetalLB"}),"\u4f4d\u4e8e\u540c\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\uff09\u3002\u8fd9\u4e2a\u5730\u5740\u6c60\u4e2d\u7684",(0,r.jsx)(n.code,{children:"IP"}),"\u5730\u5740\u5fc5\u987b\u4e3a",(0,r.jsx)(n.code,{children:"MetalLB"}),"\u4e13\u7528\uff0c\u4e0d\u80fd\u4f5c\u4e3ak8s\u8282\u70b9IP\uff0c\u4ee5\u53ca\u4e0d\u80fd\u7531DHCP\u670d\u52a1\u5206\u53d1\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u7ed9\u51fa\u4e00\u4e2a\u4e09\u8282\u70b9\u7684\u96c6\u7fa4\uff08external IP\u4ec5\u4f5c\u4e3a\u793a\u4f8b\uff0c\u5728\u5927\u90e8\u5206\u88f8\u91d1\u5c5e\u73af\u5883\u4e2d\u8fd9\u4e2a\u503c\u4e3aNone\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"\u200b```console\r\n$ kubectl get node\r\nNAME     STATUS   ROLES    EXTERNAL-IP\r\nhost-1   Ready    master   203.0.113.1\r\nhost-2   Ready    node     203.0.113.2\r\nhost-3   Ready    node     203.0.113.3\r\n\u200b```\r\n\r\nAfter creating the following ConfigMap, MetalLB takes ownership of one of the IP addresses in the pool and updates\r\nthe *loadBalancer* IP field of the `ingress-nginx` Service accordingly.\r\n\r\n\u200b```yaml\r\napiVersion: v1\r\nkind: ConfigMap\r\nmetadata:\r\n  namespace: metallb-system\r\n  name: config\r\ndata:\r\n  config: |\r\n    address-pools:\r\n    - name: default\r\n      protocol: layer2\r\n      addresses:\r\n      - 203.0.113.10-203.0.113.15\r\n\u200b```\r\n\r\n\u200b```console\r\n$ kubectl -n ingress-nginx get svc\r\nNAME                   TYPE          CLUSTER-IP     EXTERNAL-IP  PORT(S)\r\ndefault-http-backend   ClusterIP     10.0.64.249    <none>       80/TCP\r\ningress-nginx          LoadBalancer  10.0.220.217   203.0.113.10  80:30100/TCP,443:30101/TCP\r\n\u200b```\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u65e6",(0,r.jsx)(n.code,{children:"MetalLB"}),"\u4e3a",(0,r.jsx)(n.code,{children:"ingress-nginx"}),"\u7684",(0,r.jsx)(n.code,{children:"LoadBalancer"}),"\u670d\u52a1\u8bbe\u7f6e\u4e86\u5916\u90e8IP\u5730\u5740\uff0c\u5728",(0,r.jsx)(n.code,{children:"iptables"}),"\u7684",(0,r.jsx)(n.code,{children:"NAT"}),"\u5217\u8868\u4e2d\u5c06\u521b\u5efa\u4e00\u6761\u5bf9\u5e94\u7684\u7f51\u7edc\u89c4\u5219\uff0c\u5e76\u4e14\u5177\u6709\u9009\u5b9aIP\u5730\u5740\u7684\u8282\u70b9\u5f00\u59cb\u5728",(0,r.jsx)(n.code,{children:"LoadBalancer"}),"\u670d\u52a1\u4e2d\u914d\u7f6e\u7684\u7aef\u53e3\u4e0a\u54cd\u5e94HTTP\u8bf7\u6c42\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ curl -D- http://203.0.113.10 -H 'Host: myapp.example.com'\r\nHTTP/1.1 200 OK\r\nServer: nginx/1.15.2\n"})}),"\n",(0,r.jsxs)(n.p,{children:["!!! tip In order to preserve the source IP address in HTTP requests sent to NGINX, it is necessary to use the ",(0,r.jsx)(n.code,{children:"Local"})," traffic policy. Traffic policies are described in more details in ",(0,r.jsx)(n.a,{href:"https://metallb.universe.tf/usage/#traffic-policies",children:"Traffic policies"})," as well as in the next section."]}),"\n",(0,r.jsx)(n.h2,{id:"over-a-nodeport-service",children:"Over a NodePort Service"}),"\n",(0,r.jsx)(n.p,{children:"\u7531\u4e8e\u5176\u7b80\u5355\u6027\uff0c\u8fd9\u662f\u7528\u6237\u5728\u9075\u5faa\u6240\u8ff0\u6b65\u9aa4\u65f6\u9ed8\u8ba4\u90e8\u7f72\u7684\u8bbe\u7f6e\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7c7b\u578b\u4e3a",(0,r.jsx)(n.code,{children:"NodePort"}),"\u66b4\u9732\u7684Service\u670d\u52a1\uff0c\u901a\u8fc7",(0,r.jsx)(n.code,{children:"kube-proxy"}),"\u7ec4\u4ef6\uff0c\u5728\u6bcf\u4e00\u4e2aK8S\u96c6\u7fa4\u8282\u70b9\uff08\u5305\u62ecmaster\u8282\u70b9\uff09\u540c\u4e00\u4e2a\u6ca1\u6709\u7279\u6743\u7684\u7aef\u53e3\uff08\u9ed8\u8ba430000 - 32767\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u914d\u7f6e\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"NGINX"}),"\u5bb9\u5668\u4e0e\u4e3b\u673a\u7f51\u7edc\u4fdd\u6301\u9694\u79bb\u3002\u56e0\u6b64\uff0c\u5b83\u53ef\u4ee5\u5b89\u5168\u7684\u7ed1\u5b9a\u4efb\u610f\u7aef\u53e3\uff0c\u5305\u62ec\u6807\u51c6HTTP\u7aef\u53e3",(0,r.jsx)(n.code,{children:"80"}),"\u548c",(0,r.jsx)(n.code,{children:"443"}),"\u3002\u7136\u800c\uff0c\u7531\u4e8e\u5bb9\u5668\u7684\u547d\u540d\u7a7a\u95f4\u9694\u79bb\uff0c\u4f4d\u4e8e\u96c6\u7fa4\u5916\u7684\u5ba2\u6237\u7aef\uff08\u4f8b\u5982\u516c\u7f51\uff09\u7981\u6b62\u901a\u8fc7Ingress\u8bbf\u95ee",(0,r.jsx)(n.code,{children:"80"}),"\u548c",(0,r.jsx)(n.code,{children:"443"}),"\u7aef\u53e3\u3002\u76f8\u53cd\uff0c\u5916\u90e8\u5ba2\u6237\u7aef\u5fc5\u987b\u5c06\u5206\u914d\u7ed9",(0,r.jsx)(n.code,{children:"ingress nginx"}),"\u670d\u52a1\u7684\u8282\u70b9\u7aef\u53e3\u9644\u52a0\u5230HTTP\u8bf7\u6c42\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"nodeport",src:s(4981).A+"",width:"756",height:"462"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\uff0c\u7ed9\u51fa",(0,r.jsx)(n.code,{children:"NodePort"}),"\u7aef\u53e330100\u5206\u914d\u7ed9",(0,r.jsx)(n.code,{children:"ingress-nginx"}),"\u670d\u52a1"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"\u200b```console\r\n$ kubectl -n ingress-nginx get svc\r\nNAME                   TYPE        CLUSTER-IP     PORT(S)\r\ndefault-http-backend   ClusterIP   10.0.64.249    80/TCP\r\ningress-nginx          NodePort    10.0.220.217   80:30100/TCP,443:30101/TCP\r\n\u200b```\r\n\r\nand a Kubernetes node with the public IP address `203.0.113.2` (the external IP is added as an example, in most\r\nbare-metal environments this value is <None\\>)\r\n\r\n\u200b```console\r\n$ kubectl get node\r\nNAME     STATUS   ROLES    EXTERNAL-IP\r\nhost-1   Ready    master   203.0.113.1\r\nhost-2   Ready    node     203.0.113.2\r\nhost-3   Ready    node     203.0.113.3\r\n\u200b```\r\n\r\na client would reach an Ingress with `host: myapp.example.com` at `http://myapp.example.com:30100`, where the\r\nmyapp.example.com subdomain resolves to the 203.0.113.2 IP address.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5371\u9669\u201c\u5bf9\u4e3b\u673a\u7cfb\u7edf\u9020\u6210\u5f71\u54cd\u201d\uff0c\u53ef\u901a\u8fc7",(0,r.jsx)(n.code,{children:"--service-node-port-range"}),"\u91cd\u65b0\u914d\u7f6e",(0,r.jsx)(n.code,{children:"NodePort"}),"\u7aef\u53e3\u8303\u56f4\uff0c\u5305\u62ec\u53ef\u4ee5\u66b4\u9732",(0,r.jsx)(n.code,{children:"80"}),"\u548c",(0,r.jsx)(n.code,{children:"443"}),"\u7aef\u53e3\uff0c\u8fd9\u6837\u505a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u610f\u5916\u95ee\u9898\uff0c\u5305\u62ec\uff08\u4f46\u4e0d\u9650\u4e8e\uff09\u4f7f\u7528\u7cfb\u7edf\u5b88\u62a4\u8fdb\u7a0b\u4fdd\u7559\u7684\u7aef\u53e3\u548c\u6388\u4e88kube\u4ee3\u7406\u6743\u9650\u7684\u5fc5\u8981\u6027\uff0c\u5426\u5219\u53ef\u80fd\u4e0d\u9700\u8981\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"This practice is therefore **discouraged**. See the other approaches proposed in this page for alternatives.\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u6cd5\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u5c40\u9650\u6027\uff0c\u6211\u4eec\u5e94\u8be5\u6ce8\u610f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Source IP address"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNodePort\u7c7b\u578b\u7684\u670d\u52a1\u6267\u884c\u6e90\u5730\u5740\u8f6c\u6362\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ingress status"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Redirects"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u901a\u8fc7\u4e3b\u673a\u7f51\u7edc",children:"\u901a\u8fc7\u4e3b\u673a\u7f51\u7edc"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6ca1\u6709\u53ef\u7528\u7684\u5916\u90e8\u8d1f\u8f7d\u5e73\u8861\u5668\u7684\u8bbe\u7f6e\u4e2d\uff0c\u4f46\u4e0d\u80fd\u4f7f\u7528NodePorts\uff0c \u8fd9\u4e2a\u65b9\u6cd5\u7684\u597d\u5904\u5c31\u662f",(0,r.jsx)(n.code,{children:"nginx ingress controller"}),"\u53ef\u4ee5\u7ed1\u5b9a80\u548c443\u7aef\u53e3\uff0c\u800c\u4e0d\u9700\u8981",(0,r.jsx)(n.code,{children:"NodePort"}),"\u670d\u52a1\u5f3a\u52a0\u7684\u989d\u5916\u7f51\u7edc\u7ffb\u8bd1\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u5229\u7528\u4efb\u4f55Service\u5bf9\u8c61\u6765\u66b4\u9732",(0,r.jsx)(n.code,{children:"NGINX ingress controller"}),"\u3002\u5982\u679c\u76ee\u6807\u96c6\u7fa4\u4e2d\u5b58\u5728",(0,r.jsx)(n.code,{children:"ingress nginx"}),"Service\u670d\u52a1\uff0c\u5efa\u8bae\u5c06\u5176\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u53ef\u4ee5\u901a\u8fc7\u5728Pods\u89c4\u8303\u4e2d\u542f\u7528hostNetwork\u9009\u9879\u6765\u5b9e\u73b0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"template:\r\n  spec:\r\n    hostNetwork: true\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u542f\u7528\u8fd9\u4e2a\u914d\u7f6e\uff0c\u5728\u4efb\u4f55\u7f51\u7edc\u63a5\u53e3\u4e0a\uff0c\u66b4\u9732\u7cfb\u7edf\u5b88\u62a4\u8fdb\u7a0b\u7ed9ingress\u63a7\u5236\u5668\uff0c\u5305\u62ec\u4e3b\u673a\u56de\u73af\u3002\u8bf7\u4ed4\u7ec6\u8bc4\u4f30\u8fd9\u53ef\u80fd\u5bf9\u7cfb\u7edf\u5b89\u5168\u9020\u6210\u7684\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u8003\u8651\u75312\u4e2a\u526f\u672c\u7ec4\u6210\u7684ingress nginx\u63a7\u5236\u5668\u90e8\u7f72\uff0cnginx Pod\u4ece\u5176\u4e3b\u673a\u7684IP\u5730\u5740\u800c\u4e0d\u662f\u5185\u90e8Pod IP\u7ee7\u627f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"$ kubectl -n ingress-nginx get pod -o wide\r\nNAME                                       READY   STATUS    IP            NODE\r\ndefault-http-backend-7c5bc89cc9-p86md      1/1     Running   172.17.1.1    host-2\r\ningress-nginx-controller-5b4cf5fc6-7lg6c   1/1     Running   203.0.113.3   host-3\r\ningress-nginx-controller-5b4cf5fc6-lzrls   1/1     Running   203.0.113.2   host-2\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u79cd\u90e8\u7f72\u65b9\u6cd5\u7684\u4e00\u4e2a\u4e3b\u8981\u5c40\u9650\u6027\u662f\uff0c\u5728\u6bcf\u4e00\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e0a\uff0c\u53ea\u6709\u4e00\u4e2aingress\u63a7\u5236\u5668",(0,r.jsx)(n.code,{children:"pod"}),"\u4f1a\u88ab\u8c03\u5ea6\u3002\u56e0\u4e3a\u5728\u540c\u4e00\u7f51\u7edc\u63a5\u53e3\u4e0a\u591a\u6b21\u7ed1\u5b9a\u540c\u4e00\u7aef\u53e3\u5728\u6280\u672f\u4e0a\u662f\u4e0d\u53ef\u80fd\u7684\u3002\u6ca1\u6709\u88ab\u8c03\u5ea6\u7684",(0,r.jsx)(n.code,{children:"Pods"}),"\u7531\u4e8e\u8fd9\u79cd\u60c5\u51b5\uff0c\u5c06\u5bfc\u81f4\u4ee5\u4e0b\u4e8b\u4ef6\u5931\u8d25\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ kubectl -n ingress-nginx describe pod <unschedulable-ingress-nginx-controller-pod>\r\n...\r\nEvents:\r\n  Type     Reason            From               Message\r\n  ----     ------            ----               -------\r\n  Warning  FailedScheduling  default-scheduler  0/3 nodes are available: 3 node(s) didn't have free ports for the requested pod ports.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u786e\u4fdd\u53ea\u6709\u53ef\u88ab\u8c03\u7528\u7684Pod\u4f1a\u88ab\u521b\u5efa\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5c31\u662f\u5b89\u88c5",(0,r.jsx)(n.code,{children:"nginx ingress controller"}),"\u65f6\uff0c\u4f5c\u4e3a\u4e00\u4e2a*",(0,r.jsx)(n.code,{children:"DaemonSet"}),"*\u66ff\u6362\u4f20\u7edf\u7684",(0,r.jsx)(n.code,{children:"Deployment"}),"\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DaemonSet"}),"\u53ea\u4e3a\u6bcf\u4e2a\u7fa4\u96c6\u8282\u70b9\uff08\u5305\u62ecmaster\u8282\u70b9\uff09\u8c03\u5ea6\u4e00\u79cd\u7c7b\u578b\u7684Pod\uff0c\u9664\u975e\u8be5\u8282\u70b9\u88ab\u914d\u7f6e\u4e3a",(0,r.jsx)(n.code,{children:"repel those Pods"}),"\u3002\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u67e5\u770b",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",children:"DaemonSet"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e",(0,r.jsx)(n.code,{children:"DaemonSet"}),"\u5bf9\u8c61\u7684\u5927\u591a\u6570\u5c5e\u6027\u90fd\u4e0e",(0,r.jsx)(n.code,{children:"Deployment"}),"\u5bf9\u8c61\u76f8\u540c\uff0c\u56e0\u6b64\u6b64\u6587\u6863\u9875\u9762\u5c06\u7531\u7528\u6237\u81ea\u884c\u51b3\u5b9a\u76f8\u5e94\u6e05\u5355\u7684\u914d\u7f6e\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2189:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/metallb-f197f4434df530d1c7b143e73b4eed3d.jpg"},4981:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/nodeport-0588ed796c5219e299a9ff0ed7de9f9c.jpg"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const c={},d=r.createContext(c);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);