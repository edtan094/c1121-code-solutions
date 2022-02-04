import React from 'react';
// let icon = 'fas fa-check';
export default class ValidatedInput extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      value: '',
      icon: 'fas fa-check',
      text: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      { value: event.target.value }
    );
    if (event.target.value.length > 0 && event.target.value.length < 8) {
      this.setState(
        {
          icon: 'fas fa-times',
          text: 'Your password is too short.'
        }
      );
    } else if (event.target.value.length >= 8) {
      this.setState(
        {
          icon: 'fas fa-check',
          text: null
        }
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.length === 0) {
      this.setState(
        { text: 'A password is required.' }
      );
    }
  }

  render() {
    return (
      <div>
        <div className='container row'>
          <form onSubmit={this.handleSubmit}>
            <label >Password
              <input onChange={this.handleChange} type="password" value={this.state.value} name='password'></input>
            </label>
          </form>
          {this.state.value.length ? <i className={this.state.icon}></i> : null}
        </div>
        <p className='error-message red'>{this.state.text}</p>
      </div>
    );
  }
}
