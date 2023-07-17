package com.example.hamster_shopapi.service.roles.impl;

import com.example.hamster_shopapi.model.Roles;
import com.example.hamster_shopapi.repository.IRolesRepository;
import com.example.hamster_shopapi.service.roles.IRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolesService implements IRolesService {
    @Autowired
    IRolesRepository rolesRepository;
    @Override
    public Roles findRolesByName(String name) {
        return rolesRepository.findByNameRoles(name);
    }
}
