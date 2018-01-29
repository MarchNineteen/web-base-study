

```
<script type="text/javascript">
```
# Array #
## 方法 ##

		生成新的数组，但是不影响原数组。
		concat(array1);数组拼接，长度等于原来2个数组的长度的和
		join("-");用-把数组中的元素分隔，生成String
		pop();删除最后一个元素，并返回该元素，影响了原数组的长度。
		push(var);让数组最后添加一个元素，并返回新数组的长度
		push(array);往数组最后添加一个数组B，并返回新数组的长度，其中新数组的长度= 原素组长度+1(数组B作为一个元素，而不是把数组B的元素加入新数组)
		reverse();颠倒数组中元素的顺序,并返回新数组

|方法|说明|
|--|--|
|concat(arr1)|数组拼接，生成新的数组，长度等于原来2个数组的长度的和|
|join("-")|用-把数组中的元素分隔，生成新String|
|pop()|删除最后一个元素，并返回该元素，影响了原数组的长度。|
|push(var);|往数组最后添加一个数组B，并返回新数组的长度，其中新数组的长度= 原素组长度+1(数组B作为一个元素，而不是把数组B的元素加入新数组)|
|reverse()|颠倒原数组中元素的顺序|


```
var arr3 = arr1.concat(arr2);
arr1.join("=")
arr1.pop();
arr4.push("李大钊");
arr5.push(arr6);
arr7.reverse()
```

# String #
## 属性 ##
|属性|说明|
|--|--|
|str.length|字符串的长度|
## 方法 ##
下面的方法不影响原字符串。

|方法|说明|
|--|--|
|bold()|粗体|
|fontcolor("red")|字体颜色|
|fontsize(12)|字体大小|
|link("baidu.html")|超链接|
|sub()|字符串作为下角标|
|sup()|字符粗作为上角标|
|chartAt(5)|返回字符串中角标为5的元素|
|"a".concat("bc");|合并字符串|
|indexOf("h");|返回字符串在该字符串中第一次出现的角标|
|substr(3,5);|截取字符串。 第一个参数：开始截取的位置角标，第二个参数：截取的数量。|
|substring(3,5);|截取字符串。第一个参数：开始截取的位置的角标，第二个参数：结束截取位置的角标。[3,5)留左不留右|


```
document.write(str1.length);
document.write(str1.fontcolor("blue"));
document.write(str1.fontsize(20));

var str2 = "百度";
document.write(str2.link("https://www.baidu.com/"));

document.write("5".sub()+6);
document.write("5".sup()+"6");

document.write(str1.charAt(3));
document.write(str1.concat(str2));

var str3 = "a-b-c-d-e";
var array1 = str3.split("-");
document.write(array1.length);

document.write(str1.substr(2,1));

var str4 = "abcde";
document.write(str4.substring(2,5)); 
```


# Date #
方法：
```
Date 获取Date对象 new Date()
toLocaleString();将时间格式化成本地格式，并转成字符串
getFullYear();获取当前年份
getMonth();获取当前月，默认从0开始
getDay();本天是周几
getDate();本天在当月是第几天，从1开始
getHours();现在的小时数
getMinutes();现在是第几分钟
getSeconds();当前秒
getTime();从1970年1月1日到现在的毫秒数
```

Demo:
```
var date = new Date();
document.write(date);
document.write(date.toLocaleString());
document.write(date.getFullYear());
document.write(date.getMonth());
document.write(date.getDay());
document.write(date.getDate());
document.write(date.getHours());
document.write(date.getMinutes());
document.write(date.getSeconds());
document.write(date.getTime());
var date2 = new Date(date.getTime());
```


# Math #
```
Math.floor(1.2); 取小值，去掉小数
Math.ceil(a);    取大值，去掉小数，然后整数+1
Math.round(1.2); 四舍五入
Math.random();   [0,1)之间的随机数
```
怎样获取[0,10]之间随机整数？
```
Math.random()*10; //[0,10)

Math.ceil(Math.random()*10);
```

# RegExp #

```
var reg = new RegExp("g");//创建对象
test(str); str是否满足正则表达式reg
```

```
var reg = new RegExp("g");
var str = "abcdef";
document.write(reg.test(str));
```



















|方法|说明|
|--|--|
|||



|属性|说明|
|--|--|
|||


|方法|说明|
|--|--|
|bold()|粗体|
|fontcolor("red")|字体颜色|
|fontsize(12)|字体大小|
|link("baidu.html")|超链接|
|sub()|字符串作为下角标|
|sup()|字符粗作为上角标|
|chartAt(5)|返回字符串中角标为5的元素|
|"a".concat("bc");|合并字符串|
|indexOf("h");|返回字符串在该字符串中第一次出现的角标|
|substr(3,5);|截取字符串。 第一个参数：开始截取的位置角标，第二个参数：截取的数量。|
|substring(3,5);|截取字符串。第一个参数：开始截取的位置的角标，第二个参数：结束截取位置的角标。[3,5)留左不留右|
|||











|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||