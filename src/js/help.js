import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory, hashHistory} from 'react-router'

import Navigation from './components/navigation';

import MasterIntro from './components/detail/master_intro';
import LoginIntro from './components/detail/login_intro';
import EditorIntro from './components/detail/editor_intro';
import SceneLib from './components/detail/scene_lib';
import SourceCenter from './components/detail/source_center';
import UserCenter from './components/detail/user_center';
import RegDownload from './components/detail/reg_download';
import Direction from './components/detail/direction';
import Requirement from './components/detail/requirement';
import Other from './components/detail/other';
import ImportantUpdate1 from './components/detail/i_update1';
import ImportantUpdate2 from './components/detail/i_update2';

require('../css/reset.css');
require('../css/common.css');
require('../css/help.css');

const link2Component = [
    {
        name: '场景大师简介',
        link: 'master_intro',
        component: () => <MasterIntro/>
    },
    {
        name: '登录界面介绍',
        link: 'login_intro',
        component: () => <LoginIntro/>
    },
    {
        name: '场景编辑器操作说明',
        link: 'editor_intro',
        component: () => <EditorIntro/>
    },
    {
        name: '客户端操作说明',
        children: [
            {
                name: 'VR场景库',
                link: 'scene_lib',
                component: () => <SceneLib/>
            },
            {
                name: '素材中心',
                link: 'source_center',
                component: () => <SourceCenter/>
            },
            {
                name: '用户中心',
                link: 'user_center',
                component: () => <UserCenter/>
            }
        ]
    },
    {
        name: '常见问题',
        children: [
            {
                name: '注册及下载问题',
                link: 'reg_download',
                component: () => <RegDownload/>
            },
            {
                name: '产品及使用说明',
                link: 'direction',
                component: () => <Direction/>
            },
            {
                name: '客户端配置要求',
                link: 'requirement',
                component: () => <Requirement/>
            },
            {
                name: '其他问题',
                link: 'other',
                component: () => <Other/>
            }
        ]
    },
    {
        name: '重大更新说明',
        children: [
            {
                name: 'R.1.1.3',
                link: 'intro_update1',
                component: () => <ImportantUpdate1/>
            },
            {
                name: 'R.1.2',
                link: 'intro_update2',
                component: () => <ImportantUpdate2/>
            }
        ]
    }
];

const Accordion = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState: function () {
        return {
            openedItem: null
        };
    },
    componentDidMount: function () {

    },
    spread: function (index) {
        this.setState({
            openedItem: this.state.openedItem == index ? null : index
        });
    },
    render: function () {
        const _this = this;
        return (
            <div id="aside">
                <ul>
                    <li style={{height: '14px', backgroundColor: '#00adef', cursor: 'default'}}/>
                    {
                        link2Component.map((item, index) => {
                                if (item.children) {
                                    return (<li className={_this.state.openedItem == index ? 'item opened' : 'item closed'}
                                                key={index}>
                                            <a onClick={_this.spread.bind(_this, index)}>{item.name}<i/></a>
                                            {
                                                _this.state.openedItem == index &&
                                                <ul style={{height: this.state.height + 'px'}}>
                                                    {
                                                        item.children.map((subItem, subIndex) => {
                                                                const path = subItem.link;
                                                                const className = _this.context.router.isActive(path, true) ? 'active sub-item' : 'sub-item';
                                                                return (
                                                                    <li className={className}
                                                                        key={subIndex}
                                                                        onClick={_this.props.changeTitle.bind(_this, subItem.name)}>
                                                                        <Link to={path}>
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        )
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    );
                                } else {
                                    const path = item.link;
                                    const className = _this.context.router.isActive(path, true) ? 'active item' : 'item';
                                    return (
                                        <li className={className}
                                            key={index} onClick={_this.props.changeTitle.bind(_this, item.name)}>
                                            <Link to={path}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                }
                            }
                        )
                    }
                </ul>
            </div>
        );
    }
});


const App = React.createClass({
    getInitialState: function () {
        return {
            title: null
        };
    },
    changeTitle: function (title) {
        console.log(title);
        this.setState({
            title: title
        });
    },
    render: function () {
        return (
            <div>
                <Navigation activeTab={4}/>
                <div className="page-content">
                    <Accordion changeTitle={this.changeTitle}/>
                    <div id="content-panel">
                        <span id="app-ver">场景大师R1.1.2</span>
                        <div className="panel-header">
                            <h1 className="article-title">
                                {this.state.title}
                            </h1>
                        </div>
                        <div className="panel-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const rootEle = document.createElement('div');
rootEle.id = 'root';
document.body.appendChild(rootEle);

ReactDom.render((
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <Route path={'help.html'} component={() => <div></div>}/>
                {
                    link2Component.map((route, index) =>
                        route.children ?
                            route.children.map((subRoute, subIndex) => <Route path={subRoute.link}
                                                                              component={subRoute.component}
                                                                              key={subIndex}/>) :
                            <Route path={route.link} component={route.component} key={index}/>
                    )
                }
            </Route>
        </Router>
    ),
    rootEle
);
