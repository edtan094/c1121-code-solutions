import React from 'react';

export default class Accordion extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      open: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.showOrHideDescription = this.showOrHideDescription.bind(this);
  }

  showOrHideDescription(event) {
    if (this.state.open === parseFloat(event.target.id)) {
      this.setState({ open: null });
    } else {
      this.setState({ open: parseFloat(event.target.id) });
    }
  }

  handleClick(event) {
    this.showOrHideDescription(event);
  }

  render() {
    const topics = this.props.topics;
    const listItems = topics.map(topic => {
      return (
        this.state.open === topic.number
          ? <div key={topic.number}>
            <button onClick={this.handleClick} id={topic.number}>
            {topic.title}
          </button>
          <div className="borders description">{topic.Description}</div>
        </div>
          : <div key={topic.number}>
            <button onClick={this.handleClick} id={topic.number}>
              {topic.title}
            </button>
            <div className={'closed' + ' borders description'}>{topic.Description}</div>
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

// if ()
