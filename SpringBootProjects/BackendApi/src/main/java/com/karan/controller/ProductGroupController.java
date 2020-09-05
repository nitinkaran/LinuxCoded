package com.karan.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.ProductGroup;
import com.karan.service.ProductGroupService;

@RestController
public class ProductGroupController {

	private ProductGroupService productGroupService;
	@PostMapping(value = "/product-group")
	public void createProductGroup(@RequestBody ProductGroup productGroup) {
		productGroupService.createProductGroup(productGroup);
	}
}
