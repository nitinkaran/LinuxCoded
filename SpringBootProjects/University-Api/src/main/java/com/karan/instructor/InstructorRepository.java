package com.karan.instructor;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface InstructorRepository extends CrudRepository<Instructor, String> {
	
	public List<Instructor> findByDepartmentDeptName(String deptName);
	
}
