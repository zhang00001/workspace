$(document).ready(function(){
				// 案例展示
	$(".mask").hide();
	$(".mask-pic").hover(function(){
	$(this).children(".mask").slideToggle(500);
	});

	// 风格装修
	$(".mask2").hide();
	$(".mask-pic2").hover(function(){
	$(this).children(".mask2").fadeToggle(500);
	});

	// 切换风格
	var $tab_li = $('.feng_menu li');
    $tab_li.hover(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    var index = $tab_li.index(this);
    $('.box').eq(index).show().siblings().hide();
    });

    // 公司团队

    $(".mask3").hide();
	$(".mask-pic3").hover(function(){
	$(this).children(".mask3").slideToggle(500);
	});

	// 表单验证
	// 二级菜单

	$(".sub-nav").hide();
	$("mainmenu").click(function() {
	$(this).find(".sub-nav").show();
	});
});