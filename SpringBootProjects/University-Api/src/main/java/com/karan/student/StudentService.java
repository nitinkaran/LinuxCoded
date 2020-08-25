package com.karan.student;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StudentService {

	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getAllStudent() {
		List<Student> list = new ArrayList<>();

		studentRepository.findAll()
		.forEach(list :: add);
		
		return list;
	}

	public Optional<Student> getStudentById(String studentId) {
		return studentRepository.findById(studentId);
	}

	public void addStudent(Student student) {
		studentRepository.save(student);
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
