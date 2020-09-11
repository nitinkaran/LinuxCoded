package com.karan.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.lang.NonNull;

@Entity
@Table(name = "OrderItem")
public class OrderItem {
	
	@Id
	@NonNull
	@Column(name = "orderItemId")
	private String orderItemId;
	private String orderItemType;
	private Double orderItemPrice;
	private String orderItemAttachment;
	
	@OneToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Product product;

	public String getOrderItemId() {
		return orderItemId;
	}

	public void setOrderItemId(String orderItemId) {
		this.orderItemId = orderItemId;
	}

	public String getOrderItemType() {
		return orderItemType;
	}

	public void setOrderItemType(String orderItemType) {
		this.orderItemType = orderItemType;
	}

	public Double getOrderItemPrice() {
		return orderItemPrice;
	}

	public void setOrderItemPrice(Double orderItemPrice) {
		this.orderItemPrice = orderItemPrice;
	}

	public String getOrderItemAttachment() {
		return orderItemAttachment;
	}

	public void setOrderItemAttachment(String orderItemAttachment) {
		this.orderItemAttachment = orderItemAttachment;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "OrderItem [orderItemId=" + orderItemId + ", orderItemType=" + orderItemType + ", orderItemPrice="
				+ orderItemPrice + ", orderItemAttachment=" + orderItemAttachment + ", product=" + product + "]";
	}
	

}
