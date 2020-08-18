package org.karan.nagendra;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/*
 * 
 * Tutorial 17 - UsingInterfaces to code 
 * 
 * 
 * 	CONCEPT 
 *	
 *	In our example we have created a Triangle and Point which takes the points of the triangle and then prints
 *	points. The triangle class has a method called draw which prints the points of triangle. So in our main 
 *	DrawingApp program we are creating a Triangle instance and then using the bean to get the corresponding 
 *	bean for the triangle and then call the draw method. This type of implementation has a disadvantage that
 *	we are sticking the object of the triangle and then using it. Instead say we have an INTERFACE with draw
 *	method then there can be 'n' number of classes which can implement this INTERFACE and in the getBean method
 *	we will have to get the bean id and the bean for that class will be assigned to it to call draw method.
 *	
 * 
 * 	CONCLUSION 
 * 
 * 	Every time we had to create the variable for each of the class. But now we will just define what type of
 * 	draw method you want to get called in the getBean method and that type of draw method will get called
 * 
 */

public class DrawingApp {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		ShapeOfObject shapeObject = (ShapeOfObject) context.getBean("triangle");
		shapeObject.draw();
		
		((ShapeOfObject)context.getBean("circle")).draw();
	}
}
