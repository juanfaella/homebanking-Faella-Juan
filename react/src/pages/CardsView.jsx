import React from 'react'
import { getdata } from '../utils/getData'
import GetCards from '../components/GetCards'
import { Link } from 'react-router-dom'

const CardsView = () => {
  const client = getdata(2)
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
    <main className=''>
      <div className='h-96 flex flex-col items-center justify-around'>
      <div>
        <h1 className='font-semibold'>Cards</h1>
        <Link to={"/cards/new"}>Get Card</Link>
      </div>
      {renderCards()}
    </div>
    </main>
  )
}

export default CardsView