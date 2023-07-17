package com.example.hamster_shopapi.repository;

import com.example.hamster_shopapi.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Transactional
    @Query(value = "SELECT * FROM product \n" +
            "WHERE (:name IS NULL OR product.name LIKE CONCAT('%', :name, '%'))\n" +
            "AND (:idType = 0 OR product.product_type_id = :idType)", nativeQuery = true)
    Page<Product> findAllProduct(@Param("name") String name, @Param("idType") Integer idType, Pageable pageable);
    Product findProductById(int id);
}
