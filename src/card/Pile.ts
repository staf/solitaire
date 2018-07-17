import Card from "./Card.js";
import DOM from "../DOM.js";

export default class Pile {
    protected number: number;
    public readonly node: HTMLElement;
    public hidden: Card[] = [];
    public visible: Card[] = [];

    constructor(number: number) {
        this.number = number;
        this.node = DOM.div('pile');
    }

    public hasRequiredCards(): boolean {
        if (this.hidden.length < this.number) {
            return false;
        }

        return this.visible.length >= 1;
    }

    public setupWithCard(card: Card) {
        if (this.hidden.length < this.number) {
            this.hidden.push(card);
        } else {
            card.visible = true;
            this.visible.push(card);
        }
        this.node.appendChild(card.node);
    }

    public reset(): void {
        this.hidden.forEach(c => c.reset());
        this.visible.forEach(c => c.reset());
        this.hidden = [];
        this.visible = [];
    }
}