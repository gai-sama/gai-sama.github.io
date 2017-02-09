/**
 * Created by rzy on 2016/7/25.
 */

$(function () {
    $('#page-header').append('<div class="wrapper">'
        +'<span>场景大师</span>'
        +'<div id="register-btn"><a href="register.html" target="_blank">注册</a></div>'
        +'<div class="nav"><ul>'
        +'<li id="homepage"><a href="index.html">首页</a></li>'
        +'<li id="download"><a href="download.html">下载</a>'
            +'<ul id="sub-down"><li id="sub-download">下载</li><li id="sub-version">版本日志</li></ul>'
        +'</li>'
        +'<li id="display"><a href="display.html">场景展示</a></li>'
        +'<li id="help"><a href="help.html">使用帮助</a></li>'
        +'<li id="contact"><a href="contact.html">关于我们</a></li>'
        +'</ul></div></div>');

    $('#download').mouseenter(function(){
        $('#sub-down').slideDown('fast');
    });
    $('#download').mouseleave(function(){
        $('#sub-down').slideUp('fast');
    });
    $("#sub-download").click(function(){
        window.location.href = "download.html";
    });
    $("#sub-version").click(function(){
        window.location.href = "version.html";
    });
});
