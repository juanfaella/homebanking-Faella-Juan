import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const NewAccount = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!acceptTerms) {
            alert("You must accept the terms to create your new account.");
            return;
        }

        try {
            const token = localStorage.getItem('token')
            const response = await axios.post("/api/clients/current/accounts", {
                name: name,
                lastName: lastName
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
            );

            if (response.status === 201) {
                toast.success("Account Created successfully");
            } else {
                toast.error("Failed to create account.");
            }
        } catch (error) {
            console.error("Error creating account:", error);
            toast.error("Account limit reached");
        }
    };

    return (
        <main className="flex flex-col items-center p-12"> 
            <h1 className="font-semibold">New Account</h1>
            <form className="max-w-sm mx-auto p-12" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="acceptTerms" type="checkbox" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="acceptTerms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Do you accept the terms to create your new account?</label>
                </div>
                <button type="submit" className="text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-indigo-600 dark:focus:ring-blue-800">Submit</button>
            </form>
            <Link className="font-semibold" to="/home">Back Home</Link>
            <ToastContainer/>
        </main>
    );
}

export default NewAccount;
