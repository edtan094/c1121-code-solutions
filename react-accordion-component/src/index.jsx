import React from 'react';
import ReactDOM from 'react-dom';
import Accordion, { topics } from './accordion';

ReactDOM.render(
  <Accordion topics={topics}/>,
  document.querySelector('#root')
);
