import React from 'react';

export default class Carousel extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      image: pokemon[index].image,
      circle: index

    };
    this.moveToTheLeft = this.moveToTheLeft.bind(this);
    this.moveToTheRight = this.moveToTheRight.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.highlightDot = this.highlightDot.bind(this);
  }

  moveToTheRight() {
    index++;
    if (index > 4) {
      index = 0;
    }
    this.setState(
      { image: pokemon[index].image }
    );
    this.highlightDot();
  }

  moveToTheLeft() {
    index--;
    if (index < 0) {
      index = 4;
    }
    this.setState(
      { image: pokemon[index].image }
    );
    this.highlightDot();
  }

  handleClick(event) {
    if (event.target.id === 'right-arrow') {
      this.moveToTheRight();
    }
    if (event.target.id === 'left-arrow') {
      this.moveToTheLeft();
    }
  }

  highlightDot() {
    var $circleButtons = document.querySelectorAll('.circle-button');
    for (let i = 0; i < $circleButtons.length; i++) {
      if (i === index) {
        $circleButtons[i].classList.replace('far', 'fas');
      }
      if (i !== index) {
        $circleButtons[i].classList.replace('fas', 'far');
      }
    }

  }

  move() {
    const intervalID = setInterval(this.moveToTheRight, 3000);
  }

  stop(intervalID) {
    clearInterval(intervalID);
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
                <img src={this.state.image}></img>
              </div>
            </div>
            <div className="column-30">
              <div className="row align-items-center full-height">
                <i onClick={this.handleClick} className="fas fa-chevron-right" id="right-arrow"></i>
              </div>
            </div>
          </div>
          <div className="row justify-center" id="all-of-the-circle-buttons">
            <i className="fas fa-circle padding-left-right circle-button" id="0"></i>
            <i className="far fa-circle padding-left-right circle-button" id="1"></i>
            <i className="far fa-circle padding-left-right circle-button" id="2"></i>
            <i className="far fa-circle padding-left-right circle-button" id="3"></i>
            <i className="far fa-circle padding-left-right circle-button" id="4"></i>
          </div>
        </div>
      </div>
    );
  }
}
let index = 0;
const pokemon = [
  { number: 1, image: '../images/001.png' },
  { number: 2, image: '../images/004.png' },
  { number: 3, image: '../images/007.png' },
  { number: 4, image: '../images/025.png' },
  { number: 5, image: '../images/039.png' }
];
