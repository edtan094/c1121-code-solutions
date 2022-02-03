import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.isClicked === false) {
      return <button onClick = {this.handleClick}>Click me!</button>;
    } else {
      return <button onClick={this.handleClick}>Thank you!</button>;
    }
  }

  handleClick() {
    this.setState(
      { isClicked: true }
    );
  }
}

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
