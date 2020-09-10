package com.karan.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "CartItem")
public class CartItem {

	@Id
	@NonNull
	@Column(name = "cartItemId")
	private String cartItemId;
	private String cartItemType;
	private Double cartItemPrice;
	private String cartItemAttachment;
	
	@OneToOne
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Product product;
	
	public String getCartItemId() {
		return cartItemId;
	}

	public void setCartItemId(String cartItemId) {
		this.cartItemId = cartItemId;
	}

	public String getCartItemType() {
		return cartItemType;
	}

	public void setCartItemType(String cartItemType) {
		this.cartItemType = cartItemType;
	}

	public Double getCartItemPrice() {
		return cartItemPrice;
	}

	public void setCartItemPrice(Double cartItemPrice) {
		this.cartItemPrice = cartItemPrice;
	}

	public String getCartItemAttachment() {
		return cartItemAttachment;
	}

	public void setCartItemAttachment(String cartItemAttachment) {
		this.cartItemAttachment = cartItemAttachment;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "CartItem [cartItemId=" + cartItemId + ", cartItemType=" + cartItemType + ", cartItemPrice="
				+ cartItemPrice + ", cartItemAttachment=" + cartItemAttachment + ", product=" + product + "]";
	}


}
