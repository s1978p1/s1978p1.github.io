$().ready(function(){
	$(".nav_ul>li").each(function(){
		$(this).click(function(){
			$(".nav_ul>li").removeClass("active");
			$(this).addClass("active");
		})
	})
})