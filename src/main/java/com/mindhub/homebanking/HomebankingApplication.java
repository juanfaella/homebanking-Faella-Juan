package com.mindhub.homebanking;

import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
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
	public CommandLineRunner initData(ClientRepository clientRepository, AccountRepository accountRepository){
		return args -> {
			LocalDate date = LocalDate.now();
			LocalDate pushdate = LocalDate.now().plusDays(1);
			Client client1 = new Client("Juan", "faella", "juan@gmail.com" );
			Client client2 = new Client("Melba", "Morel", "melba@mindhub.com"  );
			Account account1 = new Account("VIN001", 5000.00, date);
			Account account2 = new Account("VIN002", 7500.00, pushdate);
			Account account3 = new Account("VIN003", 8500.00, date);
			Account account4 = new Account("VIN004", 3500.00, pushdate);
			client2.addAccount(account1);
			client2.addAccount(account2);
			client1.addAccount(account3);
			client1.addAccount(account4);
			clientRepository.save(client1);
			clientRepository.save(client2);
			accountRepository.save(account1);
			accountRepository.save(account2);
			accountRepository.save(account3);
			accountRepository.save(account4);
			System.out.println(client2);
			System.out.println("_______________________________________");
			System.out.println(client1);
		};
	}
}
                                                 