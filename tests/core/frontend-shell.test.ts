import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from '../../src/App';

describe('cafe landing page shell', () => {
  it('renders the polished cafe story, reservation-first navigation, and launch sections', () => {
    render(React.createElement(App));
    const bookingTarget = 'https://reserve.harborandhearth.cafe';
    const hostStandHref = 'tel:+15550102456';

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
    expect(within(primaryNavigation).getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '#story',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /visit/i })).toHaveAttribute(
      'href',
      '#visit',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /experience/i })).toHaveAttribute(
      'href',
      '#experience',
    );
    expect(within(primaryNavigation).getByRole('link', { name: /book online/i })).toHaveAttribute(
      'href',
      bookingTarget,
    );
    expect(within(primaryNavigation).getByRole('link', { name: /book online/i })).toHaveAttribute(
      'target',
      '_blank',
    );
    expect(screen.getByRole('link', { name: /reserve a table/i })).toHaveAttribute(
      'href',
      bookingTarget,
    );
    expect(screen.getByRole('link', { name: /reserve a table/i })).toHaveAttribute(
      'title',
      'Reserve a table online at Harbor and Hearth. Opens in a new tab.',
    );
    expect(
      screen.getByRole('heading', {
        name: /reserve a candlelit corner, brunch banquette, or quick coffee table/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /see reservation options/i })).toHaveAttribute(
      'href',
      bookingTarget,
    );
    expect(
      screen.getByRole('heading', {
        name: /a polished first impression built to answer launch-week questions fast/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /the room shifts smoothly from solo coffee stops to candlelit reservations/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /location, hours, and contact details that remove first-visit friction/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/22 Harbor Lane, Seabrook, CA 90210/i)).toBeInTheDocument();
    expect(screen.getByText(/Fri-Sat \| 8:00 AM - 10:00 PM/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /open walking directions/i })).toHaveAttribute(
      'href',
      'https://maps.google.com/?q=22+Harbor+Lane+Seabrook+CA+90210',
    );
    expect(screen.getByRole('link', { name: /call \(555\) 010-2456/i })).toHaveAttribute(
      'href',
      hostStandHref,
    );
    expect(screen.getByRole('link', { name: /email the cafe team/i })).toHaveAttribute(
      'href',
      'mailto:hello@harborandhearth.cafe',
    );
    expect(
      screen.getByRole('heading', { name: /menu highlights that make the room feel worth reserving/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /a neighborhood room designed to feel trustworthy on the first visit/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /give launch-week traffic one booking target/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /give launch-week traffic one booking target and a confident reason to use it/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /sunlit harbor and hearth table with citrus toast, coffee service, and warm window light/i,
      }),
    ).toHaveAttribute('loading', 'eager');
    expect(
      screen.getByRole('img', {
        name: /sunlit harbor and hearth table with citrus toast, coffee service, and warm window light/i,
      }),
    ).toHaveAttribute('fetchpriority', 'high');
    expect(
      screen.getByRole('heading', {
        name: /photo-ready details that load after the booking decision stays visible/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /house pastry display with espresso cups and a linen-lined service counter/i,
      }),
    ).toHaveAttribute('loading', 'lazy');
    expect(
      screen.getByRole('img', {
        name: /evening dining room with candlelit tables, layered seating, and guests settling into supper service/i,
      }),
    ).toHaveAttribute('loading', 'lazy');
    expect(screen.getByRole('link', { name: /start online reservation/i })).toHaveAttribute(
      'href',
      bookingTarget,
    );
    expect(screen.getByRole('link', { name: /book now/i })).toHaveAttribute(
      'href',
      bookingTarget,
    );
    expect(screen.getByRole('link', { name: /call the host stand/i })).toHaveAttribute(
      'href',
      hostStandHref,
    );
  });
});
