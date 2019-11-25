$().ready(function(){
	// 导航栏底部线条
	$(".nav_ul>li").each(function(){
		$(this).click(function(){
			$(".nav_ul>li").removeClass("active");
			$(this).addClass("active");
		})
	})
	// 导航栏底部线条结束
	
	// 汉堡包点击事件
	$(".hamburger").click(function(){
		$(".nav").animate({"left":"0"},300);
		// $(".move_left").removeClass("hide");
	})
	// 汉堡包点击事件结束
	
	// 侧边栏左移
	$(".main").click(function(){
		$(".nav").animate({"left":"-55%"},300);
		// $(".move_left").addClass("hide");
	})
	// 侧边栏左移结束
})