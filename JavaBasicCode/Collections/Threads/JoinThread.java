public class JoinThread extends Thread{
    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println("CHILD THREAD "+ i);
        }
    }

    public static void main(String[] ars){
        JoinThread t = new JoinThread();
        // try{
        //     t.join();
        // }
        // catch(InterruptedException e){
        //     System.out.println(e);
        // }
        t.start();
        try{
            t.join();
        }
        catch(InterruptedException e){
            System.out.println(e);
        }
        
        for(int i=1; i<=5; i++){
            System.out.println("MAINN THREAD "+ i);
        }

    }
}