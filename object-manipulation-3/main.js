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
  for (var cardNumber = 1; cardNumber < 14; cardNumber++) {
    for (var suit = 1; suit < 5; suit++) {
      var card = {};
      if (cardNumber === 1) {
        card.rank = 'ace';
      }
      if (cardNumber > 1 && cardNumber < 11) {
        card.rank = cardNumber;
      }
      if (cardNumber === 11) {
        card.rank = 'jack';
      }
      if (cardNumber === 12) {
        card.rank = 'queen';
      }
      if (cardNumber === 13) {
        card.rank = 'king';
      }
      if (suit === 1) {
        card.suit = 'clubs';
      }
      if (suit === 2) {
        card.suit = 'diamonds';
      }
      if (suit === 3) {
        card.suit = 'hearts';
      }
      if (suit === 4) {
        card.suit = 'spades';
      }
      cardDeck.push(card);
    }
  }
  return cardDeck;
}
var cardDeck = createCards();

function dealCards() {
  var shuffledCardDeck = _.shuffle(cardDeck);
  console.log('shuffled deck', shuffledCardDeck);
  for (var playersIndex = 0; playersIndex < players.length; playersIndex++) {
    for (var deckIndex = 0; deckIndex < 2; deckIndex++) {
      players[playersIndex].hand.push(shuffledCardDeck[deckIndex]);
    }
    shuffledCardDeck.splice(0, 2);
  }
}

dealCards();
console.log('players with cards', players);

function countThePlayersScore() {
  for (var playersIndex = 0; playersIndex < players.length; playersIndex++) {
    for (var playersHandIndex = 0; playersHandIndex < players[playersIndex].hand.length; playersHandIndex++) {
      if (players[playersIndex].hand[playersHandIndex].rank === 'ace') {
        players[playersIndex].score += 11;
      }
      if (players[playersIndex].hand[playersHandIndex].rank === 'jack' || players[playersIndex].hand[playersHandIndex].rank === 'queen' || players[playersIndex].hand[playersHandIndex].rank === 'king') {
        players[playersIndex].score += 10;
      }
      if (typeof players[playersIndex].hand[playersHandIndex].rank === 'number') {
        players[playersIndex].score += players[playersIndex].hand[playersHandIndex].rank;
      }
    }
  }
}

countThePlayersScore();
console.log('players with cards and score', players);

function findTheWinningPlayer() {
  var highestScore = 0;
  var playerWithHighestScore;
  for (var playerIndex = 0; playerIndex < players.length; playerIndex++) {
    if (highestScore < players[playerIndex].score) {
      highestScore = players[playerIndex].score;
      playerWithHighestScore = players[playerIndex];
    }
  }
  return playerWithHighestScore;
}

console.log('The winner is: ', findTheWinningPlayer());
