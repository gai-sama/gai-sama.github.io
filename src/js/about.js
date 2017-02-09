import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/navigation';
import PageFooter from './components/footer';

require('../css/reset.css');
require('../css/common.css');
require('../css/about.css');

const App = React.createClass({
    render: () =>
        <div>
            <Navigation activeTab={5}/>
            <div id="page-content">
                <h1>关于我们</h1>
                <h2>about us</h2>

                <div id="company">
                    <h3>关于惟锐</h3>
                    <p>惟锐（杭州）数字科技有限公司（Digital Union Vray）是专注于虚拟现实内容开发的高科技公司。总部位于杭州市萧山区经济开发区启迪路198号B座4楼。
                        拥有国内前沿的虚拟现实技术和国内顶级研发团队。本着“用虚拟现实，为你再造一个世界”的企业愿景，以地产相关行业为契机，业务范围涉及城市建筑、城市规划、室内样板房、园林景观、数字实验室等相关领域。惟锐科技通过VR技术的研发与推广，通过对虚拟现实技术的深度研发，惟锐科技致力成为国内最大的场景内容提供商。</p>
                </div>

                <div id="ctdashi">
                    <h3>关于场景大师</h3>
                    <p>
                        场景大师是基于UE4引擎和3DsMax技术建模技术开发的家居、家装定制工具和内容共享平台，平台通过IT三维信息链接、DT三维数据处理、三维建模、VR虚拟现实技术、AR现实增强技术、360实景等酷炫数字等创新技术，完成专业级的行业展示、交互、分享等功能，让普通用户和专业设计用户制作出属于自己的VR定制场景。此外，用户还可以通过PC端、移动端、VR设备全方位体验真实家装场景，真正做到“所见即所得”的效果。</p>
                </div>
            </div>

            <div id="address">
                <div className="map"></div>
                <div className="infoBox">
                    <div className="info">
                        <h4>惟锐（杭州）数字科技有限公司</h4>
                        <p>地址：杭州市萧山区杭州湾信息港B座4楼</p>
                        <p>电话：400-668-9759 转 1</p>
                        <p>服务时间：9：00 - 17：00</p>
                        <p>客服邮箱：3374973703@qq.com</p>
                    </div>
                    <div className="title">关注我们</div>
                    <div className="follow">
                        <a className="btn" target="-_blank"
                           href="http://weibo.com/u/5769337022?refer_flag=1001030101_&is_all=1" title="访问官方微博">
                            <img src={require('../img/about/wb.png')} alt="微博"/>
                        </a>
                        <a href="javascript:void(0)" title="关注公众号" className="btn wx-btn">
                            <img className="wx-icon" src={require('../img/about/wx.png')} alt="微信"/>
                            <img className="qrcode" src={require('../img/qrcode.png')} alt="二维码"/>
                        </a>
                        <a className="btn" href="http://wpa.qq.com/msgrd?v=3&uin=3374973703&site=qq&menu=yes"
                           target="_blank"
                           title="联系QQ客服">
                            <img src={require('../img/about/qq.png')} alt="QQ"/>
                        </a>
                    </div>
                    <div className="qrcode"></div>
                </div>
            </div>
            <PageFooter />
        </div>
});

const rootEle = document.createElement('div');
rootEle.id = 'root';
document.body.appendChild(rootEle);

ReactDom.render(<App/>, rootEle);
