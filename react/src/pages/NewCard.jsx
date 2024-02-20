import React from "react"; 
import { getdata } from "../utils/getData";
import { Link } from "react-router-dom";

const NewCard = () => {
    const cardData = getdata(1)
    return (
        <main>
            <h1>Aqui va un Form de new Card</h1>
            <form>
                <label htmlFor="cardType">Card Type
                    <select name="cardType" id="cardType">
                        <option value="DEBIT">DEBIT</option>
                        <option value="CREDIT">CREDIT</option>
                    </select>
                </label>
                <label htmlFor="cardColor">Card Color
                    <select name="cardColor" id="cardColor">
                        <option value="GOLD">GOLD</option>
                        <option value="SILVER">SILVER</option>
                        <option value="TITANIUM">TITANIUM</option>
                    </select>
                </label>
                <Link to="/cards">Crear Tarjeta</Link>
            </form>
        </main>
    )
}

export default NewCard;