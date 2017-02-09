import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const LogoIcon = require('../../img/download/logo-icon.png');

export default React.createClass({
    currentIndex: 0,
    tabList: [
        <div key={0} className="scene-0">
            <img src={LogoIcon} alt="logo"/>
            <h1>场景大师</h1>
            <h2>所见即所得&emsp;沟通更简单</h2>
        </div>,
        <div key={1} className="scene-1">
            <img src={LogoIcon} alt="logo"/>
            <p>
                <span>配置要求</span><br/>
                运行环境：&emsp;win7/win8/win10<br/>
                处&nbsp;理&nbsp;器 ：&emsp;Intel或AMD，4核CPU<br/>
                内&emsp;&emsp;存：&emsp;8G以上<br/>
                显&emsp;&emsp;卡：&emsp;GT740或者HD5770以上
            </p>
        </div>,
        <div key={2} className="scene-2">
            <img src={LogoIcon} alt="logo"/>
            <h1>版本更新内容</h1>
            <p id="ver_content">
                ①修复了bug1<br/>
                ②修复了bug2<br/>
                ③修复了bug3<br/>
            </p>
        </div>
    ],
    render: function () {
        const nextIndex = this.props.nextIndex;
        this.currentIndex = nextIndex;
        const tabTransitionOptions = {
            transitionName: 'move-' + this.props.moveDirection,
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        };
        let slideTransitionOptions = {
            transitionName: 'slide-' + this.props.moveDirection,
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        };
        const _this = this;
        return (
            <div>
                <div id="scene-panel">
                    <ReactCSSTransitionGroup {...tabTransitionOptions}>
                        {this.tabList[nextIndex]}
                    </ReactCSSTransitionGroup>

                </div>
                <ul id="slider-bar">
                    {
                        this.tabList.map(function (ele, index) {
                            return (
                                <li key={index + 'i'}
                                    onClick={function () {
                                        _this.props.setNext(index > _this.currentIndex ? 'right' : 'left', index)
                                    }}>
                                    <ReactCSSTransitionGroup {...slideTransitionOptions}>
                                        {index == nextIndex ? <i key={index}></i> : null}
                                    </ReactCSSTransitionGroup>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
});
