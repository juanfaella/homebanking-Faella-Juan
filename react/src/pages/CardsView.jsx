import React from 'react'
import { getdata } from '../utils/getData'
import GetCards from '../components/GetCards'
import { Link } from 'react-router-dom'

const CardsView = () => {
  const client = getdata()
  console.log(client)
  const renderCards= () => {
    if (!client || !client.cards || client.cards.length === 0) {
      return (
        <div>
          <h1>Aquí viene algo importante</h1>
        </div>
      );
    } else {
      return client.cards.map((card) => (
        <GetCards key={card.id} id={card.id} cardNumber={card.cardNumber} cardType={card.cardType} cardColor={card.cardColor} cardHolder={card.cardHolder} cvv={card.cvv} truDate={card.truDate}/>
      ));
    }
  };
  return (
    <main>
        <div className='flex flex-col gap-5 items-center m-5'>
          <h1 className='font-bold'>Cards</h1>
          <Link className='bg-blue-500 text-white p-1 rounded-xl hover:bg-blue-900' to={"/cards/new"}>Get Card</Link>
          <div className='flex gap-10 justify-center flex-wrap items-center'>
           {renderCards()}
          </div>
       </div>
    </main>
  )
}

export default CardsView