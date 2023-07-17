package com.example.hamster_shopapi.service.roles;

import com.example.hamster_shopapi.model.Roles;

public interface IRolesService {
    Roles findRolesByName(String name);
}
