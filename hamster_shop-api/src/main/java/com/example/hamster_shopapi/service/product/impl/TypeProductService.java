package com.example.hamster_shopapi.service.product.impl;

import com.example.hamster_shopapi.model.ProductType;
import com.example.hamster_shopapi.repository.IProductTypeRepository;
import com.example.hamster_shopapi.service.product.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductService implements ITypeProductService {
    @Autowired
    private IProductTypeRepository iProductTypeRepository;

    @Override
    public List<ProductType> findAll() {
        return iProductTypeRepository.findAll();
    }
}
