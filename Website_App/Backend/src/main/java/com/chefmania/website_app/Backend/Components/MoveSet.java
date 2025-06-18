package com.chefmania.website_app.Backend.Components;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MoveSet{
    private ArrayList<Cards> toUse= new ArrayList<>();
    public MoveSet(){
        initializeAllCards();
    }
    public void initializeAllCards(){
        // Initialized all the cards with predefined moves
        List<int[]> movesList1 = new ArrayList<>();
        movesList1.add(new int[]{0, 2});  
        movesList1.add(new int[]{0, -2}); 
        movesList1.add(new int[]{1, -1}); 
        Cards card1 = new Cards("Spaghetti", movesList1);
        toUse.add(card1);

        List<int[]> movesList2 = new ArrayList<>();
        movesList2.add(new int[]{0,1});  
        movesList2.add(new int[]{1, 1}); 
        movesList2.add(new int[]{-1,0}); 
        Cards card2 = new Cards("Wings", movesList2);
        toUse.add(card2);

        List<int[]> movesList3 = new ArrayList<>();
        movesList3.add(new int[]{1, 0});  
        movesList3.add(new int[]{-1, 0}); 
        movesList3.add(new int[]{0, 1});
        Cards card3 = new Cards("Omelette", movesList3);
        toUse.add(card3);

        List<int[]> movesList4 = new ArrayList<>();
        movesList4.add(new int[]{0, 1});  
        movesList4.add(new int[]{0, -1}); 
        movesList4.add(new int[]{0, 2});
        Cards card4 = new Cards("Hotdog", movesList4);
        toUse.add(card4);

        List<int[]> movesList5 = new ArrayList<>();
        movesList5.add(new int[]{0, 1});  
        movesList5.add(new int[]{1, 0}); 
        movesList5.add(new int[]{0,-1});
        Cards card5 = new Cards("Tacos", movesList5);
        toUse.add(card5);

        List<int[]> movesList6 = new ArrayList<>();
        movesList6.add(new int[]{1, 1});  
        movesList6.add(new int[]{0,1}); 
        movesList6.add(new int[]{1,-1});
        Cards card6 = new Cards("Hamburger", movesList6);
        toUse.add(card6);

        List<int[]> movesList7 = new ArrayList<>();
        movesList7.add(new int[]{0, 1});  
        movesList7.add(new int[]{0, -1}); 
        movesList7.add(new int[]{0,-2});
        Cards card7 = new Cards("Curry", movesList7);
        toUse.add(card7);

        List<int[]> movesList8 = new ArrayList<>();
        movesList8.add(new int[]{0,1});  
        movesList8.add(new int[]{0,-1}); 
        movesList8.add(new int[]{0,-2});
        Cards card8 = new Cards("Sushi", movesList8);
        toUse.add(card8);

        List<int[]> movesList9 = new ArrayList<>();
        movesList9.add(new int[]{1,0});  
        movesList9.add(new int[]{0, -1}); 
        movesList9.add(new int[]{-1, 0});
        Cards card9 = new Cards("Mac and Cheese", movesList9);
        toUse.add(card9);

        List<int[]> movesList10 = new ArrayList<>();
        movesList10.add(new int[]{-1, 0});  
        movesList10.add(new int[]{1, -1}); 
        movesList10.add(new int[]{0, -1});
        Cards card10 = new Cards("Steak", movesList10);
        toUse.add(card10);

        List<int[]> movesList11 = new ArrayList<>();
        movesList11.add(new int[]{-1, 0});  
        movesList11.add(new int[]{1, 1}); 
        movesList11.add(new int[]{0, -1});
        Cards card11 = new Cards("Cake", movesList11);
        toUse.add(card11);

        List<int[]> movesList12 = new ArrayList<>();
        movesList12.add(new int[]{-1, 1});  
        movesList12.add(new int[]{-1, -1}); 
        movesList12.add(new int[]{1, -1});
        Cards card12 = new Cards("Salad", movesList12);
        toUse.add(card12);

        List<int[]> movesList13 = new ArrayList<>();
        movesList13.add(new int[]{2,0});  
        movesList13.add(new int[]{-2,-2}); 
        movesList13.add(new int[]{-2, 2});
        Cards card13 = new Cards("Rice", movesList13);
        toUse.add(card13);

        List<int[]> movesList14 = new ArrayList<>();
        movesList14.add(new int[]{1,0});  
        movesList14.add(new int[]{-1,1}); 
        movesList14.add(new int[]{-1, -1});
        Cards card14 = new Cards("Pizza", movesList14);
        toUse.add(card14);

        List<int[]> movesList15 = new ArrayList<>();
        movesList15.add(new int[]{1,0});  
        movesList15.add(new int[]{-1,0}); 
        movesList15.add(new int[]{-2,0});
        Cards card15 = new Cards("Ice cream", movesList15);
        toUse.add(card15);
        
//       for(Cards card :toUse) {
//         for(int[] x:card.getCard()) {
//           int temp = x[0];
//           x[0] = x[1];
//           x[1] = temp;
//         }
//       }
        
    }
  //Return 5 cards that is going to be used for the game
    private List<Cards>randomCards;
    public void resetRandomCards() {
        randomCards = null;
    }
    public List<Cards> getGameCards(){
    	if (toUse == null || toUse.size() < 5) {
            throw new IllegalArgumentException("Not enough cards in toUse to get 5 game cards"+toUse.size());
        }
      if(randomCards==null) {
       List<Cards> copy= new ArrayList<>(toUse);
       Collections.shuffle(copy);
       randomCards=new ArrayList<>(copy.subList(0, 5));
      }
        return randomCards;
        
    }
    public String toString() {
    	String toTest="";
    	for(Cards yourCard: toUse) {
    		toTest+="\n"+ yourCard.toString();
    	}
    	return toTest;
    }
}