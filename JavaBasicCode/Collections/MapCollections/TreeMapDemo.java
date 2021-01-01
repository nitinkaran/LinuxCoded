import java.util.*;
import java.util.stream.Stream;
import java.util.stream.Collectors;

public class TreeMapDemo{
    public static void main(String[] args){
        Map<Integer, Integer> tm = new TreeMap<>();
        // int a[] = {1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,1,2,2,3,4,
        // 3,5,5,3,2,4,5,3,6,6,4,6,76,7,87,6,56,4,54,5,45,4};
        int a[] = {100, 100, 200, 200, 300, 100, 200, 400, 100, 3,4,4,5,6,7,5,4,3,2,1};
        int i, j, k;

        for(i=0; i<a.length; i++){
            if(!tm.containsKey(a[i])){
                tm.put(a[i],1);
            }
            else{
                j=tm.get(a[i]);
                tm.replace(a[i], j+1);
            }
        }

        System.out.println(tm);
        tm.clear();
        System.out.println(tm);

        for(i=0; i<a.length; i++){
            if(tm.containsKey(a[i])){
                tm.replace(a[i], tm.get(a[i])+1);
            }
            tm.putIfAbsent(a[i],1);
        }
        System.out.println(tm);

        // METHOD 1 - to get Array of keys
        System.out.println("METHOD 1 - to get Array of keys");
        Set<Integer> set = tm.keySet();
        Integer[] array = set.toArray(new Integer[set.size()]);
        int[] intArray = new int[array.length];
        for(i=0; i<array.length; i++){
            intArray[i] = array[i];
        }

        for(j=0; j<intArray.length; j++){
            System.out.print(intArray[j]+"  ");
        }
        System.out.println();

        // METHOD 2 - shorter form of METHOD 1
        System.out.println("METHOD 2 - shorter form of METHOD 1");
        Integer[] array1 = tm.keySet().toArray(new Integer[tm.keySet().size()]);
        Stream.of(array1).forEach(item -> System.out.print(item+ " "));
        System.out.println();

        // METHOD 3 - using only keys
        System.out.println("METHOD 3 - using only keys with ketSet() method");
        ArrayList<Integer> list = new ArrayList<>();
        tm.keySet().forEach(item -> list.add(item));
        list.stream().forEach(item -> System.out.print(item+ " "));
        System.out.println();
        

        // METHOD 4 - get array of values using values() method
        System.out.println("METHOD 4 - get array of values using values() method");
        list.clear();
        tm.values().forEach(item -> list.add(item));
        list.stream().forEach(item -> System.out.print(item+ " "));
        System.out.println();

        
    }
}