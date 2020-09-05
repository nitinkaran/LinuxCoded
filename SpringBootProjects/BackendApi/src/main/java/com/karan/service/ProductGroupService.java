package com.karan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.models.ProductGroup;
import com.karan.repository.ProductGroupRepository;

@Service
public class ProductGroupService {

	@Autowired
	ProductGroupRepository productGroupRepository;
	
	public void createProductGroup(ProductGroup productGroup) {
		productGroupRepository.save(productGroup);
	}

	
	
}
