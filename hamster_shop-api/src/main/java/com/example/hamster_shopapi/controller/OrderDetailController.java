package com.example.hamster_shopapi.controller;

import com.example.hamster_shopapi.model.Customer;
import com.example.hamster_shopapi.model.OrderDetail;
import com.example.hamster_shopapi.security.jwt.JwtProvider;
import com.example.hamster_shopapi.security.jwt.JwtTokenFilter;
import com.example.hamster_shopapi.service.cart.ICartService;
import com.example.hamster_shopapi.service.customer.ICustomerService;
import com.example.hamster_shopapi.service.order.IOrderService;
import com.example.hamster_shopapi.service.orderDetail.IOrderDetailService;
import com.example.hamster_shopapi.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/api/user/order-detail")
@CrossOrigin("*")
public class OrderDetailController {
    @Autowired
    private IProductService productService;
    @Autowired
    private ICartService cartService;
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService customerService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public List<OrderDetail> findAllOrderByCustomer(HttpServletRequest request , @PathVariable("id") Integer id){
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = customerService.findByAccount(name);
        return orderDetailService.findAllByOrder(id);
    }
}
