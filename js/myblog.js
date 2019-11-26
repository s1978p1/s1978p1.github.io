//轮播图
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	autoplay: {
		delay: 2000,//2秒切换一次
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
//轮播图结束

$().ready(function(){


})