package com.mindhub.homebanking;

import com.mindhub.homebanking.models.*;
import com.mindhub.homebanking.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.time.LocalDate;
import java.util.Set;

@SpringBootApplication
public class HomebankingApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomebankingApplication.class, args);
	}
@Bean
	public CommandLineRunner initData(ClientLoanRepository clientLoanRepository, ClientRepository clientRepository, AccountRepository accountRepository, TransactionRepository transactionRepository, LoanRepository loanRepository){
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
			Loan loan1 = new Loan("Mortgage", 500.000, Set.of(12,24,36,48,60));
			Loan loan2 = new Loan("Personal", 100.000, Set.of(6,12,24));
			Loan loan3 = new Loan("Automotive", 300.000, Set.of(6,12,24,36));
			loanRepository.save(loan1);
			loanRepository.save(loan2);
			loanRepository.save(loan3);
			ClientLoan clientLoan1 = new ClientLoan(400000,60,client2, loan1);
			ClientLoan clientLoan2 = new ClientLoan(50000,12,client2, loan2);
			ClientLoan clientLoan3 = new ClientLoan(100000,24,client1, loan2);
			ClientLoan clientLoan4 = new ClientLoan(200000,36,client1, loan3);
			client1.addClientLoan(clientLoan1);
			client1.addClientLoan(clientLoan2);
			client2.addClientLoan(clientLoan3);
			client2.addClientLoan(clientLoan4);
			clientRepository.save(client1);
			clientRepository.save(client2);
			clientLoanRepository.save(clientLoan1);
			clientLoanRepository.save(clientLoan2);
			clientLoanRepository.save(clientLoan3);
			clientLoanRepository.save(clientLoan4);
			System.out.println(client1);
		};
	}
}
                                                 