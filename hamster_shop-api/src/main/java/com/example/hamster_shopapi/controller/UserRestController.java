package com.example.hamster_shopapi.controller;

import com.example.hamster_shopapi.model.AccountUser;
import com.example.hamster_shopapi.model.Roles;
import com.example.hamster_shopapi.security.jwt.JwtProvider;
import com.example.hamster_shopapi.security.request.SignInForm;
import com.example.hamster_shopapi.security.request.SignUpForm;
import com.example.hamster_shopapi.security.response.ErrorMessage;
import com.example.hamster_shopapi.security.response.JwtResponse;
import com.example.hamster_shopapi.security.response.ResponseMessage;
import com.example.hamster_shopapi.security.userPrincipal.UserPrinciple;
import com.example.hamster_shopapi.service.accountUser.IAccountUserService;
import com.example.hamster_shopapi.service.roles.IRolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/api/public")
@CrossOrigin("*")
public class UserRestController {
    @Autowired
    IAccountUserService accountUserService;
    @Autowired
    IRolesService roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignUpForm signUpForm) {
        if (accountUserService.existByNameAccount(signUpForm.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("The username existed !!, Try again"), HttpStatus.OK);
        }
        AccountUser users = new AccountUser(signUpForm.getUsername(), passwordEncoder.encode(signUpForm.getPassword()));
        Set<String> strRoles = signUpForm.getRoles();
        Set<Roles> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case "admin":
                    Roles adminRole = roleService.findRolesByName("ADMIN");
                    roles.add(adminRole);
                    break;
                case "employee":
                    Roles employeeRole = roleService.findRolesByName("EMPLOYEE");
                    roles.add(employeeRole);
                    break;
                default:
                    Roles userRole = roleService.findRolesByName("USER");
                    roles.add(userRole);
            }
        });
        users.setRoles(roles);
        System.out.println(users);
        AccountUser accountUser = accountUserService.saveAccountUser(users);
        if (accountUser != null) {
            return new ResponseEntity<>(new ResponseMessage("Create user success!!!"), HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new ResponseMessage("Create user failed!!!"), HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> login(@Valid @RequestBody SignInForm signInForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            List<ErrorMessage> errorMessages = new ArrayList<>();
            bindingResult
                    .getFieldErrors()
                    .stream()
                    .forEach(f -> errorMessages.add(new ErrorMessage(f.getField(), f.getDefaultMessage())));
            return new ResponseEntity<>(errorMessages, HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signInForm.getUsername(), signInForm.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        UserPrinciple userPrinciple = (UserPrinciple) authentication.getPrincipal();
        return new ResponseEntity<>(new JwtResponse(token, userPrinciple.getUsername(), userPrinciple.getAuthorities()), HttpStatus.OK);
    }
}