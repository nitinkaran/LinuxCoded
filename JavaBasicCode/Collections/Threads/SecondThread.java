class Child implements Runnable {
    Thread t;
    Child(String name){
        t = new Thread(this, name);
        t.start();
    }

    public void run(){
        for(int i=1; i<=5; i++){
            System.out.println("Within thread "+ t.getName()+ " for "+ i + " times");
        }
    }
}

class SecondThread {
    public static void main(String[] args){
        new Child("Child A");
        new Child("Child B");
        new Child("Child C");
        new Child("Child D");
        for(int i=1; i<=5; i++){
            System.out.println("Within MAIN thread ");
        }
    }
}