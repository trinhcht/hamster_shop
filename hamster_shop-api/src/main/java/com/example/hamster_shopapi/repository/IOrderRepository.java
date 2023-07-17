package com.example.hamster_shopapi.repository;

import com.example.hamster_shopapi.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IOrderRepository extends JpaRepository<Order, Integer> {
}
