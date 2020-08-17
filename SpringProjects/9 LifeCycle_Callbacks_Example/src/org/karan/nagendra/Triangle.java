package org.karan.nagendra;

import java.util.List;

import javax.security.auth.Destroyable;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;


/*
 * Tutorial 14 - Lifecycle Callbacks
 *
 *
 * CONCEPT -
 *
 *	Spring provides us the methods which gives the lifecycle speciality same as provided by the REACTJS. Here in this
 *	lifeCycle methods we can initialize the code or destroy the bean when we want to exit. In order to close the context
 *	we can also use on of the hooks of spring which destroys the bean. SO to use this feature instead of using the 
 *	ApplicationContext we will be using AbstractApplicationContext which provides a method called registerShutDonwHook
 *	which destroys the bean. 
 *
 *	METHOD 2
 *	There is another way we can describe our own init and destroy method to create this lifecycle scenaior without using
 *	spring lifeCycle. So to use that in the spring.xml we will have to make use init and destroy attributes which will
 *	invoke the user defined methods
 *
 *
 *	InitializingBean and DisposableBean METHODS gets priority over user defined lifecycle METHODS
 *
 */

public class Triangle implements InitializingBean, DisposableBean{

	private Point pointA;
	private Point pointB;
	private Point pointC;
	
	
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
	
	public void myInit() {
		System.out.println("My initialization method has been called");
	}
	
	public void myDestroy() {
		System.out.println("My destroy method has been called");
	} 

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("Initializing init bean method called for triangle");
	}

	@Override
	public void destroy() throws Exception {
		System.out.println("Disposable destroy method called for triangle");
	}
	
}
