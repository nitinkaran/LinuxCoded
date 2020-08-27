package com.karan.student;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Parent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karan.course.Course;
import com.karan.department.Department;

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
	
	@RequestMapping(method = RequestMethod.PUT, value = "/student")
	public void updateStudentDetails(@RequestBody Student student) {
		studentService.updateStudentDetails(student);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/student/{studentId}")
	public void deleteStudentDetail(@PathVariable String studentId) {
		studentService.deleteStudentDetail(studentId);
	}
	
	/*
	 * add student details who are associated with the department
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/student/{deptName}")
	public void addStudent(@RequestBody Student student, @PathVariable String deptName ) {
		student.setDepartment(new Department(deptName, "", ""));
		studentService.addStudent(student);
	}
	
	/*
	 * Retreive all those students who are in the same department based on the filter of deptName
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/student/{deptName}")
	public List<Student> getStudentOfDepartment(@PathVariable String deptName) {
		return studentService.getStudentOfDepartment(deptName);
	}
	
	
}
