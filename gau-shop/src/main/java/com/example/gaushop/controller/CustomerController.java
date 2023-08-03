package com.example.gaushop.controller;

import com.example.gaushop.model.Customer;
import com.example.gaushop.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user/customer")
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    CustomerRepository customerRepository;
    @GetMapping("/find")
    public ResponseEntity<Customer> findByUserName(@RequestParam(name = "username") String userName){
        return new ResponseEntity<>(customerRepository.findByAccount_Name(userName), HttpStatus.OK);
    }
}
