import java.util.*;

class Parent{
    int x = 55;

    Parent(){
        System.out.println("Parent CONSTRUCTOR CALLED");
    }

    public void m1(){
        System.out.println("In Parent");
    }
}

class Child extends Parent{
    int x=100;
    Child(){
        System.out.println("Child CONSTRUCTOR CALLED");
    }
    public void m1(){
        System.out.println("In CHILD");
    }
}

public class OverrideVariable{

    void OverrideVariable(){
        System.out.println("OverrideVariable constructor called");
    }

    public static void main(String[] args){
        
        Child c = new Child();
        Parent p = new Parent();
        System.out.println("PArent "+p.x);
        System.out.println("Child  "+c.x);
        Parent ref = new Child();
        System.out.println("REF    "+ref.x);

        p.m1();
        c.m1();
        ref.m1();
        OverrideVariable o = new OverrideVariable();
    }
}
