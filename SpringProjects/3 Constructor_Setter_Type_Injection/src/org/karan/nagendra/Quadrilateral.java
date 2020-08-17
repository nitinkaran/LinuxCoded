package org.karan.nagendra;

/*
 * This program demonstrates the constructor type injection where the bean is created
 * and injected on runtime. We need make sure that constructors are different so that
 * different objects instantiated with different parameters can be correctly initiali
 * -zed with the values.
 * */

public class Quadrilateral {
	private String type;
	private int length;
	private int breadth;
	
	public Quadrilateral(String type) {
		this.type = type;
	}
	
	public Quadrilateral(int length, int breadth) {
		this.breadth = breadth;
		this.length = length;
	}
	
	public Quadrilateral(String type, int length, int breadth) {
		this.type = type;
		this.length = length;
		this.breadth = breadth;
	}
 
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getLength() {
		return length;
	}

	public void setLength(int length) {
		this.length = length;
	}

	public int getBreadth() {
		return breadth;
	}

	public void setBreadth(int breadth) {
		this.breadth = breadth;
	}
	
	public void showOnlyDimension() {
		System.out.println("Quadrilateral with length = " + getLength() + "  breadth = "+ getBreadth());
	}
	
	public void drawWithDimension() {
		System.out.println(getType() + " type Quadrilateral Drawn with length = " + getLength() + "  breadth = "+ getBreadth());
	}
	
	public void draw() {
		System.out.println(getType() + " type Quadrilateral Drawn");
	}
}
