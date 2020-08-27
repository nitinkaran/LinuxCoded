package com.karan.course;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRepository;
	
	public List<Course> getAllCourse() {
		List<Course> list = new ArrayList<>();

		courseRepository.findAll()
		.forEach(list :: add);
		
		return list;
	}

	public Optional<Course> getCourseById(String courseId) {
		return courseRepository.findById(courseId);
	}

	public void addCourse(Course course) {
		courseRepository.save(course);
	}

	public void updateCourse(Course course) {
		courseRepository.save(course);
	}

	public void deleteCourse(String courseId) {
		courseRepository.deleteById(courseId);
	}

	public void addCourseTaughtByInstructorOfferedByDepartment(Course course) {
		courseRepository.save(course);
	}

	public List<Course> getCourseTaughtByInstructor(String instructorId, String deptName) {
		return courseRepository.findByInstructorInstructorIdAndDepartmentDeptName(instructorId, deptName);
	}

}
