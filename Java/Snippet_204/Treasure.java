package Java.Snippet_204;
import Card;
public class Treasure extends Card {
    public void drawCard() {
        if(kickedDoor() && lootRoom() && checkedForV()) { // TODO: checking methods
            System.out.println("draw a card"); // TODO: draw card
        }
    }
}