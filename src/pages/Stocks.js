import React from 'react';
import { Link } from 'react-router-dom';


const Stocks = ({ stocks }) => {
  return (
    <>
      <h1> Stocks Dashboard</h1>
      <ol>
        {stocks.map((stock) => (
          <Link to={`/stocks/${stock.symbol}`}>
            <li>{stock.name}</li>
          </Link>
        ))}
      </ol>
    </>
  );
}

export default Stocks