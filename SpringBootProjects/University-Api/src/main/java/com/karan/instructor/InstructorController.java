package com.karan.instructor;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karan.department.Department;

@RestController
public class InstructorController {

	@Autowired
	private InstructorService instructorService;
	
	@RequestMapping("/instructor")
	public List<Instructor> getAllInstructor() {
		return instructorService.getAllInstructor();
	}
	
	@RequestMapping("/instructor/{name}")
	public Optional<Instructor> getInstructorByName(@PathVariable String name) {
		return instructorService.getInstructorByName(name);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/instructor")
	public void addInstructor(@RequestBody Instructor dept ) {
		instructorService.addInstructor(dept);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/instructor")
	public void updateInstructorDetails(@RequestBody Instructor instructor) {
		instructorService.updateInstructorDetails(instructor);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/instructor/{instructorId}")
	public void deleteInstructorDetail(@PathVariable String instructorId) {
		instructorService.deleteInstructorDetail(instructorId);
	}
	
}
