//轮播图
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,//一次允许展示1张图片
	spaceBetween: 0,//图片间隔
	loop: true,//轮播是否循环
	autoplay: {
		delay: 2000,//2秒切换一次
	},
	pagination: {//使用分页器导航
		el: '.swiper-pagination',
		clickable: true,//可点击
		dynamicBullets: true,//小圆点过多是否隐藏部分
	},
	navigation: {//使用前进后退按钮
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
//轮播图结束

