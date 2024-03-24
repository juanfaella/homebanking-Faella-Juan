import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const NewTransfer = () => {
    const [transfer, setTransfer] = useState({
        destinationAccountNumber: "",
        sourceAccountNumber: "",
        amount: "",
        description: "",
    })
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post("/api/transaction/transfer",
            transfer  
            ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                toast.success("Transfer created successfully!");
            } else {
                toast.error("Failed to create Transfer.");
            }
        } catch (error) {
            console.error("Error creating Transfer:", error);
            toast.error("An error occurred while creating the Transfer.");
        }
    };
    const handleInput = (e) =>{
        setTransfer({...transfer, [e.target.name]: e.target.value})
      }
      return (
        <main>
            <div className="flex flex-col justify-center h-screen items-center">
                <form className='gap-5 flex flex-col justify-center items-center h-auto p-5 rounded-xl w-[30%] bg-gradient-to-r from-slate-600 to-slate-800'onSubmit={handleSubmit}>
                    <h1 className="text-2xl text-white">Create a New Transfer</h1>
                    <div className="flex flex-col gap-2 justify-center items-center bg-slate-600 p-5 rounded-xl w-[200px] text-white">
                        <label htmlFor="amount">Amount:
                            <input
                                className="m-2 text-white bg-slate-600 border-b-2"
                                name="amount"
                                type="number"
                                id="amount"
                                value={transfer.amount}
                                onInput={handleInput}
                            />
                        </label>
                        <label htmlFor="sourceAccountNumber">Source Account:
                            <input
                                className="m-2 text-white bg-slate-600 border-b-2"
                                name="sourceAccountNumber"
                                type="text"
                                id="sourceAccountNumber"
                                value={transfer.sourceAccountNumber}
                                onInput={handleInput}
                            />
                        </label>
                        <label htmlFor="destinationAccountNumber">Destination Account:
                            <input
                                className="m-2 text-white bg-slate-600 border-b-2"
                                name="destinationAccountNumber"
                                type="text"
                                id="destinationAccountNumber"
                                value={transfer.destinationAccountNumber}
                                onInput={handleInput}
                            />
                        </label>
                        <label htmlFor="description">Description:
                            <input
                                className="m-2 text-white bg-slate-600 border-b-2"
                                name="description"
                                type="text"
                                id="description"
                                value={transfer.description}
                                onInput={handleInput}
                            />
                        </label>
                    </div>
                    <button className="cursor-pointer hover:font-bold bg-emerald-700 p-2 rounded-xl text-white" type="submit">Create Transfer</button>
                    <Link className="cursor-pointer hover:font-bold bg-slate-600 p-2 rounded-xl text-white" to="/transfers">Back to Transfers</Link>
                </form>
                <ToastContainer />
            </div>
        </main>
    );
}
export default NewTransfer;
