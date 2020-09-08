package com.karan.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.ShoppingCart;
import com.karan.service.ShoppingCartService;

@RestController
public class ShoppingCartController {

	@Autowired
	private ShoppingCartService shoppingCartService;
	
	@PostMapping(value = "/cart")
	public ShoppingCart createCart(@RequestBody ShoppingCart shoppingCart) {
		return shoppingCartService.createCart(shoppingCart);
	}
	
	@GetMapping("/cart/{cartId}")
	public Optional<ShoppingCart> retrieveShoppingCart(@PathVariable String cartId) {
		return shoppingCartService.retrieveShoppingCart(cartId);
	}
}
