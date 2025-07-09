package com.CodingHubOne.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.web.multipart.MultipartFile;

import com.CodingHubOne.Model.User;

public interface UserService
{

	User register(User user);

	Optional<User> loginUser(String name, String password);

	List<User> getAllUsers();

	

	String upsert(long id, User user);

	String delete(long id);

	Optional<User> findById(long id);

	List<User> advancedSeacrh(String caste, int age, String job, String state);

}
