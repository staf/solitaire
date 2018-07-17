import DOM from "../DOM.js";
import Card, { Suit } from "./Card.js";

export default class Foundation {
    public suit: Suit | undefined;
    public cards: Card[] = [];
    public readonly node: HTMLDivElement;
    
    public constructor() {
        this.node = DOM.div('foundation');
    }

    public reset() {
        this.cards.forEach(c => c.reset());
        this.suit = undefined;
    }
}
