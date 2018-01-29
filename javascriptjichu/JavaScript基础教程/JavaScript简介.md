JavaScript初期被提出来是为了`数据验证`，现在JavaScript可用于复杂的`计算和数据交互，包含闭包、匿名函数、元编程`特性。

JavaScript的本质、历史、局限性。

JavaScript的组成
1. ECMAScript(核心)
2. DOM(文档对象类型)
3. BOM(浏览器对象类型)

DOM
DOM是用于HTML的API,将HTML页面映射为一个多层节点结构，类似于树形结构，节点相当于树形的支点，HTML的组成元素是DOM中某类型的节点。

DOM便于开发人员对页面的内容、结构加以控制，获取控制权。
- DOM1用于映射文档的结构和扩展HTML对象、方法。
- DOM2在DOM1的基础上增加了鼠标和用户界面事件、范围、遍历等。
- DOM3扩展了方法验证。



BOM
BOM用来掌握浏览器的信息，方便对浏览器窗口进行移动、缩小、关闭等操作。
相关信息包括：
1. 浏览器信息navigation
2. 浏览器所加载的页面信息location
3. 显示器分辨率的信息screen
4. 历史记录信息history



JavaScript代码放在<script></script>之间，javascript加载有延迟加载和异步加载。

代码的解析的顺序是自上而下。

<script>代码建议放在</body>结束位置处。目的：先将整个页面加载完后，在解析脚本代码，更准确映射整个页面为文档节点构造。

```
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <title>JavaSctipt之基础语法</title>
 </head>
 <body>
  

  <!--script一般放在 body结束前-->
  <script>
		/*此处写脚本*/
		document.write("Hello ");
  </script>
 </body>
</html>
```
JS语句：
```
document.write("Hello ");
```





