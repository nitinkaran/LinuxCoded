#include<iostream>

using namespace std;

class Base{

	public : 
		void show(){
			cout<<"Base method printed \n";
		}

		virtual void display() {
			cout<<"Base display method printed \n";
		}
};

class Derived : public Base {

	public :
		void show(){
			cout<<"derived method printed \n";
		}

		void display() {
			cout<<"derived display method printed \n";
		}
};

int main(){

	Base b, *bptr;
	Derived d;

	cout<<"----------------------- PRINTING BASE METHODS -----------------------\n";
	bptr = &b;
	cout<<"BASE METHOD SHOW : ";bptr->show();
	cout<<"BASE METHOD DISP : ";bptr->display();
	
	cout<<"----------------------- PRINTING DERIVED METHODS -----------------------\n";
	bptr = &d;
	cout<<"DERIVED METHOD SHOW : ";bptr->show();
	cout<<"DERIVED METHOD DISP : ";bptr->display();

	return 0;
}