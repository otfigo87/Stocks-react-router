import React from 'react';
import { Link } from 'react-router-dom';


const Stocks = ({ stocks }) => {
  return (
    <>
      <h1> Stocks Dashboard</h1>
      <div className="stocks-table">
        <h2 id="head">Most Active Stocks</h2>
        <table>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>

          {stocks.map((stock, i) => (
            <tr key={i}>
              <Link
                id="stock-link"
                to={`/stocks/${stock.symbol}`}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: "900",
                  fontStyle: "italic",
                }}
              >
                <td>{stock.name}</td>
              </Link>
              <td>{stock.open}</td>
              <td style={{ color: stock.change > 0 ? "red" : "green" }}>
                {stock.change}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Stocks