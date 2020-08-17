package org.karan.nagendra;

import java.util.List;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanNameAware;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

/*
 * Tutorial 11, 12 - Understanding Bean Scopes, Using ApplicationContextAware
 *
 *
 * CONCEPT - Understanding Bean Scopes
 * 
 * There are 2 ways in which the spring can create the bean and hand it over to the getBean method
 * 1) SINGLETON - ONLY ONCE PER SPRING CONTAINIER, which means that no matter how many time you perform the getBean
 * 	  Spring creates all the bean ONCE and Spring will return the same created bean every time the getBean is performed
 *	  Here the bean is created at the start of the container initialization and after that the same bean is returned if
 *	  someone is asking for it using getBean method
 *
 * 2) PROTOTYPE - NEW BEAN IS CREATED WITH EVERY REQUEST OR REFERENCE - here the bean is not created at the start rather
 *    it is created whenever any request is made or some reference is performed. This means the object creation by the 
 *    spring will be different and will return a different bean ever time it is asked using getBean method
 *    
 *    
 *  The way to define a scope of the bean is to specify SCOPE and it can take values as SINGLETON or PROTOTYPE. Default
 *  scope type is singleton
 *  
 *  
 *  
 *  CONCEPT - Using ContextApplicationAware
 *	
 *	Let us consider that scope of the parent has been declared as singleton and the child beans are declared as 
 *	prototype, then this creates child beans only one as the parent has been singleton bcz of which the objects
 *	must be declared once. We may be in a situation where a bean is needed before the parent bean is needed so 
 *	in that case we use ContextApplicationAware.
 *
 *	In order to get ApplicationContext we need to implement a interface called ApplicationContextAware, so we need
 *	to implement its method called setApplicationContext. So here in the child we can capture the application context
 *	Apart from this if we want to capture the bean that has been created we can get it using the interface called
 *	BeanNameAware which provides a method called setBeanName using which we can get the bean name
 *
 *	OUTPUT - 
 *
 *	Here in the output bean name has been printed even before the bean has been used to initialize the points of 
 *	the triangle. This demonstrates that if some time we need to get the bean with the child method we can do it
 *	and use it to perform some computation. But generally this is not recommended as it is not a good practice.
 * 
 *
 *
 *
 */

public class Triangle implements ApplicationContextAware, BeanNameAware {

	private Point pointA;
	private Point pointB;
	private Point pointC;
	private ApplicationContext context;
	
	
	public Point getPointA() {
		return pointA;
	}

	public void setPointA(Point pointA) {
		this.pointA = pointA;
	}

	public Point getPointB() {
		return pointB;
	}

	public void setPointB(Point pointB) {
		this.pointB = pointB;
	}

	public Point getPointC() {
		return pointC;
	}

	public void setPointC(Point pointC) {
		this.pointC = pointC;
	}

	public void draw() {
		System.out.println("The Coordinate A is : ( " + pointA.getX()+ " , "+ pointA.getY()+ " )");
		System.out.println("The Coordinate B is : ( " + pointB.getX()+ " , "+ pointB.getY()+ " )");
		System.out.println("The Coordinate C is : ( " + pointC.getX()+ " , "+ pointC.getY()+ " )");
	}

	@Override
	public void setApplicationContext(ApplicationContext context) throws BeansException {
		this.context = context;
	}

	@Override
	public void setBeanName(String beanName) {
		System.out.println("\n\nThe bean has been created and is being used even before the parent can get the bean. \n");
		System.out.println("The bean name is : " + beanName+"\n");
	}
	
}
