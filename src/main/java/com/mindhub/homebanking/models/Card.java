package com.mindhub.homebanking.models;

import jakarta.persistence.*;

import javax.naming.Name;
import java.time.LocalDate;
import java.util.Date;

@Entity
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cardNumber;

    private CardType cardType;

    private CardColor cardColor;

    private String cardHolder;
    private int cvv;
    private LocalDate fromDate;
    private LocalDate truDate;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "clientid")
    private Client client;

    public Card() {
    }

    public Card(String cardNumber, CardType cardType, CardColor cardColor, String cardHolder, int cvv, LocalDate fromDate, LocalDate truDate) {
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.cardColor = cardColor;
        this.cardHolder = cardHolder;
        this.cvv = cvv;
        this.fromDate = fromDate;
        this.truDate = truDate;
    }


    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public CardType getCardType() {
        return cardType;
    }

    public void setCardType(CardType cardType) {
        this.cardType = cardType;
    }

    public CardColor getCardColor() {
        return cardColor;
    }

    public void setCardColor(CardColor cardColor) {
        this.cardColor = cardColor;
    }

    public String getCardHolder() {
        return cardHolder;
    }

    public void setCardHolder(String cardHolder) {
        this.cardHolder = cardHolder;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public void setFromDate(LocalDate fromDate) {
        this.fromDate = fromDate;
    }

    public LocalDate getTruDate() {
        return truDate;
    }

    public void setTruDate(LocalDate truDate) {
        this.truDate = truDate;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", cardHolder='" + cardHolder + '\'' +
                ", Type=" + cardType +
                ", Color=" + cardColor +
                ", cardNumber='" + cardNumber + '\'' +
                ", cvv=" + cvv +
                ", fromDate=" + fromDate +
                ", truDate=" + truDate +
                '}';
    }
}
