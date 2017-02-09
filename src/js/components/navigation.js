import React from 'react';
require('../../css/components/navigation.css');

let Navigation = React.createClass({
    getInitialState: function () {
        return {
            fixed: false,
            showSubMenu: false,
            scrollBarWidth: this.props.activeTab == 'download' ? getScrollBarWidth() : 0
        };
    },

    componentDidMount: function () {
        window.addEventListener('scroll', this.navigationScroll);
    },

    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.navigationScroll);
    },

    navigationScroll: function (e) {
        let scrollTop = e.srcElement.body.scrollTop;
        scrollTop >= 10 ?
            !this.state.fixed && this.setState({
                fixed: true
            }) :
            this.state.fixed && this.setState({
                fixed: false
            });
    },

    render: function () {
        return (
            <div id="page-header" className={this.state.fixed ? 'fixing' : ''}
                 style={{paddingRight: this.state.scrollBarWidth, boxSizing: 'border-box'}}>
                <div>
                    <span>场景大师</span>
                    <div id="register-btn">
                        <a href="register.html" target="_blank">注册</a>
                    </div>
                    <ul className="nav">
                        <li className={this.props.activeTab == 1 ? "active" : null}>
                            <a href="/home.html">首页</a>
                        </li>
                        <li className={this.props.activeTab == 2 ? "active" : null}>
                            <a href="/download.html"
                               onMouseEnter={this.handleMouseEnter}
                               onMouseLeave={this.handleMouseLeave}
                            >下载</a>
                            <ul id="sub-down" style={{display: this.state.showSubMenu ? 'block' : 'none'}}
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleMouseLeave}
                            >
                                <li><a href="/download.html">下载</a></li>
                                <li><a href="/version.html">版本日志</a></li>
                            </ul>
                        </li>
                        <li className={this.props.activeTab == 3 ? "active" : null}>
                            <a href="/display.html">场景展示</a>
                        </li>
                        <li className={this.props.activeTab == 4 ? "active" : null}>
                            <a href="/help.html">使用帮助</a>
                        </li>
                        <li className={this.props.activeTab == 5 ? "active" : null}>
                            <a href="/about.html">关于我们</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    },
    subMenuTimer: 0,
    handleMouseEnter: function () {
        window.clearTimeout(this.subMenuTimer);
        this.setState({
            showSubMenu: true
        });
    },
    handleMouseLeave: function () {
        let _this = this;
        _this.subMenuTimer = window.setTimeout(function () {
            _this.setState({
                showSubMenu: false
            });
        }, 100);
    }
});

/**
 * 获取滚动条宽度
 * @returns {number}
 */
function getScrollBarWidth() {
    let oP = document.createElement('p');
    oP.style.width = '100px';
    oP.style.height = '100px';
    oP.style.overflowY = 'scroll';
    document.body.appendChild(oP);
    let scrollBarWidth = oP.offsetWidth - oP.clientWidth;
    oP.parentNode.removeChild(oP);  // 删除节点（兼容IE8）
    return scrollBarWidth;
}

Navigation.propTypes = {
    activeTab: React.PropTypes.string.isRequired,
    fixed: React.PropTypes.bool
};

export default Navigation;
