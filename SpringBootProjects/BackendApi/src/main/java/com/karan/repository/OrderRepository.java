package com.karan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.karan.models.Order;

public interface OrderRepository extends JpaRepository<Order, String> {

}
