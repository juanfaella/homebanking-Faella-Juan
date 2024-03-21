package com.mindhub.homebanking;
import com.mindhub.homebanking.models.*;
import com.mindhub.homebanking.repositories.AccountRepository;
import com.mindhub.homebanking.repositories.CardRepository;
import com.mindhub.homebanking.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import java.util.List;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class RepositoriesTest {
    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private ClientRepository clientRepository;


    @Autowired
    private AccountRepository accountRepository;

    @Test
    public void testCardByCardHolder(){
        List<Card> cards = cardRepository.findByCardHolder("Melba Morel");
        assertThat(cards.size(), is(2));
        assertThat(cards.get(0).getCardType(), is(CardType.DEBIT));
        assertThat(cards.get(1).getCardColor(), is(CardColor.TITANIUM));
    }
//    @Test
//    public void testAccountExists() {
//        Client testClient = clientRepository.findByEmail("melba@mindhub.com");
//        List<Account> accounts = accountRepository.findByNumberAndClient("VIN001", testClient);
////        assertThat(accounts.size(), greaterThan(0));
////       assertThat(accounts.get(0).getClient(), is(testClient));
//    }

    @Test
    public void testClientExists(){
        Boolean existsClient = clientRepository.existsClientByEmail("melba@mindhub.com");
        assertThat(existsClient, is(true));
    }

}
