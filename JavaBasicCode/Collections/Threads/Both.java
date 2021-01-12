class Child implements Runnable {
    Thread t;
    Child(String name){
        t = new Thread(this, name);
        t.start();
    }

    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println("Within thread "+ t.getName()+ " for "+ i);
        }
    }
}

class Both {
    public static void main(String[] args){
        // new Child("Child A");
        Thread t = new Thread();
        // t.start();
        t.run();
        for(int i=1; i<=5; i++){
            System.out.println("Within MAIN thread "+ i);
        }
    }
}