import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../../src/App';

describe('cafe landing page shell', () => {
  it('renders the reservation-first hero and anchor navigation', () => {
    render(React.createElement(App));

    expect(
      screen.getByRole('heading', {
        name: /welcome guests with a warm room, a sharp menu, and an obvious path to reserve/i,
      }),
    ).toBeInTheDocument();

    const primaryNavigation = screen.getByRole('navigation', { name: /primary/i });

    expect(primaryNavigation).toBeInTheDocument();
    expect(within(primaryNavigation).getByRole('link', { name: /^menu$/i })).toHaveAttribute(
      'href',
      '#menu',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /story/i })).toHaveAttribute(
      'href',
      '#story',
    );
    expect(screen.getByRole('link', { name: /reserve a table/i })).toHaveAttribute(
      'href',
      '#reservation',
    );
    expect(
      screen.getByRole('heading', { name: /give launch-week traffic a clear next step/i }),
    ).toBeInTheDocument();
  });
});
