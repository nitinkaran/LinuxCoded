package com.karan.instructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.karan.department.Department;

@Entity
public class Instructor {

	@Id
	private String instructorId;
	private String instructorName;
	private double instructorSalary;
	
	@ManyToOne
	private Department department;
	
	public Instructor() {
		super();
	}
 

	public Instructor(String instructorId, String instructorName, double instructorSalary) {
		super();
		this.instructorId = instructorId;
		this.instructorName = instructorName;
		this.instructorSalary = instructorSalary;
	}



	public String getInstructorId() {
		return instructorId;
	}

	public void setInstructorId(String instructorId) {
		this.instructorId = instructorId;
	}

	public String getInstructorName() {
		return instructorName;
	}

	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}

	public double getInstructorSalary() {
		return instructorSalary;
	}

	public void setInstructorSalary(double instructorSalary) {
		this.instructorSalary = instructorSalary;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	

}
