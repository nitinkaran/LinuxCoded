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
	
	@RequestMapping(method = RequestMethod.PUT, value = "/instructor")
	public void updateInstructorDetails(@RequestBody Instructor instructor) {
		instructorService.updateInstructorDetails(instructor);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/instructor/{instructorId}")
	public void deleteInstructorDetail(@PathVariable String instructorId) {
		instructorService.deleteInstructorDetail(instructorId);
	}
	
	
	/*
	 * Instructor must be created when the department exist otherwise it must fail with 404 error with the user defined error message to be displayed.
	 * THE ERROR MESSAGE IS CURRENTLY EMPTY AND NEED TO BE HANDLED 
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/instructor/{deptName}/department")
	public void instructorAndDepartment(@RequestBody Instructor instructor, @PathVariable String deptName) {
		instructor.setDepartment(new Department(deptName, "", ""));
		instructorService.addInstructor(instructor);
	}
	
	/*
	 * Retreive the instructors based on their departments in which they are working.
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/instructor/{deptName}")
	public List<Instructor> getInstructorInDepartment(@PathVariable String deptName) {
		return instructorService.getInstructorInDepartment(deptName);
	}
	
}
