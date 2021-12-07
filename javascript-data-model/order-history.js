var orderHistory = [
  {
    item: 'Javascript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    itemCost: 31.55,
    orderTotal: 34,
    orderPlaced: 'August 4, 2020',
    delivered: 'August 8, 2020',
    returnWindow: 'September 7, 2020',
    shipTo: 'JS Masher',
    orderNumber: '114-394',
    image: 'url javascript'
  },
  {
    item: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    itemCost: 41.33,
    orderTotal: 44.53,
    orderPlaced: 'July 19, 2020',
    delivered: 'July 20, 2020',
    returnwindow: 'August 19, 2020',
    shipTo: 'JS Masher',
    orderNumber: '113-998',
    image: 'url the timeless way of building'
  },
  {
    item: 'Gamecube Controller Adapter',
    author: ' ',
    itemCost: 17.22,
    orderTotal: 15.98,
    orderPlaced: 'July 4, 2020',
    delivered: 'July 7, 2020',
    returnWindow: 'August 5, 2020',
    shipTo: 'JS Masher',
    orderNumber: '114-287',
    image: 'url gamecube controller adapter'
  },
  {
    item: ['Gamecube Controller', 'The Art of Sql'],
    author: [' ', 'Faroult, Stephane'],
    itemCost: [94.95, 33.99],
    orderTotal: 138.93,
    orderPlaced: 'July 3, 2020',
    delivered: 'July 5, 2020',
    returnwindow: 'August 4, 2020',
    shipTo: 'JS Masher',
    orderNumber: '113-288',
    image: ['url gamecube controller', 'url The Art of Sql']
  }
];

console.log(orderHistory[2].itemCost);
console.log(orderHistory[3].item[1]);
