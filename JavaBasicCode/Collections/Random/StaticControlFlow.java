public class StaticControlFlow {
    // StaticControlFlow f = new StaticControlFlow();
    
    static int i=10;
    static {
        methodOne("FIRST STATIC BLOCK");
        System.out.println("WIthin Static Block");
    }

    public static void main(String[] a){
        new StaticControlFlow();        
        System.out.println("---------------------------------------------");        
        methodOne("MAIN");
        System.out.println("From MAIN METHOD");
    }

    StaticControlFlow(){
        System.out.println("---------------------------------------------");
        methodOne("FROM CONSTRUCTOR");
    }

    public static void methodOne(String s){
        System.out.println("Within MethodOne from "+ s);
    }

    static{
        System.out.println("---------------------------------------------");
        System.out.println("WIthin  SECOND Static Block");
        methodOne("SECOND 2nd STATIC BLOCK");
    }

}