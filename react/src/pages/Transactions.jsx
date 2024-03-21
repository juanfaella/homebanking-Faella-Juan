import React, { useState, useEffect } from "react";
import axios from "axios";

const TransfersPage = () => {
    const [transfers, setTransfers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTransfers();
    }, []);

    const fetchTransfers = async () => {
        try {
            const response = await axios.get("/api/transaction");
            setTransfers(response.data);
            console.log(response.data);

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <main>
            <div className="container mx-auto ">
                <h1 className="text-2xl font-bold my-6">Transfer History</h1>
                {error && <p>Error: {error}</p>}
                <div className="flex flex-col ">
                    {transfers.map((transfer) => (
                        <div key={transfer.id} className="bg-gray-100 p-4 my-2 pl-8 rounded-md">
                            <p>From: {transfer.sourceAccountNumber}</p>
                            <p>To: {transfer.destinationAccountNumber}</p>
                            <p>Amount: {transfer.amount}</p>
                            <p>Description: {transfer.description}</p>
                
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default TransfersPage;
