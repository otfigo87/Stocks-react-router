import {Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Stocks from './pages/Stocks';
import Stock from './components/Stock';
import { useState } from 'react';
import stocks from './data';


function App() {

  const [data, setData] = useState(stocks)

  console.log(data)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stocks stocks={data} />} />
        <Route path="/stocks/:symbol" element={<Stock data={data} />} />
      </Routes>
    </>
  );
}

export default App;
