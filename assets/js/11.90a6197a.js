(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{490:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本篇博客主借助Cloud研习社文章，对之前的命令学习进行总结与补充")]),s._v(" "),a("h1",{attrs:{id:"linux命令完善-结合微信公众号cloud研习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux命令完善-结合微信公众号cloud研习"}},[s._v("#")]),s._v(" Linux命令完善-结合微信公众号Cloud研习")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg2MTU4OTA1Nw==&action=getalbum&album_id=2392273590328016900&scene=173&from_msgid=2247483865&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[s._v("Cloud研习"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"防火墙相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙相关"}},[s._v("#")]),s._v(" 防火墙相关")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl status firewalld\t/\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables status "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#状态")]),s._v("\n\nsystemctl disable firewalld  /\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables off "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久关闭 开机禁用")]),s._v("\n\nsystemctl stop firewalld\t/\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" iptables off "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单次关闭 开启：start/on")]),s._v("\n\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" firewalld\t/\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启")]),s._v("\n")])])]),a("h2",{attrs:{id:"日期、日历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期、日历"}},[s._v("#")]),s._v(" 日期、日历")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2023年 04月 06日 星期四 19:58:07 CST")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自己看")]),s._v("\n")])])]),a("p",[s._v("日历")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cal")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当月、近三月")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Sunday，星期天作为每周的第一天")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Monday，星期一作为每周的第一天")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当年")]),s._v("\n")])])]),a("h2",{attrs:{id:"快捷键-随时补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快捷键-随时补充"}},[s._v("#")]),s._v(" 快捷键（随时补充）")]),s._v(" "),a("p",[a("code",[s._v("ctrl + d")]),s._v(" 推出当前会话，关闭命令行")]),s._v(" "),a("h2",{attrs:{id:"命令使用方法查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令使用方法查找"}},[s._v("#")]),s._v(" 命令使用方法查找")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"linux目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux目录结构"}},[s._v("#")]),s._v(" linux目录结构")]),s._v(" "),a("div",{staticClass:"language-basic extra-class"},[a("pre",{pre:!0,attrs:{class:"language-basic"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 根目录  即所有目录的顶点；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin   存放必要的命令；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("boot   存放内核以及启动所需的文件；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev   存放硬件设备文件；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc   存放系统配置文件；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" hosts："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" information about host names "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("主机名与"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("IP")]),s._v("绑定信息 （文件）\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" issue ：pre"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("login message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" identification file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("预登录消息和标识文件\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" motd：post"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("login message "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("of")]),s._v(" the day file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" profile：systemwide initialization file "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" sh "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("shell")]),s._v(" logins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("用于sh "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("shell")]),s._v("登录的系统范围初始化文件\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" resolv.conf ：resolver configuration file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dns域名服务器绑定\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home     普通用户的宿主目录，用户数据存放在其主目录中；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib|lib64     存放必要的运行库；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mnt     存放临时的映射文件系统，通常用来挂载使用；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("proc     存放存储进程和系统信息；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root     超级用户的主目录；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin     存放系统管理程序；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp     存放临时文件；\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr     存放应用程序，命令程序文件、程序库、手册和其它文档； `不是user！`\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var     系统默认日志存放目录。\n")])])]),a("h2",{attrs:{id:"网络配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络配置"}},[s._v("#")]),s._v(" 网络配置")]),s._v(" "),a("blockquote",[a("p",[s._v("1.切到指定网卡名称的配置文件")]),s._v(" "),a("p",[a("code",[s._v("vi /etc/sysconfig/network-scripts/ifcfg-ens33")])])]),s._v(" "),a("h3",{attrs:{id:"dhcp配置-下的配置文件详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dhcp配置-下的配置文件详解"}},[s._v("#")]),s._v(" ==DHCP配置==下的配置文件详解：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\t  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网卡类型为以太网")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROXY_METHOD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理方式")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BROWSER_ONLY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  只是浏览器：否")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dhcp\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网卡协议")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#默认路由：是  ")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV4_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  是否开启IPV4致命错误检测：否")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6INIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  IPV6初始化: 是")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_AUTOCONF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  IPV6是否自动配置：是")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_DEFROUTE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  IPV6 默认路由：是  ")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_FAILURE_FATAL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  是否开启IPV6致命错误检测：否")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV6_ADDR_GEN_MODE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stable-privacy\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  IPV6地址生成模型  stable-privacy:一种生成IPV6的策略")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ens33\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  网卡名称")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6f745d7f-84ba-4d80-9b6e-b89909e15e96\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  唯一标识码")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ens33\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  网卡设备名称")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  在开机或重启时是否启动网卡")]),s._v("\n\n")])])]),a("p",[s._v("dhcp改手配需要注意的配置项：")]),s._v(" "),a("p",[a("code",[s._v("BOOTPROTO")])]),s._v(" "),a("p",[a("strong",[s._v("#  网卡协议 获取网卡IP的方式")]),s._v(" "),a("strong",[s._v("#  dhcp：   动态主机配置协议")]),s._v(" "),a("strong",[s._v("#  static：  手动配置固定IP")]),s._v(" "),a("strong",[s._v("#  none：   手动配置固定IP")])]),s._v(" "),a("h3",{attrs:{id:"手配ip新增项-bootproto-static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手配ip新增项-bootproto-static"}},[s._v("#")]),s._v(" 手配ip新增项（BOOTPROTO=static）")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\t "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".86.111\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主机ip")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#子网掩码")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".86.2\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网关")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#DNS")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网络位24")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"重启网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启网络"}},[s._v("#")]),s._v(" 重启网络")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])])]),a("h3",{attrs:{id:"排障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排障"}},[s._v("#")]),s._v(" 排障")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rn")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由中的网关设置，检查默认网关有无配置")]),s._v("\n \n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".86.2    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0         UG        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ens33\n \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". /etc/resolv.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dns检查 centos先会读取resolv中的dns配置，无法解析再读取ifcfg中的配置")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"默认路由直接写配置-重启有效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认路由直接写配置-重启有效"}},[s._v("#")]),s._v(" 默认路由直接写配置（重启有效）")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/static-routes\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接新建")]),s._v("\n\nany net default gw "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".129.2\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加网关地址")]),s._v("\n")])])]),a("h3",{attrs:{id:"resolv-conf重启被刷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolv-conf重启被刷"}},[s._v("#")]),s._v(" resolv.conf重启被刷")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" NetworkManager stop "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭manager进程")]),s._v("\n")])])]),a("h2",{attrs:{id:"tree树状文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree树状文件结构"}},[s._v("#")]),s._v(" tree树状文件结构")]),s._v(" "),a("p",[s._v("没有需要install")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tree "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n-a:     显示所有文件和目录\n-C:     给文件、目录加上不同的色彩，便于观察区分不同的类型\n-d:     只显示目录，不显示文件\n-L:     层级显示 只显示两层子目录结构\n-t:     按更改时间排序\n")])])]),a("h2",{attrs:{id:"全局环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局环境变量"}},[s._v("#")]),s._v(" 全局环境变量")]),s._v(" "),a("p",[a("code",[s._v("echo $OATH")]),s._v(" 输出系统环境变量")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v(":/root "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新增环境变量，在root目录下的所有文件都可被全局读取")]),s._v("\n")])])]),a("h2",{attrs:{id:"ls-深入学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ls-深入学习"}},[s._v("#")]),s._v(" ls 深入学习")]),s._v(" "),a("h3",{attrs:{id:"_1-命令可实现的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令可实现的功能"}},[s._v("#")]),s._v(" 1.命令可实现的功能")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("目录名或文件名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#结合添加选项的不同进行不同功能的查找")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("  表示需要列出全部文件\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("  表示列出目录本身，而不是列出目录内的文件和子目录 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看该目录自身的详细信息 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("  列出详细信息\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("  把文件大小自动显示为以GB、MB、KB为单位\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v("  （大写S）以文件大小排序\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("  按照文件修改时间排序\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("\t回显inode号\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -R：递归显示 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个没见过")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-命令回显解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令回显解释"}},[s._v("#")]),s._v(" 2.命令回显解释")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("-rwxrwxrwx. "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" wdd  wdd     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("月   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":27 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".c\n")])])]),a("p",[s._v("rwx 就是读、写、执行三个权限 顺序为文件所有者、文件所有者同组用户和其他用户")]),s._v(" "),a("p",[a("strong",[s._v("rwx之前的东东")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("● 当为"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("则是目录\n● 当为"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("则是文件；\n● 若是"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("则表示为链接文档"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("link "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；\n● 若是"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("则表示为装置文件里面的可供储存的接口设备"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("可随机存取装置"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("；\n● 若是"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("则表示为装置文件里面的串行端口设备，例如键盘、鼠标"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("一次性读取装置"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n")])])]),a("p",[s._v("一般就是"),a("code",[s._v("-")]),s._v("表示具体文件，"),a("code",[s._v("d")]),s._v("表示目录信息，这两个较为常用。")]),s._v(" "),a("p",[a("strong",[s._v("权限之后")]),s._v(" 就是所对应的软连接数量（链接数）")]),s._v(" "),a("p",[a("strong",[s._v("文件所有者名称")]),s._v(" "),a("strong",[s._v("文件组名称")]),s._v(" "),a("strong",[s._v("文件大小")]),s._v(" "),a("strong",[s._v("文件创建时间")]),s._v(" "),a("strong",[s._v("文件名称")])]),s._v(" "),a("h2",{attrs:{id:"cp文件复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp文件复制"}},[s._v("#")]),s._v(" CP文件复制")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 源文件目标文件\n\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v("  复制后的文件保留原文件的属性\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("  如果原文件是链接文件，则只复制链接文件而不是复制它指向的实体文件\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("  用来复制目录（复制目录的时候必须加上）\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v("  如果目标文件已经存在，询问是否覆盖\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("  相当于pdr。这个参数常用\n")])])]),a("p",[s._v("常用参数：")]),s._v(" "),a("p",[a("code",[s._v("-r\t -a")])]),s._v(" "),a("p",[s._v("针对目录的完全复制以及（保留原文件属性、只复制链接文件的链接性质、针对目录直接复制）")]),s._v(" "),a("h1",{attrs:{id:"rm删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rm删除"}},[s._v("#")]),s._v(" rm删除")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件或目录\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("  rm删除文件或目录，默认会提示你是否确认删除，加上-f选项就不会提示了，rm会直接删除\n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("  删除目录时必须加上，用来递归删除目录下面的文件和子目录。生产中慎用！\n")])])]),a("h2",{attrs:{id:"mv移动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mv移动"}},[s._v("#")]),s._v(" mv移动")]),s._v(" "),a("blockquote",[a("p",[s._v("对于同一目录下就是重命名的作用，对于不同目录就是剪切粘贴")])]),s._v(" "),a("h2",{attrs:{id:"cat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[s._v("#")]),s._v(" cat")]),s._v(" "),a("p",[a("code",[s._v("cat -n")]),s._v("显示行号 或者直接用 "),a("code",[s._v("nl")])]),s._v(" "),a("p",[a("code",[s._v("tac")]),s._v("  自下而上显示内容")]),s._v(" "),a("p",[a("code",[s._v("more")]),s._v(" 用于"),a("strong",[s._v("显示较大文件")]),s._v("，可分页显示")]),s._v(" "),a("p",[a("strong",[s._v("==less==:")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pagedown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：向下翻动一页；\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pageup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ：向上翻动一页；\n\n空格键  ：向下翻动一页；\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找功能")]),s._v("\n/键   ：向下查找字符串；\n?键   ：向上查找字符串；\nn键     ：重复前一个搜寻 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("与 / 或 ? 有关！"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nN键    ：反向的重复前一个搜寻 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("与 / 或 ? 有关！"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nq键     ：离开 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" 这个程序；\n")])])]),a("p",[a("strong",[s._v("head")])]),s._v(" "),a("p",[s._v("查看文件开始指定行（默认10行）")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" num 文件名\n")])])]),a("p",[s._v("=="),a("strong",[s._v("tail")]),s._v("==")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件名 \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#读取文件尾对应行数的内容")]),s._v("\n")])])]),a("p",[s._v("很牛逼的功能：")]),s._v(" "),a("p",[a("code",[s._v("tail [-f] 文件名")])]),s._v(" "),a("p",[s._v("-f参数相同的会将文件尾的10行回显，其次会持续监听文件读取状态，"),a("strong",[s._v("将新增内容不断回显至screen（日志监控）")])]),s._v(" "),a("blockquote",[a("p",[s._v("但是有个bug：针对字母h（大小）都会不显示 只能使用转义 "),a("strong",[s._v("\\H")])]),s._v(" "),a("p",[s._v("才会显示。 （因该是xshell的锅（可能zsh的shell有病。。），和tail没关系）")])]),s._v(" "),a("h2",{attrs:{id:"查找find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找find"}},[s._v("#")]),s._v(" 查找find")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("被查找的对象"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"可选参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选参数"}},[s._v("#")]),s._v(" 可选参数：")]),s._v(" "),a("div",{staticClass:"language-yacas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-name：按名字查找\t加*代表以[]*开头的所有文件\n-iname 忽略大小写的按名字查找 \n-inum inode查询\n\t\t\t\t-type f：只查找文件（常用）、\n\t\t\t \t\t  d：只查找目录（常用）\n            \t\t  s：查找socket文件\n             \t\t  c：查找字符设备文件\n")])])]),a("h3",{attrs:{id:"直接用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接用"}},[s._v("#")]),s._v(" 直接用")]),s._v(" "),a("div",{staticClass:"language-yacas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("find / -name jason -exec ls -l {} \\;\n\n-exec 对查找到的结果进行处理\n\n{}处理结果返回列表\t\\; exec的结尾分号进行转义\n")])])]),a("div",{staticClass:"language-yacas extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("find /home -type f -mtime +7\n近7天修改文件查询\n\n-mtime n：查找修改时间在距离现在第4天\n+n：查找4天前及更久以前被访问过的\n-n：查找最近4天被访问过的\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);