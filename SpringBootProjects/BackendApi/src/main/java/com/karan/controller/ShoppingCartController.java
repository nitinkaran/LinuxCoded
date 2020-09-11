package com.karan.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.karan.models.CartItem;
import com.karan.models.ShoppingCart;
import com.karan.service.ShoppingCartService;

@RestController
public class ShoppingCartController {

	@Autowired
	private ShoppingCartService shoppingCartService;
	
	
	@PostMapping(value = "/cart")
	public ShoppingCart createCart(@RequestBody CartItem cartItem) {
		return shoppingCartService.createCart(cartItem);
	}
	
	@PostMapping("/cart/{cartId}")
	public void addAnotherCartItemToShoppingCart(@PathVariable String cartId, @RequestBody CartItem cartItem) {
		shoppingCartService.addAnotherCartItemToShoppingCart(cartId, cartItem);
	}
	
	@GetMapping("/cart/{cartId}")
	public Optional<ShoppingCart> retrieveShoppingCart(@PathVariable String cartId) {
		return shoppingCartService.retrieveShoppingCart(cartId);
	}
	
	@DeleteMapping("/cart/{cartId}")
	public void deleteCart(@PathVariable String cartId) {
		shoppingCartService.deleteCart(cartId);
	}
	
	@DeleteMapping("/cart/{cartId}/cartItem/{cartItemId}")
	public void deleteCartItemFromCart(@PathVariable String cartId, @PathVariable String cartItemId) {
		shoppingCartService.deleteCartItemFromCart(cartId, cartItemId);
	}
	
	@PostMapping("/checkout/{cartId}")
	public ShoppingCart checkout(@PathVariable String cartId) {
		return shoppingCartService.checkout(cartId);
	}
	
}
