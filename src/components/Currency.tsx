import React from 'react';
import './Currency.css';

export interface CurrencyProps {
  currency: string;
  isSelected: boolean;
  onClick: () => void;
}

export const Currency: React.FC<CurrencyProps> = (props) => {
  return (
    <div
      className={`currency ${props.isSelected ? "selected" : ""}`}
      onClick={() => props.onClick()}
    >
      <input
        type="checkbox"
        defaultChecked={props.isSelected}
        data-testid="currency-checkbox"
      />
      {props.currency}
    </div>
  );
}
