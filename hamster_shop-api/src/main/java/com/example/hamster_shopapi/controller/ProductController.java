package com.example.hamster_shopapi.controller;

import com.example.hamster_shopapi.model.Product;
import com.example.hamster_shopapi.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/public/product")
public class ProductController {
    @Qualifier("IProductService")
    @Autowired
    private IProductService iProductService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<Product> showListProduct(@RequestParam(name = "name", defaultValue = "") String name,
                                         @RequestParam(name = "idType", defaultValue = "0") Integer idType,
                                         @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC, size = 8) Pageable pageable) {
        return iProductService.findProductByTypeProduct(name, idType, pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Integer id) {
        Product figureProduct = iProductService.findById(id);
        return new ResponseEntity<>(figureProduct, HttpStatus.OK);
    }

}
