import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      menu: 'closed',
      container: '',
      white: '',
      overlay: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.menu === 'open' && event.target.matches('a')) {
      this.setState(
        { menu: 'closed', container: '', white: '', overlay: '' }
      );
    } else {
      this.setState(
        { menu: 'open', container: 'container', white: 'background-color-white', overlay: 'overlay' }
      );
    }
  }

  render() {
    return (
      <div className= {this.state.overlay}>
        <div className= {'container' + ' ' + this.state.white}>
          <div className="column">
            {this.state.menu === 'closed'
              ? <i onClick={this.handleClick} className="fas fa-bars"></i>
              : <><h1>Menu</h1><div onClick={this.handleClick} className='column'><a>About</a><a>Get Started</a><a>Sign In</a></div></>}
          </div>
        </div>
      </div>
    );
  }
}
