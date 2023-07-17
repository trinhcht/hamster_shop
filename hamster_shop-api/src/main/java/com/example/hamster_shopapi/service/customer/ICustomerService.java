package com.example.hamster_shopapi.service.customer;

import com.example.hamster_shopapi.model.Customer;
import org.springframework.stereotype.Service;

@Service
public interface ICustomerService {
    Customer findByAccount(String name);
}
