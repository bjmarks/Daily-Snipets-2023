package com.deskmc.deskmc.Controllers;

import com.deskmc.deskmc.Modals.User;
import com.deskmc.deskmc.Repositories.UserRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserControllers {
    @Autowired
    private UserRepositories userRepositories;

    @GetMapping("/")
    public String getPage() {
        return "Welcome Users";
    }
    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepositories.findAll();
    }
}
