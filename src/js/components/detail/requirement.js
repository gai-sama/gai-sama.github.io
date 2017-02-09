import React from 'react';

export default React.createClass({
    render: function () {
        return (
            <dl>
                <dt>1.推荐配置</dt>
                <dd>
                    <table>
                        <tbody>
                        <tr>
                            <th>适用系统：</th>
                            <td>Windows7,8,10</td>
                        </tr>
                        <tr>
                            <th>处&nbsp;理&nbsp;器&nbsp;：</th>
                            <td>Intel或AMD，4核CPU</td>
                        </tr>
                        <tr>
                            <th>内&emsp;&emsp;存：</th>
                            <td>8GB以上</td>
                        </tr>
                        <tr>
                            <th>显&emsp;&emsp;卡：</th>
                            <td>台式机推荐GT740或者HD5770以上<br/>
                                笔记本推荐GTX 570M或者HD8890M以上
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </dd>
            </dl>
        );
    }
});
