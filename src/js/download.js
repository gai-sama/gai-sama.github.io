import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/navigation';
import TabsPanel from './components/tabs_panel';

require('../css/reset.css');
require('../css/download.css');

let App = React.createClass({
    getInitialState: function () {
        return {
            nextIndex: 0,
            moveDirection: 'right',
        };
    },
    componentDidMount: function () {
        window.addEventListener('mousewheel', this.handleWheel);
        window.addEventListener('DOMMouseScroll', this.handleWheel);
        let scriptEle = document.createElement('script');
        scriptEle.src = 'http://vr.duc.cn/pub/api/recent/list';
        document.body.appendChild(scriptEle);
    },
    wheelTimer: 0,
    handleWheel: function (e) {
        if (this.wheelTimer) return false;
        let delta = (e.wheelDelta && (e.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.detail && (e.detail > 0 ? -1 : 1));  // firefox
        let targetIndex = this.state.nextIndex + delta;
        if (targetIndex < 0) {
            targetIndex = 2;
        } else if (targetIndex > 2) {
            targetIndex = 0;
        }
        this.setState({
            moveDirection: delta > 0 ? 'right' : 'left',
            nextIndex: targetIndex
        });
        this.wheelTimer = window.setTimeout(function () {
            this.wheelTimer = 0;
        }.bind(this), 300);
    },
    setNext: function (moveDirection, nextIndex) {
        this.setState({
            moveDirection: moveDirection,
            nextIndex: nextIndex
        });
    },
    render: function () {
        return (
            <div>
                <Navigation activeTab={2}/>
                <div id="page-content">
                    <TabsPanel moveDirection={this.state.moveDirection} nextIndex={this.state.nextIndex}
                               setNext={this.setNext}/>
                    <button>立即下载</button>
                    <div className="client-info">
                        <span id="ver_num" className="version">版本：V2.3-release</span>
                        <span id="ver_date" className="time">更新：2016-08-15</span>
                    </div>
                </div>
                <div className="sky"></div>
                <div className="cloud1"></div>
                <div className="plane">
                    <div className="propeller"></div>
                </div>
                <div className="cloud2"></div>
            </div>
        );
    }
});

const rootEle = document.createElement('div');
rootEle.id = 'root';
document.body.appendChild(rootEle);
ReactDom.render(<App/>, rootEle);
