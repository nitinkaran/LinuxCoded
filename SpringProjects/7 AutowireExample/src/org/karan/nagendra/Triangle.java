package org.karan.nagendra;

import java.util.List;

/*
 * Tutorial 10 - Autowire
 *
 * 
 * PROBLEM STATEMENT
 * 
 * Consider we have the 3 points variable in the triangle and we have also created the bean for each of them.
 * Is there any way we can connect the beans without refering to the bean created
 * 
 * SOLUTION
 * 
 * This can be done using autowire where each bean created for the points will be directly autowired with the 
 * point objects created in the Triangle. The only condition for autowiring is that....the name of the points
 * type variables declared in the Triangle must be same as id given to the bean which is created individually
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
