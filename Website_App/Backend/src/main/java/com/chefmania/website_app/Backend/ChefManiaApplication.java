package com.chefmania.website_app.Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ChefManiaApplication {
  
  public static void main(String[] args) {
    SpringApplication.run(ChefManiaApplication.class, args);
  }
  
 @Bean
public WebMvcConfigurer corsConfigurer() {
  return new WebMvcConfigurer() {
    @Override 
    public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/**")
              .allowedOrigins("https://chefmania1.vercel.app")
              .allowedMethods("*")
              .allowCredentials(true); // <-- this is crucial
    }
  };
} 

}