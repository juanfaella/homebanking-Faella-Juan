package com.mindhub.homebanking.models;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name, lastName, email;

    @OneToMany(mappedBy ="client", fetch=FetchType.EAGER)
    private Set<Account> accounts = new HashSet<>();

    public Set<Account> getAccounts(){
        return accounts;
    }

    @OneToMany(mappedBy = "client", fetch = FetchType.EAGER)
    private Set<Loan> loans= new HashSet<>();

    @OneToMany(mappedBy = "client", fetch = FetchType.EAGER)
    private Set<ClientLoan> clientLoans= new HashSet<>();
    @OneToMany(mappedBy = "client", fetch = FetchType.EAGER)
    private List<Card> cards = new ArrayList<>();

    public List<Card> getCards() {
        return cards;
    }


    public void addAccount(Account account){
        account.setClient(this);
        accounts.add(account);
    }
    public void addClientLoan(ClientLoan clientLoan) {
        clientLoan.setClient(this);
        clientLoans.add(clientLoan);
    }

    public void addClientCard(Card card){
        card.setClient(this);
        cards.add(card);
    }
    public Client(){
    }

    public Client(String name, String lastName, String email) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
    }
    public Set<Loan> getLoans() {
        return loans;
    }

    public Long getId() {
        return id;
    }

    public Set<ClientLoan> getClientLoans() {
        return clientLoans;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    @Override
    public String toString() {
        return "Client{" +
                "name='" + name + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", accounts=" + accounts +
                '}';
    }
}
