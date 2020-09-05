package com.karan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.Product;
import com.karan.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	ProductService productService;
	
	@PostMapping(value = "/product")
	public void createProduct(@RequestBody List<Product> product) {
		productService.createProduct(product);
	}

	@GetMapping(value = "/product")
	public List<Product> retrieveProductList() {
		return productService.retrieveProductList();
	}
	
}
