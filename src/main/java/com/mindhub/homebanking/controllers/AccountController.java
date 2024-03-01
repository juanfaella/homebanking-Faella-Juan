package com.mindhub.homebanking.controllers;

import com.mindhub.homebanking.dtos.AccountDTO;
import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping("/")
    public ResponseEntity<List<AccountDTO>> getAllAccounts() {
        List<Account> accounts = accountRepository.findAll();
        return new ResponseEntity<>(accounts.stream()
                .map(AccountDTO::new)
                .collect(Collectors.toList()), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOnePersonById(@PathVariable Long id){
        Account account =  accountRepository.findById(id).orElse(null);
        if (account == null){
            return new ResponseEntity<>("El id no existe", HttpStatus.NOT_FOUND);
        }
        AccountDTO accountDTO = new AccountDTO(account);
        return new ResponseEntity<>(accountDTO, HttpStatus.OK);
    }
}
