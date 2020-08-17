package org.karan.nagendra;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class DrawingApp {

	public static void main(String[] args) {
		
//		BeanFactory factory = new XmlBeanFactory(new FileSystemResource("spring.xml"));
		
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		Quadrilateral quad = (Quadrilateral) context.getBean("quadrilateral");
		quad.draw();
		
		Quadrilateral quad1 = (Quadrilateral) context.getBean("quad1");
		quad1.drawWithDimension();
		
		Quadrilateral quad2 = (Quadrilateral) context.getBean("quad2");
		quad2.showOnlyDimension();
		
		Triangle tr = (Triangle)context.getBean("triangle");
		tr.draw(); 	
		
		
	}
}
