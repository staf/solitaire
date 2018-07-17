import Card from "./card/Card.js";
import Dealer from "./card/Dealer.js";
import Board from "./Board.js";

export default class App {
    protected board: Board = new Board;

    public newRound(): void {
        this.board.reset();
        this.board.stock.setCards(Dealer.shuffledDeck());

        // fill each pile, one at a time
        let allPilesFilled = false;
        while (!allPilesFilled) {
            let filledPileCount = 0;
            for (const pile of this.board.piles) {
                if (pile.hasRequiredCards()) {
                    filledPileCount++;
                } else {
                    pile.setupWithCard(this.board.stock.pop()!); // we know the cards will exist here...right....
                }
            }
            allPilesFilled = filledPileCount === this.board.piles.length;
        }
    }

    public draw() {
        const cards = this.board.stock.draw();
        if (cards.length > 0) {
            this.board.waste.add(cards);
        } else {
            this.board.stock.setCards(this.board.waste.clear());
        }
    }
}
