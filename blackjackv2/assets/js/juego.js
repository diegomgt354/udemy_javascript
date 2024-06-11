// C -> Clubs
// D -> Diaminds
// H -> Hearts
// S -> Spades

let deck = [];
let types = ['C', 'D', 'H', 'S'];
let specials = ['A', 'J', 'Q', 'K'];
const createDeck = () => {
    for (let i = 2; i < 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let special of specials) {
        for (let type of types) {
            deck.push(special + type)
        }
    }
    deck = _.shuffle(deck)
}
createDeck();
console.log(deck);