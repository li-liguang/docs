"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2929],{976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var l=s(4848),r=s(8453);const i={},a="Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4",d={id:"database/mysql/Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4",title:"Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4",description:"mysql\u4e0b\u8f7d\u5730\u5740\uff1ahttps://dev.mysql.com/downloads/mysql/5.7.html#downloads",source:"@site/docs/database/2-mysql/1-Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4.md",sourceDirName:"database/2-mysql",slug:"/database/mysql/Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4",permalink:"/docs/docs/database/mysql/Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/2-mysql/1-Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"dbSidebar",previous:{title:"SQL\u6ce8\u5165",permalink:"/docs/docs/database/otherconfig"},next:{title:"\u521b\u5efa\u7528\u6237\u6388\u6743\u5e38\u89c1\u95ee\u9898",permalink:"/docs/docs/database/mysql/mysql"}},t={},c=[{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"1.\u521b\u5efa\u8def\u5f84",id:"1\u521b\u5efa\u8def\u5f84",level:3},{value:"2.\u4e0a\u4f20\u5b89\u88c5\u5305\u5e76\u89e3\u538b",id:"2\u4e0a\u4f20\u5b89\u88c5\u5305\u5e76\u89e3\u538b",level:3},{value:"3.\u521b\u5efa\u670d\u52a1\u5668mysql\u7528\u6237\u53ca\u7fa4\u7ec4",id:"3\u521b\u5efa\u670d\u52a1\u5668mysql\u7528\u6237\u53ca\u7fa4\u7ec4",level:3},{value:"4.\u4fee\u6539\u6587\u4ef6\u5939\u6743\u9650",id:"4\u4fee\u6539\u6587\u4ef6\u5939\u6743\u9650",level:3},{value:"5.\u5b89\u88c5libaio\u4f9d\u8d56\u5305",id:"5\u5b89\u88c5libaio\u4f9d\u8d56\u5305",level:3},{value:"6.\u521d\u59cb\u5316mysql",id:"6\u521d\u59cb\u5316mysql",level:3},{value:"7.\u4fee\u6539mysql\u914d\u7f6e\u6587\u4ef6",id:"7\u4fee\u6539mysql\u914d\u7f6e\u6587\u4ef6",level:3},{value:"8.\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",id:"8\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",level:3},{value:"9.\u542f\u52a8mysql",id:"9\u542f\u52a8mysql",level:3},{value:"10.\u767b\u5f55mysql",id:"10\u767b\u5f55mysql",level:3},{value:"11.\u4fee\u6539root\u521d\u59cb\u5316\u5bc6\u7801",id:"11\u4fee\u6539root\u521d\u59cb\u5316\u5bc6\u7801",level:3},{value:"12.\u521b\u5efamysql\u7528\u6237",id:"12\u521b\u5efamysql\u7528\u6237",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"linux\u5b89\u88c5mysql\u8be6\u7ec6\u6b65\u9aa4",children:"Linux\u5b89\u88c5MySql\u8be6\u7ec6\u6b65\u9aa4"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["mysql\u4e0b\u8f7d\u5730\u5740\uff1a",(0,l.jsx)(n.a,{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",children:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads"})]}),"\n",(0,l.jsx)(n.p,{children:"mysql\u7248\u672c\uff1amysql-5.7.26-linux-glibc2.12-x86_64.tar.gz"}),"\n",(0,l.jsx)(n.p,{children:"mysql\u5b89\u88c5\u4f4d\u7f6e\uff1a/software/mysql"}),"\n",(0,l.jsx)(n.p,{children:"\u6570\u636e\u5e93\u6587\u4ef6\u6570\u636e\u4f4d\u7f6e\uff1a/data/mysql"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5b89\u88c5\u6b65\u9aa4",children:"\u5b89\u88c5\u6b65\u9aa4"}),"\n",(0,l.jsx)(n.h3,{id:"1\u521b\u5efa\u8def\u5f84",children:"1.\u521b\u5efa\u8def\u5f84"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#mkdir /software/\r\n#mkdir /data/mysql\n"})}),"\n",(0,l.jsx)(n.h3,{id:"2\u4e0a\u4f20\u5b89\u88c5\u5305\u5e76\u89e3\u538b",children:"2.\u4e0a\u4f20\u5b89\u88c5\u5305\u5e76\u89e3\u538b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u5b89\u88c5\u6587\u4ef6\uff08mysql-5.7.26-linux-glibc2.12-x86_64.tar.gz\uff09\u4e0a\u4f20\u5230\u8def\u5f84",(0,l.jsx)(n.code,{children:"/software/"}),"\u4e0b\uff0c\u5e76\u89e3\u538b"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#cd /software/\r\n#tar -zxvf mysql-5.7.26-linux-glibc2.12-x86_64.tar.gz\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\u540d\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#mv /software/mysql-5.7.26-linux-glibc2.12-x86_64/ /software/mysql\n"})}),"\n",(0,l.jsx)(n.h3,{id:"3\u521b\u5efa\u670d\u52a1\u5668mysql\u7528\u6237\u53ca\u7fa4\u7ec4",children:"3.\u521b\u5efa\u670d\u52a1\u5668mysql\u7528\u6237\u53ca\u7fa4\u7ec4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#groupadd mysql\r\n#useradd -g mysql mysql\r\n##\u5173\u8054mysql\u7528\u6237\u5230mysql\u7528\u6237\u7ec4\u4e2d\r\n#chown -R mysql:mysql /software/mysql/\r\n#chown -R mysql:mysql /data/mysql/\r\n#chown -R mysql /software/mysql/\r\n#chown -R mysql /data/mysql/\n"})}),"\n",(0,l.jsx)(n.h3,{id:"4\u4fee\u6539\u6587\u4ef6\u5939\u6743\u9650",children:"4.\u4fee\u6539\u6587\u4ef6\u5939\u6743\u9650"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#chmod -R 755 /software/mysql/\n"})}),"\n",(0,l.jsx)(n.h3,{id:"5\u5b89\u88c5libaio\u4f9d\u8d56\u5305",children:"5.\u5b89\u88c5libaio\u4f9d\u8d56\u5305"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"##\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u5b89\u88c5\r\n#yum search libaio\r\n##\u5982\u679c\u6ca1\u6709\u5b89\u88c5\uff0c\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u5b89\u88c5\r\n#yum install libaio\n"})}),"\n",(0,l.jsx)(n.h3,{id:"6\u521d\u59cb\u5316mysql",children:"6.\u521d\u59cb\u5316mysql"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#cd /software/mysql/bin\r\n#./mysqld --user=mysql --basedir=/software/mysql --datadir=/data/mysql --initialize\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u6267\u884c\u521d\u59cb\u5316\u547d\u4ee4\u540e\uff0c\u6ce8\u610f\u4e00\u884c\u5185\u5bb9\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"[Note] A temporary password is generated for root@localhost:o*s#ggh)F4Ck\n"})}),"\n",(0,l.jsx)(n.p,{children:"root@localhost\uff1a\u540e\u9762\u7684\u5b57\u7b26\u4e32\uff08o*s#ggh)F4Ck\uff09\u662f\u6570\u636e\u5e93root\u7528\u6237\u7684\u521d\u59cb\u5316\u5bc6\u7801"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u521d\u59cb\u5316\u62a5\u9519\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"error while loading shared libraries:libnuma.so.1:cannot open shared objec\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u662f\u56e0\u4e3alibnuma\u5b89\u88c5\u7684\u662f32\u4f4d\u7684\uff0c\u6211\u4eec\u8fd9\u91cc\u9700\u898164\u4f4d\u7684\uff0c\u6b64\u65f6\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u540e\uff0c\u91cd\u65b0\u521d\u59cb\u5316\u5373\u53ef\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#yum install numactl.x86_64\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"7\u4fee\u6539mysql\u914d\u7f6e\u6587\u4ef6",children:"7.\u4fee\u6539mysql\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u8def\u5f84"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#vim /software/mysql/support-files/mysql.server\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u524d\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'if test -z "$basedir"\r\nthen\r\nbasedir=/usr/local/mysql\r\nbindir=/usr/local/mysql/bin\r\nif test -z "$datadir"\r\nthen\r\ndatadir=/usr/local/mysql/data\r\nfi\r\nsbindir=/usr/local/mysql/bin\r\nlibexecdir=/usr/local/mysql/bin\r\nelse\r\nbindir="$basedir/bin"\r\nif test -z "$datadir"\r\nthen\r\ndatadir="$basedir/data"\r\nfi\r\nsbindir="$basedir/sbin"\r\nlibexecdir="$basedir/libexec"\r\nfi\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u540e\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'if test -z "$basedir"\r\nthen\r\nbasedir=/software/mysql\r\nbindir=/software/mysql/bin\r\nif test -z "$datadir"\r\nthen\r\ndatadir=/data/mysql\r\nfi\r\nsbindir=/software/mysql/bin\r\nlibexecdir=/software/mysql/bin\r\nelse\r\nbindir="$basedir/bin"\r\nif test -z "$datadir"\r\nthen\r\ndatadir="$basedir/data"\r\nfi\r\nsbindir="$basedir/sbin"\r\nlibexecdir="$basedir/libexec"\r\nfi\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4fdd\u5b58\u5e76\u9000\u51fa"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#cp /software/mysql/support-files/mysql.server  /etc/init.d/mysqld\r\n#chmod 755 /etc/init.d/mysqld\n"})}),"\n",(0,l.jsx)(n.h3,{id:"8\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6",children:"8.\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#vim /etc/my.cnf\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5c06\u4e00\u4e0b\u5185\u5bb9\u590d\u5236\u66ff\u6362\u539f\u672c\u7684\u5185\u5bb9\uff0c\u7136\u540e\u4fdd\u5b58\u9000\u51fa"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"[client]\r\nno-beep\r\nsocket =/software/mysql/mysql.sock\r\n# pipe\r\n# socket=0.0\r\nport=3306\r\n[mysql]\r\ndefault-character-set=utf8\r\n[mysqld]\r\nbasedir=/software/mysql\r\ndatadir=/data/mysql\r\nport=3306\r\npid-file=/software/mysql/mysqld.pid\r\n#skip-grant-tables\r\nskip-name-resolve\r\nsocket = /software/mysql/mysql.sock\r\ncharacter-set-server=utf8\r\ndefault-storage-engine=INNODB\r\nexplicit_defaults_for_timestamp = true\r\n# Server Id.\r\nserver-id=1\r\nmax_connections=2000\r\nquery_cache_size=0\r\ntable_open_cache=2000\r\ntmp_table_size=246M\r\nthread_cache_size=300\r\n#\u9650\u5b9a\u7528\u4e8e\u6bcf\u4e2a\u6570\u636e\u5e93\u7ebf\u7a0b\u7684\u6808\u5927\u5c0f\u3002\u9ed8\u8ba4\u8bbe\u7f6e\u8db3\u4ee5\u6ee1\u8db3\u5927\u591a\u6570\u5e94\u7528\r\nthread_stack = 192k\r\nkey_buffer_size=512M\r\nread_buffer_size=4M\r\nread_rnd_buffer_size=32M\r\ninnodb_data_home_dir = /data/mysql\r\ninnodb_flush_log_at_trx_commit=0\r\ninnodb_log_buffer_size=16M\r\ninnodb_buffer_pool_size=256M\r\ninnodb_log_file_size=128M\r\ninnodb_thread_concurrency=128\r\ninnodb_autoextend_increment=1000\r\ninnodb_buffer_pool_instances=8\r\ninnodb_concurrency_tickets=5000\r\ninnodb_old_blocks_time=1000\r\ninnodb_open_files=300\r\ninnodb_stats_on_metadata=0\r\ninnodb_file_per_table=1\r\ninnodb_checksum_algorithm=0\r\nback_log=80\r\nflush_time=0\r\njoin_buffer_size=128M\r\nmax_allowed_packet=1024M\r\nmax_connect_errors=2000\r\nopen_files_limit=4161\r\nquery_cache_type=0\r\nsort_buffer_size=32M\r\ntable_definition_cache=1400\r\nbinlog_row_event_max_size=8K\r\nsync_master_info=10000\r\nsync_relay_log=10000\r\nsync_relay_log_info=10000\r\n#\u6279\u91cf\u63d2\u5165\u6570\u636e\u7f13\u5b58\u5927\u5c0f\uff0c\u53ef\u4ee5\u6709\u6548\u63d0\u9ad8\u63d2\u5165\u6548\u7387\uff0c\u9ed8\u8ba4\u4e3a8M\r\nbulk_insert_buffer_size = 64M\r\ninteractive_timeout = 120\r\nwait_timeout = 120\r\nlog-bin-trust-function-creators=1\r\nsql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\r\n\r\n#\r\n# include all files from the config directory\r\n#\r\n!includedir /etc/my.cnf.d\n"})}),"\n",(0,l.jsx)(n.h3,{id:"9\u542f\u52a8mysql",children:"9.\u542f\u52a8mysql"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#/etc/init.d/mysqld start\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u7248\u672c\u7684\u5b89\u88c5\u5305\u4f1a\u62a5\u9519\uff0c\u62a5\u9519\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"Starting MySQL.Logging to '/data/mysql/SZY.err'.\r\n2018-07-02T10:09:03.779928Z mysqld_safe The file /usr/local/mysql/bin/mysqld\r\ndoes not exist or is not executable. Please cd to the mysql installation\r\ndirectory and restart this script from there as follows:\r\n./bin/mysqld_safe&\r\nSee http://dev.mysql.com/doc/mysql/en/mysqld-safe.html for more information\r\nERROR! The server quit without updating PID file (/software/mysql/mysqld.pid).\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u4e3a\u65b0\u7248\u672c\u7684mysql\u5b89\u5168\u542f\u52a8\u5b89\u88c5\u5305\u53ea\u8ba4",(0,l.jsx)(n.code,{children:"/usr/local/mysql"}),"\u8fd9\u4e2a\u8def\u5f84\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6cd5\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"1.\u5efa\u7acb\u8f6f\u8fde\u63a5"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#cd /usr/local/mysql\r\n#ln -s /sofware/mysql/bin/myslqd mysqld\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["2.\u4fee\u6539",(0,l.jsx)(n.code,{children:"mysqld_safe"}),"\u6587\u4ef6"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"# vim /software/mysql/bin/mysqld_safe\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u6587\u4ef6\u4e2d\u6240\u6709\u7684",(0,l.jsx)(n.code,{children:"/usr/local/mysql"}),"\u6539\u4e3a",(0,l.jsx)(n.code,{children:"/software/mysql"}),"\uff0c\u4fdd\u5b58\u540e\u9000\u51fa\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"10\u767b\u5f55mysql",children:"10.\u767b\u5f55mysql"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"#/software/mysql/bin/mysql -u root \u2013p\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8f93\u5165\u4e34\u65f6\u5bc6\u7801\uff08\u7b2c6\u6b65\u521d\u59cb\u5316\u65f6\u751f\u6210\u7684\u5bc6\u7801\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"11\u4fee\u6539root\u521d\u59cb\u5316\u5bc6\u7801",children:"11.\u4fee\u6539root\u521d\u59cb\u5316\u5bc6\u7801"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"set password=password('root');\r\n\r\ngrant all privileges on *.* to root@'%' identified by 'root';\r\n\r\nflush privileges;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4fee\u6539\u5b8c\u6210\u4e4b\u540e\uff0c",(0,l.jsx)(n.code,{children:"root"}),"\u7528\u6237\u7684\u65b0\u5bc6\u7801\u662f",(0,l.jsx)(n.code,{children:"root"})]}),"\n",(0,l.jsx)(n.h3,{id:"12\u521b\u5efamysql\u7528\u6237",children:"12.\u521b\u5efamysql\u7528\u6237"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"create user 'tjxmim'@'%' identified by 'password';\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5220\u9664\u7528\u6237"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP USER 'tjxmim'@'%';\r\n\r\n-- \u521b\u5efa\u6570\u636e\u5e93\r\nCREATE DATABASE IF NOT EXISTS tjxmimdb\r\n-- \u8bbe\u7f6e\u5b57\u7b26\u96c6\r\nDEFAULT CHARACTER SET utf8\r\n-- \u8bbe\u7f6e\u6821\u5bf9\u89c4\u5219\r\nDEFAULT COLLATE utf8_general_ci;\r\n\r\n\r\n--\u6388\u4e88\u7528\u6237test\u901a\u8fc7\u5916\u7f51IP\u5bf9\u6570\u636e\u5e93\u201ctestdb\u201d\u7684\u5168\u90e8\u6743\u9650\r\ngrant all privileges on tjxmimdb.* to 'tjxmim'@'%' identified by 'password';  \r\n--\u5237\u65b0\u6743\u9650\r\nflush privileges;\r\n\r\n--\u6388\u4e88\u7528\u6237\u201ctest\u201d\u901a\u8fc7\u5916\u7f51IP\u5bf9\u4e8e\u8be5\u6570\u636e\u5e93\u201ctestdb\u201d\u4e2d\u8868\u7684\u521b\u5efa\u3001\u4fee\u6539\u3001\u5220\u9664\u6743\u9650,\u4ee5\u53ca\u8868\u6570\u636e\u7684\u589e\u5220\u67e5\u6539\u6743\u9650\r\ngrant create,alter,drop,select,insert,update,delete on tjxmimdb.* to tjxmim@'%';\t\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var l=s(6540);const r={},i=l.createContext(r);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);