package org.karan.nagendra;

/*
 * This class shows the setter type of injection as it uses setter method to inject
 * the object created on runtime by the spring
 */

public class Triangle {

	private String type;
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public void draw() {
		System.out.println(getType() + " Triangle Drawn");
	}
	
}
