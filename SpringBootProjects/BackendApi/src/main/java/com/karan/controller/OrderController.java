package com.karan.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.Order;
import com.karan.models.OrderItem;
import com.karan.service.OrderService;

@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@PostMapping(value = "/order")
	public Order createOrder(@RequestBody OrderItem orderItem) {
		return orderService.createOrder(orderItem);
	}
	
	@PostMapping("/order/{orderId}")
	public void addAnotherOrderItemToOrder(@PathVariable String orderId, @RequestBody OrderItem orderItem) {
		orderService.addAnotherOrderItemToOrder(orderId, orderItem);
	}
	
	@GetMapping("/order/{orderId}")
	public Optional<Order> retrieveOrder(@PathVariable String orderId) {
		return orderService.retrieveOrder(orderId);
	}
	
	@DeleteMapping("/order/{orderId}")
	public void deleteOrder(@PathVariable String orderId) {
		orderService.deleteOrder(orderId);
	}
	
	@PostMapping("/confirm/{orderId}")
	public Order confirm(@PathVariable String orderId) {
		return orderService.confirm(orderId);
	}
	
}
