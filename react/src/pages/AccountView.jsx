import React from "react"; 
import { getdata } from "../utils/getData";
import GetAccounts from "../components/GetAccounts";
import GetTransaction from "../components/GetTransactions";
import { Link, useParams } from "react-router-dom";

const AccountsView = () => {
    const client = getdata(1)
    const profile = useParams()
    const renderAccounts = () => {
      if (!client.account || client.account.length === 0) {
        return <div>Loading...</div>
      }
      return client.account.map(account => {
        const { id, number, balance, creationDate } = account;
        const transactions = account.transaction.filter(transaction => transaction.id === id);
        console.log(account.transaction)
        return (
          <article id={id} className=' w-full flex flex-col gap-2 bg-[#8383b5] py-5 px-2 rounded-xl' key={id}>
            <GetAccounts id={id} number={number} balance={balance} creationDate={creationDate} />
            {transactions.map(transaction => (
              <div className='w-full px-6'>
              <GetTransaction key={transaction.id} id={transaction.id}  type={transaction.type} amount={transaction.amount}/>
             </div>
            ))}
          </article>
        );
      });
    }
    return (
        <main>
            <h1>Account</h1>
            <Link to={"/accounts/new"}>Get Account</Link>
            {renderAccounts()}
        </main>
    )
}
export default AccountsView;