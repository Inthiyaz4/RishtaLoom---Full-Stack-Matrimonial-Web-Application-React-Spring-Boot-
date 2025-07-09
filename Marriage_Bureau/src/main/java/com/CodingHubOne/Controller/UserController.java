package com.CodingHubOne.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.CodingHubOne.Model.User;
import com.CodingHubOne.Service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
@RestController
public class UserController
{
	@Autowired
	private UserService userservice;
	
	
	@PostMapping("/register")
	public User register(@RequestBody User user)
	{
		return userservice.register(user);
	}
	
	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody User user)
	{
        Optional<User> loggedInUser = userservice.loginUser(user.getName(), user.getPassword());
        return loggedInUser.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }
	
	@GetMapping("/users")
	public List<User> getAllUsers()
	{
		return userservice.getAllUsers();
	}
	
	@GetMapping("/user/{id}")
	public Optional<User> findById(@PathVariable long id)
	{
		return userservice.findById(id);
	}
	
	@GetMapping("/users/advanced-Search")
	public List<User> advancedSeacrh(@RequestParam String caste, @RequestParam int age, @RequestParam String job , @RequestParam String state)
	{
		return userservice.advancedSeacrh(caste,age,job,state);
	}
	
	
	@PostMapping("/update/{id}")
	public String upsert(@PathVariable long id ,@RequestBody User user)
	{
		return userservice.upsert(id,user);
	}
	
	
	@DeleteMapping("/user/{id}")
	public String delete(@PathVariable long id)
	{
		return userservice.delete(id);
	}
}

