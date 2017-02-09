/**
 * Created by ck on 2016/4/25.
 */
!function () {

    var origin = 'cjds-web';  // 请求来源(默认来自PC)
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        origin = 'cjds-ios';
    } else if (/(Android)/i.test(navigator.userAgent)) {
        origin = 'cjds-android';
    }

    // 火狐自动填充表单bug
    var inputObjs = document.getElementsByTagName('input');
    for (var i = 0; i < inputObjs.length; i++) {
        inputObjs[i].value = '';
        inputObjs._valid = false;
    }

    var identityInput = document.getElementById('identity'),
        downBtn = document.getElementById('down-btn'),
        options = document.getElementById('options'),
        imgCodeInput = document.getElementById('img-code'),
        codeImg = document.getElementById('code-img'),
        codeBtn = document.getElementById('code-btn'),
        phoneInput = document.getElementById('phone'),
        msgCodeInput = document.getElementById('msg-code'),
        registerBtn = document.getElementById('register-btn'),
        pwdInput = document.getElementById('password'),
        checkbox = document.getElementById('agree'),
        agreeBtn = document.getElementById('checkbox'),
        tips = document.getElementById('tips');
    var tipsContent = tips.getElementsByTagName('span')[0];
    document.onclick = hideOptions;
    identityInput.onclick = toggleOptions;
    downBtn.onclick = toggleOptions;
    options.onclick = selectOption;
    registerBtn.onclick = submitInfo;

    var content = '';
    phoneInput._reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    imgCodeInput._reg = /^[0-9a-zA-Z]{5,}$/;  // 待定
    msgCodeInput._reg = /^[0-9a-zA-Z]+$/;  // 待定
    pwdInput._reg = /^.+$/;
    phoneInput.oninput = verifyContent;
    imgCodeInput.oninput = verifyContent;
    msgCodeInput.oninput = verifyContent;
    pwdInput.oninput = verifyContent;

    codeImg.onclick = flushImg;
    codeBtn.onclick = sendCode;
    agreeBtn._valid = true;
    checkbox.onchange = function () {
        agreeBtn._valid = checkbox.checked;
        updateRegisterStatus();
    };

    flushImg();

    /**
     * 验证输入内容
     */
    function verifyContent() {
        content = this.value;
        this._valid = !!content.match(this._reg);
        updateRegisterStatus();
    }

    /**
     * 切换下拉框显示状态
     */
    function toggleOptions(event) {
        event = event || window.event;
        event.stopPropagation();
        if (downBtn.className === 'active') {
            options.style.display = 'none';
            downBtn.className = '';
        } else {
            options.style.display = 'block';
            downBtn.className = 'active';
        }
    }

    function hideOptions() {
        options.style.display = 'none';
        downBtn.className = '';
    }

    /**
     * 回调_选择身份
     */
    function selectOption(event) {
        event = event || window.event;
        event.stopPropagation();
        var target = event.target || event.srcElement;
        identityInput.value = target.innerHTML;
        identityInput._realValue = target.id;
        identityInput.className = 'active';
        options.style.display = 'none';
        downBtn.className = '';
        identityInput._valid = true;
        updateRegisterStatus();
    }

    /**
     * 刷新图片验证码
     */
    function flushImg(e, msg) {
        imgCodeInput._valid = false;
        if (!!imgCodeInput.value) {
            imgCodeInput.focus();
            imgCodeInput.value = '';
        }
        codeImg.src = "http://www.weiruict.com/cjds/pcode?ver=" + Math.random();
        showTips(msg ? msg : '');
    }

    /**
     * 发送短信验证码
     * @returns {boolean}
     */
    function sendCode() {
        if (codeBtn.timer) return false; // 倒计时中禁止点击
        if (!phoneInput._valid) {
            showTips('错误的手机号');
            phoneInput.focus();
            phoneInput.select();
            // 页面滚动到底部，防止输入法遮住提示信息
            document.body.scrollTop = (document.body.scrollHeight - document.body.clientHeight);
            return false;
        }
        if (!imgCodeInput._valid) {
            showTips('图片验证码格式错误');
            imgCodeInput.focus();
            imgCodeInput.select();
            // 页面滚动到底部，防止输入法遮住提示信息
            document.body.scrollTop = (document.body.scrollHeight - document.body.clientHeight);
            return false;
        }
        countdown(60);
        ajaxInvoke('/cjds/register/sendCode', 'post', {
            'mobile': phoneInput.value,
            'securityCode': imgCodeInput.value
        }, function (responseText) {
            var ret = JSON.parse(responseText);
            if (ret.success) {
                codeBtn._valid = true;
                updateRegisterStatus();
            } else {
                if (ret.code == -103) {
                    flushImg(null, '验证码错误');
                } else {
                    showTips(ret.errMsg);
                }
                window.clearInterval(codeBtn.timer);
                codeBtn.innerHTML = '获取验证码';
                codeBtn.timer = null;
            }
        })
    }

    /**
     * 更新注册按钮可点击状态
     */
    function updateRegisterStatus(msg) {
        showTips(msg ? msg : '');
        registerBtn.className = codeBtn._valid && identityInput._valid && phoneInput._valid && imgCodeInput._valid && msgCodeInput._valid && pwdInput._valid && agreeBtn._valid ? 'active' : '';
    }


    var timer = null;

    /**
     * 显示提示
     * @param msg
     */
    function showTips(msg) {
        if (msg) {
            tipsContent.innerHTML = msg;
            window.clearTimeout(timer);
            timer = twinkle(3, 150);
        } else {
            tips.style.opacity = '0';
            tipsContent.innerHTML = '';
        }
    }

    var _twinkleTimer = null;

    /**
     * 提示内容闪烁
     * @param times 闪烁次数
     * @param speed 频率
     * @returns {boolean}
     */
    function twinkle(times, speed) {
        window.clearInterval(_twinkleTimer);
        tips.style.opacity = tips.style.opacity === '1' ? '0' : (times-- && '1');
        _twinkleTimer = window.setInterval(function () {
            times < 1 ? window.clearInterval(_twinkleTimer) : tips.style.opacity = tips.style.opacity === '1' ? '0' : (times-- && '1');
        }, speed);
    }

    /**
     * 重新发送倒计时
     */
    function countdown(time) {
        codeBtn.innerHTML = '重新发送 (' + (time--) + 's)';
        codeBtn.timer = window.setInterval(function () {
            if (!time) {
                window.clearInterval(codeBtn.timer);
                codeBtn.innerHTML = '获取验证码';
                codeBtn.timer = null;
            } else {
                codeBtn.innerHTML = '重新发送 (' + (time--) + 's)';
            }
        }, 1000);
    }

    /**
     * 提交表单
     */
    function submitInfo() {

        if (registerBtn.className != 'active') {

            switch (true) {
                case !identityInput._valid:
                    showTips('请选择您的身份');
                    break;
                case !phoneInput._valid:
                    phoneInput.focus();
                    showTips('请检查手机号');
                    break;
                case !imgCodeInput._valid:
                    imgCodeInput.focus();
                    showTips('请检查图片验证码');
                    break;
                case !codeBtn._valid:
                    showTips('请先发送短信验证码');
                    break;
                case !msgCodeInput._valid:
                    msgCodeInput.focus();
                    showTips('请检查短信验证码');
                    break;
                case !pwdInput._valid:
                    showTips('请检查密码');
                    break;
                case !agreeBtn._valid:
                    showTips('请阅读《场景大师使用协议》');
                    break;
            }
            // 页面滚动到底部，防止输入法遮住提示信息
            document.body.scrollTop = (document.body.scrollHeight - document.body.clientHeight);
        } else {
            var params = {
                'identity': parseInt(identityInput._realValue.replace('op_', '')),
                'mobile': phoneInput.value,
                'code': msgCodeInput.value,
                'pwd1': pwdInput.value,
                'pwd2': pwdInput.value,
                'origin': origin
            };
            ajaxInvoke('/cjds/register', 'post', params, function (responseText) {
                var ret = JSON.parse(responseText);
                if (ret.success) {
                    window.location.assign('register_success.html');
                } else {
                    showTips(ret.errMsg);
                }

            });
        }
    }

    /**
     * ajax调用
     * @param url 请求地址
     * @param type 请求类型（get/post）
     * @param params 请求参数
     * @param onSuccess 成功回调（返回响应的 字符串 ）
     * @param onError 失败回调
     */
    function ajaxInvoke(url, type, params, onSuccess, onError) {

        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) { // IE5、6
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xhr != null) {
            var paramsStr = '';
            if (params) {
                for (var p in params) {
                    if (params.hasOwnProperty(p)) {
                        paramsStr += (p + '=' + params[p] + '&');
                    }
                }
                paramsStr = paramsStr.replace(/^(.*)&$/, '$1');
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    xhr.status == 200 ? onSuccess && onSuccess(xhr.responseText) : onError && onError(xhr);
                }
            };
            if (type.toLowerCase() == 'get') {
                url += '?' + paramsStr;
                xhr.open(type, url, true);
                xhr.send(null);
            } else if (type.toLowerCase() == 'post') {
                xhr.open(type, url, true);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(paramsStr);
            }
        } else {
            console.error("您的浏览器不支持XMLHTTP。");
        }
    }

}();