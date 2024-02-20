import React from 'react';

const GetAccounts = ({ id, number, creationDate, balance }) => {
  return (
    <div className=' bg-gray-800 h-20 flex justify-center items-center p-5 rounded-full	'>
        <div className=' text-white flex gap-5'>
            <h2 className='font-semibold'>{number}</h2>
            <h3 className='font-semibold'>Creation Date: {creationDate}</h3>
            <h3 className='font-semibold'>Balance: {balance}</h3>
        </div>
    </div>
  );
};

export default GetAccounts;
