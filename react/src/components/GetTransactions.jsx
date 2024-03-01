import React from 'react';

const GetTransaction = ({ id, type, amount}) => {
  
  return (
    <div key={id}>
      <h2>{id}</h2>
      <h3>{type}</h3>
      <h3>{amount}</h3>
    </div>
  );
};

export default GetTransaction;
