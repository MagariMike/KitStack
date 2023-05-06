import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeButton from '../components/HomeButton';

describe('HomeButton', () => {
  it('renders home button with house icon', () => {
    render(<HomeButton />);
    const buttonElement = screen.getByRole('button');
    const iconElement = screen.getByTestId('fa-house-icon');

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(buttonElement).toContainElement(iconElement);
  });
});
