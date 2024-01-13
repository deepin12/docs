import{_ as n,D as h,c as p,I as a,w as t,U as e,m as l,a as s,o as r}from"./chunks/framework.-9Q_U4ls.js";const H=JSON.parse('{"title":"rootfs进入MATE桌面后打开终端不能执行reboot指令根因分析","description":"","frontmatter":{},"headers":[],"relativePath":"技术文档/根因分析/rootfs进入MATE桌面后打开终端不能执行reboot指令根因分析.md","filePath":"技术文档/根因分析/rootfs进入MATE桌面后打开终端不能执行reboot指令根因分析.md","lastUpdated":1705116614000}'),o={name:"技术文档/根因分析/rootfs进入MATE桌面后打开终端不能执行reboot指令根因分析.md"},d=e("",3),k=e("",16),c=e("",9),b=e("",3),g=e("",9),E=l("p",null,[s("​ 阅读bash man手册以及shell相关资料，得知直接启动终端执行命令的方式为非登录式（no-login shell）、交互式（interactive shell）行为。如表3 shell启动方式介绍，该行为下不会去运行任何profile和rc文件，只有登录式（login shell）会在登录时自动执行"),l("code",null,"/etc/profile"),s("和"),l("code",null,"~/.profile"),s("文件。从此处分析，无法使用reboot等命令属于正常情况。")],-1),u=e("",12),F=e("",7),y=l("p",null,"​ 继续边缘验证，该方式虽然可以解决此问题，但是存在不足，当在同一个终端中再次登录一个用户或者以登录方式打开shell，由于系统会自动先加载/etc/profile，然后再加载/etc/bash.bashrc ，所以导致变量值重复。如图6：",-1),_=l("p",null,"![](/data/图6 自动加载环境变量-2.png)",-1),A=e("",19),C=e("",16);function f(T,P,D,m,B,q){const i=h("center");return r(),p("div",null,[d,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("表1 相关术语")]),_:1}),k,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("图1 问题现象")]),_:1}),c,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("表2 环境变量说明")]),_:1}),b,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("图2 环境变量加载流程")]),_:1}),g,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("图3 调试详情")]),_:1}),E,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("表3 shell启动方式")]),_:1}),u,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("图4 手动补全环境变量")]),_:1}),F,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("图5 自动加载环境变量-1")]),_:1}),y,_,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("图6 自动加载环境变量-2")]),_:1}),A,a(i,{style:{color:"#C0C0C0"}},{default:t(()=>[s("表4 解决方案对比")]),_:1}),C])}const x=n(o,[["render",f]]);export{H as __pageData,x as default};
