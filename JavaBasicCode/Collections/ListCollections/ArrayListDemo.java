import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Iterator;

public class ArrayListDemo {

    public static void main(String[] args) {

        List<Integer> list = new ArrayList<>();
        ArrayList<Integer> auxList = new ArrayList<>();

        int n, i, j, k;
        Scanner s = new Scanner(System.in);

        System.out.println("Enter the size of array");
        n = s.nextInt();
        // THIS WORKS BUT NEED TO TYPECAST IT
        // n = Integer.parseInt(args[0]);

        for(i=0; i<n; i++){
            auxList.add(s.nextInt());
        }

        // DEMO OF addAll METHOD
        list.addAll(auxList);
        list.addAll(auxList);

        System.out.println(list);

        System.out.println("Enter the index of ELEMENT to be removed");
        i = s.nextInt();

        // DEMO OF remove METHOD WHICH TAKES INDEX OF ELEMENT TO BE REMOVED
        k = list.remove(i);
        System.out.println("The element has been removed : "+ k);
        System.out.println("Size of array before clear : "+ list.size() + " \nElements of array now : "+ list);

        // DEMO OF CLEAR METHOD WHICH CLEARS THE ENTIRE LIST
        auxList.clear();
        System.out.println("Size of array afte CLEAR operation : "+ auxList.size() + " \nElements of array now : "+ auxList);

        // add METHOD APPENDS THE DATA TO END OF LIST
        auxList.add(9);
        auxList.add(8);
        auxList.add(7);

        // set METHOD REPLACES THE ELEMENT AT THAT LOCATION
        auxList.set(0, 95);

        // add METHOD WITH INDEX AND ELEMENT TO BE INSERTED AT THE LOCATION. BUT INSERTION MUST BE 
        // SEQUENTIAL OTHERWISE INSERTION AT THE FAR LOCATION WILL RESULT IN arrayIndexOutOfBound
        // EXCEPTION
        auxList.add(3, 75);
        auxList.add(4, 175);
        auxList.add(5, -5);
        System.out.println("Elements to be removed now : "+ auxList);

        // DMEO OF removeAll MEHTOD TO REMOVE ALL ELEMENTS SPECIFIED IN THE LIST auxList
        list.removeAll(auxList);
        System.out.println("Size of array : "+ list.size() + " \nElements of array now : "+ list);

        // DEMO OF contains METHOD WHICH RETURNS TRUE/FALSE
        System.out.println("Does array contains 5 : "+  list.contains(5));

        auxList.clear();
        auxList.add(3);
        auxList.add(10);

        // DEMO OF containsAll METHOD TO SHOW WHETER THE LIST CONTAINS ALL SPECIFIED ELEMENTS
        System.out.println("Whether list contains all elements : " +auxList+ "\n" +list.containsAll(auxList));


        // DEMO  OF get METHOD
        System.out.println("GET Element at index 1 and 2 : " + list.get(1) + " and " +list.get(2) );

        Iterator<Integer> it = list.iterator();

        while(it.hasNext()){
            System.out.print(it.next()+ "  ");
        }
        System.out.println();
        System.out.println("\n Remove the elements which are greater than 4");
        list.removeIf(item -> item > 4);
        System.out.println(list);




    }

}