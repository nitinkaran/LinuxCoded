import java.util.*;

class WinGame {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int t;
        float a, b;
        t = sc.nextInt();
        while(t>0){
            a = sc.nextFloat();
            b = sc.nextFloat();
            System.out.println(a/(a+b) );
            t--;
        }        
    }
}