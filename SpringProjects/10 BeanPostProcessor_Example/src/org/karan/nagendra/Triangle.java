package org.karan.nagendra;

/*
 * Tutorial 15 - BeanPostProcessor
 *
 *
 * CONCEPT -
 *
 *	BeanPostProcessor are classes that tells the spring to perform some processing after bean initialization has been 
 *	done. When we write some code in our BeanPostProcessor then that piece of code gets called after every bean
 *	initialization, which can be helpful in the cases when we want to perfom some type of configuration. 
 *
 *	PROPERTY 1 - No matter how many beans we have, the BeanPostProcessor code gets called after every bean initialization
 *
 *	PROPERTY 2 - Its a seperate class with its methods to perform the initialization. The requirement of the methods
 *	of BeanPostProcessor is that it must return an object.
 *
 *	In order to use this BeanPostProcessor in the spring.xml file we need to use a bean tag with only class name 
 *	which tells that we want to use BeanPostProcessor
 *
 * 
 * 
 * OUTPUT - 
 * 
 * 	In the output one of the key feature is that before creating the bean for the triangle class, the bean is
 * 	created for the Point class bcz its coordinates must be initialized and then the bean for triangle can be
 * 	cread. 
 * 
 * 
 * 
 * 
 */

public class Triangle {

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
}
