package com.karan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.karan.models.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, String> {

}
