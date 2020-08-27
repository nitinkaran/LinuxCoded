package com.karan.course;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karan.department.Department;
import com.karan.instructor.Instructor;
import com.karan.instructor.InstructorRepository;

import ch.qos.logback.classic.Logger;

@RestController
public class CourseController {

	@Autowired
	private CourseService courseService;
	
	@Autowired
	private InstructorRepository instructorRepository; 
	
	@RequestMapping("/course")
	public List<Course> getAllCourse() {
		return courseService.getAllCourse();
	}
	
	@RequestMapping("/course/{courseId}")
	public Optional<Course> getCourseById(@PathVariable String courseId) {
		return courseService.getCourseById(courseId);
	}
	
	
	@RequestMapping(method = RequestMethod.PUT, value = "/course")
	public void updateCourse(@RequestBody Course course) {
		courseService.updateCourse(course);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/course/{courseId}")
	public void deleteCourse(@PathVariable String courseId) {
		courseService.deleteCourse(courseId);
	}
	
	
	/*
	 * A course can be taught by mulitple instructor and a course can be offered by mulitple departments. So a mapping must 
	 * be there to retreive the courses which are taught by some instructor X which is offered by department Y. Creation of
	 * courses must include the courseId and instructorId from department.
	 */
	
	@RequestMapping(
			method = RequestMethod.POST, 
			value = "/course/{instructorId}/instructor"
	)
	public void addCourseTaughtByInstructorOfferedByDepartment(
			@RequestBody Course course, 
			@PathVariable String instructorId
	) {
		
		Instructor instructorResponse = instructorRepository.findById(instructorId).get();
		course.setDepartment(instructorResponse.getDepartment());
		course.setInstructor(instructorResponse);
		courseService.addCourseTaughtByInstructorOfferedByDepartment(course);
	}
	
	/*
	 * List the courses which are offered by 'X' department and taught by instructor Y
	 */
	@RequestMapping(
			method = RequestMethod.GET,
			value = "/course/{instructorId}"
	)
	public List<Course> getCourseTaughtByInstructor(@PathVariable String instructorId) {
		String deptName = instructorRepository.findById(instructorId).get().getDepartment().getDeptName();
		return courseService.getCourseTaughtByInstructor(instructorId, deptName);
	}
	
}
