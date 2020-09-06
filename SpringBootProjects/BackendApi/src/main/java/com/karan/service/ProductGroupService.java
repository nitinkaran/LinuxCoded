package com.karan.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.models.ProductGroup;
import com.karan.repository.ProductGroupRepository;

@Service
public class ProductGroupService {

	@Autowired
	ProductGroupRepository productGroupRepository;
	
	public void createProductGroup(List<ProductGroup> productGroup) {
		productGroupRepository.saveAll(productGroup);
	}

	public List<ProductGroup> retrieveProductGroup() {
		return productGroupRepository.findAll();
	}

	public List<ProductGroup> retrieveProductGroupByType(String type) {
		List<ProductGroup> list = new ArrayList<ProductGroup>();
		
		((List<ProductGroup>)(productGroupRepository.findAll()))
		.stream()
		.filter(item -> item.getProductGroupType().equals(type))
		.forEach(list::add);
		
		return list;
	}

	public void removeProductGroup(String type) {
		productGroupRepository.deleteById(type);
	}

	
}
