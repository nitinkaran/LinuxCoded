package com.karan.student;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.karan.department.Department;
import com.karan.instructor.Instructor;

@Entity
public class Student {

	@Id
	private String studentId;
	private String studentName;
	private int studentCredit;
	
	@ManyToOne
	private Department studentDepartment;
	
	@ManyToOne
	private Instructor studentInstructor;
	
	public Student() {
		super();
	}

	public Student(String studentId, String studentName, int studentCredit) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentCredit = studentCredit;
	}



	public String getStudentId() {
		return studentId;
	}

	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getStudentCredit() {
		return studentCredit;
	}

	public void setStudentCredit(int studentCredit) {
		this.studentCredit = studentCredit;
	}

	public Department getStudentDepartment() {
		return studentDepartment;
	}

	public void setStudentDepartment(Department studentDepartment) {
		this.studentDepartment = studentDepartment;
	}

	public Instructor getStudentInstructor() {
		return studentInstructor;
	}

	public void setStudentInstructor(Instructor studentInstructor) {
		this.studentInstructor = studentInstructor;
	}
 
	

	

}
