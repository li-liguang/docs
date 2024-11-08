"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4026],{6285:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var d=c(4848),r=c(8453);const i={},s="\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6\u4e3aContainerd",o={id:"cloud/k8s/\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6",title:"\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6\u4e3aContainerd",description:"\u5c06\u8282\u70b9\u4e0a\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4ece Docker Engine \u6539\u4e3a containerd",source:"@site/docs/cloud/2-k8s/\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6.md",sourceDirName:"cloud/2-k8s",slug:"/cloud/k8s/\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6",permalink:"/docs/docs/cloud/k8s/\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"cloudSidebar",previous:{title:"nginx ingress controller\u5b89\u88c5\u6307\u5357",permalink:"/docs/docs/cloud/k8s/nginx-ingress"},next:{title:"\u5b89\u88c5Containerd",permalink:"/docs/docs/cloud/k8s/\u5b89\u88c5Containerd"}},l={},t=[{value:"\u817e\u7a7a\u8282\u70b9",id:"\u817e\u7a7a\u8282\u70b9",level:2},{value:"\u505c\u6b62Docker\u5b88\u62a4\u8fdb\u7a0b",id:"\u505c\u6b62docker\u5b88\u62a4\u8fdb\u7a0b",level:2},{value:"\u5b89\u88c5 Containerd",id:"\u5b89\u88c5-containerd",level:2},{value:"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",id:"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u914d\u7f6e  <code>systemd</code>  cgroup \u9a71\u52a8",id:"\u914d\u7f6e--systemd--cgroup-\u9a71\u52a8",level:3},{value:"\u91cd\u8f7d\u6c99\u7bb1\uff08pause\uff09\u955c\u50cf",id:"\u91cd\u8f7d\u6c99\u7bb1pause\u955c\u50cf",level:3},{value:"\u8bbe\u7f6e\u955c\u50cf\u4ee3\u7406",id:"\u8bbe\u7f6e\u955c\u50cf\u4ee3\u7406",level:3},{value:"\u91cd\u542f containerd",id:"\u91cd\u542f-containerd",level:3},{value:"\u914d\u7f6e kubelet \u4f7f\u7528 containerd \u4f5c\u4e3a\u5176\u5bb9\u5668\u8fd0\u884c\u65f6",id:"\u914d\u7f6e-kubelet-\u4f7f\u7528-containerd-\u4f5c\u4e3a\u5176\u5bb9\u5668\u8fd0\u884c\u65f6",level:2},{value:"\u91cd\u542f kubelet",id:"\u91cd\u542f-kubelet",level:2},{value:"\u53d6\u6d88\u8282\u70b9\u9694\u79bb",id:"\u53d6\u6d88\u8282\u70b9\u9694\u79bb",level:2},{value:"\u9a8c\u8bc1\u8282\u70b9\u5904\u4e8e\u5065\u5eb7\u72b6\u6001",id:"\u9a8c\u8bc1\u8282\u70b9\u5904\u4e8e\u5065\u5eb7\u72b6\u6001",level:2},{value:"\u79fb\u9664 Docker Engine",id:"\u79fb\u9664-docker-engine",level:2},{value:"\u5f02\u5e38\u6392\u67e5",id:"\u5f02\u5e38\u6392\u67e5",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6\u4e3acontainerd",children:"\u4fee\u6539\u5bb9\u5668\u8fd0\u884c\u65f6\u4e3aContainerd"})}),"\n",(0,d.jsx)(n.p,{children:"\u5c06\u8282\u70b9\u4e0a\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u4ece Docker Engine \u6539\u4e3a containerd"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\u539f\u6587\u94fe\u63a5\uff1a",(0,d.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/migrating-from-dockershim/change-runtime-containerd/",children:"https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/migrating-from-dockershim/change-runtime-containerd/"}),"\n\u672c\u4efb\u52a1\u7ed9\u51fa\u5c06\u5bb9\u5668\u8fd0\u884c\u65f6\u4ece Docker \u6539\u4e3a containerd \u6240\u9700\u7684\u6b65\u9aa4\u3002 \u6b64\u4efb\u52a1\u9002\u7528\u4e8e\u8fd0\u884c 1.23 \u6216\u66f4\u65e9\u7248\u672c Kubernetes \u7684\u96c6\u7fa4\u64cd\u4f5c\u4eba\u5458\u3002 \u540c\u65f6\uff0c\u6b64\u4efb\u52a1\u4e5f\u6d89\u53ca\u4ece dockershim \u8fc1\u79fb\u5230 containerd \u7684\u793a\u4f8b\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u4e3b\u8981\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u817e\u7a7a\u9700\u8981\u6539\u53d8\u8fd0\u884c\u65f6\u7684\u8282\u70b9"}),"\n",(0,d.jsx)(n.li,{children:"\u505c\u6b62Docker\u5b88\u62a4\u8fdb\u7a0b"}),"\n",(0,d.jsxs)(n.li,{children:["\u5b89\u88c5containerd","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",(0,d.jsx)(n.code,{children:"config.toml"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u914d\u7f6ecgroup\u9a71\u52a8\u4e3a",(0,d.jsx)(n.code,{children:"systemd"})]}),"\n",(0,d.jsxs)(n.li,{children:["\u91cd\u8f7d\u6c99\u7bb1\u955c\u50cf",(0,d.jsx)(n.code,{children:"pause"})]}),"\n",(0,d.jsx)(n.li,{children:"\u8bbe\u7f6e\u955c\u50cf\u4ee3\u7406"}),"\n",(0,d.jsx)(n.li,{children:"\u91cd\u542fcontainerd"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.li,{children:"\u914d\u7f6ekubelet\u4f7f\u7528containerd\u8fd0\u884c\u65f6"}),"\n",(0,d.jsx)(n.li,{children:"\u91cd\u542fkubelet"}),"\n",(0,d.jsx)(n.li,{children:"\u53d6\u6d88\u8282\u70b9\u9694\u79bb"}),"\n",(0,d.jsx)(n.li,{children:"\u9a8c\u8bc1\u8282\u70b9\u5065\u5eb7\u72b6\u6001"}),"\n",(0,d.jsx)(n.li,{children:"\u3010\u53ef\u9009\u3011\u5378\u8f7dDocker"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u817e\u7a7a\u8282\u70b9",children:"\u817e\u7a7a\u8282\u70b9"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:" kubectl drain <node-to-drain> --ignore-daemonsets\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5c06",(0,d.jsx)(n.code,{children:"<node-to-drain>"}),"\u66ff\u6362\u4e3a\u60f3\u8981\u817e\u7a7a\u7684\u8282\u70b9\u7684\u540d\u79f0\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u505c\u6b62docker\u5b88\u62a4\u8fdb\u7a0b",children:"\u505c\u6b62Docker\u5b88\u62a4\u8fdb\u7a0b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"systemctl stop kubelet\nsystemctl disable docker.service --now\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88c5-containerd",children:"\u5b89\u88c5 Containerd"}),"\n",(0,d.jsxs)(n.p,{children:["\u5b89\u88c5 containerd\u3002\u8fdb\u4e00\u6b65\u7684\u4fe1\u606f\u53ef\u53c2\u89c1 ",(0,d.jsx)(n.a,{href:"https://containerd.io/docs/getting-started/",children:"containerd \u7684\u5b89\u88c5\u6587\u6863"}),"\u3002 \u5173\u4e8e\u4e00\u4e9b\u7279\u5b9a\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\uff0c\u8bf7\u9075\u5faa ",(0,d.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/setup/production-environment/container-runtimes/#containerd",children:"containerd \u6307\u5357"}),"\u3002\n\u5b89\u88c5\u6b65\u9aa4\uff1a",(0,d.jsx)(n.a,{href:"https://www.jianguoyun.com/p/DQgTN3oQvq_EChi-zukEIAA",children:"https://www.jianguoyun.com/p/DQgTN3oQvq_EChi-zukEIAA"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6",children:"\u751f\u6210\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /etc/containerd\ncontainerd config default | sudo tee /etc/containerd/config.toml\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"\u914d\u7f6e--systemd--cgroup-\u9a71\u52a8",children:["\u914d\u7f6e  ",(0,d.jsx)(n.code,{children:"systemd"}),"  cgroup \u9a71\u52a8"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7ed3\u5408 ",(0,d.jsx)(n.code,{children:"runc"})," \u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"systemd"})," cgroup \u9a71\u52a8\uff0c\u5728 ",(0,d.jsx)(n.code,{children:"/etc/containerd/config.toml"})," \u4e2d\u8bbe\u7f6e\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-toml",children:'[plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc]\n  ...\n  [plugins."io.containerd.grpc.v1.cri".containerd.runtimes.runc.options]\n    SystemdCgroup = true\n'})}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u8bf4\u660e\uff1a"}),"\n\u5982\u679c\u4f60\u4ece\u8f6f\u4ef6\u5305\uff08\u4f8b\u5982\uff0cRPM \u6216\u8005  ",(0,d.jsx)(n.code,{children:".deb"}),"\uff09\u4e2d\u5b89\u88c5 containerd\uff0c\u4f60\u53ef\u80fd\u4f1a\u53d1\u73b0\u5176\u4e2d\u9ed8\u8ba4\u7981\u6b62\u4e86 CRI \u96c6\u6210\u63d2\u4ef6\u3002\n\u4f60\u9700\u8981\u542f\u7528 CRI \u652f\u6301\u624d\u80fd\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u4f7f\u7528 containerd\u3002 \u8981\u786e\u4fdd  ",(0,d.jsx)(n.code,{children:"cri"}),"  \u6ca1\u6709\u51fa\u73b0\u5728  ",(0,d.jsx)(n.code,{children:"/etc/containerd/config.toml"}),"  \u6587\u4ef6\u4e2d  ",(0,d.jsx)(n.code,{children:"disabled_plugins"}),"  \u5217\u8868\u5185\u3002\u5982\u679c\u4f60\u66f4\u6539\u4e86\u8fd9\u4e2a\u6587\u4ef6\uff0c\u4e5f\u8bf7\u8bb0\u5f97\u8981\u91cd\u542f  ",(0,d.jsx)(n.code,{children:"containerd"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u91cd\u8f7d\u6c99\u7bb1pause\u955c\u50cf",children:"\u91cd\u8f7d\u6c99\u7bb1\uff08pause\uff09\u955c\u50cf"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u4f60\u7684 ",(0,d.jsx)(n.a,{href:"https://github.com/containerd/containerd/blob/main/docs/cri/config.md",children:"containerd \u914d\u7f6e"}),"\u4e2d\uff0c \u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4ee5\u4e0b\u9009\u9879\u91cd\u8f7d\u6c99\u7bb1\u955c\u50cf\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-toml",children:'[plugins."io.containerd.grpc.v1.cri"]\n  # sandbox_image = "registry.k8s.io/pause:3.2"\n  sandbox_image = "registry.aliyuncs.com/google_containers/pause:3.7"\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\u8bbe\u7f6e\u955c\u50cf\u4ee3\u7406",children:"\u8bbe\u7f6e\u955c\u50cf\u4ee3\u7406"}),"\n",(0,d.jsxs)(n.p,{children:["\u53c2\u7167\u6587\u6863:",(0,d.jsx)(n.a,{href:"https://ye3cx8n2gv.feishu.cn/docx/NphRd7wTzoriXcx1okHcaZAfn8b",children:"https://ye3cx8n2gv.feishu.cn/docx/NphRd7wTzoriXcx1okHcaZAfn8b"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u91cd\u542f-containerd",children:"\u91cd\u542f containerd"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart containerd\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u914d\u7f6e-kubelet-\u4f7f\u7528-containerd-\u4f5c\u4e3a\u5176\u5bb9\u5668\u8fd0\u884c\u65f6",children:"\u914d\u7f6e kubelet \u4f7f\u7528 containerd \u4f5c\u4e3a\u5176\u5bb9\u5668\u8fd0\u884c\u65f6"}),"\n",(0,d.jsxs)(n.p,{children:["\u7f16\u8f91\u6587\u4ef6 ",(0,d.jsx)(n.code,{children:"/var/lib/kubelet/kubeadm-flags.env"}),"\uff0c\u5c06 containerd \u8fd0\u884c\u65f6\u6dfb\u52a0\u5230\u6807\u5fd7\u4e2d\uff1a ",(0,d.jsx)(n.code,{children:"--container-runtime=remote"})," \u548c ",(0,d.jsx)(n.code,{children:"--container-runtime-endpoint=unix:///run/containerd/containerd.sock"}),"\u3002\n",(0,d.jsx)(n.code,{children:"kubeadm"})," \u5de5\u5177\u5c06\u6bcf\u4e2a\u4e3b\u673a\u7684 CRI \u5957\u63a5\u5b57\u4fdd\u5b58\u5728\u8be5\u4e3b\u673a\u5bf9\u5e94\u7684 Node \u5bf9\u8c61\u7684\u6ce8\u89e3\u4e2d\u3002\u8981\u66f4\u6539\u8fd9\u4e00\u6ce8\u89e3\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u5728\u4e00\u53f0\u5305\u542b kubeadm ",(0,d.jsx)(n.code,{children:"/etc/kubernetes/admin.conf"})," \u6587\u4ef6\u7684\u673a\u5668\u4e0a\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"kubectl edit no <node-name>\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u8fd9\u4e00\u547d\u4ee4\u4f1a\u6253\u5f00\u4e00\u4e2a\u6587\u672c\u7f16\u8f91\u5668\uff0c\u4f9b\u4f60\u5728\u5176\u4e2d\u7f16\u8f91 Node \u5bf9\u8c61\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u66f4\u6539  ",(0,d.jsx)(n.code,{children:"kubeadm.alpha.kubernetes.io/cri-socket"}),"  \u503c\uff0c\u5c06\u5176\u4ece  ",(0,d.jsx)(n.code,{children:"/var/run/dockershim.sock"}),"  \u6539\u4e3a\u4f60\u6240\u9009\u62e9\u7684 CRI \u5957\u63a5\u5b57\u8def\u5f84 \uff08\u4f8b\u5982\uff1a",(0,d.jsx)(n.code,{children:"unix:///run/containerd/containerd.sock"}),"\uff09\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6ce8\u610f\u65b0\u7684 CRI \u5957\u63a5\u5b57\u8def\u5f84\u5fc5\u987b\u5e26\u6709  ",(0,d.jsx)(n.code,{children:"unix://"}),"  \u524d\u7f00\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4fdd\u5b58\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6240\u4f5c\u7684\u4fee\u6539\uff0c\u8fd9\u4f1a\u66f4\u65b0 Node \u5bf9\u8c61\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u91cd\u542f-kubelet",children:"\u91cd\u542f kubelet"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"systemctl start kubelet\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u53d6\u6d88\u8282\u70b9\u9694\u79bb",children:"\u53d6\u6d88\u8282\u70b9\u9694\u79bb"}),"\n",(0,d.jsx)(n.p,{children:"\u82e5\u4e00\u5207\u987a\u5229\uff0c\u6b64\u65f6\u7684\u8282\u70b9\u72b6\u6001\u4ecd\u7136\u5904\u4e8eReady,SchedulingDisabled\u72b6\u6001\uff0c\u9700\u8981\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u53d6\u6d88\u8282\u70b9\u9694\u79bb\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"kubectl uncordon <node-name>\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u9a8c\u8bc1\u8282\u70b9\u5904\u4e8e\u5065\u5eb7\u72b6\u6001",children:"\u9a8c\u8bc1\u8282\u70b9\u5904\u4e8e\u5065\u5eb7\u72b6\u6001"}),"\n",(0,d.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,d.jsx)(n.code,{children:"kubectl get nodes -o wide"}),"\uff0ccontainerd \u4f1a\u663e\u793a\u4e3a\u6211\u4eec\u6240\u66f4\u6539\u7684\u8282\u70b9\u4e0a\u7684\u8fd0\u884c\u65f6\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"NAME        STATUS   ROLES           AGE   VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME\nnode1       Ready    control-plane   20d   v1.24.4   192.168.90.121   <none>        Ubuntu 22.04.1 LTS   5.15.0-50-generic   containerd://1.6.8\nnode2       Ready    control-plane   20d   v1.24.4   192.168.90.122   <none>        Ubuntu 21.04         5.11.0-49-generic   containerd://1.6.8\nnode3       Ready    <none>          20d   v1.24.4   192.168.90.123   <none>        Ubuntu 21.04         5.11.0-49-generic   containerd://1.6.8\nnode4       Ready    control-plane   20d   v1.24.4   192.168.90.124   <none>        Ubuntu 22.04.1 LTS   5.15.0-43-generic   containerd://1.6.8\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u79fb\u9664-docker-engine",children:"\u79fb\u9664 Docker Engine"}),"\n",(0,d.jsx)(n.p,{children:"\u6700\u540e\uff0c\u5728\u4e00\u5207\u987a\u5229\u65f6\u5220\u9664 Docker\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"# CentOS\nsudo yum remove docker-ce docker-ce-cli\n# Debian\nsudo apt-get purge docker-ce docker-ce-cli\n# Fedora\nsudo dnf remove docker-ce docker-ce-cli\n# Ubuntu\nsudo apt-get purge docker-ce docker-ce-cli\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u547d\u4ee4\u4e0d\u4f1a\u79fb\u9664\u4f60\u7684\u4e3b\u673a\u4e0a\u7684\u955c\u50cf\u3001\u5bb9\u5668\u3001\u5377\u6216\u8005\u5b9a\u5236\u7684\u914d\u7f6e\u6587\u4ef6\u3002 \u8981\u5220\u9664\u8fd9\u4e9b\u5185\u5bb9\uff0c\u53c2\u9605 Docker \u7684\u6307\u4ee4\u6765",(0,d.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine",children:"\u5378\u8f7d Docker Engine"}),"\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"}),"\nDocker \u6240\u63d0\u4f9b\u7684\u5378\u8f7d Docker Engine \u547d\u4ee4\u6307\u5bfc\u4e2d\uff0c\u5b58\u5728\u5220\u9664 containerd \u7684\u98ce\u9669\u3002 \u5728\u6267\u884c\u547d\u4ee4\u65f6\u8981\u8c28\u614e\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5f02\u5e38\u6392\u67e5",children:"\u5f02\u5e38\u6392\u67e5"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u80cc\u666f\uff1a\n\u96c6\u7fa4\u4e00\u5171\u4e09\u4e2a\u8282\u70b9\uff0c\u4e00\u4e2amaster\uff0c\u4e24\u4e2a\u5de5\u4f5c\u8282\u70b9\uff08node1\uff0cnode2\uff09\uff0c\u672c\u6b21\u4fee\u6539\u8fd0\u884c\u65f6\uff0c\u53ea\u4fee\u6539\u4e86\u5176\u4e2d\u4e00\u4e2a\u5de5\u4f5c\u8282\u70b9\uff08node2\uff09"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6309\u7167\u4ee5\u4e0a\u6b65\u9aa4\u5c06Docker\u66ff\u6362\u4e3a\u4e86containerd\uff0c\u5404\u8282\u70b9\u72b6\u6001\u5747\u663e\u793a\u4e3a",(0,d.jsx)(n.code,{children:"Ready"}),"\uff0c\u4f46\u662f\uff0c\u5f53\u90e8\u7f72\u4e00\u4e2a\u5e94\u7528\u540e\uff0c\u53d1\u73b0\u4f4d\u4e8enode2\u4e0a\u7684pod\u59cb\u7ec8\u65e0\u6cd5\u542f\u52a8\uff0c\u901a\u8fc7\u67e5\u770bpod\u542f\u52a8\u65e5\u5fd7\uff0c\u53d1\u73b0node2\u4e0a\u7684pod\u5bb9\u5668\u4e2d\u7684\u5e94\u7528\uff0c\u9700\u8981\u8bbf\u95eenode1\u4e0apod\u4e2d\u7684\u6570\u636e\u5e93\uff0c\u4f46\u662f\u5374\u65e0\u6cd5\u53d1\u73b0\u6570\u636e\u5e93\u5bf9\u5e94\u7684service\u3002\n\u6839\u636e\u4ee5\u4e0a\u73b0\u8c61\uff0c\u521d\u6b65\u5224\u65ad\u662f\u6709k8s\u96c6\u7fa4\u7f51\u7edc\u63d2\u4ef6\uff0c\u5bfc\u81f4\u7684\u3002\u96c6\u7fa4\u7f51\u7edc\u63d2\u4ef6\uff0c\u91c7\u7528\u7684",(0,d.jsx)(n.a,{href:"https://github.com/flannel-io/flannel#deploying-flannel-manually",children:"Flannel"}),"\uff0c\u67e5\u770b\u4e4b\u540e\uff0c\u53d1\u73b0Flannel\u7248\u672c\u8f83\u8001\uff0c\u4e8e\u662f\u5220\u9664\u4e4b\u524d\u5b89\u88c5\u7684Flannel\uff0c\u91cd\u65b0\u5b89\u88c5\u540e\uff0c\u53d1\u73b0\u95ee\u9898\u89e3\u51b3\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>s,x:()=>o});var d=c(6540);const r={},i=d.createContext(r);function s(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);