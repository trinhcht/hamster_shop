package com.example.hamster_shopapi.controller;

import com.example.hamster_shopapi.model.ProductType;
import com.example.hamster_shopapi.service.product.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/product-type")
@CrossOrigin("*")
public class ProductTypeService {
    @Qualifier("ITypeProductService")
    @Autowired
    private ITypeProductService iTypeProductService;
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<ProductType> findAllProductType(){
        return iTypeProductService.findAll();
    }
}
