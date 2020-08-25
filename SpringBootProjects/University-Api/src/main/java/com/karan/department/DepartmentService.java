package com.karan.department;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DepartmentService {

	@Autowired
	private DepartmentRepository departmentRepository;
	private List<Department> departmentList = new ArrayList<Department>();
	
	public List<Department> getAllDepartments() {
		List<Department> list = new ArrayList<>();

		departmentRepository.findAll()
		.forEach(list :: add);
		
		return list;
	}

	public Optional<Department> getDepartmentByName(String name) {
		return departmentRepository.findById(name);
	}

	public void addDepartment(Department dept) {
		departmentRepository.save(dept);
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
