(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{492:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本篇博客主要是对Linux中常见Shell编写的总结")]),s._v(" "),a("h1",{attrs:{id:"linux-shell基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-shell基础"}},[s._v("#")]),s._v(" Linux-Shell基础")]),s._v(" "),a("h2",{attrs:{id:"初始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始使用"}},[s._v("#")]),s._v(" 初始使用")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 1.sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#echo "helloworld"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# BianLiang ShenMing")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("wiseman")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wangdengdeng 变量赋值\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" wiseman 撤销赋值\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jing tai bian liang -> readonly 静态变量，不可unset撤销")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("shit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("goushi \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#quan ju bian liang -> export 全局变量")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $n ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $0 -> jiaoben's name 0为sh名称")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $1-9 -> 1-9 CanShu 1-9的为参数值")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10>> -> eg: ${10} 超过10的需要加{}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $0 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $1 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ShuChu CanShu's count 参数的个数统计")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CanShu ZhengTi Hua 参数整体化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$*")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 2.sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SuoYou Canshu but Bushi Zhengti 所有参数但是不是整体")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $@")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Jiancha Zuihou Mingling Zhixing Return Status / 0 ->right  not0 -> error / used in Minglinghang 检查上次命令是否执行正确，用于命令行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算"}},[s._v("#")]),s._v(" 运算")]),s._v(" "),a("p",[a("strong",[s._v("==只有expr能用不加括号写法，且必须空格！！！==")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# YunSuan  四则运算")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $((255+233))")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo $[1+2]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须空格 除法是向下取整")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"条件判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断"}},[s._v("#")]),s._v(" 条件判断")]),s._v(" "),a("h3",{attrs:{id:"写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写法"}},[s._v("#")]),s._v(" 写法")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" condition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 条件前后必须有空格")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#条件正误： 可以 $? 执行正确（条件成立）返回0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#结合管道符判断  [ condition ] && echo "True"')]),s._v("\n")])])]),a("h4",{attrs:{id:"管道符复习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管道符复习"}},[s._v("#")]),s._v(" 管道符复习")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("命令")]),s._v(" "),a("th",[s._v("连接符解释")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("c1 & c2")]),s._v(" "),a("td",[s._v("1和2同时执行，==不论1的真假==，并返回所有结果")])]),s._v(" "),a("tr",[a("td",[s._v("c1 && c2")]),s._v(" "),a("td",[s._v("先执行1，1为真再执行2，并返回所有结果,"),a("strong",[s._v("若1为假")]),s._v("，返回1的错误信息，不执行2")])]),s._v(" "),a("tr",[a("td",[s._v("c1 | c2")]),s._v(" "),a("td",[s._v("不管1的真假，只会执行2，返回2的信息，2错误无回显")])]),s._v(" "),a("tr",[a("td",[s._v("c1 || c2")]),s._v(" "),a("td",[s._v("1，2都真，"),a("strong",[s._v("返回1")]),s._v("，==1假，执行2==，返回1的错误信息")])]),s._v(" "),a("tr",[a("td",[s._v("c1；c2")]),s._v(" "),a("td",[s._v("先1后2，1错误执行2，都会返回 ==Linux==")])])])]),s._v(" "),a("h3",{attrs:{id:"整数比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数比较"}},[s._v("#")]),s._v(" 整数比较")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 字符串比较 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# eg: [ shit = she ]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lt")]),s._v(" 小于（less than）\t\t\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-le")]),s._v(" 小于等于（less equal）\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" 等于（equal）\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-gt")]),s._v(" 大于（greater than）\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ge")]),s._v(" 大于等于（greater equal）\t    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ne")]),s._v(" 不等于（Not equal）\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#eg: [ 23 -gt 1 ]")]),s._v("\n")])])]),a("h3",{attrs:{id:"文件判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件判断"}},[s._v("#")]),s._v(" 文件判断")]),s._v(" "),a("p",[s._v("用"),a("code",[s._v("ll")]),s._v("不更快。。")]),s._v(" "),a("h4",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[s._v("#")]),s._v(" 权限")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" 有读的权限（read）\t\t\t"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" 有写的权限（write）\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-x")]),s._v(" 有执行的权限（execute）\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#eg:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".sh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h4",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[s._v("#")]),s._v(" 类型")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" 文件存在并且是一个常规的文件（file）\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 文件存在（existence）\t\t     "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 文件存在并是一个目录（directory）\n")])])]),a("h3",{attrs:{id:"if语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if语句"}},[s._v("#")]),s._v(" if语句")]),s._v(" "),a("blockquote",[a("p",[s._v("和判断式相同，condition两边必须空格")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 条件判断式 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n  程序 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  程序 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 条件判断式 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n    程序 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" 条件表达式 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n    程序   \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  程序 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在if的结尾必须添加 fi，作为if语句结束符")]),s._v("\n")])])]),a("h2",{attrs:{id:"case语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case语句"}},[s._v("#")]),s._v(" case语句")]),s._v(" "),a("blockquote",[a("p",[s._v("注意")]),s._v(" "),a("p",[s._v("1.匹配值右边必须加右括号")]),s._v(" "),a("p",[s._v("2.每次匹配之后的==;;==相当于"),a("strong",[s._v("break")])]),s._v(" "),a("p",[s._v("3.==*)==相当于default")]),s._v(" "),a("p",[s._v("4.case结尾加==esac==")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" $变量名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"值1"')]),s._v("） \n    如果变量的值等于值1，则执行程序1 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"值2"')]),s._v("） "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 整数可不加“” ")]),s._v("\n    如果变量的值等于值2，则执行程序2 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n*） \n    如果变量的值都不是以上的值，则执行此程序 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"for循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for循环"}},[s._v("#")]),s._v(" for循环")]),s._v(" "),a("blockquote",[a("p",[s._v("注意")]),s._v(" "),a("p",[s._v("条件循环为双括号，列表循环是{1..5},两点，或者"),a("code",[s._v("seq 5")])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#条件循环")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v(" 初始值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("循环控制条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("变量变化 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n    程序 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列表循环")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#eg:")]),s._v("\n \t  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shit"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("wdd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t\t\t\t seq 3 \t另一种写法")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$wdd")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("h4",{attrs:{id:"示例脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例脚本"}},[s._v("#")]),s._v(" 示例脚本：")]),s._v(" "),a("p",[s._v("ping 主机存活检测")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("IP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /root/for/ip.txt"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ip文件为存放ip地址的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-c 3 ping 3次主机 -i 0.2ping主机间隔 -w 3ping主机超时间隔   &> 结果写入")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v(' is up"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v(' is down"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("h3",{attrs:{id:"while循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#while循环"}},[s._v("#")]),s._v(" while循环")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$flag")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-gt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须加空格")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$flag")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flag")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n")])])]),a("blockquote",[a("p",[s._v("注意：")]),s._v(" "),a("p",[s._v("1.在条件判断中使用变量必须加==$==")]),s._v(" "),a("p",[s._v("2.正确写计算式：")]),s._v(" "),a("p",[a("code",[s._v("$((1+1 ))")]),s._v("  、"),a("code",[s._v("$[1+1]")]),s._v("  参数自增 ： "),a("code",[s._v("((i++))")])])]),s._v(" "),a("h3",{attrs:{id:"read函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read函数"}},[s._v("#")]),s._v(" read函数")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name:"')]),s._v(" name\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your name is:"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v("\n\n")])])]),a("p",[a("strong",[s._v("-t 指定读取参数等待时间\t-p 指定提示符")])]),s._v(" "),a("h2",{attrs:{id:"系统函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统函数"}},[s._v("#")]),s._v(" 系统函数")]),s._v(" "),a("h3",{attrs:{id:"basename"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basename"}},[s._v("#")]),s._v(" basename")]),s._v(" "),a("blockquote",[a("p",[s._v("获取绝对路径下文件名 （后缀可去）")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" /server/scripts/1.txt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("无参数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.txt 返回路径末尾文件名/文件夹名 带后缀")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" /server/scripts/1.txt .txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 去后缀返回")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("basename")]),s._v(" /server/scripts/1qwe.txt we.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1q 最后一个 / 之后可以进行随意截断输出")]),s._v("\n")])])]),a("h3",{attrs:{id:"dirname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dirname"}},[s._v("#")]),s._v(" dirname")]),s._v(" "),a("blockquote",[a("p",[s._v("获取绝对路径的路径（最后一个  / 之前的内容进行输出）")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" /server/scripts/1.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /server/scripts")]),s._v("\n")])])]),a("h3",{attrs:{id:"cut"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cut"}},[s._v("#")]),s._v(" cut")]),s._v(" "),a("blockquote",[a("p",[s._v("-f 提取第几列 -d 分隔符")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost scripts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# cut -f 1 -d " " cut.txt')]),s._v("\nsir\nwangdengdeng123\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("213123")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("233")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);