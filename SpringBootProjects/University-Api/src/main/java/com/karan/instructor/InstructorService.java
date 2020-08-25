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
	private List<Instructor> instructorList = new ArrayList<Instructor>();
	
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

//	public List<String> getFilteredDepartment(String filter) {
//		List<String> list = new ArrayList<>();
//		
//		switch (filter) {
//		case "deptName":
//			
//			departmentRepository.findAll()
//			.forEach(item -> {
//				list.add(item.getDeptName());
//			});
//			
//			break;
//
//		default:
//			list = null;
//			break;
//		}
//		
//		return list;
//	}

}
