package com.karan.student;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, String> {

	/*
	 * Find the list of student related to a departemnt
	 */
	public List<Student> findByStudentDepartmentDeptName(String deptName);
	
	
	/*
	 * Find the list of students who are advised by an Instructor
	 */
	public List<Student> findByStudentInstructorInstructorId(String instructorId);
	
	
}
