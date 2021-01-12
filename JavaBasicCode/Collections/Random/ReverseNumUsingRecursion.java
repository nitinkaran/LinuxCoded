class ReverseNumUsingRecursion {

    public static int getDigits(int num){
        int count=0;
        while(num > 0){
            count++;
            num = num/10;
        }
        return count;
    }

    public static int getPower(int digits){
        int i, j=1;
        for(i=1; i<=digits; i++){
            j=j*10;
        }
        return j;
    }

    public static int rev(int a, int digits){
        if(digits == 1){
            return a;
        }
        int temp = a%10;
        int currentDigit = getDigits(a/10);
        int val = rev(a/10,digits-1);
        return getPower(currentDigit)*temp + val;
    }

    public static void main(String[] args){

        int a=123456789, digits=0, temp=a;
        digits = getDigits(a);

        System.out.println("previous A = "+a);
        a = rev(a, digits);
        System.out.println(a);
    }
}