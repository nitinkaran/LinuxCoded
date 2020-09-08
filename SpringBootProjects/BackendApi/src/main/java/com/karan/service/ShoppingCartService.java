package com.karan.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.models.ShoppingCart;
import com.karan.repository.ShoppingCartRepository;

@Service
public class ShoppingCartService {

	@Autowired
	private ShoppingCartRepository shoppingCartRepository;

	public ShoppingCart createCart(ShoppingCart shoppingCart) {
		return shoppingCartRepository.save(shoppingCart);
	}

	public Optional<ShoppingCart> retrieveShoppingCart(String cartId) {
		return shoppingCartRepository.findById(Long.getLong(cartId));
	}
}
