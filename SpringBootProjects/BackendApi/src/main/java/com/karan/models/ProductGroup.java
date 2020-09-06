package com.karan.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "ProductGroup")
public class ProductGroup implements Serializable {

	private static final long serialVersionUID = 6266001060348066936L;

	@Id
	@Column(name = "productGroupType")
	private String productGroupType;
	private String productGroupName;
	private int productGroupId;
	
	
	public ProductGroup(String productGroupType, String productGroupName, int productGroupId) {
		super();
		this.productGroupType = productGroupType;
		this.productGroupName = productGroupName;
		this.productGroupId = productGroupId;
	}

	public ProductGroup() {
		super();
	}

	public String getProductGroupType() {
		return productGroupType;
	}

	public void setProductGroupType(String productGroupType) {
		this.productGroupType = productGroupType;
	}

	public String getProductGroupName() {
		return productGroupName;
	}

	public void setProductGroupName(String productGroupName) {
		this.productGroupName = productGroupName;
	}

	public int getProductGroupId() {
		return productGroupId;
	}

	public void setProductGroupId(int productGroupId) {
		this.productGroupId = productGroupId;
	}

}
