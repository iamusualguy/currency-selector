import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CurrencySelector } from "./components/CurrencySelector";

ReactDOM.render(
  <React.StrictMode>
    <CurrencySelector
      currencyList={["EUR", "PLN", "GEL", "DKK", "CZK", "GBP", "SEK", "USD", "RUB"]}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
