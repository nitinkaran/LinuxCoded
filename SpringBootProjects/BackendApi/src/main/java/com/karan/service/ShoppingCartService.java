package com.karan.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karan.models.CartItem;
import com.karan.models.ShoppingCart;
import com.karan.repository.ShoppingCartRepository;

@Service
public class ShoppingCartService {

	@Autowired
	private ShoppingCartRepository shoppingCartRepository;
	
	ShoppingCart shoppingCart;

	public ShoppingCart createCart(CartItem cartItem) {
		List<CartItem> list = new ArrayList<>();
		shoppingCart = new ShoppingCart();
		if (shoppingCartRepository.count() != 0) {
			return null;
		}
		list.add(cartItem);
		shoppingCart.setShoppingCartId(String.valueOf(ThreadLocalRandom.current().nextInt(1001, 99999)).concat("A"));
		shoppingCart.setShoppingCartTotalPrice(cartItem.getCartItemPrice());
		shoppingCart.setCartItemList(list);
		return shoppingCartRepository.save(shoppingCart);
	}

	public Optional<ShoppingCart> retrieveShoppingCart(String cartId) {
		return shoppingCartRepository.findById(cartId);
	}

	public void deleteCart(String cartId) {
		shoppingCartRepository.deleteById(cartId);
	}

	public void addAnotherCartItemToShoppingCart(String cartId, CartItem newCartItem) {
		Optional<ShoppingCart> existingCart = shoppingCartRepository.findById(cartId);
		List<CartItem> list = new ArrayList<CartItem>();
		ShoppingCart cart = existingCart.get();
		
		cart.getCartItemList()
		.stream()
		.forEach(list::add);
		
		list.add(newCartItem);
		cart.setShoppingCartTotalPrice(cart.getShoppingCartTotalPrice()+newCartItem.getCartItemPrice());
		cart.setCartItemList(list);
		shoppingCartRepository.save(cart);
	}

	
	
	////NEED TO IMPLEMENT THE METHODS BELOW
	

	public void deleteCartItemFromCart(String cartId, String cartItemId) {
		// TODO Auto-generated method stub
		//NEED TO IMPLEMENT THIS METHOD
	}

}
