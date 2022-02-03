import React from 'react';

export default class CustomToggle extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      status: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.status === true) {
      return (
      <div onClick={this.handleClick} className='switch'>
        <span className='on'>
          ON
        </span>
      </div>
      );
    } else if (this.state.status === false) {
      return (
        <div onClick={this.handleClick} className='switched'>
          <span className='off'>
            OFF
          </span>
        </div>
      );
    }
  }

  handleClick() {
    if (this.state.status === true) {
      this.setState({
        status: false
      });
    } else {
      this.setState({
        status: true
      });
    }
  }
}
