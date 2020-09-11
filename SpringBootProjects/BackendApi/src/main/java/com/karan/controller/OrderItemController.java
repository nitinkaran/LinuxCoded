package com.karan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.OrderItem;
import com.karan.models.Product;
import com.karan.service.OrderItemService;

@RestController
public class OrderItemController {

	@Autowired
	private OrderItemService orderItemService;

	@PostMapping(value = "/create-orderItem")
	public OrderItem createOrderItem(@RequestBody Product product) {
		return (OrderItem) orderItemService.createOrderItem(product);
	}
	
	@GetMapping(value = "/orderItem/{orderItemId}")
	public Optional<OrderItem> retrieveOrderItem(@PathVariable String orderItemId) {
		return orderItemService.retrieveOrderItem(orderItemId);
		
	}
	
	@DeleteMapping(value = "/orderItem/{orderItemId}")
	public void removeOrderItem(@PathVariable String orderItemId) {
		orderItemService.removeOrderItem(orderItemId);
	}
	
	@GetMapping(value = "/orderItems")
	public List<OrderItem> retrieveAllOrderItems() {
		return orderItemService.retrieveAllOrderItems();
	}
}
