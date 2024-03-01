package com.mindhub.homebanking.dtos;

import com.mindhub.homebanking.models.Transaction;


public class TransactionDTO {
    private Long id;
    private String type;
    private Double amount;
    private String description;
    private String destinationAccountNumber;
    private String sourceAccountNumber;

    public TransactionDTO() {
    }

    public TransactionDTO(Transaction transaction) {
        this.id = transaction.getId();
        this.type = transaction.getType().name();
        this.amount = transaction.getAmount();
        this.description = transaction.getDescription();
        this.destinationAccountNumber = transaction.getDestinationAccountNumber();
        this.sourceAccountNumber = transaction.getSourceAccountNumber();
    }
    public String getSourceAccountNumber() {
        return sourceAccountNumber;
    }
    public String getDescription() {
        return description;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public Double getAmount() {
        return amount;
    }
    public String getDestinationAccountNumber() {
        return destinationAccountNumber;
    }

}
