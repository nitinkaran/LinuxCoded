package com.karan.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
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

}
