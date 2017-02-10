/**
 * Created by ck on 2016/5/12.
 */

$(function () {

    var anchorName = '';
    var currentAnchorName = '';

    display();

    $('.item>a, .sub-item>a').click(function (e) {
        e.preventDefault();
        var $item = $(this).parent();
        if ($item.hasClass('opened')) {
            $item.removeClass('opened').addClass('closed');
            $item.find('ul').stop().slideUp();
        } else if ($item.hasClass('closed')) {
            $item.removeClass('closed').addClass('opened');
            if (!!window.ActiveXObject || "ActiveXObject" in window) { // 解决IE下闪动的bug
                $item.addClass('no-position');
                $item.find('ul').slideDown(function () {
                    $item.removeClass('no-position');
                });
            } else {
                $item.find('ul').stop().slideDown();
            }
        } else {
            anchorName = $(this).attr('href');
            window.location.hash = anchorName;
            if (anchorName !== currentAnchorName) display(anchorName);

        }
    });

    var imgList = [];
    var imgCount = 0;

    function display(anchorName) {
        anchorName = anchorName || window.location.hash;
        var title = '', url = '';
        switch (anchorName) {
            case '#master_intro':
                title = '场景大师简介';
                url = 'detail/master_intro.html';
                break;
            case '#login_intro':
                title = '场景大师登陆界面介绍';
                url = 'detail/login_intro.html';
                break;
            case '#scene_lib':
                title = 'VR场景库';
                url = 'detail/scene_lib.html';
                break;
            case '#source_center':
                title = '素材中心';
                url = 'detail/source_center.html';
                break;
            case '#user_center':
                title = '用户中心';
                url = 'detail/user_center.html';
                break;
            case '#source_use':
                title = '素材使用';
                url = 'detail/source_use.html';
                break;
            case '#move_view':
                title = '移动与视角';
                url = 'detail/move_view.html';
                break;
            case '#fly_detail':
                title = '行走/飞行与细节展示';
                url = 'detail/fly_detail.html';
                break;
            case '#generate_view':
                title = '生成全景360';
                url = 'detail/generate_view.html';
                break;
            case '#sys_setting':
                title = '系统设置';
                url = 'detail/sys_setting.html';
                break;
            case '#reg_download':
                title = '注册及下载问题';
                url = 'detail/reg_download.html';
                break;
            case '#direction':
                title = '产品及使用说明';
                url = 'detail/direction.html';
                break;
            case '#requirement':
                title = '客户端配置要求';
                url = 'detail/requirement.html';
                break;
            case '#other':
                title = '其他问题';
                url = 'detail/other.html';
                break;
            default:
                window.location.hash = 'master_intro';
                anchorName = '#master_intro';
                title = '场景大师简介';
                url = 'detail/master_intro.html';
                break;
        }
        $('aside li').removeClass('active');
        currentAnchorName = anchorName;
        var $item = $('li>a[href=' + anchorName + ']').parent();
        var $pItem = $item.parents('.item');
        if ($item.hasClass('sub-item')) {
            $pItem.removeClass('closed').addClass('opened');
            $pItem.find('ul').show();
        }
        $item.addClass('active');
        $('.article-title').text(title);
        $('article').addClass('loading-mask');
        $('section').load(url, function () {
            imgList = $(this).find("img");
            imgCount = imgList.length;
            imgCount > 0 ?
                imgList.each(function (index, ele) {
                    ele.timer = setInterval(function () {
                        if (ele.complete) {
                            imgCount--;
                            if (!imgCount) {
                                $('article').removeClass('loading-mask');  // 图片全部加载完成后处理
                            }
                            clearInterval(ele.timer);
                        }
                    }, 50);
                }) :
                $('article').removeClass('loading-mask');
        });
    }

    $('.tab-index').click(function () {
        window.location.assign('index.html#index');
    });
    $('.tab-download').click(function () {
        window.location.assign('index.html#download');
    });
    $('.tab-display').click(function () {
        window.location.assign('index.html#display');
    });
    $('.tab-contact').click(function () {
        window.location.assign('index.html#contact');
    });
    $('.register-btn span').click(function () {
        window.location.assign('register.html');
    });
});