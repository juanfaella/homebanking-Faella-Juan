package com.mindhub.homebanking.Services;

import com.mindhub.homebanking.dtos.TransactionDTO;
import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Transaction;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.mindhub.homebanking.models.TransactionType.CREDIT;
import static com.mindhub.homebanking.models.TransactionType.DEBIT;

@Service
public class TransactionService {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private TransactionRepository transactionRepository;

    public void transfer(TransactionDTO transactionDTO){
        Account destinationAccount = accountRepository.findByNumber(transactionDTO.getDestinationAccountNumber());
        Account sourceAccount = accountRepository.findByNumber(transactionDTO.getSourceAccountNumber());

        if (sourceAccount == null || destinationAccount == null) {
            throw new RuntimeException("Cuenta de origen o destino no encontrada");
        }
        if (sourceAccount.getId().equals(destinationAccount.getId())) {
            throw new RuntimeException("Las cuentas de origen y destino no pueden ser las mismas");
        }
        if (sourceAccount.getBalance() < transactionDTO.getAmount()) {
            throw new RuntimeException("La cuenta de origen no tiene fondos suficientes");
        }

        Transaction debitTransaction = new Transaction(
                DEBIT,
                transactionDTO.getAmount(),
                LocalDateTime.now(),
                "Transferencia de fondos",
                transactionDTO.getDestinationAccountNumber(),
                transactionDTO.getSourceAccountNumber()
        );

        transactionRepository.save(debitTransaction);

        sourceAccount.setBalance(sourceAccount.getBalance() - transactionDTO.getAmount());
        destinationAccount.setBalance(destinationAccount.getBalance() + transactionDTO.getAmount());

        accountRepository.save(sourceAccount);
        accountRepository.save(destinationAccount);
    }
}
