import java.util.*;
import java.util.stream.*;
class SetIterate{
    public static void main(String[] args){
        Set<Integer> set = new LinkedHashSet<Integer>();
        int a[] = {100, 100, 200, 200, 300, 100, 200, 400, 100, 3,4,4,5,6,7,5,4,3,2,1};
        int i, j, k;

        for(i=0; i<a.length; i++){
            // if(set.isEmpty()){
            //     set.add(a[i]);
            // }
            if(!set.contains(a[i])){
                set.add(a[i]);
            }
        }

        Iterator<Integer> it = set.iterator();
        while(it.hasNext() ){
            System.out.print(it.next()+ " ");
        }
        System.out.println();

        Integer[] arr = set.toArray(new Integer[set.size()]);
        Stream.of(set.toArray()).forEach(item -> System.out.print(item+" "));
        ArrayList<Integer> list = new ArrayList<>();
        Stream.of(set.toArray()).forEach(item -> {
            Object o = item;
            int c = (Integer)o;
            list.add(c);});
        System.out.println(list);

    }
}