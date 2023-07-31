package com.example.hamster_shopapi.controller;

import com.example.hamster_shopapi.dto.CartCreateDTO;
import com.example.hamster_shopapi.dto.UpdateCartDTO;
import com.example.hamster_shopapi.model.Cart;
import com.example.hamster_shopapi.model.Customer;
import com.example.hamster_shopapi.model.Product;
import com.example.hamster_shopapi.security.jwt.JwtProvider;
import com.example.hamster_shopapi.security.jwt.JwtTokenFilter;
import com.example.hamster_shopapi.security.response.ResponseMessage;
import com.example.hamster_shopapi.service.cart.ICartService;
import com.example.hamster_shopapi.service.customer.ICustomerService;
import com.example.hamster_shopapi.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/user/cart")
@CrossOrigin("*")
public class CartRestController {
    @Autowired
    private ICartService cartService;
    @Autowired
    private JwtTokenFilter jwtTokenFilter;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IProductService productService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public ResponseEntity<?> findAllCart(HttpServletRequest request) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        if (name == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(cartService.findAllCart(name), HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody CartCreateDTO cartCreateDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = customerService.findByAccount(name);
        if (customer == null) {
            return new ResponseEntity<>(new ResponseMessage("Mã JWT không chính xác"), HttpStatus.BAD_REQUEST);
        }
        Cart existCart = cartService.existCart(customer.getId(), cartCreateDTO.getProduct());
        Product product = productService.findById(cartCreateDTO.getProduct());
        if (existCart != null) {
            if (product.getQuantity() > existCart.getQuantity()) {
                existCart.setQuantity(existCart.getQuantity() + cartCreateDTO.getQuantity());
                cartService.add(existCart);
                return new ResponseEntity<>(new ResponseMessage("Cập nhật giỏ hàng thành công"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }

        } else {
            Cart cart = new Cart();
            if (product.getQuantity() >= cartCreateDTO.getQuantity()) {
                cart.setQuantity(cartCreateDTO.getQuantity());
                cart.setCustomer(customer);
                cart.setStatus(cartCreateDTO.isStatus());
                cart.setProduct(product);
                cartService.add(cart);
                return new ResponseEntity<>(new ResponseMessage("Thêm vào giỏ hàng thành công"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new ResponseMessage("Thêm sản phẩm vào giỏ hàng thành công"), HttpStatus.BAD_REQUEST);
            }
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/update")
    public ResponseEntity<?> addCart(HttpServletRequest request, @RequestBody UpdateCartDTO updateCartDTO) {
        String token = jwtTokenFilter.getJwt(request);
        String name = jwtProvider.getUserNameFromToken(token);
        Customer customer = customerService.findByAccount(name);
        Cart cart = cartService.existCart(customer.getId(), updateCartDTO.getProduct());
        if (cart.getProduct().getQuantity() >= updateCartDTO.getQuantity()) {
            cart.setQuantity(updateCartDTO.getQuantity());
            cartService.add(cart);
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng thành công"), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseMessage("Cập nhật số lượng trong giỏ hàng không thành công"), HttpStatus.BAD_REQUEST);
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeCart(HttpServletRequest request, @PathVariable("id") Integer id) {
        cartService.delete(cartService.findById(id));
        return new ResponseEntity<>(new ResponseMessage("Xoá sản phẩm thành công"), HttpStatus.OK);
    }

}

