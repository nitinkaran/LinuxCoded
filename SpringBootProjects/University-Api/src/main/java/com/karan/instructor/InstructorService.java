package com.karan.instructor;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class InstructorService {

	@Autowired
	private InstructorRepository instructorRepository;
	
	public List<Instructor> getAllInstructor() {
		List<Instructor> list = new ArrayList<>();

		instructorRepository.findAll()
		.forEach(list :: add);
		
		return list;
	}

	public Optional<Instructor> getInstructorByName(String name) {
		return instructorRepository.findById(name);
	}

	public void addInstructor(Instructor dept) {
		instructorRepository.save(dept);
	}

	public void updateInstructorDetails(Instructor instructor) {
		instructorRepository.save(instructor);
	}

	public void deleteInstructorDetail(String instructorId) {
		instructorRepository.deleteById(instructorId);
	}

	public List<Instructor> getInstructorInDepartment(String deptName) {
		return instructorRepository.findByDepartmentDeptName(deptName);
	}

}
