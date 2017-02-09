import React from 'react';
export default React.createClass({
    dataList: [
        {
            previewImg: require('../../img/display/scene_1.jpg'),
            title: '地中海风格',
            desc: '地中海装修风格给人感觉总是很清爽宜人，如清风拂面，如屹立在大海边上享受着海洋的抚摸',
            link: 'http://pano.panocooker.com/wr/view?id=59571&UI=164633&TS=1474440907&access_token=d2ab66b2b39e2f7cf58ce64785d11f57#',
            qrcodeImg: require('../../img/display/qrcode_1.png')
        },
        {
            previewImg: require('../../img/display/scene_2.jpg'),
            title: '东南亚风格',
            desc: '东南亚风格的家居设计，以其来自热带雨林的自然之美和浓郁的民族特色风靡世界，热带风情是它独有的魅力',
            link: 'http://pano.panocooker.com/pano/worksView?id=30490&UI=169453&TS=1462864586&access_token=97ac90f433d4e2973ecbc521069131f7',
            qrcodeImg: require('../../img/display/qrcode_2.png')
        },
        {
            previewImg: require('../../img/display/scene_3.jpg'),
            title: '美式风格',
            desc: '美式风格源于美国自在、随意的不羁生活方式，没有太多造作的修饰与约束，不经意中也成就了另外一种休闲式的浪漫',
            link: 'http://pano.panocooker.com/wr/view?id=59572&UI=164633&TS=1474441084&access_token=e6124e67006c87e1f1eb6e1b80179202#',
            qrcodeImg: require('../../img/display/qrcode_3.png')
        },
        {
            previewImg: require('../../img/display/scene_4.jpg'),
            title: '现代风格',
            desc: '主张简洁、明快，侧重室内空间科学、合理地利用。随意、舒适、温馨都是现代风格的最佳诠释',
            link: 'http://pano.panocooker.com/wr/view?id=59580&UI=164633&TS=1474442074&access_token=f93253a9edca6c78d0c21480962624d8#',
            qrcodeImg: require('../../img/display/qrcode_4.png')
        },
        {
            previewImg: require('../../img/display/scene_5.jpg'),
            title: '欧式风格',
            desc: '欧式风格在形式上就是以浪漫主义而打造的家居环境，整个风格豪华艳丽、富丽堂皇，充满浓烈的宫廷韵味',
            link: 'http://pano.panocooker.com/pano/worksView?id=30506&UI=169453&TS=1462865649&access_token=b61953255d4063737ba27f12764d7779',
            qrcodeImg: require('../../img/display/qrcode_5.png')
        },
        {
            previewImg: require('../../img/display/scene_6.jpg'),
            title: '新中式风格',
            desc: '作为现代风格与中式风格的结合，新中式风格非常的大胆与包容，以现代人的审美需求来打造富有传统韵味的居室',
            link: 'http://pano.panocooker.com/wr/view?id=59583&UI=164633&TS=1474442581&access_token=532942b5519f4b2d32b063f7d9a83e89',
            qrcodeImg: require('../../img/display/qrcode_6.png')
        }
    ],
    render: function () {
        return (
            <div id="page-content">
                <h1>场景展示</h1>
                <h2>exhibited</h2>
                <table className="scenes">
                    <tbody>
                    {
                        this.dataList.map(function (obj, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <img src={obj.previewImg} alt={obj.title}/>
                                    </td>
                                    <td>
                                        <div className="detail">
                                            <h3>{obj.title}</h3>
                                            <p>{obj.desc}</p>
                                            <a target="_blank" href={obj.link}>查看全景图</a>
                                            <img src={obj.qrcodeImg} alt="二维码"/>
                                            <span>扫描二维码手机浏览</span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
});
