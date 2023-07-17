package com.example.hamster_shopapi.service.orderDetail.impl;

import com.example.hamster_shopapi.model.OrderDetail;
import com.example.hamster_shopapi.repository.IOrderDetailRepository;
import com.example.hamster_shopapi.service.orderDetail.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private IOrderDetailRepository iOrderDetailRepository;
    @Override
    public void save(OrderDetail orderDetail) {
        iOrderDetailRepository.save(orderDetail);
    }

    @Override
    public List<OrderDetail> findAll(Integer id) {
        return iOrderDetailRepository.findOrderDetailByCustomer_Id(id);
    }

    @Override
    public List<OrderDetail> findAllByOrder(Integer id) {
        return iOrderDetailRepository.findOrderDetailByOrder_Id(id);
    }
}
