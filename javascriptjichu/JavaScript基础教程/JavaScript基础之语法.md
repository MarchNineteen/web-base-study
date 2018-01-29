
- 变量区分大小写


# 变量区分大小写 #
JavaScript跟大多数语言是一样的，变量是区分大小写的。
大写的变量有
- 常量
- 固定值量(pi)
- 全局变量

其余建议小写。


```
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <title>JavaScript基础之语法</title>
 </head>
 <body>
  
  <script>
   var name="abcd";
   var NAME="ABCD";

   /*js是区分大小写的*/
   console.log(name);
   console.log(NAME);
  </script>
 </body>
</html>
```

# 标识符 #
JavaScript中的标识符是由字母、数字、下划线、美元符号（$）组成，且不能以数字开头。
```
var abc;
var _abc;
var $ab;
var abc123d;
var 5ab;/*错误，不能艺术字开头*/
```

变量和函数命名的方式建议使用单驼峰方式，即：首字母小写，剩下单词的首字母大写，其余字母小写。
```
var age;
var myAge;
var myNameAgeFamily;
```
# 注释 #
JavaScript注释分单行注释和多行注释，单行注释以双斜杠//,多行注释以/**/,中间的*的数量不限制。
```
//js是区分大小写的
/*js是区分大小写的*/
/***js是区分大小写的*/
```
# 语句的结束 #
一行语句的结束是以分号";"表示，当然也可以不加分号，但是建议加分号，表示这一句结束了。
**这个待定，我怎么测试报错了，EditPlus**
```
var 4-2
var 5-3;
```
在if语句中，也是建议加大括号{}。
```
var a = 5;
var b = 3;
if(a > b){
	alert("5比3大");
}
```
#保留字和关键字#
关键字具有特殊意义的字符，它们控制着语句的开始于结束，或具有特定的操作。

```
if  do with break in try while for
```
保留字在JavaScript中没有特定的用途，有时也做关键字使用。
**一般来说，不要用关机子和保留字做表示服和属性名。**

# 变量 #
Java中的变量有多种类型(8种基本类型int String boolean等)，但是JavaScript是弱类型的语言，只有一种类型，用var表示
```
var a = 100;
var b = "100";
```
如果没有给变量赋值，变量的默认值是 undefined
```
var a;
console.log(a);//undefined
```

## 全局变量与局部变量 ##
在定义变量时，没有用关键字var定义的变量，会被当做全局变量
```
function test(){
	var d = 5;
}
alert(d);//报错，应为 d是局部变量
```

全局变量
```
function test(){
	 e = 5;
}
test();//调用方法
alert(e);
```

# alert #
提示内容要加""双引号。
```
alert("5比3大");
```
# 其它 #
参考：
[JavaScript基础之语法 ](http://blog.csdn.net/h15882065951/article/details/63258548)