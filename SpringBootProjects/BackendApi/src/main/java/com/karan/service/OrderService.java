package com.karan.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;

import com.karan.models.Order;
import com.karan.models.OrderItem;
import com.karan.repository.OrderRepository;

public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	
	Order order;

	public Order createOrder(OrderItem orderItem) {
		List<OrderItem> list = new ArrayList<>();
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		order = new Order();
		if(orderRepository.count() != 0) {
			return null;
		}
		list.add(orderItem);
		
		order.setOrderId(String.valueOf(ThreadLocalRandom.current().nextInt(1001, 99999)).concat("A"));
		order.setOrderStatus("SUBMITTED");
		order.setOrderDate(format.format(new java.util.Date()));
		order.setOrderTotalPrice(orderItem.getOrderItemPrice());
		order.setOrderItemList(list);
		return orderRepository.save(order);
	}

	public void addAnotherOrderItemToOrder(String orderId, OrderItem orderItem) {
		Optional<Order> existingOrder = orderRepository.findById(orderId);
		List<OrderItem> list = new ArrayList<OrderItem>();
		Order order = existingOrder.get();
		
		order.getOrderItemList()
		.stream()
		.forEach(list::add);
		
		list.add(orderItem);
		order.setOrderTotalPrice(order.getOrderTotalPrice() + orderItem.getOrderItemPrice());
		order.setOrderItemList(list);
		orderRepository.save(order);
	}

	public Optional<Order> retrieveOrder(String orderId) {
		return orderRepository.findById(orderId);
	}

	public void deleteOrder(String orderId) {
		orderRepository.deleteById(orderId);
	}

	public Order confirm(String orderId) {
		// TODO Auto-generated method stub
		return null;
	}

}
