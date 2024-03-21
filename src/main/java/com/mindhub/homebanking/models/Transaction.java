package com.mindhub.homebanking.models;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private String sourceAccountNumber;
    @Enumerated(EnumType.STRING)
    private TransactionType type;
    private String destinationAccountNumber;
    private Double amount;
    private LocalDateTime date;



    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "account_id")
    private Account account;

    public Transaction(TransactionType type, Double amount,String description,LocalDateTime date, String sourceAccountNumber, String destinationAccountNumber) {
        this.type = type;
        this.amount = amount;
        this.description = description;
        this.date = date;
        this.sourceAccountNumber = sourceAccountNumber;
        this.destinationAccountNumber = destinationAccountNumber;
    }

    public Transaction() {
    }

    public String getSourceAccountNumber() {
        return sourceAccountNumber;
    }

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return id;
    }
    public String getDestinationAccountNumber() {
        return destinationAccountNumber;
    }

    public TransactionType getType() {
        return type;
    }

    public void setType(TransactionType type) {
        this.type = type;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }


    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id=" + id +
                ", type=" + type +
                ", amount=" + amount +
                '}';
    }

}
