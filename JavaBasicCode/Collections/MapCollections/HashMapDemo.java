import java.util.*;
import java.util.stream.Stream;

class HashMapDemo {

    public static void main(String[] args){
        Map<Integer, Integer> mp = new HashMap<>();
        int a[] = {100, 100, 200, 200, 300, 100, 200, 400, 100, 3,4,4,5,6,7,5,4,3,2,1,
                    1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,1,2,2,3,4,
                    3,5,5,3,2,4,5,3,6,6,4,6,76,7,87,6,56,4,54,5,45,4};
        int i, j, k;

        for(i=0; i<a.length; i++){
            // if(!mp.containsKey(a[i])){
            //     mp.put(a[i],1);
            // }
            // else{
            //     j=mp.get(a[i]);
            //     mp.replace(a[i], j+1);
            // }
            if(mp.containsKey(a[i])){
                mp.replace(a[i], mp.get(a[i])+1);
            }
            mp.putIfAbsent(a[i], 1);
        }

        System.out.println(mp+"\n");
        
        ArrayList<Integer> list = new ArrayList<>();
        mp.keySet().forEach(item -> list.add(item));
        list.stream().forEach(item -> System.out.print(item+ "  "));
        System.out.println();

        list.clear();
        mp.values().forEach(item -> list.add(item));
        list.stream().forEach(item -> System.out.print(item+ "  "));
        System.out.println();
    }
}