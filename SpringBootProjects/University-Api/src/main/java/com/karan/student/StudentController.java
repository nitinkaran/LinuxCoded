package com.karan.student;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karan.course.Course;

@RestController
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@RequestMapping("/student")
	public List<Student> getAllStudent() {
		return studentService.getAllStudent();
	}
	
	@RequestMapping("/student/{studentId}")
	public Optional<Student> getStudentById(@PathVariable String studentId) {
		return studentService.getStudentById(studentId);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/student")
	public void addStudent(@RequestBody Student student ) {
		studentService.addStudent(student);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/student/{studentId}")
	public void updateStudentDetails(@RequestBody Student student) {
		studentService.updateStudentDetails(student);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/student/{studentId}")
	public void deleteStudentDetail(@PathVariable String studentId) {
		studentService.deleteStudentDetail(studentId);
	}
	
}
