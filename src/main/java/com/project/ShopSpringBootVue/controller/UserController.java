package com.project.ShopSpringBootVue.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api")
public class UserController {
    @GetMapping("/users")
    public String getUsers() {
        System.out.println("Getting users...");
        return "GET /users";
    }
}
