import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/navigation';
import DisplayBody from './components/display_body';
import PageFooter from './components/footer';

require('../css/reset.css');
require('../css/common.css');
require('../css/display.css');


const App = React.createClass({

    render: function () {
        return (
            <div>
                <Navigation activeTab={3}/>
                <DisplayBody/>
                <PageFooter />
            </div>
        );
    }
});

const rootEle = document.createElement('div');
rootEle.id = 'root';
document.body.appendChild(rootEle);
ReactDom.render(<App/>, rootEle);
