package com.example.hamster_shopapi.service.accountUser.impl;

import com.example.hamster_shopapi.model.AccountUser;
import com.example.hamster_shopapi.repository.IAccountUserRepository;
import com.example.hamster_shopapi.service.accountUser.IAccountUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class AccountUserService implements IAccountUserService {
    @Autowired
    private IAccountUserRepository accountUserRepository;

    @Override
    public AccountUser findAccountUserByNameAccount(String name) {
        AccountUser accountUser = accountUserRepository.findAccountUserByNameAccount(name);
        return accountUser;
    }

    @Override
    public Boolean existByNameAccount(String name) {
        AccountUser accountUser = accountUserRepository.findAccountUserByNameAccount(name);
        if (accountUser != null) {
            return true;
        }
        return false;
    }

    @Override
    public AccountUser saveAccountUser(AccountUser accountUser) {
        return accountUserRepository.save(accountUser);
    }

    @Override
    public AccountUser findAccountUserByEmail(String email) {
        return accountUserRepository.findAccountUserByEmail(email);
    }
    @Override
    public AccountUser findById(int id) {
        return accountUserRepository.findAccountUserById(id);
    }

}
