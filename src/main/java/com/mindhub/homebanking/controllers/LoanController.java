package com.mindhub.homebanking.controllers;


import com.mindhub.homebanking.dtos.NewLoanDTO;
import com.mindhub.homebanking.models.*;
import com.mindhub.homebanking.repositories.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDateTime;


@RestController
@RequestMapping("/api/loans")
public class LoanController {

  @Autowired
  private ClientLoanRepository clientLoanRepository;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private LoanRepository loanRepository;
    @Autowired
    private TransactionRepository transactionRepository;
    @PostMapping("/loan")
    @Transactional
    public ResponseEntity<?> loan(@RequestBody NewLoanDTO newLoanDTO){
        String userMail = SecurityContextHolder.getContext().getAuthentication().getName();
        Client client = clientRepository.findByEmail(userMail);
        if (client == null) {
            return ResponseEntity.badRequest().body("Client does not exist");
        }
        if (newLoanDTO.amount() == null || newLoanDTO.amount() <= 0
                || newLoanDTO.payments() <= 0
                || newLoanDTO.IdLoan() == null){
        return ResponseEntity.badRequest().body("Invalid loan data");
        }
        Loan existingLoan = loanRepository.findById(newLoanDTO.IdLoan()).orElse(null);
        if (existingLoan == null){
            return ResponseEntity.badRequest().body("Loan does not exist");
        }
        if (newLoanDTO.amount() > existingLoan.getMaxAccount()){
            return ResponseEntity.badRequest().body("Requested amount exceeds maximun");
        }
        Account destinationAccount = accountRepository.findByNumber(newLoanDTO.DestinationAccountNumber());
        if (destinationAccount == null){
            return ResponseEntity.badRequest().body("Destination account does not exist");
        }
        if (!existingLoan.getPayments().contains(newLoanDTO.payments())){
            return ResponseEntity.badRequest().body("Does not contain the fee");
        }
        if (!destinationAccount.getClient().equals(client)){
            return ResponseEntity.badRequest().body("Destination account does not belong");
        }
        ClientLoan clientLoan = new ClientLoan(newLoanDTO.amount(),newLoanDTO.payments(),client,existingLoan);
        Transaction transaction = new Transaction(TransactionType.CREDIT, newLoanDTO.amount()*1.2,"LOAN NEW", LocalDateTime.now(),newLoanDTO.DestinationAccountNumber(),newLoanDTO.DestinationAccountNumber());
        Account account = accountRepository.findByNumber(newLoanDTO.DestinationAccountNumber());
        account.setBalance(account.getBalance() + newLoanDTO.amount());
        client.addClientLoan(clientLoan);
        loanRepository.save(existingLoan);
        clientLoanRepository.save(clientLoan);
        transactionRepository.save(transaction);
        clientRepository.save(client);
        accountRepository.save(account);




        return ResponseEntity.ok().body("OK LOAN");
    }
}
