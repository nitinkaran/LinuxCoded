import java.util.*;
import java.util.stream.*;

class Array1 {
    public static void main(String[] args){
        int[] a = new int[5];
        for(int i=0; i<5; i++){
            System.out.print(a[i]+" ");
        }
        System.out.println();
        Arrays.fill(a, -1);
        for(int i=0; i<5; i++){
            System.out.print(a[i]+" ");
        }
        System.out.println();
        Stream.of(a).forEach(item -> System.out.println(item));
    }
}