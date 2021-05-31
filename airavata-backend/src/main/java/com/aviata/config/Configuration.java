package com.aviata.config;

import org.springframework.beans.factory.annotation.Value;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@org.springframework.context.annotation.Configuration
public class Configuration {

	@Getter
	@Setter
	@Value("${gitUrl}")
	private String gitUrl;

}
