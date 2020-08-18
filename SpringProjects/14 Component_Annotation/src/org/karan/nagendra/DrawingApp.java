package org.karan.nagendra;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/*
 * 
 *	TUTORIAL 21 - Component and Stereotype Annotations
 * 
 * 
 * 
 *	CONCEPT -  
 *	
 *	Let us consider that we have for the "CIRCLE" class we have created a bean which will take the properties to initialize the values to the points. There
 *	is a way where we can create the bean without even declaring it in the spring.xml file. So to achieve this we can add an annotation to the class as
 *	@Component bcz of which we will not need to create the bean exclusively for it. Instead spring will check that this class has an annotation and will
 *	take the class name as bean name with the first letter of the class as small and then create the bean. But the spring package must know that it has to
 *	create the bean for this particular class. So to indicate this we will have to add an element in the spring.xml that look for this package and find 
 *	all the class with the @Component defined on them and create bean for them. <context:component-scan base-package="org.karan.nagendra" /> is the tag for
 *	which scans through all the classes in the package org.karan.nagendra 
 *
 * 	Here we are using @Resource annotation which will check for the corresponding named bean to initialize the values to the circle bean
 *   
 * 
 *	STEREOTYPE CONCEPT - as we have @Component annotation for creating the bean. When we are working on some large projects where we have service, controllers,
 *	Data classes. So the spring provides the standard annotations for these classes as @Service, @Respository for Data classes, @Controllers. The function of 
 *	these annotation is not different from the @Component annotation
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
