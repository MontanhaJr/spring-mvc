package com.montanhajr.springmvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping({"/","/index"})
public class HomeController {
	
	@RequestMapping
	public ModelAndView tela() {
		return new ModelAndView("index");
	}
}
