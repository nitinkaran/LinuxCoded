package com.karan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.karan.models.CartItem;
import com.karan.models.Product;

public interface CartItemRepository extends JpaRepository<CartItem, String> {

	public Product findByProductProductId(String productId);
	
}
