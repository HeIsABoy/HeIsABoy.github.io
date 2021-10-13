(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{387:function(e,n,s){"use strict";s.r(n);var t=s(46),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),s("h4",{attrs:{id:"一-redis基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-redis基础"}},[e._v("#")]),e._v(" 一 redis基础")]),e._v(" "),s("p",[e._v("1 redis入门\n2 数据类型\n3 通用命令\n4 Jedis")]),e._v(" "),s("h4",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[e._v("#")]),e._v(" 使用场景")]),e._v(" "),s("p",[e._v("Nosql:降低磁盘io次数，越低越好；去除数据间关系，越简单越好。\n作为关系型数据库的补充。\n作用：应对基于海量用户和海量数据前提下的数据处理问题\n常见的nosql数据库：redis memcache Hbase MongoDB")]),e._v(" "),s("p",[e._v("商品基本信息 ：名称 价格 厂商 =>MySQL\n商品附加信息 ：描述 详情 评论 =>Nosql的MongoDB\n图片信息 ：分布式文件系统\n搜索关键字 ： ES Lucene solr\n热点信息 ：高频信息 Redis")]),e._v(" "),s("h4",{attrs:{id:"redis常见数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis常见数据类型"}},[e._v("#")]),e._v(" redis常见数据类型")]),e._v(" "),s("p",[e._v("字符串类型 String\n列表类型 LiSt\n散列类型 hash\n集合类型 set\n有序集合类型 sorted_set")]),e._v(" "),s("h4",{attrs:{id:"_1-字符串类型数据基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-字符串类型数据基本操作"}},[e._v("#")]),e._v(" （1）字符串类型数据基本操作")]),e._v(" "),s("p",[e._v("*添加/修改数据\nset key value  || mset key value key value （一次添加多个数据）\n*获取数据\nget key  || mget key key （一次获取多个数据）\n*删除数据\ndel key"),s("br"),e._v("\n*获取数据字符个数\nstrlen key\n*追加信息到原始信息后部（如果原始信息存在就追加，否则就重建）\nappend key value\n*设置数值数据增加指定范围的值\nincr key\nincrby key incrment\nincrbyfloat key incrment\n*设置数值数据减少指定范围的值\ndecr key\ndecrby key increment\n*设置数据具有指定的生命周期\nsetex key seconds value (setex tel 10 1)\npsetex key milliseconds value\n*起名规范\n第一种：\nset user🆔00189:fans 19230385 表名：主键名：主键值：字段名\nset user🆔00189:blogs 891\n第二种\nset user🆔00189 {id:00789.blogs:789,.fans:19230385}")]),e._v(" "),s("h4",{attrs:{id:"_2-hash类型数据的基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-hash类型数据的基本操作"}},[e._v("#")]),e._v(" （2）hash类型数据的基本操作")]),e._v(" "),s("p",[e._v("*添加/修改数据\nhset key field value || hmset key field1 value1 field2 value2（一次添加多个数据）\n*获取数据\nhget key feild || hmget key filed1 field2（一次获取多个数据）\nhgetall key\n*删除数据\nhdel key feild [filed2]\n*获取哈希表中字段的数量\nhlen key\n*获取哈希表中是否存在指定的字段\nhexists key feild\n*获取哈希表中所有的字段名或字段值\nhkeys key\nhvais key\n*设置指定字段的数值数据增加指定范围的值\nhincrby key field increment\nhincrbyfloat key field increment")]),e._v(" "),s("h4",{attrs:{id:"_3-list类型数据的基本操作-右进左查-朋友圈点赞场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-list类型数据的基本操作-右进左查-朋友圈点赞场景"}},[e._v("#")]),e._v(" （3）list类型数据的基本操作  右进左查 朋友圈点赞场景")]),e._v(" "),s("p",[e._v("*添加/修改数据\nlpush key value1 [value2]（一次添加多个数据）\nrpush key value1 [value2]（一次添加多个数据）\n*获取数据\nlrange key start stop（start stop 是开始结束的数字 lrange list1 0 2）\nlindex key index\nllen key\n*获取并移除数据\nlpop key\nrpop key\n*规定时间内获取并移除数据\nblpop key1 [key2] timeout\nbrpop key1 [key2] timeout\n移除指定数据\nlrem key count value")])])}),[],!1,null,null,null);n.default=a.exports}}]);