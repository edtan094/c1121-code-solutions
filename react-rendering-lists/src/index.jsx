import React from 'react';
import ReactDOM from 'react-dom';

function PokemonList(props) {
  const pokedex = props.pokedex;
  const listItems = pokedex.map(pokemon => {
    return (
    <li key={pokemon.number.toString()}>
      {pokemon.name}
      </li>
    );
  });
  return (
    <ul>{listItems}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <PokemonList pokedex={pokedex}/>,
  document.querySelector('#root')
);
