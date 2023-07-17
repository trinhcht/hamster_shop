package com.example.hamster_shopapi.service.order;

import com.example.hamster_shopapi.model.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IOrderService {
    void save(Order order);
    Order findById(Integer id);
}