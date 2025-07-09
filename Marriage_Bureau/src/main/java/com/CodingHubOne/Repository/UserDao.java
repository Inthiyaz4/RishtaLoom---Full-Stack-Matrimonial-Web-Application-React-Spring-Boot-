package com.CodingHubOne.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CodingHubOne.Model.User;

@Repository
public interface UserDao extends JpaRepository<User,Long>
{

	Optional<User> findByNameAndPassword(String name, String password);

	List<User> findByCasteIgnoreCaseAndAgeAndJobIgnoreCaseAndStateIgnoreCase(String caste, int age, String job,
			String state);



	

	

}
