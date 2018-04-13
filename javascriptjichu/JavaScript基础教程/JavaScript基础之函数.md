# 函数 #
## 函数的用法 ##
函数是由事件驱动可重复执行的代码块。
> 如有的方法是由点击事件驱动的。


## 调用函数 ##
分2种：
	在HTML中调用js的函数
	在js中直接调用函数
### 在HTML中调用js的函数 ###
```
<script>
	function myFunction(){
		alert("Hello World");
	}
</script>

<button onclick = "myFunction()">点击这里</button>
```
### 在js中直接调用函数 ###

```
<p id="id1">计算4+5+6<p/>
<script>
	function myFunction3(a,b,c){
		return (a+b+c);
	}

	//根据id获取对象，innerHTML设置属性或 返回表格行开始于结束之间的内容。
	document.getElementById("id1").innerHTML = myFunction3(4,5,6);
</script>
```

## 无参函数 ##
```
<script>
	function myFunction(){
		alert("Hello World");
	}
</script>

<button onclick = "myFunction()">点击这里</button>
```
## 有参函数 ##
```
function myFunction2(a,b){
	alert(a+b);
}
```
## return的用法 ##
return的作用：
	1 返回值
	2 结束该函数(方法)

```
function myFunction4(a,b){
	if(a>b){
		return;
	}
	return a+b;
}
```


## 局部变量和全局变量 和它们的声明周期 ##
	 局部变量： 在方法内声明的变量
	 全局变量：在方法外声明的变量
	 当一个变量没有声明时，那么会被当做全局变量来对待。

	 生命周期：从被声明开始到被销毁。
	 局部变量：函数运行以后被销毁
	 全局变量：页面关闭后被销毁。

# 运算符 #
## 分类 ##
1. 算术运算符
2. 赋值运算符
3. 字符串中的运算符+

## 算术运算符 ##

|运算符|描述|案例|结果|
|--|--|--|--|
|+|加|1+2|3|
|-|减|5-3|2|
|*|乘|2*3|6|
|/|除|6/3|2|
|++|累加|++2|3|
|--|累减|--3|1|
|%|取余|5%3|2|

执行++和--的时候报错了
```
var d = ++2;
var d = --2;
document.write(d);
```

## 赋值运算符 ##
x = 1,y = 2;

|运算符|例子|等价于|结果|
|--|--|--|--|
|=|x=y|--|x=2|
|+=|x+=y|x=x+y|x=3|
|-=|x-=y|x=x-y|-1|
|*=|x*=y|x=x*y|x=2|
|/=|x/=y|x=x/y|x=0.5|
|%=|x%y|x=x%y|0|

> 注意：执行完赋值语句后，值就变了。

```
document.write(a+=c);//执行完这一句a的值变成了8
```

##字符串中的运算符+ ##
> 字符串和数字相加，结果为字符串。

```
var a = 5;
var b = "1";
document.write(a+b);
```

# 比较和逻辑 运算符 #
比较运算符和逻辑运算符的结构都是true或false，跟java中的差不多。
## 比较运算符 ##
比较运算符用来比较是否大小关系。
例如a = 2; b = 4;

|运算符|说明|举例|
|--|--|--|
|==|等于|a==5 为false|
|===|全等（值和类型）|a===b false|
|!=|不等于|a!=5 true|
|>|大于|5>3 true|
|>=|大于或等于|5>=3 true|
|<|小于|5<3 false|
|<=|小于或等于|5<=3 false|

## 逻辑运算符 ##
|运算符|说明|举例|
|--|--|--|
|&&|和|3==3 && 5==5 true|
|双竖线|或|3==4  5==6 true|
|！|非|3！=5 true|

```
3==4 || 5==6
```
## 条件运算符 ##
在java中又称三元运算符。
```
variableName = (condition)? value1:value2;
```
```
var a = (5>3)"是":"否";
```
# 判断语句+循环语句 #

## 循环语句 ##
for、forin、while、do while和java中一样

# break continue #
> break表示跳出循环，该循环不在执行。
continue表示结束本次循环，进入下一个循环。

# try catch  thorw #
和java中意思一样
# 表单验证 #

方法没看懂