package com.example.hamster_shopapi.service.cart;

import com.example.hamster_shopapi.dto.RequestPayment;
import com.example.hamster_shopapi.dto.ResponsePayment;
import com.example.hamster_shopapi.model.Cart;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.List;

@Service
public interface ICartService {
    List<Cart> findAllCart(String name);
    Cart existCart(int idCustomer , int idProduct);

    void decrease(int quantity);

    void increase(int quantity);
    void add(Cart cart);
    void delete(Cart cart);
    Cart findById(int id);
    List<Cart> findCartByCustomerId(int id);
    ResponsePayment payment(RequestPayment requestPayment) throws UnsupportedEncodingException;
}