package org.karan.nagendra;

import java.util.List;

/*
 * Tutorial 9 - Initializing Collections
 *
 * 
 * PROBLEM STATEMENT
 * 
 * Lets us consider that we have a requirement where we want the values to be given using list and there can be
 * many points, so instead of creating bean for each of the points we want a list containing the points and 
 * internally those 3 values need to be be instantiated and then assigned to each of the points object
 * 
 *  
 * SOLUTION
 * 
 * Here we need to create a list in the xml and then it has to be assigned.
 *
 */

public class Triangle {

	private List<Point> points;

	public List<Point> getPoints() {
		return points;
	}

	public void setPoints(List<Point> points) {
		this.points = points;
	}

	public void draw() {
		
		for(Point point : points) {
			System.out.println(" The coordinate is : ( " + point.getX()+ " , "+ point.getY()+ ")");
		}
	}
	
}
