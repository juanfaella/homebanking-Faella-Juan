import React from 'react'

const GetCards = ({id, cardNumber, cardType, cardColor, cardHolder, cvv, truDate}) => {
  return (
    <div className=' bg-gray-800  flex  justify-center items-center p-5 rounded-full text-white '>
        <h2>{id}</h2>
        <h2>{cardNumber}</h2>
        <h2>{cardType}</h2>
        <h2>{cardColor}</h2>
        <h2>{cardHolder}</h2>
        <h2>{cvv}</h2>
        <h2>{truDate}</h2>
    </div>
  )
}

export default GetCards