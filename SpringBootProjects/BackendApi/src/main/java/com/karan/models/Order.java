package com.karan.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Order")
public class Order {

	
	@Id
	@Column(name = "orderId")
	private String orderId;
	private String orderStatus;
	private double orderTotalPrice;
	private String orderDate;
	
	@OneToMany
	@JsonIgnoreProperties
	private List<OrderItem> orderItemList;
	
	public Order() {
		super();
	}

	public Order(String orderId, String orderStatus, double orderTotalPrice, String orderDate) {
		super();
		this.orderId = orderId;
		this.orderStatus = orderStatus;
		this.orderTotalPrice = orderTotalPrice;
		this.orderDate = orderDate;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public double getOrderTotalPrice() {
		return orderTotalPrice;
	}

	public void setOrderTotalPrice(double orderTotalPrice) {
		this.orderTotalPrice = orderTotalPrice;
	}

	public List<OrderItem> getOrderItemList() {
		return orderItemList;
	}

	public void setOrderItemList(List<OrderItem> orderItemList) {
		this.orderItemList = orderItemList;
	}
	
	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", orderStatus=" + orderStatus + ", orderTotalPrice=" + orderTotalPrice
				+ ", orderItemList=" + orderItemList + "]";
	}

	
}
