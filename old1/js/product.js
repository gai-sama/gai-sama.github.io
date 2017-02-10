/**
 * Created by ck on 2016/4/14.
 */
$(document).ready(function () {

    var clientHeight = document.documentElement.clientHeight + 17;
    var clientWidth = document.documentElement.clientWidth;

    var $area = $('.section:nth-child(1) .slide:nth-child(4) .area'),
        $screenUl = $('.scene-panel ul'),
        $gotoDownload = $('.index-panel .download-btn');

    $screenUl.css('width', (clientWidth * 0.95 + 40) + 'px');
    $area.css('background-size', clientHeight * 0.7 + 'px');

    window.onresize = function () {
        $screenUl.css('width', (clientWidth * 0.95 + 40) + 'px');
        $area.css('background-size', clientHeight * 0.7 + 'px');
    };

    $('.section:nth-child(1) .main-word div').each(function () {

        var $spanList = $(this).find('span');
        var wordLength = $spanList.length;
        $spanList.each(function (index) {
            var space = (wordLength / 2 - index) * 2;
            $(this).css({
                'opacity': 0,
                'left': -space * Math.abs(space) + 'px',
                '-webkit-transition-delay': Math.abs(wordLength / 2 - index) / wordLength + 's',
                '-moz-transition-delay': Math.abs(wordLength / 2 - index) / wordLength + 's',
                '-0-transition-delay': Math.abs(wordLength / 2 - index) / wordLength + 's',
                'transition-delay': Math.abs(wordLength / 2 - index) / wordLength + 's'
            });
        });
    });

    $('.section:nth-child(5) .main-word span').each(function () {
        $(this).css({
            'opacity': 0,
            'left': (Math.floor(Math.random() * (-200 - 200 + 1) + 200)) + 'px',
            'top': (Math.floor(Math.random() * (-200 - 200 + 1) + 200)) + 'px',
            '-webkit-transition-delay': Math.random() / 5 + 's'
        });
    });

    var $header = $('.header');
    $('#introduction').fullpage({
        //Navigation
        lockAnchors: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationPosition: 'right',
//            navigationTooltips: ['第一屏', '第二屏', '第三屏', '第四屏'],
        showActiveTooltip: true,
        slidesNavigation: false,

        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        scrollOverflow: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: false,
        animateAnchor: false,
        recordHistory: false,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize: true,
        sectionsColor: ['#292E31', '#E9F3F5', '#0E0E10', '#FFF', '#0E0E10'],
        paddingTop: '0',
        paddingBottom: '0',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function (index, nextIndex, direction) {
            index == 1 && $header.addClass('fixed-header');
            nextIndex == 1 && $header.removeClass('fixed-header');
        },
        afterLoad: function (anchorLink, index) {
            var $mainEle = $(this).find('.main-word');
            var $sideEle = $(this).find('.side-word');
            switch (index) {
                case 1:
                    $mainEle.find('span').addClass('show-word');
                    $gotoDownload.stop().delay(700).fadeIn(1500);
                    break;
                case 2:
                    $mainEle.show("puff", {'percent': 300}, "slow");
                    $sideEle.show("clip");
                    break;
                case 3:
                    $mainEle.show("drop", {'easing': 'easeOutCubic', 'direction': 'right'}, 1500);
                    $sideEle.show("clip");
                    break;
                case 4:
                    $mainEle.show("drop", {'easing': 'easeOutCubic', 'direction': 'left'}, 1500);
                    $sideEle.show("clip");
                    break;
                case 5:
                    $mainEle.find('span').addClass('show-word');
                    $sideEle.show("clip");
                    break;
                default:
                    break;
            }
        },
        afterRender: function () {
            $.fn.fullpage.setAllowScrolling(false, 'left, right');
            $('.before-show').removeClass('before-show');
            $('.before-init').removeClass('before-init');
            var anchorName = window.location.hash;
            var $menuList = $('.menu li');
            switch (true) {
                case anchorName == '#index':
                    switchTab($menuList.eq(0)[0], 0);
                    break;
                case anchorName == '#download':
                    switchTab($menuList.eq(1)[0], 1);
                    break;
                case anchorName == '#display':
                    switchTab($menuList.eq(2)[0], 2);
                    break;
                case anchorName == '#contact':
                    switchTab($menuList.eq(3)[0], 3);
                    break;
                default:
                    break;
            }
        },
        afterResize: function () {
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            if (index == 1 && slideIndex == 0) {
                $(this).find('span').addClass('show-word');
                $('#fp-nav').fadeIn();
            } else {
                $.fn.fullpage.setAllowScrolling(false);
                $('#fp-nav').fadeOut();
            }
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            $header.removeClass('fixed-header');
        }
    });

    $('.tab-index').click(function () {
        window.location.hash = 'index';
        switchTab(this, 0);
    });

    $('.tab-download').click(function () {
        window.location.hash = 'download';
        switchTab(this, 1);
    });
    $gotoDownload.click(function () {
        window.location.hash = 'download';
        switchTab($('.tab-download').eq(0)[0], 1);
    });

    $('.download-panel .download-btn').click(function () {
        window.open('http://vr.duc.cn/static/publish/Install/CTdashi_Setup.exe');
    });


    var $slide3 = $('.section:nth-child(1) .slide:nth-child(3)');
    var $slide3ScrollBar = null;
    $slide3.mousewheel(function (event) {
        if (event.deltaY < 0) {
            $header.addClass('fixed-header');
        } else {
            if ($slide3ScrollBar.offset().top < 100) {
                $header.removeClass('fixed-header');
            }
        }
    });

    var flag = false;
    $('.tab-display').click(function () {
        window.location.hash = 'display';
        $slide3ScrollBar = $slide3.find('.slimScrollBar');
        $slide3ScrollBar.on('mousedown', function () {
            flag = true;
        }).on('mouseup', function () {
            flag = false;
        });
        $slide3.on('mousemove', function () {
            if (flag) {
                if ($slide3ScrollBar.offset().top > 70) {
                    $header.addClass('fixed-header');
                } else {
                    $header.removeClass('fixed-header');
                }
            }
        });
        switchTab(this, 2);
    });


    $('.section:nth-child(1) .slide:nth-child(4) .fp-tableCell,.section:nth-child(1) .slide:nth-child(2) .fp-tableCell').css({
        'vertical-align': 'top'
    });
    $('.tab-contact').click(function () {
        window.location.hash = 'contact';
        switchTab(this, 3);
    });

    $('.register-btn span').click(function () {
        window.location.assign('register.html');
    });

    function switchTab(ele, slideIndex) {
        $('.menu li').removeClass('active');
        $(ele).addClass('active');
        if (slideIndex == 0) {
            $.fn.fullpage.setAllowScrolling(true);
            $('#fp-nav').show();
        } else {
            $.fn.fullpage.setAllowScrolling(false);
            $('#fp-nav').hide();
        }
        $.fn.fullpage.moveTo(1, slideIndex);
    }


});