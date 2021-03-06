package com.karan.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "ShoppingCart")
public class ShoppingCart {

	@Id
	@Column(name = "shoppingCartId")
	private String shoppingCartId;
	private String shoppingCartStatus;
	private double shoppingCartTotalPrice;
	
	@OneToMany
	@JsonIgnoreProperties
	private List<CartItem> cartItemList;
	
	public ShoppingCart() {
		super();
	}
	
	public ShoppingCart(String shoppingCartId, double shoppingCartTotalPrice, String shoppingCartStatus) {
		super();
		this.shoppingCartId = shoppingCartId;
		this.shoppingCartStatus = shoppingCartStatus;
		this.shoppingCartTotalPrice = shoppingCartTotalPrice;
	}

	public String getShoppingCartId() {
		return shoppingCartId;
	}

	public void setShoppingCartId(String shoppingCartId) {
		this.shoppingCartId = shoppingCartId;
	}

	public String getShoppingCartStatus() {
		return shoppingCartStatus;
	}

	public void setShoppingCartStatus(String shoppingCartStatus) {
		this.shoppingCartStatus = shoppingCartStatus;
	}
	
	public double getShoppingCartTotalPrice() {
		return shoppingCartTotalPrice;
	}

	public void setShoppingCartTotalPrice(double shoppingCartTotalPrice) {
		this.shoppingCartTotalPrice = shoppingCartTotalPrice;
	}

	public List<CartItem> getCartItemList() {
		return cartItemList;
	}

	public void setCartItemList(List<CartItem> cartItemList) {
		this.cartItemList = cartItemList;
	}

	@Override
	public String toString() {
		return "ShoppingCart [shoppingCartId=" + shoppingCartId + ", shoppingCartTotalPrice=" + shoppingCartTotalPrice
				+ ", cartItemList=" + cartItemList + "]";
	}

}
