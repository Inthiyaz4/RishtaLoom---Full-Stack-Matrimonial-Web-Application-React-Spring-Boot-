package com.CodingHubOne.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.CodingHubOne.Model.User;
import com.CodingHubOne.Repository.UserDao;

@Service
public class UserServiceImpl implements UserService
{

	@Autowired
	private UserDao userdao;
	
	@Override
	public User register(User user)
	{
		return userdao.save(user);
	}

	@Override
	public Optional<User> loginUser(String name, String password)
	{
		return userdao.findByNameAndPassword(name,password);
	}

	@Override
	public List<User> getAllUsers()
	{
		return userdao.findAll();
	}

	@Override
	public Optional<User> findById(long id)
	{
		return userdao.findById(id);
	}
	
	


	@Override
	public String upsert(long id, User newuser)
	{
		Optional<User> opt=findById(id);
		if(opt.isPresent())
		{
			User olduser=opt.get();
			olduser.setName(newuser.getName());
			olduser.setPassword(newuser.getPassword());
			olduser.setGender(newuser.getGender());
			olduser.setCity(newuser.getCity());
			olduser.setState(newuser.getState());
			olduser.setCaste(newuser.getCaste());
			olduser.setAge(newuser.getAge());
			olduser.setPersonalInfo(newuser.getPersonalInfo());
			olduser.setProfilePic(newuser.getProfilePic());
			olduser.setPhone(newuser.getPhone());
			olduser.setJob(newuser.getJob());
			olduser.setJobLocation(newuser.getJobLocation());
			return userdao.save(olduser)+"succesfully added";
		}
		else
		{
			return "ID not FOund";
		}
	}

	@Override
	public String delete(long id)
	{
		Optional<User> opt=findById(id);
		if(opt.isPresent())
		{
			User user=opt.get();
			userdao.delete(user);
			return "Deleted Succesfully";
		}
		else
		{
			return " given " +id+"is not found";
		}
	}

	@Override
	public List<User> advancedSeacrh(String caste, int age, String job, String state)
	{
		return userdao.findByCasteIgnoreCaseAndAgeAndJobIgnoreCaseAndStateIgnoreCase(caste,age,job,state);
	}



	
	
	

}
