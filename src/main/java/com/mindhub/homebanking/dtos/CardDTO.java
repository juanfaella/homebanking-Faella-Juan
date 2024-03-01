package com.mindhub.homebanking.dtos;

import com.mindhub.homebanking.models.Card;
import com.mindhub.homebanking.models.CardColor;
import com.mindhub.homebanking.models.CardType;

import java.time.LocalDate;

public class CardDTO {
    private Long id;
    private String cardNumber;
    private CardType cardType;
    private CardColor cardColor;
    private String cardHolder;
    private int cvv;
    private LocalDate fromDate;
    private LocalDate truDate;

    public CardDTO(Card card) {
        this.id = card.getId();
        this.cardHolder = card.getCardHolder();
        this.cardType = card.getCardType();
        this.cardColor = card.getCardColor();
        this.cardNumber = card.getCardNumber();
        this.cvv = card.getCvv();
        this.fromDate = card.getFromDate();
        this.truDate = card.getTruDate();
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public CardType getCardType() {
        return cardType;
    }

    public CardColor getCardColor() {
        return cardColor;
    }

    public String getCardHolder() {
        return cardHolder;
    }

    public int getCvv() {
        return cvv;
    }

    public LocalDate getFromDate() {
        return fromDate;
    }

    public LocalDate getTruDate() {
        return truDate;
    }
}

