package org.karan.nagendra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.context.MessageSource;

public class Circle implements ShapeOfObject {
	
	private Point center;
	
	@Autowired
	private MessageSource messageSource;

	public MessageSource getMessageSource() {
		return messageSource;
	}

	public void setMessageSource(MessageSource messageSource) {
		this.messageSource = messageSource;
	}

	@Override
	public void draw() {
		System.out.println("\n");
		System.out.println(this.messageSource.getMessage("circleMessage", null, "Default circle Message", null));
		System.out.println(
				this.messageSource.getMessage(
						"center.coordinates", 
						new Object[] {center.getX(), center.getY()}, 
						"Could not show the coordinates of circle", 
						null)
				);
	}

	public Point getCenter() {
		return center;
	}

	public void setCenter(Point center) {
		this.center = center;
	}
}
