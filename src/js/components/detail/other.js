import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <dl>
                <dt>1.场景大师更换账号后，已下载的场景和上传的贴图会不会显示在新账号中？</dt>
                <dd>不会</dd>
                <dt>2.无法登陆自己的账号怎么办？</dt>
                <dd>截图保存提示内容，联系客服</dd>
                <dt>3.我有数联中国的账号，能不能直接使用？</dt>
                <dd>可以使用的，但是为了您能更稳定的使用场景大师，建议您换一个手机在客户端重新注册一个账号使用</dd>
                <dt>4.在已下载的场景内显示“已被删”“已下架”是为什么？</dt>
                <dd>场景已删除或者下架了，用户自己在电脑本地内删除了场景。如发现该情况，请及时联系客服解决。</dd>
            </dl>
        );
    }
});
