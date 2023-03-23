import React from 'react';
import { useParams } from 'react-router-dom';

const Stock = ({data}) => {

  const params = useParams();
  console.log(params)
  
  const symbol = params.symbol;

  let myStock = data.filter((stock) => stock.symbol === symbol);

  console.log(myStock)

  return (
    <>
      <h2>Name: {myStock[0].name}</h2>
      <h2>Price: {myStock[0].lastPrice}</h2>
      <h2>Symbol: {myStock[0].symbol}</h2>
    </>
  );
}

export default Stock