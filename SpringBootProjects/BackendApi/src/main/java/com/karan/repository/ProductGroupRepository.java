package com.karan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.karan.models.ProductGroup;

public interface ProductGroupRepository extends JpaRepository<ProductGroup, String> {

}
