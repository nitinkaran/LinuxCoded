public class SleepThread extends Thread{
    
    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println("CHILD THREAD "+ i);
            try{
                Thread.sleep(500);
            }catch(InterruptedException e) {
                System.out.println(e);
            }
        }
    }

    public static void main(String[] ars)throws InterruptedException{
        SleepThread t = new SleepThread();
        t.start();
                
        for(int i=1; i<=5; i++){
            Thread.sleep(1000);
            System.out.println("MAINN THREAD "+ i);
        }

    }
}