package com.mindhub.homebanking;

import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.models.Transaction;
import com.mindhub.homebanking.models.TransactionType;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import com.mindhub.homebanking.repositories.TransactionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.time.LocalDate;
@SpringBootApplication
public class HomebankingApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomebankingApplication.class, args);
	}
@Bean
	public CommandLineRunner initData(ClientRepository clientRepository, AccountRepository accountRepository, TransactionRepository transactionRepository){
		return args -> {
			LocalDate date = LocalDate.now();
			LocalDate pushdate = LocalDate.now().plusDays(1);
			Client client1 = new Client("Juan", "faella", "juan@gmail.com" );
			Client client2 = new Client("Melba", "Morel", "melba@mindhub.com"  );
			clientRepository.save(client1);
			clientRepository.save(client2);
			Account account1 = new Account("VIN001", 5000.00, date);
			Account account2 = new Account("VIN002", 7500.00, pushdate);
			Account account3 = new Account("VIN003", 8500.00, date);
			Account account4 = new Account("VIN004", 3500.00, pushdate);
			client1.addAccount(account1);
			client1.addAccount(account2);
			client2.addAccount(account3);
			client2.addAccount(account4);
			accountRepository.save(account1);
			accountRepository.save(account2);
			accountRepository.save(account3);
			accountRepository.save(account4);
			Transaction transaction1 = new Transaction(TransactionType.CREDIT, 1000.00, date.atStartOfDay());
			Transaction transaction2 = new Transaction(TransactionType.DEBIT, 500.00, pushdate.atStartOfDay());
			Transaction transaction3 = new Transaction(TransactionType.CREDIT, 2000.00, date.atStartOfDay());
			Transaction transaction4 = new Transaction(TransactionType.DEBIT, 1000.00, pushdate.atStartOfDay());
			account1.addTransaction(transaction1);
			account2.addTransaction(transaction2);
			account3.addTransaction(transaction3);
			account4.addTransaction(transaction4);
			transactionRepository.save(transaction1);
			transactionRepository.save(transaction2);
			transactionRepository.save(transaction3);
			transactionRepository.save(transaction4);
		};
	}
}
                                                 