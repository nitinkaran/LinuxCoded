package com.karan.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.models.Product;
import com.karan.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;

	public void createProduct(List<Product> products) {
		products.forEach(item -> productRepository.save(item));
	}
	
	public List<Product> retrieveProductList() {
		return productRepository.findAll();
	}

	public List<Product> retrieveProductListByProductGroupType(String type) {
		return productRepository.findByProductGroupProductGroupType(type);
	}

	// Removes all the products which has been added till now
	public void removeAllProducts() {
		productRepository.deleteAll();
	}

	// Removes only filtered products based on the type of ProductGroup Type
	public void removeFilteredProducts(String type) {
		productRepository.deleteAll(productRepository.findByProductGroupProductGroupType(type));
	}

	public Optional<Product> retrieveProductById(String productId) {
		return productRepository.findById(Integer.valueOf(productId));
	}

}
