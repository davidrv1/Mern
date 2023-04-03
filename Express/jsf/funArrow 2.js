class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
        faces.forEach(face => {
        deck.push(this.createCard(suit, face));
        });
    });
    this.deck = deck;
    }
    createCard(suit, face) {
    return face + " of " + suit;
    }
}
console.log(constructor);