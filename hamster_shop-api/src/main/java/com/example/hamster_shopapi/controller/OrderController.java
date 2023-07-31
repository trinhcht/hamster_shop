package com.example.hamster_shopapi.controller;

import com.example.hamster_shopapi.dto.PaymentDTO;
import com.example.hamster_shopapi.model.*;
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
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/user/order")
@CrossOrigin("*")
public class OrderController {
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
    @PostMapping("/payment")
    public void payment(HttpServletRequest request, @RequestBody PaymentDTO paymentDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = customerService.findByAccount(name);
        List<Cart> cartList = cartService.findAllCart(name);
        Order order = new Order();
        order.setTotalPayment(paymentDTO.getTotalPrice());
        order.setDate(String.valueOf(LocalDate.now()));
        orderService.save(order);
        for (int i = 0; i < cartList.size(); i++) {
            Product product = productService.findById(cartList.get(i).getProduct().getId());
            product.setQuantity(cartList.get(i).getProduct().getQuantity() - cartList.get(i).getQuantity());
            productService.save(product);
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setQuantityOrder(cartList.get(i).getQuantity());
            orderDetail.setProduct(cartList.get(i).getProduct());
            orderDetail.setCustomer(customer);
            orderDetail.setOrder(order);
            orderDetailService.save(orderDetail);
            cartService.delete(cartList.get(i));
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/history")
    public List<Order> findAllOrderByCustomer(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = customerService.findByAccount(name);
        List<OrderDetail> orderDetails = orderDetailService.findAll(customer.getId());
        Set<Integer> integers = new HashSet<>();
        List<Order> orders = new ArrayList<>();
        for (int i = 0; i < orderDetails.size(); i++) {
            integers.add(orderDetails.get(i).getOrder().getId());
        }
        List<Integer> count = new ArrayList<>(integers);
        for (int i = 0; i < count.size(); i++) {
            Order order = orderService.findById(count.get(i));
            orders.add(order);
        }
        return orders;
    }
}
