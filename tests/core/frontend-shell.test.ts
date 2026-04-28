import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../../src/App';

describe('cafe landing page shell', () => {
  it('renders the polished cafe story, reservation-first navigation, and launch sections', () => {
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
    expect(within(primaryNavigation).getByRole('link', { name: /experience/i })).toHaveAttribute(
      'href',
      '#experience',
    );
    expect(screen.getByRole('link', { name: /reserve a table/i })).toHaveAttribute(
      'href',
      '#reservation',
    );
    expect(
      screen.getByRole('heading', {
        name: /reserve a candlelit corner, brunch banquette, or quick coffee table/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /a polished first impression built to answer launch-week questions fast/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /responsive sections carry the same cafe story from narrow screens to wide tables/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /give launch-week traffic a clear next step/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start reservation request/i })).toHaveAttribute(
      'href',
      'mailto:reservations@harborandhearth.cafe',
    );
  });
});
