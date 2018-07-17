import Card from "./Card.js";
import DOM from "../DOM.js";
import Settings from "../Settings.js";

export default class Stock {
    public cards: Card[] = [];
    public readonly node: HTMLElement;

    constructor() {
        this.node = DOM.div('stock');
    }

    public pop(): Card | undefined {
        return this.cards.pop();
    }

    public draw(): Card[] {
        const cards: Card[] = [];

        for (let i = 0; i < Settings.DrawCount; i++) {
            const card = this.cards.pop();
            if (card) {
                this.node.removeChild(card.node);
                cards.push(card);
            }
        }

        return cards;
    }

    public setCards(cards: Card[]) {
        this.cards = cards;
        cards.forEach(c => this.node.appendChild(c.node));
    }

    public reset(): void {
        this.cards.forEach(c => c.reset());
        this.cards = [];
    }
}
