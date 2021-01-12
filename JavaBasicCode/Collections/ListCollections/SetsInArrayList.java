import java.util.*;
import java.util.stream.*;

class SetsInArrayList {
    static public void main(String[] args){
        ArrayList<Set<Integer>> list = new ArrayList<Set<Integer>>();
        Set<Integer> s;
        int i, j, k=10;

        for(i=0; i<10; i++){
            s = new HashSet<Integer>();
            for(j=0; j<5; j++){
                s.add(k++);
            }
            list.add(s);
        }

        for(i=0; i<list.size(); i++){
            s = new HashSet<Integer>();
            s = list.get(i);
            System.out.println("After iteration "+ (i+1));
            Stream.of(s).forEach(item -> System.out.print(item+ " "));
            System.out.println();
        }
        
    }
}