package com.example.hamster_shopapi.controller;

import com.example.hamster_shopapi.model.Customer;
import com.example.hamster_shopapi.security.jwt.JwtProvider;
import com.example.hamster_shopapi.security.jwt.JwtTokenFilter;
import com.example.hamster_shopapi.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user/customer")
@CrossOrigin("*")
public class CustomerRestController {
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Customer findCustomer(HttpServletRequest request){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = customerService.findByAccount(name);
        return customer;
    }
}