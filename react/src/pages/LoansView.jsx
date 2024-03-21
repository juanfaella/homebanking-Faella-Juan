import React from "react"; 
import { getdata } from "../utils/getData";
import GetLoans from "../components/GetLoans";
import { Link } from "react-router-dom";

const LoansView = () => {
    const client = getdata()
    const renderLoans = () => {
        if (!client || !client.clientLoans || client.clientLoans.length === 0) {
          return (
            <div>
              <h1>Aquí viene algo importante (creo)</h1>
            </div>
          );
        } else {
          return client.clientLoans.map((loan) => (
            <GetLoans key={loan.id} id={loan.id} name={loan.name} amount={loan.amount} payments={loan.payments} idLoan={loan.idLoan} />
          ));
        }
      };
    return (
        <main>
            <div className="flex flex-col items-center gap-10 justify-center h-screen">
            <h1 className="font-bold">LoansView</h1>
              <div className="bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl flex flex-col justify-center items-center h-80 w-[50%]">
                <div className='flex flex-col justify-center items-center p- rounded-xl w-96 bg-slate-600'>
                  <div className='flex gap-10 text-white bg-slate-500 px-5 rounded-lg'>
                    <span>Name</span>
                    <span>amount</span>
                    <span>payments</span>
                    <span>id</span>
                  </div>
                  {renderLoans()}
                </div>
                <Link to={"/loans/new"} className="text-white mt-5 cursor-pointer hover:font-bold bg-emerald-700 p-2 rounded-xl">Get Loan</Link>
              </div>
            </div>
        </main>
    )
}

export default LoansView;