package Chef_Mania.Website.Backend;
import package Chef_Mania.Website.Backend.Components;
import java.util.ArrayList;
import java.util.List;


public class Move {
    public Move() {
        // Initialized all the cards with predefined moves
        List<int[]> movesList1 = new ArrayList<>();
        movesList1.add(new int[]{2, 0});  
        movesList1.add(new int[]{-2, 0}); 
        movesList1.add(new int[]{1, -1}); 
        Cards card1 = new Cards("Spaghetti", movesList1);

        List<int[]> movesList2 = new ArrayList<>();
        movesList2.add(new int[]{0, 1});  
        movesList2.add(new int[]{1, 1}); 
        movesList2.add(new int[]{-1, 0}); 
        Cards card2 = new Cards("Wings", movesList2);

        List<int[]> movesList3 = new ArrayList<>();
        movesList3.add(new int[]{0, 1});  
        movesList3.add(new int[]{0, -1}); 
        movesList3.add(new int[]{1, 0});
        Cards card3 = new Cards("Omelette", movesList3);

        List<int[]> movesList4 = new ArrayList<>();
        movesList4.add(new int[]{1, 0});  
        movesList4.add(new int[]{-1, 0}); 
        movesList4.add(new int[]{2, 0});
        Cards card4 = new Cards("Hotdog", movesList4);

        List<int[]> movesList5 = new ArrayList<>();
        movesList5.add(new int[]{1, 0});  
        movesList5.add(new int[]{0, 1}); 
        movesList5.add(new int[]{0, -1});
        Cards card5 = new Cards("Tacos", movesList5);

        List<int[]> movesList6 = new ArrayList<>();
        movesList6.add(new int[]{1, 1});  
        movesList6.add(new int[]{0, 1}); 
        movesList6.add(new int[]{1, -1});
        Cards card6 = new Cards("Hamburger", movesList6);

        List<int[]> movesList7 = new ArrayList<>();
        movesList7.add(new int[]{1, 0});  
        movesList7.add(new int[]{-1, 0}); 
        movesList7.add(new int[]{0, -1});
        Cards card7 = new Cards("Curry", movesList7);

        List<int[]> movesList8 = new ArrayList<>();
        movesList8.add(new int[]{0, 1});  
        movesList8.add(new int[]{0, -1}); 
        movesList8.add(new int[]{0, -2});
        Cards card8 = new Cards("Sushi", movesList8);

        List<int[]> movesList9 = new ArrayList<>();
        movesList9.add(new int[]{1, 0});  
        movesList9.add(new int[]{-1, 0}); 
        movesList9.add(new int[]{0, -1});
        Cards card9 = new Cards("Mac and Cheese", movesList9);

        List<int[]> movesList10 = new ArrayList<>();
        movesList10.add(new int[]{0, -1});  
        movesList10.add(new int[]{-1, -1}); 
        movesList10.add(new int[]{-1, 0});
        Cards card10 = new Cards("Steak", movesList10);

        List<int[]> movesList11 = new ArrayList<>();
        movesList11.add(new int[]{0, -1});  
        movesList11.add(new int[]{1, 1}); 
        movesList11.add(new int[]{-1, 0});
        Cards card11 = new Cards("Cake", movesList11);

        List<int[]> movesList12 = new ArrayList<>();
        movesList12.add(new int[]{1, -1});  
        movesList12.add(new int[]{-1, -1}); 
        movesList12.add(new int[]{-1, 1});
        Cards card12 = new Cards("Salad", movesList12);

        List<int[]> movesList13 = new ArrayList<>();
        movesList13.add(new int[]{2, 0});  
        movesList13.add(new int[]{0, 2}); 
        movesList13.add(new int[]{0, -2});
        Cards card13 = new Cards("Rice", movesList13);

        List<int[]> movesList14 = new ArrayList<>();
        movesList14.add(new int[]{1, 0});  
        movesList14.add(new int[]{-1, 1}); 
        movesList14.add(new int[]{-1, -1});
        Cards card14 = new Cards("Pizza", movesList14);

        List<int[]> movesList15 = new ArrayList<>();
        movesList15.add(new int[]{1, 0});  
        movesList15.add(new int[]{-1, 0}); 
        movesList15.add(new int[]{-2, 0});
        Cards card15 = new Cards("Ice cream", movesList15);
    }
}