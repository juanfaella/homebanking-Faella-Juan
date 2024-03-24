package com.mindhub.homebanking.controllers;

import com.mindhub.homebanking.dtos.AccountDTO;
import com.mindhub.homebanking.dtos.CardDTO;
import com.mindhub.homebanking.dtos.ClientDTO;
import com.mindhub.homebanking.dtos.ClientLoanDTO;
import com.mindhub.homebanking.models.*;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.CardRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import com.mindhub.homebanking.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/clients")
public class ClientController {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private LoanRepository clientLoanRepository;
    @Autowired
    private CardRepository cardRepository;
    @GetMapping("/")
    public ResponseEntity<List<ClientDTO>> getAllClients(){
        List<Client> clients =  clientRepository.findAll();
        return new ResponseEntity<>(clients.stream().map(ClientDTO::new).collect(Collectors.toList()), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getOnePersonById(@PathVariable Long id){
        Client client = clientRepository.findById(id).orElse(null);
        if (client == null){
            return new ResponseEntity<>("El id no existe", HttpStatus.NOT_FOUND);
        }
        ClientDTO clientDTO = new ClientDTO(client);
        List<ClientLoanDTO> clientLoanDTOs = client.getClientLoans().stream()
                .map(ClientLoanDTO::new)
                .collect(Collectors.toList());
        clientDTO.setClientLoans(clientLoanDTOs);
        List<CardDTO> cardDTOs = client.getCards().stream()
                .map(CardDTO::new)
                .collect(Collectors.toList());
        clientDTO.setCards(cardDTOs);
        return new ResponseEntity<>(clientDTO, HttpStatus.OK);
    }
    @GetMapping("/test")
    public ResponseEntity<?>test(){
        String mail = SecurityContextHolder.getContext().getAuthentication().getName();
        return ResponseEntity.ok("Hello" + mail);
    }
    @GetMapping("/current")
    public ResponseEntity<?> getClient(){
        String userMail = SecurityContextHolder.getContext().getAuthentication().getName();
        Client client = clientRepository.findByEmail(userMail);
        return ResponseEntity.ok(new ClientDTO(client));
    }
    @PostMapping("/current/accounts")
    public ResponseEntity<?> createAccountForLoggedInClient() {
        String userMail = SecurityContextHolder.getContext().getAuthentication().getName();
        Client client = clientRepository.findByEmail(userMail);
        if (client.getAccounts().size() >= 3){
            return new ResponseEntity<>("Client already has 3 registered accounts", HttpStatus.FORBIDDEN);
        }
        String accountNumber = generateAccountNumber();
        Account account =  new Account(accountNumber, 0.0, LocalDate.now());

        account.setClient(client);
        accountRepository.save(account);
        return new ResponseEntity<>(new AccountDTO(account), HttpStatus.CREATED);
    }
    private String generateAccountNumber(){
        Random random = new Random();
        int accountNumberSuffix = 100000 + random.nextInt(900000);
        return "VIN-" + accountNumberSuffix;
    }
    @PostMapping("/current/cards")
    public ResponseEntity<?> createCardForLoggedInClient(@RequestBody Map<String, String> cardDetails) {
        String userMail = SecurityContextHolder.getContext().getAuthentication().getName();
        Client client = clientRepository.findByEmail(userMail);
        String color = cardDetails.get("color");
        String type = cardDetails.get("type");
        long existingCardsCount = client.getCards().stream()
                .filter(card -> card.getCardType().toString().equals(cardDetails.get("type")))
                .count();
        System.out.println(existingCardsCount);
        if (existingCardsCount >= 3) {
            return new ResponseEntity<>("Client already has 3 cards of the specified type", HttpStatus.FORBIDDEN);
        }
        String cardNumber = generateCardNumber();
        String cardHolder = client.getName() + " " + client.getLastName();
        int cvv = generateRandomCvv();
        LocalDate startDate = LocalDate.now();
        LocalDate expirationDate = startDate.plusYears(5);
        Card card = new Card(cardNumber,  CardType.valueOf(type), CardColor.valueOf(color), cardHolder, cvv, startDate, expirationDate);
        client.addClientCard(card);
        cardRepository.save(card);
        clientRepository.save(client);
        return new ResponseEntity<>(new CardDTO(card), HttpStatus.CREATED);
    }
    private String generateCardNumber() {
        Random random = new Random();
        return String.format("%04d-%04d-%04d-%04d",
                random.nextInt(10000),
                random.nextInt(10000),
                random.nextInt(10000),
                random.nextInt(10000));
    }
    private int generateRandomCvv() {
        Random random = new Random();
        return random.nextInt(1000);
    }
}
