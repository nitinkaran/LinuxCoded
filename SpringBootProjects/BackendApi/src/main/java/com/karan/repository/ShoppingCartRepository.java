package com.karan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.karan.models.ShoppingCart;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, String> {
	
}
