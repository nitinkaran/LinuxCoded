#include<iostream>

using namespace std;

class grandParent{

	public : 
		void show(){
			cout<<"GrandParent printed \n";
		}
};

class child1 : virtual public grandParent{

	public : 
		void display(){
			cout<<"child 1 printed \n";
		}
};

class child2 : public virtual grandParent{

	public : 
		void display(){
			cout<<"child 2 printed \n";
		}
};

class derived : public child1, public child2 {

	public :
		void displayDerived () {
			cout<<"Derived displayed \n";
		}
};

int main(){

	derived d;

	/*
		Virtual keyword gives the capability to keep only one show method in 
		the derived class otherwise it will be ambiguous without it
	*/

	d.show();
	
}