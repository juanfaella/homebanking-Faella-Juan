import React from 'react';
import { Link } from 'react-router-dom';
import BankImg from '../assets/logo.png'

const Header = () => {
  return (
    <main className='flex justify-between px-5 py-1 items-center h-16'>
        <div>
          <img className="w-32" src={BankImg} alt="" />
        </div>
        <div className='w-72 flex gap-5 bg-slate-300 justify-center rounded-lg'>
          <Link className="font-semibold	hover:italic"to="/accounts">Accounts</Link>
          <Link className="font-semibold	hover:italic"to="/cards">Cards</Link>
          <Link className="font-semibold	hover:italic"to="/home">Home</Link>
          <Link className="font-semibold	hover:italic"to="/loans">Loans</Link>
        </div>
    </main>
  );
};
export default Header;
