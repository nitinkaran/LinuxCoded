#include<iostream>

using namespace std;

class Base1{

	public : 
		Base1(){
			cout<<"Base1 constructor called \n";
		}

		~Base1(){
			cout<<"Base1 destructor called \n";
		}
};

class Base2{

	public : 
		Base2(){
			cout<<"Base2 constructor called \n";
		}

		~Base2(){
			cout<<"Base2 destructor called \n";
		}
};

class Base3{

	public : 
		Base3(){
			cout<<"Base3 constructor called \n";
		}

		~Base3(){
			cout<<"Base3 destructor called \n";
		}
};

class Derived : public Base2, public Base1, public Base3 {

	public :
		Derived(){
			cout<<"Derived constructor called \n";
		}

		~Derived(){
			cout<<"Derived destructor called \n";
		}
};

int main(){

	Derived d;

	return 0;
}