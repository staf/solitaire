import Card from "./card/Card.js";
import Pile from "./card/Pile.js";
import Stock from "./card/Stock.js";
import Waste from "./card/Waste.js";
import DOM from "./DOM.js";
import Foundation from "./card/Foundation.js";

export default class Board {
    protected node: HTMLDivElement;
    public stock: Stock = new Stock();
    public waste: Waste = new Waste();
    public piles: Pile[] = [];
    public readonly foundations: Foundation[] = [];

    public constructor() {
        for (let i = 0; i < 7; i++) {
            this.piles.push(new Pile(i));
        }

        for (let i = 0; i < 4; i++) {
            this.foundations.push(new Foundation());
        }

        this.node = DOM.div('board');
        this.initialRender();
        document.body.appendChild(this.node);
        document.getElementById('loader')!.remove();
    }

    protected initialRender() {
        const top = DOM.div('top flex', [
            this.stock.node,
            this.waste.node,
            DOM.div('empty', ['&nbsp;'])
        ].concat(this.foundations.map(f => f.node)));
        this.node.appendChild(top);

        this.node.appendChild(DOM.div('bottom flex', this.piles.map(p => p.node)))
    }

    public renderCards(): void {

    }

    public reset(): void {
        this.piles.forEach(p => p.reset());
        this.stock.reset();
        this.waste.reset();
    }
}
