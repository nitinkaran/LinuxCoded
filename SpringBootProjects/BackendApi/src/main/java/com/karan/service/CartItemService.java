package com.karan.service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.models.CartItem;
import com.karan.models.Product;
import com.karan.repository.CartItemRepository;

@Service
public class CartItemService {
	
	@Autowired
	private CartItemRepository cartItemRepository;
	
	public CartItem createCartItem(Product product) {
		CartItem cartItem = new CartItem();
		cartItem.setCartItemId(String.valueOf(ThreadLocalRandom.current().nextInt(1001, 99999)).concat("A"));
		cartItem.setCartItemType(product.getProductType());
		cartItem.setCartItemPrice(product.getProductPrice());
		cartItem.setCartItemAttachment(product.getProductImage());
		cartItem.setProduct(product);
		return cartItemRepository.save(cartItem);
	}

	public Optional<CartItem> retrieveCartItem(String cartItemId) {
		return cartItemRepository.findById(cartItemId);
	}

	public void removeCartItem(String cartItemId) {
		cartItemRepository.deleteById(cartItemId);
	}

	public List<CartItem> retrieveAllCartItems() {
		return cartItemRepository.findAll();
	}

}
