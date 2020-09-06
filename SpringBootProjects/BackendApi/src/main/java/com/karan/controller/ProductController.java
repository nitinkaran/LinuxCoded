package com.karan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping(value = "/product/product-group/{type}")
	public List<Product> retrieveProductListByProductGroupType(@PathVariable String type) {
		return productService.retrieveProductListByProductGroupType(type);
	}
	
	@DeleteMapping(value = "/product")
	public void removeAllProducts() {
		productService.removeAllProducts();
	}
	
	@DeleteMapping(value = "/product/{type}")
	public void removeFilteredProducts(@PathVariable String type) {
		productService.removeFilteredProducts(type);
	}
	
}
