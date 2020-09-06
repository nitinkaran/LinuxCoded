package com.karan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.karan.models.Product;

public interface ProductRepository extends JpaRepository<Product, String> {

	public List<Product> findByProductGroupProductGroupType(String productGroupType);
	
}
