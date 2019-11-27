$().ready(function(){
	// 导航栏底部线条
	$(".nav_ul>li").each(function(){
		$(this).click(function(){
			$(".nav_ul>li").removeClass("reactive");
			$(".nav_ul>li").removeClass("active");
			$(this).addClass("active");	
			$(this).addClass("reactive");
		})
	})
	// 导航栏底部线条结束
	
	// 导航栏底部线条移动动画
	$(".nav_ul>li").each(function(){
		$(this).mouseenter(function(){
			$(".nav_ul").find(".active").delay(1000).addClass("reactive");
			$(".nav_ul>li").delay(1000).removeClass("active");
			$(this).delay(1000).addClass("active");	
		})
		$(this).mouseleave(function(){
			$(".nav_ul>li").delay(1000).removeClass("active");
			$(".nav_ul").find(".reactive").delay(1000).addClass("active");
		})
	})
	// 导航栏底部线条移动动画结束
	
	//顶部位置判断
	$(window).scroll(function() {
        var t_Head = $(".public_head").find("h1").height();
        var y = $(window).scrollTop();
        if (y < t_Head) {
        	$(".public_head").find("h1").css("position","relative");
        }else{
        	$(".public_head").find("h1").css("position","fixed");
        }
    }); 
	//顶部位置判断结束

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