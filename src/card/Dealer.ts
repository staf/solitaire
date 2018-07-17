import Card, { Suit } from "./Card.js";

export default class Dealer {
    static shuffledDeck(): Card[] {
        const cards: Card[] = [];
        for (const suit of [Suit.Spades, Suit.Cloves, Suit.Hearts, Suit.Diamonds]) {
            for (let value = 1; value <= 13; value++) {
                cards.push(new Card(suit, value));
            }
        }

        let shuffleIndex: number = cards.length;
        let randomIndex: number;
        let tempCard: Card;
        while (shuffleIndex !== 0) {
            randomIndex = Math.floor(Math.random() * shuffleIndex--);
            tempCard = cards[randomIndex];
            cards[randomIndex] = cards[shuffleIndex];
            cards[shuffleIndex] = tempCard;
        }

        return cards;
    }
}
