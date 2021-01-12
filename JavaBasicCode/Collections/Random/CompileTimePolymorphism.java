class Test{

    public void m1(int a){
        System.out.print("INTEGER  ");
        System.out.println(a);
    }

    public void m1(float a){
        System.out.print("FLOAT  ");
        System.out.println(a);
    }

}

class CompileTimePolymorphism {

    public static void main(String[] args) {
        Test t = new Test();
        t.m1('a');
        t.m1(43);
        t.m1(10.5f);
        t.m1(101);
    }
}