class A extends Thread{
    public void run(){
        for(int i=1; i<=3; i++){
            System.out.println("In Thread A "+ i);
        }
    }
}

class B extends Thread{
    public void run(){
        for(int i=1; i<=3; i++){
            System.out.println("In Thread B "+ i);
        }
    }
}

class C extends Thread{
    public void run(){
        for(int i=1; i<=3; i++){
            System.out.println("In Thread C "+ i);
        }
    }
}

class FirstThread {

    public static void main(String[] args){
        new A().start();
        new B().start();
        new C().start();
        for(int i=1; i<=3; i++){
            System.out.println("In MAIN Thread "+ i);
        }
    }

}