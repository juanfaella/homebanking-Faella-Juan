package com.mindhub.homebanking.repositories;
import com.mindhub.homebanking.models.Account;
import com.mindhub.homebanking.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByNumber(String number);
    boolean existsByNumber(String number);
    boolean existsAccountByNumberAndClient (String number, Client client);
    List<Account> findByNumberAndClient(String number, Client client);
}
