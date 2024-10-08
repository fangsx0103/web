一、文档加载完成事件
	
二、JQuery选择器
	1.基本选择器
		*
		.class
		#id
		tag
		selector1,selector2,……
		selector1
	2.层次选择器
		内外结构
			父 > 子
			先   后
			<div id="father">
				<div id="son">
					<div id="hou"></div>
				</div>
			</div>
		上下结构
			$('#dage + #gege')	===		$('#dage').next()
			#dage ~ .brother  ===		$('#dage').nextAll()
			#gege ~ .brother
										$('#gege').sibligs()  所有的兄弟
			<div class="brother" id="dage"></div>
			<div class="brother" id="gege"></div>
			<div class="brother" id="didi1"></div>
			<div class="brother" id="didi2"></div>
			<div class="brother" id="didi3"></div>
	3.基本过滤选择器(序号0开始)
		:first
		:last
		:lt(n)	小于
		:gt(n)	大于
		:eq(n)	等于
		:even	偶数
		:odd	奇数
		:not(selector)	去除selector
		:header	所有标题	h1，h2……h6
		:animated	正在执行动画的元素
		:focus	激活的元素
	4.子元素过滤选择器（序号从1开始）
		:first-child	第一
		:last-child		最后
		:nth-child(n)	n:数字[1,m]
						even/2n		偶数
						odd/2n+1	奇数
						3n+1
						
		:only-child		子元素是唯一
		
	5.属性选择器	[]
		[attr]	匹配拥有attr属性的元素
		[attr=value]	匹配attr=value属性的元素
		[attr!=value]	匹配attr的值不等于value属性的元素
		[attr*=value]	匹配attr的值包含value属性的元素
		[attr^=value]	匹配attr的值以value开始的元素
		[attr$=value]	匹配attr的值以value结尾的元素
		[attr|=value]	匹配attr的值=value或value-的元素
		[attr~=value]	匹配attr的值=value或value空格的元素
		
	6.可见性选择器
		:hideden	不可见 	style=	display:none; visibility:hidden
							html=	input[type=hidden]
		:visible	可见		display:block;
		
		.show()		不可见->可见
		.hide()		可见->不可见
		
三、DOM操作
	1.设置样式
		css()
	2.添加/删除类
		addClass(类名)
		removeClass(类名)