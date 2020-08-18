package org.karan.nagendra;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/*
 * 
 *	TUTORIAL 18 - Introduction to Annotations
 * 
 * 
 * 
 *	CONCEPT - 
 *	
 *	Let us consider that we have defined all the beans and all their values in the spring.xml file. When we are writing an organization level code which
 *	is complex and require many types of initialization at the beginning. Consider a simple example where the values to the beans are provided using 
 *	configuration files. It may happen that some of the configurations are not as expected or have not been assigned. In such cases the code will throw 
 *	error as null pointer exception and we will not be able to figure it out as the structure of code is very large. So to prevent this we can make sure
 *	that until correct initializations or configuration values are not provided the bean must not be instantiated. 
 *
 *
 *	For this type of cases we have a small functionality provided by spring i.e. @Required annotation which is executed post the bean is about to be created
 *	We have BeanPostProcessor which check all the annotations and check whether any of the annotation does not matches with the functionality as needed. In 
 *	that case we will get error as provided by BeanPostProcessor or WE CAN also throw desired error.
 *
 *  
 *  EXAMPLE - 	
 *  
 *  Consider that we have circle which is being initialized in the spring.xml and say the bean for the circle class has been created but the values for the
 *  circle is not given. Then in that case we will get NULL POINTER EXCEPTION as the setCenter() method of circle will try to set 'center' which will be null.
 *  In that case we can put @Required annotation for setCenter() method and then we will use BeanPostProcesss library of annotation which which checks whether
 *  the required values are given or not.
 *  
 *  
 *  OUTPUT - 
 *  
 *  It will give the following error bcz all the required things are not met hence it also do not initialize the triangle bean.
 *  
 *  Caused by: org.springframework.beans.factory.BeanInitializationException: Property 'center' is required for bean 'circle'
 *  
 *   
 *   
 *   
 */


public class DrawingApp {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		ShapeOfObject shapeObject = (ShapeOfObject) context.getBean("triangle");
		shapeObject.draw();
		
		ShapeOfObject circleShape = (ShapeOfObject) context.getBean("circle");
		circleShape.draw();
	}
}
