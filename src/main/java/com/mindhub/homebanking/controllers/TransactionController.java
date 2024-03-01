package com.mindhub.homebanking.controllers;

import com.mindhub.homebanking.dtos.NewTransactionDTO;
import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.models.Transaction;
import com.mindhub.homebanking.models.TransactionType;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import com.mindhub.homebanking.repositories.TransactionRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/transfer")
    @Transactional
    public ResponseEntity<?> transfer(@RequestBody NewTransactionDTO newTransactionDTO) {
        String userMail = SecurityContextHolder.getContext().getAuthentication().getName();
        Client client = clientRepository.findByEmail(userMail);

        if (newTransactionDTO.destinationAccountNumber() == null || newTransactionDTO.destinationAccountNumber().isBlank()) {
            return ResponseEntity.badRequest().body("Vacia");
        }
        if (newTransactionDTO.sourceAccountNumber() == null || newTransactionDTO.sourceAccountNumber().isBlank()) {
            return ResponseEntity.badRequest().body("Vacia");
        }
        if (newTransactionDTO.description() == null || newTransactionDTO.description().isBlank()) {
            return ResponseEntity.badRequest().body("Vacia");
        }
        if (newTransactionDTO.amount() == null || newTransactionDTO.amount().toString().isBlank()) {
            return ResponseEntity.badRequest().body("Vacia");
        }
        if (!accountRepository.existsByNumber(newTransactionDTO.sourceAccountNumber())) {
            return ResponseEntity.badRequest().body("No Existe");
        }
        if (!accountRepository.existsByNumber(newTransactionDTO.destinationAccountNumber())) {
            return ResponseEntity.badRequest().body("No Existe");
        }
        if (newTransactionDTO.sourceAccountNumber().equals(newTransactionDTO.destinationAccountNumber())) {
            return ResponseEntity.badRequest().body("No pueden ser las mismas");
        }
        if (!accountRepository.existsAccountByNumberAndClient(newTransactionDTO.sourceAccountNumber(),client)){
            return ResponseEntity.badRequest().body("La cuenta de origen no pertenece al cliente");
        }
        Account origin = accountRepository.findByNumber(newTransactionDTO.sourceAccountNumber());
        if (origin.getBalance() < newTransactionDTO.amount()) {
            return ResponseEntity.badRequest().body("insufficient funds");
        }
        Account destination = accountRepository.findByNumber(newTransactionDTO.destinationAccountNumber());
        origin.setBalance(origin.getBalance() - newTransactionDTO.amount());
        destination.setBalance(destination.getBalance() + newTransactionDTO.amount());

        Transaction transactionOrigin = new Transaction(TransactionType.DEBIT, (-newTransactionDTO.amount()), newTransactionDTO.description(),LocalDateTime.now(), newTransactionDTO.sourceAccountNumber(), newTransactionDTO.destinationAccountNumber());
        origin.addTransaction(transactionOrigin);
        Transaction transactionDestination = new Transaction(TransactionType.CREDIT, newTransactionDTO.amount(), newTransactionDTO.description(),LocalDateTime.now(), newTransactionDTO.sourceAccountNumber(), newTransactionDTO.destinationAccountNumber());
        destination.addTransaction(transactionDestination);

        transactionRepository.save(transactionOrigin);
        transactionRepository.save(transactionDestination);

        accountRepository.save(origin);
        accountRepository.save(destination);


        return ResponseEntity.ok("success");
    }
}
