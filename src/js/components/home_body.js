import React from 'react';

export default React.createClass({

    render: function () {
        return (
            <div id="page-content">
                <div className="banner"></div>
                <div className="functions">
                    <h1>强大功能特点</h1>
                    <h2>function</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <img src={require('../../img/index/func_icon_1.png')} alt=""/>
                                <p className="func-name">自主上传素材</p>
                            </td>
                            <td>
                                <img src={require('../../img/index/func_icon_2.png')} alt=""/>
                                <p className="func-name">VR体验</p>
                            </td>
                            <td>
                                <img src={require('../../img/index/func_icon_3.png')} alt=""/>
                                <p className="func-name">720°全景漫游</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="for-space">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <img src={require('../../img/index/func_icon_4.png')} alt=""/>
                                <p className="func-name">分享方案效果</p>
                            </td>
                            <td>
                                <img src={require('../../img/index/func_icon_5.png')} alt=""/>
                                <p className="func-name">设计方案保存</p>
                            </td>
                            <td>
                                <img src={require('../../img/index/func_icon_6.png')} alt=""/>
                                <p className="func-name">软装硬装替换</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <h1>核心优势</h1>
                    <h2>advantage</h2>
                </div>
                <div className="advantage display">
                    <div className="wrapper">
                        <img src={require('../../img/index/advantage_1.jpg')}/>
                        <div>
                            <i/>
                            <h3>展示</h3>
                            <h4>场景大师拥有多种方式展示，让产品更生动</h4>
                            <p>可在线输出：效果图、360全景图、VR模式等，突破空间限制，移动场景随时随地展示商品，让您的商品真实地出现在客户眼前，让商品自由发声</p>
                        </div>
                    </div>
                </div>
                <div className="advantage interact">
                    <div className="wrapper">
                        <img src={require('../../img/index/advantage_2.jpg')}/>
                        <div>
                            <i/>
                            <h3>交互</h3>
                            <h4>操作简单，像玩游戏一样玩转场景大师</h4>
                            <p>场景内随意行走，查看不同位置的真实效果<br/>随意替换软装硬装，实时展示替换效果，快速签单<br/>随时保存设计方案，快速进行设计沟通</p>
                        </div>
                    </div>
                </div>
                <div className="advantage share">
                    <div className="wrapper">
                        <img src={require('../../img/index/advantage_3.jpg')}/>
                        <div>
                            <i/>
                            <h3>分享</h3>
                            <h4>手机电脑随意分享，让客户提前看到未来的家</h4>
                            <p>一键生成效果图，分享效果图片<br/>一键生成360全景图，手机随时随地看</p>
                        </div>
                    </div>
                </div>
                <div id="download-panel" className={this.props.move ? 'move' : ''}>
                    <h1>家装行业，是时候改变了！</h1>
                    <button onClick={()=>{
                        window.location.href = '/download.html';
                    }}>立即下载<i>&gt;</i></button>
                    <a href="http://xiazai.zol.com.cn/detail/44/434506.shtml" target="_blank"
                       className="link1">ZOL软件下载</a>
                    <a href="http://dl.pconline.com.cn/download/372583.html?qq-pf-to=pcqq.c2c" target="_blank"
                       className="link2">太平洋软件下载</a>
                </div>
            </div>
        );
    }
});
