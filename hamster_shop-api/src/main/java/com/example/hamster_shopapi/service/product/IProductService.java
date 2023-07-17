package com.example.hamster_shopapi.service.product;

import com.example.hamster_shopapi.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface IProductService {
    Page<Product> findProductByTypeProduct(String name , Integer idType, Pageable pageable);
    Product findById(int id);
    void save(Product figureProduct);
}
