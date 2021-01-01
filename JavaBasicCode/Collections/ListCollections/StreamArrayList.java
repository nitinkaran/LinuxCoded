import java.util.List;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.Iterator;
import java.util.stream.*;

public class StreamArrayList {

    public static void main(String[] args) {

        List<Integer> list = new ArrayList<>();
        List<Integer> auxList = new ArrayList<>();

        int n, i, j, k;
        Scanner s = new Scanner(System.in);

        System.out.println("Enter the size of array");
        n = s.nextInt();

        for(i=0; i<n; i++){
            auxList.add(s.nextInt());
        }

        // DEMO OF addAll METHOD
        list.addAll(auxList);
        list.addAll(auxList);

        System.out.println("Printed the list using streams");
        list.stream().forEach(item -> System.out.print(item+ " "));
        System.out.println();

        auxList.clear();
        auxList = list.stream().collect(Collectors.toList());
        System.out.println(auxList);

        auxList.stream().filter(item -> item % 2 == 0).forEach(item -> System.out.print(item + " "));
        System.out.println();

        Integer arr[] = auxList.stream().toArray(Integer[]::new);
        Stream.of(arr).forEach(System.out::println);
        // System.out.println("Array index 0 is : "+arr[0]);


        System.out.println();
        auxList.stream().map(item -> item*19).forEach(System.out::println);
        System.out.println("\n\n"+auxList);

    }

}