package com.example.hamster_shopapi.service.customer.impl;

import com.example.hamster_shopapi.model.Customer;
import com.example.hamster_shopapi.repository.ICustomerRepository;
import com.example.hamster_shopapi.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository iCustomerRepository;
    @Override
    public Customer findByAccount(String name) {
        return iCustomerRepository.findCustomerByAccountUser_NameAccount(name);
    }
}
