package com.example.hamster_shopapi.service.product.impl;

import com.example.hamster_shopapi.model.Product;
import com.example.hamster_shopapi.repository.IProductRepository;
import com.example.hamster_shopapi.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;
    @Override
    public Page<Product> findProductByTypeProduct(String name, Integer idType, Pageable pageable) {
        return iProductRepository.findAllProduct(name , idType , pageable);
    }
    @Override
    public Product findById(int id) {
        return iProductRepository.findById(id).get();
    }

    @Override
    public void save(Product product) {
        iProductRepository.save(product);
    }
}
