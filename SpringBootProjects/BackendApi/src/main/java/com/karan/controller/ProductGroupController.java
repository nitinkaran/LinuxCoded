package com.karan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.ProductGroup;
import com.karan.service.ProductGroupService;

@RestController
public class ProductGroupController {

	@Autowired
	private ProductGroupService productGroupService;
	
	@PostMapping(value = "/product-group")
	public void createProductGroup(@RequestBody List<ProductGroup> productGroup) {
		productGroupService.createProductGroup(productGroup);
	}
	
	@GetMapping(value = "/product-group")
	public List<ProductGroup> retrieveProductGroup() {
		return productGroupService.retrieveProductGroup();
	}
	
	@GetMapping(value = "/product-group/{type}")
	public List<ProductGroup> retrieveProductGroupByType(@PathVariable String type) {
		return productGroupService.retrieveProductGroupByType(type);
	}
	
	
	/*
	 * Remove a product group and all its related products 
	 */
	@DeleteMapping(value = "/product-group/{type}")
	public void removeProductGroup(@PathVariable String type) {
		productGroupService.removeProductGroup(type);
	}
}
