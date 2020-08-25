package com.karan.department;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DepartmentController {

	@Autowired
	private DepartmentService departmentService;
	
	@RequestMapping("/departments")
	public List<Department> getAllDepartments() {
		return departmentService.getAllDepartments();
	}
	
	@RequestMapping("/departments/{name}")
	public Optional<Department> getDepartmentByName(@PathVariable String name) {
		return departmentService.getDepartmentByName(name);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/departments")
	public void addDepartment(@RequestBody Department dept ) {
		departmentService.addDepartment(dept);
	}
	
//	@RequestMapping(method = RequestMethod.GET, value = "/departments/{filter}")
//	public List<String> getFilteredDepartment(@PathVariable String filter) {
//		departmentService.getFilteredDepartment(filter);
//		return null;
//		
//	}
	
}
