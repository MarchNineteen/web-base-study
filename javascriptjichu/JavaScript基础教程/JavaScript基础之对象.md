JavaScript中所有的事物都是对象，比如字符串、数字、日期等。
对象是具有属性和方法的数据。

# 属性和方法 #
比如：car就是一个对象，它的属性有颜色+重量+车型+品牌，

```
car.name = Jeely;
car.color = balck;
car.weight = 300;
```
它的方法有启动+停止+运行
```
car.start();
car.run();
car.stop();
```
# JavaScript中的对象 #
在JavaScript中，对象就是数据（变量），有属性和方法。
当创建一个变量是，
```
var a = "Hello World";
```
实际上就是创建了一个字符串对象。字符串对象有自带的属性length。
属性：
```
a.length = 11
```
方法
```
a.indexOf("l",0)
a.replace("l","M")
a.search("/Wor/")
```
# 创建JavaScript对象 #
JavaScript 中的几乎所有事务都是对象：字符串、数字、数组、日期、函数，等等。
你也可以创建自己的对象。
```
person = new Object();
person.firstName = "刘诗诗";
person.age = 30;
person.sex = "女";
document.write(person.sex+"<br/>");
```
# 访问对象的属性和方法 #
```
document.write(a.length);
document.write(a.toUpperCase());
```