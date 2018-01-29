#  #


HTML中的转义字符和上下角标

```
<script type="text/javascript">

	document.write("<table border='1'>")
		for(var i = 1;i<=9;i++){
			document.write("<tr>")
			for(var j=1;j<=i;j++){
				document.write("<td>");
				document.write(i+"*"+j+"="+i*j);
				document.write("</td>");
			}
			document.write("</tr>")
		}

	document.write("</table>")
</script>
```