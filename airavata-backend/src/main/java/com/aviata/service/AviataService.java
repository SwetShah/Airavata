package com.aviata.service;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.aviata.config.Configuration;
import com.aviata.dto.Team;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor = @__({ @Autowired }))
public class AviataService {

	private RestTemplate restTemplate;
	private Configuration configuration;

	public List<Team> getTeamDetails() {
		final String url = configuration.getGitUrl();

		URI uri = null;
		List<Team> teams = new ArrayList();

		try {
			uri = new URI(url);
			ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);
			String json = response.getBody();
			teams = new ObjectMapper().readValue(json, List.class);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return teams;
	}

}
