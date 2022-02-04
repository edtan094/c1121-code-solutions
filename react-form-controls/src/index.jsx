import React from 'react';
import ReactDOM from 'react-dom';

export default class NewsletterForm extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        value: event.target.value
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input onChange={this.handleChange} value={this.state.value} name='email'></input>
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
