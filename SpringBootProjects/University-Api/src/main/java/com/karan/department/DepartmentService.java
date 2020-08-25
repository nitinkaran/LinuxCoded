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

	public void updateDepartmentDetails(Department department) {
		departmentRepository.save(department);
	}

	public void deleteDepartmentDetail(String deptName) {
		departmentRepository.deleteById(deptName);
	}

}
