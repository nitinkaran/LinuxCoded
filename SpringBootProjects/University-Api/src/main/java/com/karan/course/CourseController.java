package com.karan.course;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {

	@Autowired
	private CourseService courseService;
	
	@RequestMapping("/course")
	public List<Course> getAllCourse() {
		return courseService.getAllCourse();
	}
	
	@RequestMapping("/course/{courseId}")
	public Optional<Course> getCourseById(@PathVariable String courseId) {
		return courseService.getCourseById(courseId);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/course")
	public void addCourse(@RequestBody Course course ) {
		courseService.addCourse(course);
	}
	
	
}
