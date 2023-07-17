package com.example.hamster_shopapi.repository;

import com.example.hamster_shopapi.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolesRepository extends JpaRepository<Roles, Integer> {
    Roles findByNameRoles(String name);
}
