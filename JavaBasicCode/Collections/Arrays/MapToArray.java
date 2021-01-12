import java.util.*;
import java.util.stream.*;
import java.util.stream.Stream;
import java.util.stream.Collectors;

public class MapToArray{
    public static void main(String[] args){
        Map<Integer, Integer> tm = new TreeMap<>();
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

        // System.out.println(tm);
        ArrayList<Integer> list = new ArrayList<>();
        tm.keySet().forEach(item -> list.add(item));
        System.out.println(list);
        list.clear();
        tm.values().forEach(item -> list.add(item));
        System.out.println(list);

        // for(Map.Entry<Integer, Integer> m: tm.entrySet()){
        //     System.out.println(m.getKey()+"  "+m.getValue());
        // }
        tm.entrySet().forEach(item -> System.out.println(item.getKey()+ "  "+ item.getValue()));
        
    }
}