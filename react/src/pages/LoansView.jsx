import React from "react"; 
import { getdata } from "../utils/getData";
import GetLoans from "../components/GetLoans";
import { Link } from "react-router-dom";

const LoansView = () => {
    const client = getdata(1)
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
            <h1>LoansView</h1>
          <Link to={"/loans/new"}>Get Loan</Link>
            {renderLoans()}
        </main>
    )
}

export default LoansView;