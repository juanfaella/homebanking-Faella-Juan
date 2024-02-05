package com.mindhub.homebanking.dtos;

import com.mindhub.homebanking.models.Transaction;


public class TransactionDTO {
    private Long id;
    private String type;
    private Double amount;


    public TransactionDTO(Transaction transaction) {
        this.id = transaction.getId();
        this.type = transaction.getType().name();
        this.amount = transaction.getAmount();
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

}
