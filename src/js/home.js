import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './components/navigation';
import HomeBody from './components/home_body';
import PageFooter from './components/footer';

require('../css/reset.css');
require('../css/common.css');
require('../css/home.css');

let App = React.createClass({

    getInitialState: function () {
        return {
            move: false
        };
    },
    componentDidMount: function () {
        window.addEventListener('scroll', this.homeScroll);
    },

    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.homeScroll);
    },

    homeScroll: function (e) {
        let scrollTop = e.srcElement.body.scrollTop;
        scrollTop < 2600 && this.state.move && this.setState({
            move: false
        });
        scrollTop >= 2700 && !this.state.move && this.setState({
            move: true
        });
    },

    render: function () {
        return (
            <div>
                <Navigation activeTab={1}/>
                <HomeBody move={this.state.move}/>
                <PageFooter />
            </div>
        );
    }
});


ReactDom.render(
    <App />,
    document.getElementById('root')
);
