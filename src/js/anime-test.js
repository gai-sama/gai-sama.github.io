import React from 'react';
import ReactDom from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require('../css/anime-test.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      value: '',
      index: 0,
      top: 0,
    };
    this.returnWord = this.returnWord.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // 监听回车事件
    document.onkeydown = (event) => {
      if (event.keyCode === 13) {
        document.getElementById('sendBullet').click = null;
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: ''});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  returnWord() {
    const word = this.myTextInput;
    const index = this.state.index;
    const top = this.state.top;
    if (word === this.state.value) {
      this.setState({word, index: index + 1});
    }
    if (top <= 435) {
      this.setState({top: top + 75});
    } else if (top > 435) {
      this.setState({top: 0});
    }
  }

  render() {
    const item = (
        <div
            className="bullet"
            key={this.state.index}
            style={{top: `${this.state.top}px`, color: `#${((1 << 24) * Math.random() | 0).toString(16)}`}}
        >
          {this.state.word}
        </div>
    );

    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                ref={
                  (ref) => {
                    if (ref !== null && ref.value.trim() !== '') {
                      this.myTextInput = ref.value;
                    }
                  }
                }
                value={this.state.value}
                onChange={this.handleChange}
            />
            <button id="sendBullet" onClick={this.returnWord}>发送弹幕</button>
            <div
                style={{
                  position: 'relative',
                  width: '1200px',
                  height: '500px',
                  margin: 'auto',
                  background: 'rgba(255, 0, 0, 0.1)',
                  overflow: 'hidden',
                }}
            >
              <ReactCSSTransitionGroup
                  transitionName='bullet'
                  transitionEnterTimeout={5000}
                  transitionLeave={false}
              >
                {item}
              </ReactCSSTransitionGroup>
            </div>
          </form>
        </div>
    );
  }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);