import React from 'react'

const GetLoans = ({name, amount, payments, id, idLoan}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{amount}</h2>
        <h2>{payments}</h2>
        <h2>{id}</h2>
        <h2>{idLoan}</h2>
    </div>
  )
}

export default GetLoans