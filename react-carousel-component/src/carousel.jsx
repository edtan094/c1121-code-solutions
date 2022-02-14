import React from 'react';

export default class Carousel extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      activeIndex: 0

    };
    this.moveToTheLeft = this.moveToTheLeft.bind(this);
    this.moveToTheRight = this.moveToTheRight.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
    this.beginInterval = this.beginInterval.bind(this);
  }

  moveToTheRight() {
    if (this.state.activeIndex >= this.props.pokemons.length - 1) {
      this.setState({
        activeIndex: 0
      });
    } else {
      this.setState(
        {
          activeIndex: this.state.activeIndex + 1
        }
      );
    }
    this.resetInterval();

  }

  moveToTheLeft() {
    if (this.state.activeIndex <= 0) {
      this.setState({
        activeIndex: this.props.pokemons.length - 1
      });
    } else {
      this.setState(
        {
          activeIndex: this.state.activeIndex - 1
        }
      );
    }
    this.resetInterval();
  }

  handleClick(event, index) {
    if (event.target.id === 'right-arrow') {
      this.moveToTheRight();
    }
    if (event.target.id === 'left-arrow') {
      this.moveToTheLeft();
    }
    if (event.target.className.includes('circle-button')) {
      this.setState(
        {
          activeIndex: index
        }
      );
      this.resetInterval();
    }
  }

  beginInterval() {
    this.interval = setInterval(this.moveToTheRight, 3000);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.beginInterval();
  }

  componentDidMount() {
    this.beginInterval();
  }

  render() {
    return (
      <div className="container">
        <div className="border">
          <div className="row">
            <div className="column-30">
              <div className="row align-items-center full-height justify-end">
                <i onClick={this.handleClick} className="fas fa-chevron-left" id="left-arrow"></i>
              </div>
            </div>
            <div className="column">
              <div className="row justify-center">
                <img src={this.props.pokemons[this.state.activeIndex].image}></img>
              </div>
            </div>
            <div className="column-30">
              <div className="row align-items-center full-height">
                <i onClick={this.handleClick} className="fas fa-chevron-right" id="right-arrow"></i>
              </div>
            </div>
          </div>
          <div className="row justify-center" id="all-of-the-circle-buttons">
            {this.props.pokemons.map((pokemon, index) => {
              return <i onClick={event => this.handleClick(event, index)} key={index} className={this.state.activeIndex === index ? 'fas fa-circle padding-left-right circle-button' : 'far fa-circle padding-left-right circle-button'}></i>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
