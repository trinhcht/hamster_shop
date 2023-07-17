package com.example.hamster_shopapi.service.order.impl;

import com.example.hamster_shopapi.model.Order;
import com.example.hamster_shopapi.repository.IOrderRepository;
import com.example.hamster_shopapi.service.order.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository iOrderRepository;
    @Override
    public void save(Order order) {
        iOrderRepository.save(order);
    }

    @Override
    public Order findById(Integer id) {
        return iOrderRepository.findById(id).get();
    }
}
