import java.util.*;
import java.util.stream.Stream;

class LinkedHashSetDemo {

    public static void main(String[] args){
        Set<Integer> st = new LinkedHashSet<>();
        int a[] = {100, 100, 200, 200, 300, 100, 200, 400, 100, 3,4,4,5,6,7,5,4,3,2,1,
                    1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,1,2,2,3,4,
                    3,5,5,3,2,4,5,3,6,6,4,6,76,7,87,6,56,4,54,5,45,4};
        int i, j, k;

        for(i=0; i<a.length; i++){
            st.add(a[i]);
        }

        System.out.println(st+"\n");
        
        ArrayList<Integer> list = new ArrayList<>();
        Integer[] arr = st.toArray(new Integer[st.size()]);
        Stream.of(arr).forEach(item -> list.add((Integer)item));
        System.out.println(list);

        list.stream().forEach(item -> System.out.print(item+", "));
        System.out.println();

        System.out.println("\nRemove element 100 from set \n");
        st.remove(100);
        System.out.println(st);
    }
}