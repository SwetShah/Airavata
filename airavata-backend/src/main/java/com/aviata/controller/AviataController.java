package com.aviata.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aviata.dto.Team;
import com.aviata.service.AviataService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/aviata")
@CrossOrigin(origins = "*")
@AllArgsConstructor(onConstructor = @__({ @Autowired }))
public class AviataController {

	private AviataService aviataService;

	@GetMapping("/team")
	public List<Team> teamDetails() {
		return aviataService.getTeamDetails();
	}
}
