package org.karan.nagendra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;

public class Triangle implements ShapeOfObject {

	private Point pointA;
	private Point pointB;
	private Point pointC;
	
	@Autowired
	private MessageSource messageSource;
	
	
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
		System.out.println("\n");
		System.out.println(this.messageSource.getMessage("triangleMessage", null, "Default triangle Message", null));
		System.out.println(
				this.messageSource.getMessage(
						"triangle.coordinates", 
						new Object[] {"A", pointA.getX(), pointA.getY()}, 
						"Could not show the coordinate", 
						null
				)
		);
		
		System.out.println(
				this.messageSource.getMessage(
						"triangle.coordinates", 
						new Object[] {"B", pointB.getX(), pointB.getY()}, 
						"Could not show the coordinate", 
						null
				)
		);

		System.out.println(
				this.messageSource.getMessage(
						"triangle.coordinates", 
						new Object[] {"C", pointC.getX(), pointC.getY()}, 
						"Could not show the coordinate", 
						null
				)
		);
	}

	public MessageSource getMessageSource() {
		return messageSource;
	}

	public void setMessageSource(MessageSource messageSource) {
		this.messageSource = messageSource;
	}	
}
