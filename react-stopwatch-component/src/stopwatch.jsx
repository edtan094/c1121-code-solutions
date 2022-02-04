import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      paused: true,
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.intervalID = null;
  }

  handleClick() {
    if (this.state.paused === true) {
      this.setState(
        {
          paused: false
        }
      );
      this.timer();
    } else {
      this.setState(
        {
          paused: true
        }
      );
      clearInterval(this.intervalID);
    }
  }

  timer() {
    this.intervalID = setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter + 1
      }
      ));
    }, 1000);
  }

  clearTimer() {
    if (this.state.paused === true) {
      this.setState({
        counter: 0
      });
    }
  }

  render() {
    return (
        <div>
          <div className='circle row justify-center align-center'>
            <span onClick={this.clearTimer}>{this.state.counter}</span>
          </div>
          <div className='row justify-center margin-top'>
          {this.state.paused === true
            ? <i onClick={this.handleClick} className='fas fa-play'></i>
            : <i onClick={this.handleClick} className="fas fa-pause"></i>}
          </div>
        </div>
    );
  }
}
