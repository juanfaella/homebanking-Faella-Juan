package com.mindhub.homebanking.dtos;

import com.mindhub.homebanking.models.Client;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class ClientDTO {
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private Set<AccountDTO> account;
    private List<ClientLoanDTO> clientLoans;
    private List<CardDTO> cards;

    public ClientDTO(Client client) {
        this.id = client.getId();
        this.name = client.getName();
        this.lastName = client.getLastName();
        this.email = client.getEmail();
        this.account = client.getAccounts().stream().map(AccountDTO::new).collect(Collectors.toSet());
        this.clientLoans = client.getClientLoans().stream().map(ClientLoanDTO::new).collect(Collectors.toList());
        this.cards = client.getCards().stream().map(CardDTO::new).collect(Collectors.toList());

    }
    public List<CardDTO> getCards() {
        return cards;
    }

    public void setCards(List<CardDTO> cards) {
        this.cards = cards;
    }
    public List<ClientLoanDTO> getClientLoans() {
        return clientLoans;
    }

    public void setClientLoans(List<ClientLoanDTO> clientLoans) {
        this.clientLoans = clientLoans;
    }

    public Set<AccountDTO> getAccount() {
        return account;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }
}

