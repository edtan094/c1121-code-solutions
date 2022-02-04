import React from 'react';

export default class Stopwatch extends React.Component {
  // constructor(prop) {
  //   super(prop);
  // }

  render() {
    return (
      <div>
        <div className='circle row justify-center align-center'>
          <span>0</span>
        </div>
        <div className='row justify-center margin-top'>
          <i className='fas fa-play'></i>
        </div>
      </div>
    );
  }
}
