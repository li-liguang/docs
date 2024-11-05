"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3912],{1592:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var n=l(4848),d=l(8453);const s={id:"build-rpm-package",title:"\u5236\u4f5c RPM \u8f6f\u4ef6\u5305",sidebar_label:"\u5236\u4f5c RPM \u8f6f\u4ef6\u5305"},c=void 0,i={id:"other/rpm/build-rpm-package",title:"\u5236\u4f5c RPM \u8f6f\u4ef6\u5305",description:"\u672c\u7bc7\u6587\u7ae0\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 rpmbuild \u6784\u5efa\u4e00\u4e2a\u8f93\u51fa Hello World \u7684 RPM \u8f6f\u4ef6\u5305\u3002",source:"@site/docs/other/2-rpm/build-rpm-package.md",sourceDirName:"other/2-rpm",slug:"/other/rpm/build-rpm-package",permalink:"/docs/docs/other/rpm/build-rpm-package",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/other/2-rpm/build-rpm-package.md",tags:[],version:"current",frontMatter:{id:"build-rpm-package",title:"\u5236\u4f5c RPM \u8f6f\u4ef6\u5305",sidebar_label:"\u5236\u4f5c RPM \u8f6f\u4ef6\u5305"},sidebar:"otherSidebar",previous:{title:"\u5236\u4f5cRedis RPM\u8f6f\u4ef6\u5305",permalink:"/docs/docs/other/rpm/build-redis-rpm"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/docs/docs/other/rpm/rpm-faq"}},o={},h=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b89\u88c5\u8f6f\u4ef6",id:"\u5b89\u88c5\u8f6f\u4ef6",level:3},{value:"rpmbuild \u914d\u7f6e",id:"rpmbuild-\u914d\u7f6e",level:3},{value:"\u521d\u59cb\u5316\u6253\u5305\u76ee\u5f55",id:"\u521d\u59cb\u5316\u6253\u5305\u76ee\u5f55",level:3},{value:"\u6211\u4eec\u7684\u201cHello World\u201d\u7a0b\u5e8f",id:"\u6211\u4eec\u7684hello-world\u7a0b\u5e8f",level:2},{value:"\u7f16\u8bd1\u5e76\u6d4b\u8bd5",id:"\u7f16\u8bd1\u5e76\u6d4b\u8bd5",level:3},{value:"\u6253\u5305\u6211\u4eec\u7684\u7a0b\u5e8f",id:"\u6253\u5305\u6211\u4eec\u7684\u7a0b\u5e8f",level:2},{value:"1. \u538b\u7f29\u6e90\u6587\u4ef6",id:"1-\u538b\u7f29\u6e90\u6587\u4ef6",level:3},{value:"2. \u51c6\u5907\u6e90\u7801\u76ee\u5f55",id:"2-\u51c6\u5907\u6e90\u7801\u76ee\u5f55",level:3},{value:"3. \u521b\u5efa\u63cf\u8ff0\u6587\u4ef6",id:"3-\u521b\u5efa\u63cf\u8ff0\u6587\u4ef6",level:3},{value:"4. \u4f7f\u7528 rpmbuild \u6784\u5efa RPM \u5305",id:"4-\u4f7f\u7528-rpmbuild-\u6784\u5efa-rpm-\u5305",level:3},{value:"\u5b89\u88c5 RPM \u8f6f\u4ef6\u5305",id:"\u5b89\u88c5-rpm-\u8f6f\u4ef6\u5305",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\u672c\u7bc7\u6587\u7ae0\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"rpmbuild"})," \u6784\u5efa\u4e00\u4e2a\u8f93\u51fa Hello World \u7684 RPM \u8f6f\u4ef6\u5305\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,n.jsx)(r.h3,{id:"\u5b89\u88c5\u8f6f\u4ef6",children:"\u5b89\u88c5\u8f6f\u4ef6"}),"\n",(0,n.jsxs)(r.p,{children:["\u9996\u5148\u9700\u8981\u5b89\u88c5",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u8f6f\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ sudo yum install rpm-build\n"})}),"\n",(0,n.jsx)(r.h3,{id:"rpmbuild-\u914d\u7f6e",children:"rpmbuild \u914d\u7f6e"}),"\n",(0,n.jsxs)(r.p,{children:["\u63a8\u8350\u5728\u5bb6\u76ee\u5f55\uff08",(0,n.jsx)(r.code,{children:"~"}),"\uff09\u4e2d\u521b\u5efa\u4e00\u4e2a",(0,n.jsx)(r.code,{children:".rpmmacros"}),"\u6587\u4ef6\uff0c\u5b58\u653e",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u8f6f\u4ef6\u7684\u914d\u7f6e\u3002",(0,n.jsx)(r.code,{children:"%_topdir"}),"\u914d\u7f6e\u544a\u8bc9",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u5728\u6784\u5efa\u60a8\u7684 rpm \u5305\u65f6\u53bb\u4ec0\u4e48\u5730\u65b9\u627e\u5230\u5fc5\u8981\u7684\u6587\u4ef6\u3002\u6211\u4eec\u53ef\u4ee5\u5728",(0,n.jsx)(r.code,{children:"~/.rpmmacros"}),"\u4e2d\u5199\u5165\u4ee5\u4e0b\u914d\u7f6e\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"%_topdir    /root/rpmbuild\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6b64\u914d\u7f6e\u662f\u544a\u77e5",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u8f6f\u4ef6\u5728",(0,n.jsx)(r.code,{children:"~/rpmbuild"}),"\u76ee\u5f55\u4e2d\u67e5\u627e\u5236\u4f5c rpm \u5305\u9700\u8981\u7684\u6587\u4ef6\u3002"]}),"\n",(0,n.jsx)(r.h3,{id:"\u521d\u59cb\u5316\u6253\u5305\u76ee\u5f55",children:"\u521d\u59cb\u5316\u6253\u5305\u76ee\u5f55"}),"\n",(0,n.jsxs)(r.p,{children:["\u91c7\u7528",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u8f6f\u4ef6\u5236\u4f5c rpm \u5305\uff0c\u9700\u8981\u5728",(0,n.jsx)(r.code,{children:"%_topdir"}),"\u76ee\u5f55\u4e2d\u653e\u5165\u6253\u5305\u9700\u8981\u7684\u914d\u7f6e\u3001\u6e90\u7801\u3001\u4f9d\u8d56\u5305\u7b49\u6587\u4ef6\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u884c\u624b\u52a8\u521d\u59cb\u5316\u6b64\u76ee\u5f55\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ mkdir -p ~/rpmbuild/{BUILD,BUILDROOT,RPMS,SOURCES,SPECS,SRPMS}\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"\u6211\u4eec\u7684hello-world\u7a0b\u5e8f",children:"\u6211\u4eec\u7684\u201cHello World\u201d\u7a0b\u5e8f"}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u5bb6\u76ee\u5f55\u4e2d\u521b\u5efa\u6211\u4eec\u7684",(0,n.jsx)(r.code,{children:"Hello World"}),"\u7a0b\u5e8f\uff0c\u7a0b\u5e8f\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"~/helloworld-1.0\r\n|__ main.c\r\n|__ Makefile\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",metastring:'title="~/helloworld-1.0/main.c"',children:'#include <stdio.h>\r\nint main (int argc, char *argv[]) {\r\n  printf("\u4f60\u597d\uff0c\u4e16\u754c\uff01\\n");\r\n  return 0;\r\n}\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-makefile",metastring:'title="~/helloworld-1.0/Makefile"',children:"DESTDIR ?=\r\nPREFIX ?= /usr/local\r\n\r\n\r\nhelloworld:\r\n\tgcc main.c -o helloworld\r\n\r\ninstall: helloworld\r\n\tinstall -m 0755 -d $(DESTDIR)$(PREFIX)/bin\r\n\tinstall -m 0755 helloworld $(DESTDIR)$(PREFIX)/bin\n"})}),"\n",(0,n.jsx)(r.h3,{id:"\u7f16\u8bd1\u5e76\u6d4b\u8bd5",children:"\u7f16\u8bd1\u5e76\u6d4b\u8bd5"}),"\n",(0,n.jsx)(r.p,{children:"\u5728\u5c06\u7a0b\u5e8f\u5236\u4f5c\u6210 rpm \u5305\u4e4b\u524d\uff0c\u9700\u8981\u6d4b\u8bd5\u7a0b\u5e8f\u662f\u5426\u6b63\u5e38\u3002\u5728\u6d4b\u8bd5\u7a0b\u5e8f\u4e4b\u524d\u9700\u8981\u7f16\u8bd1\u7a0b\u5e8f\u6e90\u7801\u4e3a\u53ef\u6267\u884c\u6587\u4ef6\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["\u6211\u4eec\u9700\u8981\u4f7f\u7528",(0,n.jsx)(r.code,{children:"gcc"}),"\u7f16\u8bd1\u7a0b\u5e8f\u6e90\u7801\uff0c\u5e76\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u7136\u540e\u5c06\u53ef\u6267\u884c\u6587\u4ef6\u5b89\u88c5\u5230",(0,n.jsx)(r.code,{children:"/usr/local/bin"}),"\u4e2d\u3002\u6211\u4eec\u8fd0\u884c\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5373\u53ef\u9a8c\u8bc1\u7a0b\u5e8f\u662f\u5426\u6b63\u5e38\u8fd0\u884c\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u9996\u5148\u5b89\u88c5",(0,n.jsx)(r.code,{children:"gcc"})," \u548c ",(0,n.jsx)(r.code,{children:"make"}),"\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ yum install -y gcc gcc-c++ make\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u7136\u540e\u5728",(0,n.jsx)(r.code,{children:"~/helloworld-1.0"}),"\u76ee\u5f55\u4e2d\u6267\u884c",(0,n.jsx)(r.code,{children:"make"}),"\u547d\u4ee4\u884c\uff0c\u7f16\u8bd1\u6e90\u7801\u5e76\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6",(0,n.jsx)(r.code,{children:"helloworld"}),"\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ cd ~/helloworld-1.0\r\n$ make\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u7136\u540e\u6267\u884c",(0,n.jsx)(r.code,{children:"make install"}),"\uff0c\u5c06",(0,n.jsx)(r.code,{children:"helloworld"}),"\u53ef\u6267\u884c\u6587\u4ef6\u5b89\u88c5\u5230",(0,n.jsx)(r.code,{children:"/usr/local/bin"}),"\u76ee\u5f55\u4e0b\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ sudo make install\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6700\u540e\u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c",(0,n.jsx)(r.code,{children:"helloworld"}),"\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ helloworld\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5b83\u4f1a\u5728\u63a7\u5236\u53f0\u8f93\u51fa\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"\u4f60\u597d\uff0c\u4e16\u754c\uff01\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u6d4b\u8bd5\u5b8c\u6210\u540e\uff0c\u5e94\u6e05\u9664\u6784\u5efa\u6587\u4ef6\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ sudo rm -rf ~/helloworld-1.0/helloworld\r\n$ sudo rm -rf /usr/local/bin/helloworld\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"\u6253\u5305\u6211\u4eec\u7684\u7a0b\u5e8f",children:"\u6253\u5305\u6211\u4eec\u7684\u7a0b\u5e8f"}),"\n",(0,n.jsx)(r.p,{children:"\u73b0\u5728\uff0c\u6211\u4eec\u9a8c\u8bc1\u7a0b\u5e8f\u4e00\u5207\u6b63\u5e38\uff0c\u8ba9\u6211\u4eec\u4e3a\u5176\u521b\u5efa\u4e00\u4e2a RPM \u7a0b\u5e8f\u5305\u5427\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"1-\u538b\u7f29\u6e90\u6587\u4ef6",children:"1. \u538b\u7f29\u6e90\u6587\u4ef6"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ tar -czvf helloworld-1.0.tar.gz helloworld-1.0/\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u538b\u7f29\u5305\u540d\u79f0\u5728\u4e0b\u4e00\u4e2a\u6b65\u9aa4\u4e2d\u4f1a\u7528\u5230\u3002"}),"\n",(0,n.jsx)(r.h3,{id:"2-\u51c6\u5907\u6e90\u7801\u76ee\u5f55",children:"2. \u51c6\u5907\u6e90\u7801\u76ee\u5f55"}),"\n",(0,n.jsxs)(r.p,{children:["\u6784\u5efa\u5de5\u5177",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u53ef\u4ee5\u4f7f\u7528\u4ece URL \u6216\u8005\u672c\u5730\u6587\u4ef6\u83b7\u53d6\u5230\u7684\u6e90\u7801\u3002\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u672c\u5730\u7cfb\u7edf\u4e2d\u7684\u538b\u7f29\u5305\u6e90\u7801\u6587\u4ef6\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u4f1a\u4ece",(0,n.jsx)(r.code,{children:"~/rpmbuild/SOURCES"}),"\u76ee\u5f55\u4e2d\u68c0\u7d22\u6e90\u7801\u6587\u4ef6\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u5c06\u6e90\u7801\u538b\u7f29\u5305\u653e\u5230",(0,n.jsx)(r.code,{children:"SOURCES"}),"\u76ee\u5f55\u4e0b\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ cp helloworld-1.0.tar.gz ~/rpmbuild/SOURCES\n"})}),"\n",(0,n.jsx)(r.h3,{id:"3-\u521b\u5efa\u63cf\u8ff0\u6587\u4ef6",children:"3. \u521b\u5efa\u63cf\u8ff0\u6587\u4ef6"}),"\n",(0,n.jsxs)(r.p,{children:["\u63cf\u8ff0\uff08",(0,n.jsx)(r.code,{children:"SPEC"}),"\uff09\u6587\u4ef6\u5b9a\u4e49\u4e86",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u5982\u4f55\u6784\u5efa\u548c\u6253\u5305\u8f6f\u4ef6\u3002\u6211\u4eec\u7684\u8f6f\u4ef6\u662f\u4e00\u4e2a C \u7a0b\u5e8f\uff0c\u5fc5\u987b\u5c06\u5176\u7f16\u8bd1\u5e76\u590d\u5236\u5230\u76f8\u5e94\u7684\u76ee\u5f55\u4e2d\u4ee5\u8fdb\u884c\u5b89\u88c5\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u6211\u4eec\u5728",(0,n.jsx)(r.code,{children:"~"}),"\u76ee\u5f55\u4e0b\u521b\u5efa",(0,n.jsx)(r.code,{children:"helloworld.spec"}),"\u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u8f6f\u4ef6\u6253\u5305\u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-makefile",metastring:'title="~/helloworld.spec"',children:"Name: helloworld\r\nVersion: 1.0\r\nRelease: 1%{?dist}\r\nSummary: \u4e00\u4e2a\u4e16\u754c\u4f60\u597d\u7684\u7a0b\u5e8f\r\n\r\nLicense: GPLv3+\r\nPackager: \u6253\u5305\u4eba\r\nVendor: \u8f6f\u4ef6\u5f00\u53d1\u8005\u7684\u540d\u5b57\uff0c\u53d1\u884c\u5546\u6216\u6253\u5305\u7ec4\u7ec7\u7684\u4fe1\u606f\r\nSource0: helloworld-1.0.tar.gz\r\n\r\nRequires(post): info\r\nRequires(preun): info\r\n\r\n%description\r\n\u4e00\u4e2a\u4e16\u754c\u4f60\u597d\u7684\u5c0f\u7a0b\u5e8f\uff0c\u7528\u6765\u6f14\u793arpmbuild\u7684\u7528\u6cd5\r\n\r\n%prep\r\n%setup\r\n\r\n%build\r\nmake PREFIX=/usr %{?_smp_mflags}\r\n\r\n%install\r\nmake PREFIX=/usr DESTDIR=%{?buildroot} install\r\n\r\n%clean\r\nrm -rf %{buildroot}\r\n\r\n%files\r\n%{_bindir}/helloworld\n"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["\u53ef\u4ee5\u6253\u5f00",(0,n.jsx)(r.a,{href:"/docs/docs/other/rpm/rpm-spec",children:"RPM \u63cf\u8ff0\u6587\u4ef6"}),"\uff0c\u5b66\u4e60\u66f4\u591a SPEC \u6587\u4ef6\u7684\u8bed\u6cd5\u3002"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"4-\u4f7f\u7528-rpmbuild-\u6784\u5efa-rpm-\u5305",children:"4. \u4f7f\u7528 rpmbuild \u6784\u5efa RPM \u5305"}),"\n",(0,n.jsxs)(r.p,{children:["\u73b0\u5728\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u548c",(0,n.jsx)(r.code,{children:"helloworld.spec"}),"\u6587\u4ef6\uff0c\u6784\u5efa RPM \u5305\u4e86\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ rpmbuild -ba helloworld.spec\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"-ba"})," \u6807\u5fd7\u5c06\u6784\u5efa\u6e90\u6587\u4ef6 RPM \u5305\uff08.src.rpm\uff09\u548c\u4e8c\u8fdb\u5236 RPM \u5305\uff08.rpm\uff09\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u60a8\u5c06\u5728\u63a7\u5236\u53f0\u770b\u5230\u4e00\u5806\u6709\u7528\u7684\u8f93\u51fa\u3002\u5728\u63a7\u5236\u53f0\u7684\u6700\u540e\uff0c",(0,n.jsx)(r.code,{children:"rpmbuild"}),"\u4f1a\u5217\u51fa\u5b83\u521b\u5efa\u7684\u6587\u4ef6\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Wrote: /root/rpmbuild/SRPMS/helloworld-1.0-1.el7.src.rpm\r\nWrote: /root/rpmbuild/RPMS/x86_64/helloworld-1.0-1.el7.x86_64.rpm\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u73b0\u5728\u60a8\u53ef\u4ee5\u62f7\u8d1d\u8fd9\u4e9b rpm \u6587\u4ef6\u5230\u5176\u4ed6\u7684 Linux \u4e2d\u4f7f\u7528",(0,n.jsx)(r.code,{children:"rpm"}),"\u7a0b\u5e8f\u5b89\u88c5\u6b64\u5e94\u7528\u3002"]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"\u5b89\u88c5-rpm-\u8f6f\u4ef6\u5305",children:"\u5b89\u88c5 RPM \u8f6f\u4ef6\u5305"}),"\n",(0,n.jsxs)(r.p,{children:["\u5c06\u7f16\u8bd1\u5f97\u5230\u7684 rpm \u5305, \u62f7\u8d1d\u5230\u76ee\u6807\u673a\u5668\uff08\u4f8b\u5982\u62f7\u8d1d\u5230",(0,n.jsx)(r.code,{children:"~/helloworld-1.0-1.el7.x86_64.rpm"}),"\uff09\uff0c\u7136\u540e\u5b89\u88c5\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ rpm -ivh ~/helloworld-1.0-1.el7.x86_64.rpm\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5b89\u88c5\u5b8c\u6bd5\u540e\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u4ee5\u9a8c\u8bc1\u8f6f\u4ef6\u5305\u6b63\u5e38\u5de5\u4f5c\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ /usr/bin/helloworld\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u63a7\u5236\u53f0\u5c06\u4f1a\u8f93\u51fa\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"\u4f60\u597d\uff0c\u4e16\u754c\uff01\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u606d\u559c\u60a8\uff0c\u5b66\u4f1a\u4e86\u5236\u4f5c RPM \u8f6f\u4ef6\u5305\u7684\u6280\u80fd\u3002"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\uff0c\u7ecf\u5e38\u9047\u5230\u6253\u5305\u670d\u52a1\u5668\u662f x86 \u67b6\u6784\u7684\uff0c\u4f46\u662f\u5185\u7f51\u670d\u52a1\u5668\u5374\u4e0d\u662f x86 CPU \u67b6\u6784\u7684\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9700\u8981",(0,n.jsx)(r.a,{href:"/docs/docs/other/rpm/build-multi-architectural-rpm-packages",children:"\u5236\u4f5c\u591a\u67b6\u6784\u7684 RPM \u8f6f\u4ef6\u5305"}),"\u3002"]})]})}function p(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,r,l)=>{l.d(r,{R:()=>c,x:()=>i});var n=l(6540);const d={},s=n.createContext(d);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);