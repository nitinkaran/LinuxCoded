public class GetThreadName extends Thread {

    public void run(){
        for(int i=1; i<=3; i++){
            System.out.println("CHILD : "+ " "+ i);    
        }
    }

    public static void main(String[] ags){        

        GetThreadName t1 = new GetThreadName();
        
        t1.start();
        System.out.println(Thread.currentThread());
        t1.setPriority(10);
        for(int i=1; i<=3; i++){
            System.out.println("MAIN : "+ " "+ i);    
        }
    }
}