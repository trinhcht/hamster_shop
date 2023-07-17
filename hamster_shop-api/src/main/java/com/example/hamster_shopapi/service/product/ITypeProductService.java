package com.example.hamster_shopapi.service.product;

import com.example.hamster_shopapi.model.ProductType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ITypeProductService {
    List<ProductType> findAll();
}
