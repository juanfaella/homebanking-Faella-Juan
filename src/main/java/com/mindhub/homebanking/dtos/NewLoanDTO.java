package com.mindhub.homebanking.dtos;


import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.models.Loan;

public record NewLoanDTO(Double amount, Integer payments, Long IdLoan, String DestinationAccountNumber, Client client, Loan loanName) {
}
