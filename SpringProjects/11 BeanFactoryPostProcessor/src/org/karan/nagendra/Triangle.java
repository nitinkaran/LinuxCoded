package org.karan.nagendra;

/*
 * Tutorial 16 - BeanFactoryPostProcessor
 *
 *
 * CONCEPT -
 *
 *	In BeanPostProcessor, the code is executed for every bean creation. But we may have a requirement
 *	where we want to execute some code BEFORE bean factory itself is getting initialized. So to cater that
 *	need we have BeanFactoryPostProcessor provided by spring and is executed BEFORE bean is initialized.
 *
 * 	Similar to BeanPostProcessor we need to implement BeanFactoryPostProcessor with a class and then declare 
 * 	it in spring.xml with its bean
 * 
 * 	EXAMPLE OF BeanFactoryPostProcessor is - PropertyPlaceholderConfigurer
 * 	
 * 	What PropertyPlaceholderConfigurer does is ----- say we have directly given values to POINTS while creating 
 * 	bean for the Points using property. PropertyPlaceholderConfigurer allows us to create a properties file which
 * 	consist of properties that can be used as a placeholder to initialize the values to POINTS. This is just
 * 	one functionality but there can be several uses of it. So to use this functionality all we have to do is to
 * 	create a properties file, use it as a place holder and then tell the spring that this is the configuration
 *  I am using and get this property file from this path
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
