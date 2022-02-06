import React from 'react';

export default class Accordion extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      1: 'closed',
      2: 'closed',
      3: 'closed'
    };
    this.handleClick = this.handleClick.bind(this);
    this.showOrHideDescription = this.showOrHideDescription.bind(this);
  }

  showOrHideDescription(number, event) {
    if (this.state[number] === 'closed') {
      this.setState(
        { [number]: 'open' }
      );
    } else if (this.state[number] === 'open') {
      this.setState(
        { [number]: 'closed' }
      );
    }
  }

  handleClick(event) {
    for (const prop in this.state) {
      if (prop === event.target.id) {
        const number = prop;
        this.showOrHideDescription(number, event);
      }
    }
  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic => {
      return (
        <div key={topic.number}>
          <button onClick={this.handleClick} id={topic.number}>
            {topic.title}
          </button>
          <div className={this.state[topic.number] + ' borders description'}>{topic.Description}</div>
        </div>
      );
    });
    return (
      <div className='row direction-column'>{listItems}</div>
    );
  }
}

export const topics = [
  { number: 1, title: 'Hypertext Markup Language', Description: 'HTML' },
  { number: 2, title: 'Cascading Style Sheets', Description: 'CSS' },
  { number: 3, title: 'JavaScript', Description: 'JS' }
];
