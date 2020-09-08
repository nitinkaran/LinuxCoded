package com.karan.models;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

@Entity
@Table(name = "ShoppingCart")
public class ShoppingCart {

//	@Id
//	@Column(name = "shoppingCartId")
//	private String shoppingCartId;
//	private double shoppingCartTotalPrice;
//	
//	@OneToMany
//	private List<CartItem> cartItemList;
//	
//	public ShoppingCart() {
//		super();
//	}
//	
//	public ShoppingCart(String shoppingCartId, double shoppingCartTotalPrice) {
//		super();
//		this.shoppingCartId = shoppingCartId;
//		this.shoppingCartTotalPrice = shoppingCartTotalPrice;
//	}
//
//	public String getShoppingCartId() {
//		return shoppingCartId;
//	}
//
//	public void setShoppingCartId(String shoppingCartId) {
//		this.shoppingCartId = String.valueOf(ThreadLocalRandom.current().nextInt(1001, 99999)).concat("A");
//	}
//
//	public double getShoppingCartTotalPrice() {
//		return shoppingCartTotalPrice;
//	}
//
//	public void setShoppingCartTotalPrice(double shoppingCartTotalPrice) {
//		this.shoppingCartTotalPrice = shoppingCartTotalPrice;
//	}
//
//	public List<CartItem> getCartItemList() {
//		return cartItemList;
//	}
//
//	public void setCartItemList(List<CartItem> cartItemList) {
//		this.cartItemList = cartItemList;
//	}
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String Name;

	public ShoppingCart() {
		super();
	}
	
	public ShoppingCart(Long id, String name) {
		super();
		this.id = id;
		Name = name;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	
	
}
