package com.karan.department;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Department {
	
	@Id
	private String deptName;
	private String deptBuilding;
	private String deptBudget;
	
	
	public Department() {
		super();
	}
	
	public Department(String deptName, String deptBuilding, String deptBudget) {
		super();
		this.deptName = deptName;
		this.deptBuilding = deptBuilding;
		this.deptBudget = deptBudget;
	}



	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
	public String getDeptBuilding() {
		return deptBuilding;
	}
	public void setDeptBuilding(String deptBuilding) {
		this.deptBuilding = deptBuilding;
	}
	public String getDeptBudget() {
		return deptBudget;
	}
	public void setDeptBudget(String deptBudget) {
		this.deptBudget = deptBudget;
	}
	
}
