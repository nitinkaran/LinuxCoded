package com.karan.student;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, String> {

	public List<Student> findByDepartmentDeptName(String deptName);

}
