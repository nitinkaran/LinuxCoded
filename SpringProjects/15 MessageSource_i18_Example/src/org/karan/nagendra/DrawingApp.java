package org.karan.nagendra;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/*
 * 
 *	TUTORIAL 22 - USING MESSAGE SOURCE
 *
 *
 *	CONCEPT - 
 *
 *	Here we use the concept of message internationalization i.e. i18 concepts where we need not hard code the message, rather we specify them in a separate 
 *	file using KEY-VALUE pairs.
 *
 *	In order to get the KEY-VALUE pairs we will have to use "org.springframework.context.support.ResourceBundleMessageSource" which allows us to specify the
 *	i18 files using property tag. The class in which these message needs to be used, that class must use the MessageSource interface variable. This interface
 *	internally has the provision to call the method "getMessage" with required params. Once the vairable of the interface is created the bean of the class
 *	must know that which bean it has to use. So the variable must be wired with the corresponding file to get the KEY-VALUE pair. The implementation of these
 *	is done in Triangle and Circle class
 *
 *  
 *  OUTPUT - 
 *  The static method of triangle and circle has been replaced with the i18 file messages
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
