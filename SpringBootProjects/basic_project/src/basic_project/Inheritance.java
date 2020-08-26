package basic_project;

class A {
	A() {
		System.out.println("Class A");
	}
}

class B extends A {
	B() {
		System.out.println("Class B");
	}
}

class C extends B {
	C() {
		System.out.println("Class C");
	}
}

public class Inheritance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		C c = new C();
	}
}
