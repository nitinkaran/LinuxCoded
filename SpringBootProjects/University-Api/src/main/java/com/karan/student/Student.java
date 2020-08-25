package com.karan.student;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {

	@Id
	private String studentId;
	private String studentName;
	private int studentCredit;
	
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
 
	

	

}
