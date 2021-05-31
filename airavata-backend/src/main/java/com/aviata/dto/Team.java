package com.aviata.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Team {
	private String name;
	private String apache_id;
	private String email;
	private String organization;
	private String roles;
	private String time_zone;
}
