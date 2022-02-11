import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemons = [
  { image: '../images/001.png' },
  { image: '../images/004.png' },
  { image: '../images/007.png' },
  { image: '../images/025.png' },
  { image: '../images/039.png' }
];

ReactDOM.render(
  <Carousel pokemons={pokemons}/>,
  document.querySelector('#root')
);
