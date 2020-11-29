import React, { useState } from 'react';
import { Currency } from "./Currency";
import './CurrencySelector.css';

export const CurrencySelector: React.FC<{ currencyList: string[] }> = (props) => {
  const [state, setState] = useState(
    props.currencyList.reduce(
      (o, key) => Object.assign(o, { [key]: false }),
      {} as { [key: string]: boolean; }
    )
  );

  const toggleCurrency = (currency: string) => {
    setState({
      ...state,
      [currency]: !state[currency]
    });
  };

  return (
    <div className="container">
      <div className="selectedCurrencies" data-testid="selected-currencies">
        {
          Object.keys(state).filter(c => state[c]).map(
            (currency) =>
              <div className="selectedCurrency" key={currency}>
                {currency}
                <div className="close" onClick={() => toggleCurrency(currency)}>x</div>
              </div>

          )
        }
      </div>
      <div className="currencyList" data-testid="currency-list">
        {
          Object.keys(state).map(
            (currency) =>
              <Currency
                key={`${currency}${state[currency]}`}
                currency={currency}
                isSelected={state[currency]}
                onClick={() => toggleCurrency(currency)}
              />
          )
        }
      </div>
    </div>
  );
}

