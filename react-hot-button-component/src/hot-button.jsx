import React from 'react';

export default class CustomButton extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      className: 'none',
      buttonCounter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.buttonCounter >= 18) {
      return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>;
    } else if (this.state.buttonCounter >= 15) {
      return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>;
    } else if (this.state.buttonCounter >= 12) {
      return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>;
    } else if (this.state.buttonCounter >= 9) {
      return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>;
    } else if (this.state.buttonCounter >= 6) {
      return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>;
    } else if (this.state.buttonCounter >= 3) {
      return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>;
    } else { return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>; }
  }

  hotButton() {
    if (this.state.buttonCounter >= 18) {
      return 'eighteen';
    } else if (this.state.buttonCounter >= 15) {
      return 'fifteen';
    } else if (this.state.buttonCounter >= 12) {
      return 'twelve';
    } else if (this.state.buttonCounter >= 9) {
      return 'nine';
    } else if (this.state.buttonCounter >= 6) {
      return 'six';
    } else if (this.state.buttonCounter >= 3) {
      return 'three';
    }
  }

  handleClick() {
    this.setState(
      {
        className: this.hotButton(),
        buttonCounter: this.state.buttonCounter + 1
      }
    );
  }
}
