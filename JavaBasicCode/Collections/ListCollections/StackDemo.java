import java.util.*;

public class StackDemo {
    public static void main(String[] args){

        Stack<Integer> stk = new Stack<Integer>();
        stk.push(10);
        stk.push(20);
        stk.push(30);
        stk.push(40);
        stk.push(50);
        System.out.println(stk+"\n");

        System.out.println("Top element of Stack : "+ stk.peek());
        System.out.println("Size of stack : "+ stk.size());
        System.out.println("Remove top item of stack : "+ stk.pop()+ "\nSize of stack now : "+ stk.size()+" \n\n"+stk);

    }
}