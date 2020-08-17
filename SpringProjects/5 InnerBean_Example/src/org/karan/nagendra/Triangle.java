package org.karan.nagendra;

/*
 * Tutorial 8 - Inner Beans
 * 
 * Same as tutorial 7 just that we want to create an inner bean.
 * 
 * Let us consider that we have 3 points representing the 3 corners of the triangle and we want to initialize these
 * 3 points. These 3 points will have 3 coordinates with each point having corresponding (x,y) coordinate values.
 * 
 * Here we have 3 POINT TYPE OBJECTS and each point is having 3 coordinates values. We need to assign these coordinate
 * values to each of these 3 POINTS. Spring provides a ref parameter using which we can assign the bean of the 3 
 * coordinates to each of these 3 POINTS. 
 * 
 * PROBLEM STATEMENT : - 
 * Since we have created 3 bean and using ref we are initializing the bean object. But we may have requirement where
 * the corresponding bean is not shared and is being used specifically at one place. So instead of creating bean 
 * seperately we will be using it inside one bean, hence the name inner bean. While creating the bean inside one of 
 * the property we need not necessarily give id bcz we already have direction that this particular bean is being 
 * used for this property.
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
		System.out.println(" The coordinate A is : ( " + pointA.getX()+ " , "+ pointA.getY()+ ")");
		System.out.println(" The coordinate B is : ( " + pointB.getX()+ " , "+ pointB.getY()+ ")");
		System.out.println(" The coordinate C is : ( " + pointC.getX()+ " , "+ pointC.getY()+ ")");
	}
	
}
