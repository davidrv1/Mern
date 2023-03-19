// const sayHello = (name) => {
//     console.log(`Hello ${name}`);
// };

const sayHello = name => console.log(`Hello ${name}`);

sayHello('david');
sayHello('gisselle');
sayHello('mow mow');
// //output:
// // Hello david
// // Hello gisselle
// // Hello mow mow

// const square = n => n * n;

// const returnObjLonghand = () => {
//     return { 
//         firstName: 'John',
//         lastName: 'Wick'
//     }
// }
// returnObjLonghand();
// // console.log(returnObjLonghand);
// // const returnObj = () => { firstName: 'John', lastName: 'Wick' }

// const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

// console.log(firstName);

// class Deck {
//     constructor() {
//     const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//     const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//     const deck = [];
//     for (const suit of suits) {
//         for (const face of faces) {
//     deck.push(this.createCard(suit, face));
//         }
//     }
//     this.deck = deck;
//     }
//     createCard(suit, face) {
//     return face + " of " + suit;
//     }
// }

// const square = n => n * n;
// console.log(square(8));
//64

// const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });
// console.log(returnObjFixed());
//outputs 
//{ firstName: 'John', lastName: 'Wick' }

// let canAfford = (itemPrice, accountBalance) => {
//     return itemPrice > accountBalance
//     ? 'Cannot afford! You are $${itemPrice - accountBalance} short' //? doesn't give a number 
//     : "Can afford";
// };

// let myBankAccountBalance = 1000;
// const drone = 1001;

// let droneOnSale = drone - drone * 0.03;

// console.log(canAfford(drone, myBankAccountBalance));
// console.log(canAfford(droneOnSale, myBankAccountBalance));
// console.log('drone on sale is', droneOnSale);

// class Deck {
//     constructor() {
//     const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//     const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//     const deck = [];
//     suits.forEach(suit => {
//         faces.forEach(face => {
//     deck.push(this.createCard(suit, face));
//         });
//     });
//     this.deck = deck;
//     }
//     createCard(suit, face) {
//     return face + " of " + suit;
//     }
// }

// createCard(Diamond, 2);
// construtor();
// console.log(createCard(Diamond,2));