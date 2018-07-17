import Card from "./Card.js";
import DOM from "../DOM.js";

export default class Waste {
    protected cards : Card[] = [];
    public readonly node: HTMLElement;

    constructor() {
        this.node = DOM.div('stock');
    }

    public add(cards: Card[]) {
        // make sure we have the same number of cards visible as the DrawCount?
        this.cards.forEach(c => c.visible = false);
        cards.forEach((card) => {
            card.visible  =true;
            this.cards.push(card);
            this.node.appendChild(card.node); // should be prepend
        });
    }

    public clear(): Card[] {
        let cards = this.cards.reverse().map(c => {
            c.visible = false;
            return c;
        });
        this.cards = [];

        return cards;
    }

    public reset(): void {
        this.cards.forEach(c => c.reset());
        this.cards = [];
    }
}