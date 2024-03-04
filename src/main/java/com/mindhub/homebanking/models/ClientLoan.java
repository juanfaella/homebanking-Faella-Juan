package com.mindhub.homebanking.models;

import jakarta.persistence.*;

@Entity
public class ClientLoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double Amount;
    private Integer Payments;
    @ManyToOne
    private Client client;
    @ManyToOne
    private Loan loan;

    public ClientLoan() {
    }
    

    public ClientLoan(double amount, Integer payments, Client client, Loan loan) {
        Amount = amount;
        Payments = payments;
        this.client = client;
        this.loan = loan;
    }


    public Long getId() {
        return id;
    }

    public double getAmount() {
        return Amount;
    }

    public void setAmount(double amount) {
        Amount = amount;
    }

    public Integer getPayments() {
        return Payments;
    }

    public void setPayments(Integer payments) {
        Payments = payments;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Loan getLoan() {
        return loan;
    }

    public void setLoan(Loan loan) {
        this.loan = loan;
    }


}
