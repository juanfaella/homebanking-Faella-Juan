package com.mindhub.homebanking.controllers;

import com.mindhub.homebanking.Services.JwtUtilService;
import com.mindhub.homebanking.dtos.LoginDTO;
import com.mindhub.homebanking.dtos.RegisterDTO;
import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JwtUtilService jwtUtilService;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login (@RequestBody LoginDTO loginDTO){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.email(), loginDTO.password()));
            final UserDetails userDetails = userDetailsService.loadUserByUsername(loginDTO.email());
            final String jwt = jwtUtilService.generateToken(userDetails);
            return ResponseEntity.ok(jwt);
        }catch (Exception e){
            return new ResponseEntity<>("MAL", HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO registerDTO){
        if (registerDTO.getFirstName().isBlank()){
            return new ResponseEntity<>( "The name field must no be empty",HttpStatus.FORBIDDEN);
        }
        if (registerDTO.getLastName().isBlank()){
            return new ResponseEntity<>( "The LastName field must no be empty",HttpStatus.FORBIDDEN);
        }
        if (registerDTO.getPassword().isBlank()){
            return new ResponseEntity<>( "The password field must no be empty",HttpStatus.FORBIDDEN);
        }
        Client client = new Client(
                registerDTO.getFirstName(),
                registerDTO.getLastName(),
                registerDTO.getEmail(),
                passwordEncoder.encode(registerDTO.getPassword()));

        clientRepository.save(client);
        String accountNumber = generateAccountNUmber();
        Account account = new Account(accountNumber, 0.0, LocalDate.now());
        return ResponseEntity.ok(client);
    }
    private String generateAccountNUmber(){
        Random random = new Random();
        int accountNumberSuffix = 100000 + random.nextInt(900000);
        return "VIN-" + accountNumberSuffix;
    }
}
