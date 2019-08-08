package com.ibm.training;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController 
{
	@Autowired
	LoginService service;
	
	@GetMapping(path="/hrDetails/all")
	public @ResponseBody Iterable<HR> getAllHR() {
		System.out.println("url hit for all");
		return service.getAllHR();
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/updateHR")
	void updateHR(@RequestBody HR hr) 
	{
		System.out.println(hr);
		service.updateHR(hr);
	}
}
