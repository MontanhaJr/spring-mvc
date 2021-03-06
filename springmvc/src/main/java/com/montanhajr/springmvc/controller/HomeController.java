package com.montanhajr.springmvc.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.montanhajr.springmvc.model.Usuario;
import com.montanhajr.springmvc.repository.IUsuarioRepository;

@Controller
@RequestMapping("/index")
public class HomeController {
	
	@Autowired
	private IUsuarioRepository _usuarioRepository;
	
	@RequestMapping("/**")
	public ModelAndView tela() {
		return new ModelAndView("index");
	}
	
	@RequestMapping("/cadastrar")
	@ResponseBody
	public Usuario cadastrar(@RequestBody Usuario usuario) {
		System.out.print(usuario);
		return _usuarioRepository.save(usuario);
	}
	
	@RequestMapping("/editarUsuario/{id}")
	@ResponseBody
	public Optional<Usuario> editar(@PathVariable Long id) {
		return _usuarioRepository.findById(id);
		
	}
}
