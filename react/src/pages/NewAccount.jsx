import React from "react"; 
import { Link } from "react-router-dom";

const NewAccount = () => {
    return (
        <main>
            <h1>NewAccount</h1>
            <div  method="post" id="newAccountForm">
                <label for="accountNumber">Número de Cuenta:</label>
                <input type="text" name="accountNumber" id="accountNumber" required/>
                <label for="accountBalance">Saldo Inicial:</label>
                <input type="number" name="accountBalance" id="accountBalance" required/>
                <Link to="/accounts">Crear Cuenta</Link>
            </div>
        </main>
    )
}

export default NewAccount;