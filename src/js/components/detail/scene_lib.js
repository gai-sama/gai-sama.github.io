import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div>

                <img src={require('../../../img/help/scene_lib_1.jpg')} alt="VR场景库"/>
                <p>VR场景库中的搜索功能，只能针对于场景名称进行搜索</p>
                <dl>
                    <dt>1、顶栏导航栏：</dt>
                    <dd>
                        <p>
                            在导航栏可进行场景库、素材库、个人中心进行跳转切换。<br/>
                            VR场景库内包含已上架的所有场景，可以按照筛选规则进行选择查看。<br/>
                            素材中心内包含已上架的所有硬装、软装。<br/>
                            用户中心即为用户操作的页面。<br/>
                        </p>
                    </dd>
                    <dt>2、顶栏用户表示：</dt>
                    <dd>
                        <p>
                            点击用户标示则直接跳转为用户中心的帐号管理。
                        </p>
                    </dd>
                    <dt>3、选择显示栏：</dt>
                    <dd>
                        <img src={require('../../../img/help/scene_lib_2.png')} alt="VR场景库"/>
                        <p>
                            筛选之后，选择筛选栏后面会出现相应的筛选项，点击插号可关闭筛选项，再次刷新，重新筛选。
                        </p>
                    </dd>
                    <dt>4、主要筛选栏：</dt>
                    <dd>
                        <p>
                            筛选栏有三个筛选条目：风格、空间、品牌<br/>
                            筛选条目下的筛选项都为单选，点击全部自动清空该筛选条目下的内容，点击更多可查看未全部显示的筛选。
                        </p>
                    </dd>
                    <dt>5、场景下载：</dt>
                    <dd>
                        <img src={require('../../../img/help/scene_lib_3.png')} alt="VR场景库"/>
                        <p>
                            如果场景下载完成，鼠标移入场景时显示打开按钮，点击可进入场景
                        </p>
                        <img src={require('../../../img/help/scene_lib_4.jpg')} alt="VR场景库"/>
                        <p>
                            点击场景缩略图，显示场景详情页面，可在该页面进行下载或者打开该场景
                        </p>
                    </dd>
                </dl>
            </div>
        );
    }
});
