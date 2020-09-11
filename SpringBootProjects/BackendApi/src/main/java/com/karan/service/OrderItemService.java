package com.karan.service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.models.OrderItem;
import com.karan.models.Product;
import com.karan.repository.OrderItemRepository;

@Service
public class OrderItemService {

	@Autowired
	private OrderItemRepository orderItemRepository;
	
	public OrderItem createOrderItem(Product product) {
		OrderItem orderItem = new OrderItem();
		orderItem.setOrderItemId(String.valueOf(ThreadLocalRandom.current().nextInt(1001, 99999)).concat("A"));
		orderItem.setOrderItemType(product.getProductType());
		orderItem.setOrderItemPrice(product.getProductPrice());
		orderItem.setOrderItemAttachment(product.getProductImage());
		orderItem.setProduct(product);
		return orderItemRepository.save(orderItem);
	}

	public Optional<OrderItem> retrieveOrderItem(String orderItemId) {
		return orderItemRepository.findById(orderItemId);
	}

	public void removeOrderItem(String orderItemId) {
		orderItemRepository.deleteById(orderItemId);
	}

	public List<OrderItem> retrieveAllOrderItems() {
		return orderItemRepository.findAll();
	}
}
