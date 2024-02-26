import React from "react"; 
import GetAccounts  from "../components/GetAccounts";
import { getdata } from "../utils/getData";
import GetCards from "../components/GetCards";
import vistaImg from "../assets/head.jpg"


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
          <div class="container flex flex-col mx-auto bg-white">
            
            <div class="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
                <div class="flex flex-col justify-center col-span-1 text-center lg:text-start">
                    <div class="flex items-center justify-center mb-4 lg:justify-normal">
                        <h4 class="ml-2 text-sm font-bold tracking-widest text-primary uppercase">Welcome back, we are glad to see you </h4>
                    </div>
                    <h1 class="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">{client.name}</h1>
                    <p class="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
                    "Your secure access to the financial future: Welcome to our Homebanking, where convenience and trust are found in every transaction!"                    </p>
                    <div class="flex flex-col items-center gap-4 lg:flex-row">
                        <button class="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path>
                            </svg>
                            Call Us
                        </button>
                    </div>
                </div>
                <div class="items-center justify-end hidden col-span-1 md:flex">
                    <img class="w-4/5 rounded-md" src={vistaImg} alt="header image"/>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 my-5">
            
        </div>
            <div className="flex flex-col items-center gap-5 w-screen">
              <h1 className="bg-blue-800 text-white p-2 rounded-lg font-semibold">Your accounts</h1>
             {renderAccount()}
            </div>
        </main>
    )
}

export default Home;