import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewLoan = () => {
    const [clientDataInfo, setDataInfo] = useState([]);
    const [clientLoanInfo, setLoanInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/clients/2")
      .then((response) => {
        const clientData = response.data;
        const clientLoanInfo =  response.data
        setDataInfo(clientData.account);
        setLoanInfo(clientLoanInfo.clientLoans);

      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
      });
  }, []);
    return (
        <main>
            <h1>NewLoan</h1>
        <select name="listLoan" id="listLoan">
          {clientLoanInfo.map((loandata) => {
            return (
              <option key={loandata.id} value={loandata.name}>
                {loandata.name}
              </option>
            );
          })}
        </select>
        <select name="listAcc" id="listAcc">
          {clientDataInfo.map((data) => {
            return (
              <option key={data.id} value={data.number}>
                {data.number}
              </option>
            );
          })}
        </select>
        <label htmlFor="loanAmount">Monto del préstamo:</label>
                <input
                    type="number"
                    name="loanAmount"
                    id="loanAmount"
                
                />
        <select name="listLoan" id="listLoan">
          {clientLoanInfo.map((loandata) => {
            return (
              <option key={loandata.id} value={loandata.name} payments={loandata.payments}>
                {loandata.payments}
              </option>
            );
          })}
        </select>
        <Link to="/loans">Crear Loan</Link>
        </main>
    )
}

export default NewLoan;