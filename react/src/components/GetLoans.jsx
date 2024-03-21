import React from 'react'

const GetLoans = ({name, amount, payments, id, idLoan}) => {
  return (
    <>
    <div className='flex justify-center p-2 '>

        <div className='flex gap-14  text-white'>
            <h2>{name}</h2>
            <h2>{amount}</h2>
            <h2>{payments}</h2>
            <h2>{id}</h2>
            
        </div>
      </div>
    </>
  )
}

export default GetLoans