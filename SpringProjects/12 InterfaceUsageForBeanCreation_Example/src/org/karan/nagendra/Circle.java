package org.karan.nagendra;

public class Circle implements ShapeOfObject {
	
	private Point center;

	@Override
	public void draw() {
		System.out.println("\nThe coordinates of circle center is : ");
		System.out.println("The center of the circle is  : ( " + center.getX()+ " , "+ center.getY()+ " )");
	}

	public Point getCenter() {
		return center;
	}

	public void setCenter(Point center) {
		this.center = center;
	}
}
