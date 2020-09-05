package com.karan.service;

import java.util.List;

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

}
