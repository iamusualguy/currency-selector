import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, within } from '@testing-library/react';
import { CurrencySelector } from './CurrencySelector';

describe("CurrencySelector", () => {
  it('should select and unselect currency', () => {
    const { getByTestId } = render(<CurrencySelector currencyList={["EUR", "PLN"]} />);
    const currencyList = within(getByTestId("currency-list"));
    const selectedCurrencies = within(getByTestId("selected-currencies"));

    expect(currencyList.getByText(/EUR/)).not.toHaveClass("selected");
    expect(selectedCurrencies.queryByText(/EUR/)).not.toBeInTheDocument();

    // select EUR currency
    fireEvent.click(currencyList.getByText(/EUR/));

    expect(currencyList.getByText(/EUR/)).toHaveClass("selected");
    expect(selectedCurrencies.queryByText(/EUR/)).toBeInTheDocument();

    // unselect EUR currency
    fireEvent.click(currencyList.getByText(/EUR/));

    expect(currencyList.getByText(/EUR/)).not.toHaveClass("selected");
    expect(selectedCurrencies.queryByText(/EUR/)).not.toBeInTheDocument();

    // select PLN currency
    fireEvent.click(currencyList.getByText(/PLN/));

    // click on 'x' button
    fireEvent.click(selectedCurrencies.getByText(/x/));

    expect(currencyList.getByText(/PLN/)).not.toHaveClass("selected");
    expect(selectedCurrencies.queryByText(/PLN/)).not.toBeInTheDocument();
  });

  it('should select multiple currencies', () => {
    const { getByTestId } = render(<CurrencySelector currencyList={["EUR", "USD", "SEK", "RUB"]} />);
    const currencyList = within(getByTestId("currency-list"));

    expect(getByTestId("selected-currencies").childElementCount).toBe(0);

    fireEvent.click(currencyList.getByText(/EUR/));
    expect(getByTestId("selected-currencies").childElementCount).toBe(1);
    fireEvent.click(currencyList.getByText(/USD/));
    expect(getByTestId("selected-currencies").childElementCount).toBe(2);
    fireEvent.click(currencyList.getByText(/SEK/));
    expect(getByTestId("selected-currencies").childElementCount).toBe(3);
  });
});
