package com.karan.department;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karan.student.Student;

@RestController
public class DepartmentController {

	@Autowired
	private DepartmentService departmentService;
	
	@RequestMapping("/department")
	public List<Department> getAllDepartments() {
		return departmentService.getAllDepartments();
	}
	
	@RequestMapping("/department/{name}")
	public Optional<Department> getDepartmentByName(@PathVariable String name) {
		return departmentService.getDepartmentByName(name);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/department")
	public void addDepartment(@RequestBody Department dept ) {
		departmentService.addDepartment(dept);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/department/{deptName}")
	public void updateDepartmentDetails(@RequestBody Department department) {
		departmentService.updateDepartmentDetails(department);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/department/{deptName}")
	public void deleteDepartmentDetail(@PathVariable String deptName) {
		departmentService.deleteDepartmentDetail(deptName);
	}
	
}
