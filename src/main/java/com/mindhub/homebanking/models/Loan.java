package com.mindhub.homebanking.models;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double maxAccount;
    @ElementCollection
    private Set<Integer> payments = new HashSet<>();

    @ManyToOne
    private Client client;

    public Loan(String name, double maxAccount, Set<Integer> payments) {
        this.name = name;
        this.maxAccount = maxAccount;
        this.payments = payments;
    }
    public void setClient(Client client) {
        this.client = client;
    }
    public Client getClient() {
        return client;
    }

    public Long getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getMaxAccount() {
        return maxAccount;
    }

    public void setMaxAccount(double maxAccount) {
        this.maxAccount = maxAccount;
    }

    public Set<Integer> getPayments() {
        return payments;
    }

    public void setPayments(Set<Integer> payments) {
        this.payments = payments;
    }

    public Loan() {
    }

//    @Override
//    public String toString() {
//        return "Loan{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", maxAccount=" + maxAccount +
//                ", payments=" + payments +
//                '}';
//    }

}
