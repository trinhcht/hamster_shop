package com.example.hamster_shopapi.repository;

import com.example.hamster_shopapi.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findCartByCustomer_AccountUser_NameAccount(String name);
    Cart findCartByCustomer_IdAndProduct_Id(int idCustomer , int product);
    List<Cart> findCartByCustomer_Id(int id);
}
