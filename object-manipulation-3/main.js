console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'Edwin',
    hand: [],
    score: 0
  },
  {
    name: 'Steve',
    hand: [],
    score: 0
  },
  {
    name: 'Ian',
    hand: [],
    score: 0
  },
  {
    name: 'Raymond',
    hand: [],
    score: 0
  }

];

function createCards() {
  var cardDeck = [];
  var possibleCards = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
  var possibleSuits = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var possibleCardsIndex = 0; possibleCardsIndex < possibleCards.length; possibleCardsIndex++) {
    for (var possibleSuitsIndex = 0; possibleSuitsIndex < possibleSuits.length; possibleSuitsIndex++) {
      var card = {};
      card.rank = possibleCards[possibleCardsIndex];
      card.suit = possibleSuits[possibleSuitsIndex];
      cardDeck.push(card);
    }
  }
  return cardDeck;
}

var cardDeck = createCards();

function dealCards(array, numberOfCards) {
  var shuffledCardDeck = _.shuffle(cardDeck);
  console.log('shuffled deck', shuffledCardDeck);
  for (var playersIndex = 0; playersIndex < array.length; playersIndex++) {
    for (var deckIndex = 0; deckIndex < numberOfCards; deckIndex++) {
      array[playersIndex].hand.push(shuffledCardDeck[deckIndex]);
    }
    shuffledCardDeck.splice(0, numberOfCards);
  }
}

dealCards(players, 2);
console.log('players with cards', players);

function countThePlayersScore(array) {
  for (var playersIndex = 0; playersIndex < array.length; playersIndex++) {
    for (var playersHandIndex = 0; playersHandIndex < array[playersIndex].hand.length; playersHandIndex++) {
      if (array[playersIndex].hand[playersHandIndex].rank === 'ace') {
        array[playersIndex].score += 11;
      }
      if (array[playersIndex].hand[playersHandIndex].rank === 'jack' || array[playersIndex].hand[playersHandIndex].rank === 'queen' || array[playersIndex].hand[playersHandIndex].rank === 'king') {
        array[playersIndex].score += 10;
      }
      if (typeof array[playersIndex].hand[playersHandIndex].rank === 'number') {
        array[playersIndex].score += array[playersIndex].hand[playersHandIndex].rank;
      }
    }
  }
}

countThePlayersScore(players);
console.log('players with cards and score', players);

function findTheWinningPlayer(array) {
  var highestScore = 0;
  var playerWithHighestScore;
  var playerIndexWithHighestScore = null;
  for (var playersIndex = 0; playersIndex < array.length; playersIndex++) {
    if (highestScore < array[playersIndex].score) {
      highestScore = array[playersIndex].score;
      playerWithHighestScore = array[playersIndex].name;
      playerIndexWithHighestScore = playersIndex;
    }
  }
  for (playersIndex = 0; playersIndex < array.length; playersIndex++) {
    if (highestScore === array[playersIndex].score && playersIndex !== playerIndexWithHighestScore) {
      return playTheGame(players, 2);
    }
  }
  return playerWithHighestScore;
}

console.log('The winner is: ', findTheWinningPlayer(players));

function playTheGame(array, numberOfCards) {
  createCards();
  dealCards(array, numberOfCards);
  countThePlayersScore(array);
  return findTheWinningPlayer(array);

}

var newPlayers = [
  {
    name: 'Edwin',
    hand: [],
    score: 0
  },
  {
    name: 'Matt',
    hand: [],
    score: 0
  },
  {
    name: 'Raymond',
    hand: [],
    score: 0
  },
  {
    name: 'Haseeb',
    hand: [],
    score: 0
  }

];

console.log('The winner of the whole new game is', playTheGame(newPlayers, 2));
