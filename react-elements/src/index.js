import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
const $root = document.querySelector('#root');
ReactDOM.render(heading, $root);
