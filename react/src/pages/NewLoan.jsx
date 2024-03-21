import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const NewLoan = () => {
    const [loan, setLoan] = useState({ 
      amount: "",
      payments: "",
      IdLoan: "",
      DestinationAccountNumber: ""
    });
  

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post("/api/loans/loan",
            loan  
            ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                toast.success("Loan created successfully!");
            } else {
                toast.error("Failed to create loan.");
            }
        } catch (error) {
            console.error("Error creating loan:", error);
            toast.error("An error occurred while creating the loan.");
        }
    };

    const handleInput = (e) =>{
      setLoan({...loan, [e.target.name]: e.target.value})
    }
    console.log(loan)

    return (
        <main>
            <div className="flex flex-col justify-center h-screen items-center">
            <form className='gap-5 flex flex-col justify-center items-center h-auto p-5 rounded-xl w-[30%] bg-gradient-to-r from-slate-600 to-slate-800'onSubmit={handleSubmit}>
                <h1 className="text-2xl text-white">Create a New Loan</h1>
                <div className="flex flex-col gap-2 justify-center items-center bg-slate-600 p-5 rounded-xl w-[200px] text-white">
                <label htmlFor="amount">Amount:
                    <input
                    className="m-2 text-white bg-slate-600 border-b-2"
                    
                        name="amount"
                        type="number"
                        id="amount"
                        value={loan.amount}
                        onInput={handleInput}
                    />
                </label>
                <label htmlFor="payments">Payments:
                    <input
                    className="m-2 text-white bg-slate-600 border-b-2"

                        name="payments"
                        type="number"
                        id="payments"
                        value={loan.payments}
                        onInput={handleInput}
                    />
                </label>
                <label htmlFor="loanId">Loan ID:
                    <input
                    className="m-2 text-white bg-slate-600 border-b-2"

                        name="IdLoan"
                        type="text"
                        id="loanId"
                        value={loan.IdLoan}
                        onInput={handleInput}
                    />
                </label>
                <label htmlFor="DestinationAccount">Destination Account:
                    <input
                    className="m-2 text-white bg-slate-600 border-b-2"
                        name="DestinationAccountNumber"
                        type="text"
                        id="DestinationAccount"
                        value={loan.DestinationAccountNumber}
                        onInput={handleInput}
                    />
                </label>
                </div>
                <button className="cursor-pointer hover:font-bold bg-emerald-700 p-2 rounded-xl text-white"type="submit">Create Loan</button>
            <Link className="cursor-pointer hover:font-bold bg-slate-600 p-2 rounded-xl text-white" to="/loans">Back to Loans</Link>

            </form>
            <ToastContainer />
            </div>
        </main>
    );
};

export default NewLoan;
