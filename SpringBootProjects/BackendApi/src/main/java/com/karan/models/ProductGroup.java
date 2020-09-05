package com.karan.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ProductGroup")
public class ProductGroup implements Serializable {

	private static final long serialVersionUID = 6266001060348066936L;

	@Id
	@Column(name = "productGroupType")
	private String productGroupType;
	private String productGroupName;
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
