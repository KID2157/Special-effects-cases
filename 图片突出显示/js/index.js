$(function () {
    //鼠标进入的时候,其他的li标签透明度：0.5
    $(".wrap li").hover(function () {
        $(this).siblings().stop().fadeTo(400, 0.5);
    }, function () {
        // 鼠标离开，其他li 透明度改为 1
        $(this).siblings().stop().fadeTo(400, 1);
    })

});
