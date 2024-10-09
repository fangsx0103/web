 function calc(func) {
        /*var result =    (11)    ;*/
        /*var num1 =    (12)    (document.getElementById('num1').value);*/
        /*var num2 =    (12)    (document.getElementById('num2').value);*/
				var result =document.getElementById('result'); /*通过id获取存放结果的DOM元素*/
        var num1 =Number(document.getElementById('num1').value);/*将字符串转换成数字*/
        var num2 =Number(document.getElementById('num2').value);/*将字符串转换成数字*/

        if (   isNaN(num1)   ||  isNaN(num2)    ) {  /*判断两个数是否都是数字*/ /*第(13)和(14)空*/
          alert('请输入数字');
            return false;  /*返回布尔值*/ /*(15)   false;*/
        }
        result.value = func(num1, num2);
      }
      function add(num1, num2) {    // 加法
        return num1 + num2;
      }
      function sub(num1, num2) {    // 减法
        return num1 - num2;
      }
      function mul(num1, num2) {    // 乘法
        return num1 * num2;
      }
      function div(num1, num2) {    // 除法
        if (num2 === 0) {
          alert('除数不能为0');
          return '';
        }
        return num1 / num2;
      }