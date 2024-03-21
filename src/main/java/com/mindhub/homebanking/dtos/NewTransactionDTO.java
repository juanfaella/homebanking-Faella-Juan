package com.mindhub.homebanking.dtos;

import java.time.LocalDateTime;
import java.util.Date;

public record NewTransactionDTO(String destinationAccountNumber, String sourceAccountNumber, Double amount, String description) {
}
