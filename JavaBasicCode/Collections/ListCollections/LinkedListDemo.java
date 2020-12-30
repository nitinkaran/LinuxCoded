import java.util.List;
import java.util.LinkedList;
import java.util.Scanner;
import java.util.Iterator;

public class LinkedListDemo {
    public static void main(String[] args) {

        List<Integer> list = new LinkedList<>();
        List<Integer> auxList = new LinkedList<>();
        Scanner s = new Scanner(System.in);
        int n, i, j, k;

        n = Integer.parseInt(args[0]);
        for(i=0; i<n; i++){
            auxList.add(s.nextInt());
        }

        list.addAll(auxList);
        list.addAll(auxList);

        Iterator<Integer> it = list.iterator();
        while(it.hasNext()){
            System.out.print(it.next()+ "  ");
        }
        System.out.println();

        System.out.println("The item to be removed is 4 : "+ list.remove(4));
        System.out.println(list+ "\nList size now : "+ list.size());

        System.out.println("Item removed using removeIf "+ list.removeIf(item -> item > 10));
        System.out.println(list+ "\nList size now : "+ list.size());
    }   
}