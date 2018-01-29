# 数据类型 #
```
String Boolean Object Number Array Null Undefided
字符串  布尔    对象    数字    数组  空   未定义
```
# JavaScript 拥有动态类型 #
JavaScript具有动态数据类型，也就是相同的变量可用作不同的类型。
```
var a = 5;
var a = true;
var a = "abc";
```
# 声明变量 #
声明变量是通过new来实现的,注意没有(),js中声明一个变量就是创建一个对象。
关于元素的默认值
```
new String和new Array没有默认值，
new Number   默认值是 0
new Boolean  默认值是 false
new Object   默认值是 object
```

```
var n = new Number;
var o = new String;
var p = new Array;
var q = new Boolean;
var r = new Object;
```

# String #
```
var c= "higkl";
```
字符串中也可以添加引号，只要内外的引号不配对即可。
```
var b = "abc'def'";
document.write(b+"<br/>");
```
# Number #
数字既可以整数也可以是小数，也可以是科学计数法。

```
var d = 555;
var e = 1.23456;
var f = 5e2;
var g = 123e-2;
```
结果：
```
555
1.23456
500
1.23
```
# Boolean #
只有2个值true/false
```
var h = true;
var i = false;

document.write(h+"<br/>");
document.write(i+"<br/>");
```
# Array #
Array有3种创建方式,注意`new Array(false,true,false);`这种创建方法中用的是(),不是[]。
```
第一种
	var j = new Array();
	j[0] = 1;
	j[1] = 2;
	j[2] = 3;
第二种
	var l = new Array(false,true,false);
第三种
	var k= ["a","b","c"];
```
遍历数组
```
for(i = 0;i<k.length;i++){
	document.write("k["+i+"]="+k[i]+"<br/>");
}
```

# Object #
对象中的属性是用{}包裹起来的，对象中的属性是以“键值对”的形式存在的。
```
var person = {name:"cqc",age:20,sex:"男"};
```
空格和折行无关紧要
```
var stuent = {
	name : "周星驰",
	age : "60",
};
```
对象有2种寻址方式
```
document.write("person.name="+person.name);
document.write("person['name']="+person["name"]);
```
# Undefined #
undefined 和 null 表示不含有变量，如果变量a没有赋值，那么默认是undefined
```
var x;
var m = null;

document.write("x="+x+"<br/>");
document.write("m="+m+"<br/>");
```
结果
```
x=undefined
m=null
```

# 其它 #
demo: http://git.oschina.net/JavaScript01/javascriptjichu