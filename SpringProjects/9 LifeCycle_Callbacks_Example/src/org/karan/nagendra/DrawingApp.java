package org.karan.nagendra;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class DrawingApp {

	public static void main(String[] args) {
		
//		BeanFactory factory = new XmlBeanFactory(new FileSystemResource("spring.xml"));
		
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		Triangle tr = (Triangle)context.getBean("triangle");
		tr.draw(); 	
		context.registerShutdownHook();
		
	}
}
