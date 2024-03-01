package com.mindhub.homebanking.dtos;

public record NewTransactionDTO(String destinationAccountNumber, String sourceAccountNumber, Double amount, String description ) {
}
