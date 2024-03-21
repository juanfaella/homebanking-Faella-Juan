import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const NewCard = () => {
    const [cardType, setCardType] = useState("DEBIT");
    const [cardColor, setCardColor] = useState("GOLD");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token')
            const response = await axios.post("/api/clients/current/cards", {
                type: cardType,
                color: cardColor
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }
            );

            if (response.status === 201) {
                toast.success("Card created successfully!");
            } else {
                toast.error("Failed to create card.");
            }
        } catch (error) {
            console.error("Error creating card:", error);
            toast.error("An error occurred while creating the card.");
        }
    };

    return (
        <main>
            <div className="h-screen flex justify-center items-center ">
            <div className="flex flex-col gap-10 justify-center items-center bg-gradient-to-r from-slate-600 to-slate-800 p-14 rounded-3xl text-white shadow-slate-900/70">
            <h1 className="text-2xl">Create a New Card</h1>
            <div>
                <form className='flex flex-col justify-center items-center gap-10 ' onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center gap-5 bg-slate-600 p-4 rounded-xl">
                    <label className=""htmlFor="cardColor">Card Color
                            <select
                                className="m-2 text-white  bg-slate-600 border-b-2"
                                name="cardColor"
                                id="cardColor"
                                value={cardColor}
                                onChange={(e) => setCardColor(e.target.value)}
                            >
                                <option value="GOLD">GOLD</option>
                                <option value="SILVER">SILVER</option>
                                <option value="TITANIUM">TITANIUM</option>
                            </select>
                        </label>
                    <label htmlFor="cardType">Card Type
                        <select
                            className="m-2 text-white bg-slate-600 border-b-2"
                            name="cardType"
                            id="cardType"
                            value={cardType}
                            onChange={(e) => setCardType(e.target.value)}>
                            <option value="DEBIT">DEBIT</option>
                            <option value="CREDIT">CREDIT</option>
                        </select>
                    </label>
                    </div>
                    <button className="cursor-pointer hover:font-bold bg-emerald-700 p-2 rounded-xl" type="submit">Create Card</button>
                </form>
            </div>
                <Link className="cursor-pointer hover:font-bold bg-slate-600 p-2 rounded-xl" to="/cards">Back to Cards</Link>
                <ToastContainer/>
            </div>
            </div>
        </main>
    );
};

export default NewCard;
