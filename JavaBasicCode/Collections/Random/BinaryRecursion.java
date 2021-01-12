import java.util.*;

class BinaryRecursion {

    public static void printBinary(int num, StringBuilder s){
        if(num ==0 || num==1){
            s.append(num);
            return;
        }
        printBinary(num/2, s);
        s.append(num%2);
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int testCases;
        StringBuilder s;
        testCases = sc.nextInt();
        while(testCases > 0){
            s = new StringBuilder("");
            int num = sc.nextInt();
            printBinary(num, s);
            System.out.println(s);
            testCases--;
        }        
    }
}