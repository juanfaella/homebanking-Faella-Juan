import React from "react"; 
import GetAccounts  from "../components/GetAccounts";
import { getdata } from "../utils/getData";
import GetCards from "../components/GetCards";
import vistaImg from "../assets/vista.jpg"


const Home = () => {
    const client = getdata(2)

    const renderCard = () => {
        if (!client || !client.cards || client.cards.length === 0) {
          return (
            <div>
              <h1>Aquí viene algo importante </h1>
            </div>
          );
        } else {
          return client.cards.map((card) => (
            <GetCards key={card.id} id={card.id} cardNumber={card.cardNumber} cardType={card.cardType} cardColor={card.cardColor} cardHolder={card.cardHolder} cvv={card.cvv} truDate={card.truDate} />
          ));
        }
      };
      const renderAccount = () => {
        if (!client || !client.account || client.account.length === 0) {
          return (
            <div>
              <h1>Aquí viene algo importante </h1>
            </div>
          );
        } else {
          return client.account.map((account) => (
            <GetAccounts key={account.id}  id={account.id} number={account.number} creationDate={account.creationDate} balance={account.balance} />
          ));
        }
      };
      
    return (
        <main>
            <div className="flex flex-col items-center gap-5 w-screen">
              <h1 className="">Welcome, {client.name}</h1>
              <img className="w-full h-96 object-scale-down	"src={vistaImg} alt="" />
             {renderAccount()}
            </div>
        </main>
    )
}

export default Home;