export enum Suit {
    Cloves = 'Cloves',
    Diamonds = 'Diamonds',
    Hearts = 'Hearts',
    Spades = 'Spades',
}

export enum Color {
    Black,
    Red,
}

interface IValueNames {
    [key: number]: string;
}

export const ValueNames: IValueNames = {
    1: 'Ace',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Jack',
    12: 'Queen',
    13: 'King'
};

export default class Card {
    protected suit: Suit;
    protected value: number;
    public readonly node: HTMLElement;

    public get visible(): boolean {
        return this._visible;
    }

    public set visible(visible: boolean) {
        this._visible = visible;
        this.node.classList.toggle('hidden', !this._visible);
    }

    private _visible: boolean = false;

    constructor(suit: Suit, value: number) {
        this.suit = suit;
        this.value = value;
        this.node = this.buildNode();
    }

    public getSuit(): Suit {
        return this.suit;
    }

    public getValue(): number {
        return this.value;
    }

    public getColor(): Color {
        if (this.suit == Suit.Cloves || this.suit == Suit.Spades) {
            return Color.Black;
        }

        return Color.Red;
    }

    public toString(): string {
        return ValueNames[this.value] + ' of ' + this.suit;
    }

    public reset(): void {
        this.visible = false;
        this.node.remove();
    }

    protected buildNode(): HTMLElement {
        const node = document.createElement('div');
        node.className = 'card hidden';

        node.textContent = this.toString();

        return node;
    }
}