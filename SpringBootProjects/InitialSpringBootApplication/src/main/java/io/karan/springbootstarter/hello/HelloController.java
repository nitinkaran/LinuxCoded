package io.karan.springbootstarter.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloController {
	
	@RequestMapping("hello")
	public String toString() {
		return "hello this is the mapping form rest hit";
	}
}
