import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Currency } from './Currency';

describe("Currency", () => {
  const noop = () => { };

  it('renders Currency component', () => {
    const { asFragment } = render(<Currency currency="USD" isSelected={false} onClick={noop} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders selected Currency component', () => {
    const { container, getByTestId } = render(<Currency currency="USD" isSelected={true} onClick={noop} />);
    const checkbox = getByTestId("currency-checkbox") as HTMLInputElement;
    expect(checkbox.checked).toEqual(true);
    expect(container.firstChild).toHaveClass("selected");
  });
});