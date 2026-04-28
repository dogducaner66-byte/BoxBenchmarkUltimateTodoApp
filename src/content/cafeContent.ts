export const navigationItems = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'About' },
  { href: '#visit', label: 'Visit' },
  { href: '#experience', label: 'Experience' },
];

export const bookingTarget = {
  href: 'https://reserve.harborandhearth.cafe',
  navLabel: 'Book online',
  heroLabel: 'Reserve a table',
  showcaseLabel: 'See reservation options',
  sectionLabel: 'Start online reservation',
  mobileLabel: 'Book now',
  title: 'Reserve a table online at Harbor and Hearth. Opens in a new tab.',
};

export const hostStandContact = {
  href: 'tel:+15550102456',
  label: 'Call the host stand',
  value: '(555) 010-2456',
};

export const highlights = [
  {
    title: 'Menu cues that feel intentional',
    description:
      'Signature dishes, coffee rituals, and shared plates frame the cafe as polished before guests ever arrive.',
  },
  {
    title: 'Trust signals above the fold',
    description:
      'Location, hours, and contact details now sit inside the main scroll path so launch traffic can self-qualify fast.',
  },
  {
    title: 'One booking target everywhere',
    description:
      'Every primary reservation action still points to the same configurable destination, reducing friction and future edits.',
  },
];

export const menuCards = [
  {
    title: 'Citrus ricotta toast',
    detail: 'Whipped ricotta, roasted grapes, pistachio crunch, and wildflower honey on seeded levain.',
    course: 'Brunch signature',
  },
  {
    title: 'Midnight roast flight',
    detail: 'Espresso, flash-brew tonic, and our maple oat cortado highlight the bar program in one order.',
    course: 'Coffee ritual',
  },
  {
    title: 'Harbor supper board',
    detail: 'Shared cheeses, marinated olives, blistered flatbread, and market crudites for easy golden-hour tables.',
    course: 'Evening table',
  },
];

export const aboutSection = {
  intro:
    'Harbor & Hearth was shaped for first visits that turn into repeat rituals: a sunlit room in the morning, an easy midday perch, and a candlelit close that still feels like the same neighborhood cafe.',
  noteLabel: 'Why guests trust it fast',
  note:
    'The page pairs atmosphere with practical details so launch-week visitors can picture the room, confirm the basics, and reserve without leaving the scroll.',
};

export const aboutMoments = [
  {
    title: 'Open-kitchen warmth',
    description: 'Pastry finishes, ceramic cups, and visible prep create an immediate sense of care from the door.',
  },
  {
    title: 'Layered seating',
    description: 'Window banquettes, communal tables, and quieter corners support solo coffee, catch-ups, and date nights.',
  },
  {
    title: 'Evening glow',
    description: 'As daylight fades, low lamps and small plates shift the room into a relaxed supper mood without changing the brand voice.',
  },
];

export const experienceMoments = [
  {
    title: 'Morning light',
    description: 'Fast espresso service and pastry-ready counters keep weekday drop-ins smooth before the commute starts.',
  },
  {
    title: 'Midday reset',
    description: 'Reliable Wi-Fi, well-spaced tables, and all-day food make the room easy for laptop lunches and client coffees.',
  },
  {
    title: 'Golden hour',
    description: 'Reservations flow into shared plates and softer lighting, giving first-time guests a clear reason to book ahead.',
  },
];

export const visitCards = [
  {
    eyebrow: 'Location',
    title: 'Find us on the Old Harbor waterfront',
    description:
      'Two blocks from the ferry promenade, Harbor & Hearth is easy to spot for locals, hotel guests, and destination brunch plans.',
    details: [
      '22 Harbor Lane, Seabrook, CA 90210',
      'Three minutes from Harbor Garage and the waterfront path',
      'Ground-floor entry with stroller- and wheelchair-friendly access',
    ],
    links: [{ href: 'https://maps.google.com/?q=22+Harbor+Lane+Seabrook+CA+90210', label: 'Open walking directions' }],
  },
  {
    eyebrow: 'Hours',
    title: 'Open when brunch, meetings, and supper overlap',
    description:
      'Clear service windows help first-time guests book with confidence and know when walk-ins still make sense.',
    details: ['Mon-Thu | 8:00 AM - 9:00 PM', 'Fri-Sat | 8:00 AM - 10:00 PM', 'Sun | 8:00 AM - 8:00 PM'],
  },
  {
    eyebrow: 'Contact',
    title: 'Reach the team without hunting for details',
    description:
      'Questions about reservations, accessibility, or small gatherings can be handled before arrival.',
    details: [
      `Host stand | ${hostStandContact.value}`,
      'Cafe team | hello@harborandhearth.cafe',
      'Gatherings for up to 18 guests available by request',
    ],
    links: [
      { href: hostStandContact.href, label: `Call ${hostStandContact.value}` },
      { href: 'mailto:hello@harborandhearth.cafe', label: 'Email the cafe team' },
    ],
  },
];

export const reservationDetails = [
  'One configurable booking target powers the hero, navigation, and dedicated reservation section.',
  'Location, hours, and contact details now reinforce the booking decision without sending guests to another page.',
  'Mobile guests keep a one-tap reservation shortcut with the same accessible booking destination.',
];

export const reservationMoments = [
  { label: 'Best for', value: 'Brunch dates, laptop lunches, and golden-hour suppers' },
  { label: 'Confirmation', value: 'Instant booking flow with live party size and timing selection' },
  { label: 'Walk-in backup', value: 'Host stand support stays available for same-day changes' },
];
