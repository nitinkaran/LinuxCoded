package com.karan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.CartItem;
import com.karan.models.Product;
import com.karan.service.CartItemService;

@CrossOrigin
@RestController
public class CartItemController {

	@Autowired
	private CartItemService cartItemService;

	@PostMapping(value = "/create-cartItem")
	public CartItem createCartItem(@RequestBody Product product) {
		return (CartItem) cartItemService.createCartItem(product);
	}
	
	@GetMapping(value = "/cartItem/{cartItemId}")
	public Optional<CartItem> retrieveCartItem(@PathVariable String cartItemId) {
		return cartItemService.retrieveCartItem(cartItemId);
		
	}
	
	@DeleteMapping(value = "/cartItem/{cartItemId}")
	public void removeCartItem(@PathVariable String cartItemId) {
		cartItemService.removeCartItem(cartItemId);
	}
	
	@GetMapping(value = "/cartItems")
	public List<CartItem> retrieveAllCartItems() {
		return cartItemService.retrieveAllCartItems();
	}
}
