package com.example.hamster_shopapi.service.accountUser;

import com.example.hamster_shopapi.model.AccountUser;

public interface IAccountUserService {
    AccountUser findAccountUserByNameAccount(String name);
    Boolean existByNameAccount(String name);
    AccountUser saveAccountUser(AccountUser accountUser);
    AccountUser findAccountUserByEmail(String email);
    AccountUser findById(int id);
}
