$(function() {
    $(document).ajaxStart(function() {
            console.log("开始发送ajax");
        })
        .ajaxSend(function() {
            console.log("已经ajax请求");
        })
        .ajaxSuccess(function() {
            console.log("发送ajax请求成功");
        })
        .ajaxComplete(function() {
            console.log("接受ajax请求结果");
        }).ajaxStop(function() {
            console.log("暂停ajax请求成功");
        }).ajaxError(function() {
            console.log("ajax错误");
        });
        $.ajax(function(){
            method:'GET',
            beforeSend
        })
})