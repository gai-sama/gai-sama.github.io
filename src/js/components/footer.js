import React from 'react';
require('../../css/components/footer.css');

let PageFooter = React.createClass({

    render: function () {
        return (
            <div>
                <div id="more">
                    <div className="wrapper">
                        <ul>
                            <li>产品与服务
                                <ul>
                                    <li><a href="download.html">客户端下载</a></li>
                                    <li><a href="register.html" target="_blank">客户端注册</a></li>
                                    <li><a href="display.html">场景展示</a></li>
                                    <li><a href="help.html">使用帮助</a></li>
                                    <li><a target="_blank" href="http://www.lagou.com/gongsi/71753.html">加入我们</a></li>
                                </ul>
                            </li>

                            <li>友情链接
                                <ul>
                                    <li><a target="_blank" href="http://www.weiruivr.com/">惟锐科技</a></li>
                                    <li><a target="_blank" href="http://www.ypxgt.com/">合肥一品</a></li>
                                    <li><a target="_blank" href="http://sketchupchina.taobao.com/">数联中国商城</a></li>
                                    <li><a target="_blank" href="http://www.duc.cn/">数联网</a></li>
                                    <li><a target="_blank" href="http://ysj.duc.cn/">数联云设计</a></li>
                                    <li><a target="_blank" href="http://modelfount.com/">模方科技</a></li>
                                </ul>
                            </li>

                            <li>合作伙伴
                                <ul>
                                    <li><img src={require('../../img/index/partner_1.png')} alt="汇明"/></li>
                                    <li><img src={require('../../img/index/partner_2.png')} alt="好环境"/></li>
                                    <li><img src={require('../../img/index/partner_3.png')} alt="HONOR"/></li>
                                </ul>
                            </li>
                        </ul>
                        <i></i>
                        <ul>
                            <li className="contact">联系我们
                                <ul>
                                    <li style={{width: '190px'}}>客服热线：400-668-9759转1</li>
                                    <li style={{width: '190px'}}>联系地址：杭州市萧山区经济开发区启迪路198号杭州湾信息港 B-4F</li>
                                    <li style={{height: '10px'}}></li>
                                    <li style={{height: '30px', display: 'block', position: 'relative'}}>
                                        场景大师官方群：
                                        <a target="_blank"
                                           href="http://shang.qq.com/wpa/qunwpa?idkey=b00f2c4e9bfb735460f14062b59ac848c6a26701d4db72313fb461a64cee2326">
                                            <img src="http://pub.idqqimg.com/wpa/images/group.png" title="场景大师官方一群"/>
                                        </a>
                                    </li>
                                    <li style={{height: '30px', display: 'block', position: 'relative'}}>
                                        场景工匠官方群：
                                        <a target="_blank"
                                           href="http://shang.qq.com/wpa/qunwpa?idkey=41a368790ebc10f666c1cf59e7468289df9068f842d8290526681d9bc4cde549">
                                            <img src="http://pub.idqqimg.com/wpa/images/group.png" title="场景工匠官方一群"/>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="focus">关注我们
                                <ul>
                                    <li><img src={require('../../img/qrcode.png')} alt="二维码"/></li>
                                    <li>关注公众号</li>
                                    <li>了解更多资讯</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="site-info">
                    <p>
                        Copyright 2015-2016 惟锐科技 浙ICP备15033916号-4<br/>
                        <a target="_blank"
                           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902000772">
                            <img src={require('../../img/index/police.png')} alt="备案"/>浙公网安备33010902000772号
                        </a>
                    </p>
                </div>
            </div>
        );
    }
});

export default PageFooter;
