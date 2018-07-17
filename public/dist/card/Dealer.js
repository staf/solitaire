import Card, { Suit } from "./Card.js";
export default class Dealer {
    static shuffledDeck() {
        const cards = [];
        for (const suit of [Suit.Spades, Suit.Cloves, Suit.Hearts, Suit.Diamonds]) {
            for (let value = 1; value <= 13; value++) {
                cards.push(new Card(suit, value));
            }
        }
        let shuffleIndex = cards.length;
        let randomIndex;
        let tempCard;
        while (shuffleIndex !== 0) {
            randomIndex = Math.floor(Math.random() * shuffleIndex--);
            tempCard = cards[randomIndex];
            cards[randomIndex] = cards[shuffleIndex];
            cards[shuffleIndex] = tempCard;
        }
        return cards;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVhbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcmQvRGVhbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxPQUFPO0lBQ1YsTUFBTSxDQUFDLFlBQVk7UUFDZixNQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2RSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0o7UUFFRCxJQUFJLFlBQVksR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksV0FBbUIsQ0FBQztRQUN4QixJQUFJLFFBQWMsQ0FBQztRQUNuQixPQUFPLFlBQVksS0FBSyxDQUFDLEVBQUU7WUFDdkIsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDekQsUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDbEM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0oifQ==