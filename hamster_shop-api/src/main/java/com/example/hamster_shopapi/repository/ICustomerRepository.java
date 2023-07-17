package com.example.hamster_shopapi.repository;

import com.example.hamster_shopapi.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    Customer findCustomerByAccountUser_NameAccount(String name);
}
