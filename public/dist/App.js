import Dealer from "./card/Dealer.js";
import Board from "./Board.js";
export default class App {
    constructor() {
        this.board = new Board;
    }
    newRound() {
        this.board.reset();
        this.board.stock.setCards(Dealer.shuffledDeck());
        // fill each pile, one at a time
        let allPilesFilled = false;
        while (!allPilesFilled) {
            let filledPileCount = 0;
            for (const pile of this.board.piles) {
                if (pile.hasRequiredCards()) {
                    filledPileCount++;
                }
                else {
                    pile.setupWithCard(this.board.stock.pop()); // we know the cards will exist here...right....
                }
            }
            allPilesFilled = filledPileCount === this.board.piles.length;
        }
    }
    draw() {
        const cards = this.board.stock.draw();
        if (cards.length > 0) {
            this.board.waste.add(cards);
        }
        else {
            this.board.stock.setCards(this.board.waste.clear());
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLE1BQU0sTUFBTSxrQkFBa0IsQ0FBQztBQUN0QyxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFFL0IsTUFBTSxDQUFDLE9BQU87SUFBZDtRQUNjLFVBQUssR0FBVSxJQUFJLEtBQUssQ0FBQztJQTZCdkMsQ0FBQztJQTNCVSxRQUFRO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFFakQsZ0NBQWdDO1FBQ2hDLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLENBQUMsY0FBYyxFQUFFO1lBQ3BCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO29CQUN6QixlQUFlLEVBQUUsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO2lCQUNoRzthQUNKO1lBQ0QsY0FBYyxHQUFHLGVBQWUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDaEU7SUFDTCxDQUFDO0lBRU0sSUFBSTtRQUNQLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7Q0FDSiJ9