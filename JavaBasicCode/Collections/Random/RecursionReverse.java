public class RecursionReverse {

    static{
        RecursionReverse r = new RecursionReverse();
        System.out.println("IN STATIC");
    }

    RecursionReverse(){
        System.out.println("IN CONST");
    }

    public static void rev(int a[], int n) {
        if(n==0){
            a[a.length-1] = a[n];
            return;
        }
        int temp = a[n];
        rev(a, n-1);
        a[a.length-1-n] = temp;
    }

    public static void main(String[] args){
        RecursionReverse r = new RecursionReverse();
        int a[] = {1,2,3,4,5, 6, 7, 8, 9, 10};
        rev(a, 9);
        for(int i=0; i<10; i++){
            System.out.print(a[i]+ " ");
        }
        System.out.println();
        
    }
}