const navigationItems = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Story' },
  { href: '#experience', label: 'Experience' },
];

const bookingTarget = {
  href: 'https://reserve.harborandhearth.cafe',
  navLabel: 'Book online',
  heroLabel: 'Reserve a table',
  showcaseLabel: 'See reservation options',
  sectionLabel: 'Start online reservation',
  mobileLabel: 'Book now',
  title: 'Reserve a table online at Harbor and Hearth. Opens in a new tab.',
};

const highlights = [
  {
    title: 'Breakfast through candlelight',
    description: 'Seasonal brunch, slow coffee, and small plates are framed as one continuous cafe day.',
  },
  {
    title: 'Reservation-first conversion',
    description: 'Primary calls to action stay visible from the hero to the closing section so booking never feels hidden.',
  },
  {
    title: 'Launch-ready design language',
    description: 'Warm color tokens, tactile cards, and measured type deliver a polished first impression on any screen.',
  },
];

const menuCards = [
  {
    title: 'Citrus ricotta toast',
    detail: 'Whipped ricotta, roasted grapes, pistachio crunch, wildflower honey.',
    course: 'Brunch signature',
  },
  {
    title: 'Midnight roast flight',
    detail: 'Espresso, flash-brew tonic, and our signature maple oat cortado.',
    course: 'Coffee ritual',
  },
  {
    title: 'Harbor supper board',
    detail: 'Shared cheeses, marinated olives, blistered flatbread, garden crudites.',
    course: 'Evening table',
  },
];

const experienceMoments = [
  {
    title: 'Morning light',
    description: 'Pastry cases, smooth playlists, and fast espresso service keep weekday drop-ins effortless.',
  },
  {
    title: 'Midday reset',
    description: 'Layered seating supports solo laptop brunches, catch-ups, and low-key client coffees.',
  },
  {
    title: 'Golden hour',
    description: 'Candlelit tables and small plates shift the mood without changing the brand story.',
  },
];

const reservationDetails = [
  'One configurable booking target now powers the hero, navigation, and closing reservation actions.',
  'A dedicated reservation card keeps the booking promise visible without breaking the cafe story.',
  'Mobile guests get a persistent conversion shortcut with the same accessible booking destination.',
];

const reservationMoments = [
  { label: 'Best for', value: 'Brunch dates, laptop lunches, golden-hour suppers' },
  { label: 'Confirmation', value: 'Instant booking window with live party and timing selection' },
  { label: 'Walk-in backup', value: 'Host stand support stays available for same-day changes' },
];

type BookingLinkProps = {
  className: string;
  label: string;
};

function BookingLink({ className, label }: BookingLinkProps) {
  return (
    <a
      className={className}
      href={bookingTarget.href}
      rel="noreferrer"
      target="_blank"
      title={bookingTarget.title}
    >
      {label}
      <span className="visually-hidden"> Opens the Harbor and Hearth booking page in a new tab.</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-section__topbar">
          <a className="brand" href="#top">
            Harbor &amp; Hearth
          </a>
          <nav aria-label="Primary">
            <ul className="nav-list">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li className="nav-list__cta">
                <BookingLink className="button button--primary button--nav" label={bookingTarget.navLabel} />
              </li>
            </ul>
          </nav>
        </div>

        <div className="hero-layout" id="top">
          <div className="hero-section__content">
            <div className="eyebrow">Cafe launch landing page</div>
            <h1>Welcome guests with a warm room, a sharp menu, and an obvious path to reserve.</h1>
            <p className="hero-copy">
              Harbor &amp; Hearth blends neighborhood comfort with first-launch polish so visitors
              instantly understand the atmosphere, the all-day offer, and exactly how to book their
              table online.
            </p>
            <div className="hero-actions">
               <BookingLink className="button button--primary" label={bookingTarget.heroLabel} />
               <a className="button button--secondary" href="#menu">
                 Explore the menu
               </a>
            </div>
            <dl className="hero-metrics" aria-label="Cafe highlights">
              <div>
                <dt>2 min</dt>
                <dd>reservation journey</dd>
              </div>
              <div>
                <dt>7 days</dt>
                <dd>all-day service</dd>
              </div>
              <div>
                <dt>40 seats</dt>
                <dd>intimate room capacity</dd>
              </div>
            </dl>
          </div>

          <aside className="showcase-card" aria-label="Reservation spotlight">
            <span className="showcase-card__label">Tonight at Harbor &amp; Hearth</span>
            <h2>Reserve a candlelit corner, brunch banquette, or quick coffee table.</h2>
            <p>
              The layout gives launch traffic one clear next step, while still showing the mood,
              service rhythm, and signature dishes that make the cafe memorable.
            </p>
            <div className="showcase-card__details">
              <div>
                <span>Best for</span>
                <strong>Brunch dates, meetings, golden-hour suppers</strong>
               </div>
               <div>
                 <span>Service window</span>
                 <strong>8:00 AM - 10:00 PM daily</strong>
              </div>
            </div>
            <BookingLink className="button button--primary" label={bookingTarget.showcaseLabel} />
          </aside>
        </div>
      </header>

      <main className="content-grid">
        <section className="panel panel--framed" aria-labelledby="highlights-heading">
          <div className="section-heading">
            <span className="eyebrow">Why it converts</span>
            <h2 id="highlights-heading">A polished first impression built to answer launch-week questions fast.</h2>
          </div>
          <div className="card-grid">
            {highlights.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-layout" id="story">
          <article className="panel panel--accent" id="menu" aria-labelledby="menu-heading">
            <div className="section-heading">
              <span className="eyebrow">Signature menu</span>
              <h2 id="menu-heading">From first espresso to last plate, the menu preview keeps the mood cohesive.</h2>
            </div>
            <div className="card-grid card-grid--stacked">
              {menuCards.map((item) => (
                <article className="card card--menu" key={item.title}>
                  <span className="card__eyebrow">{item.course}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="panel panel--framed">
            <div className="section-heading">
              <span className="eyebrow">The story</span>
              <h2>Built for mornings that start slow and evenings that invite one more round.</h2>
            </div>
            <p>
              The page architecture keeps the brand promise, menu mood, and reservation intent in
              one scroll. Each section layers atmosphere with decision-making so launch audiences
              never hit a dead end before they are ready to book.
            </p>
            <div className="story-note">
              <span className="story-note__label">Design system direction</span>
              <p>Warm neutrals, generous spacing, and card-based composition keep the MVP premium without overbuilding.</p>
            </div>
          </article>
        </section>

        <section className="panel panel--framed" id="experience">
          <div className="section-heading">
            <span className="eyebrow">In-room experience</span>
            <h2>Responsive sections carry the same cafe story from narrow screens to wide tables.</h2>
          </div>
          <div className="card-grid">
            {experienceMoments.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reservation-panel" id="reservation" aria-labelledby="reservation-heading">
          <div className="section-heading">
            <span className="eyebrow">Online reservations</span>
            <h2 id="reservation-heading">Give launch-week traffic a clear next step before they bounce.</h2>
          </div>
          <div className="reservation-panel__layout">
            <div className="reservation-panel__content">
              <p>
                Reserve for brunch, coffee dates, or supper service with one consistent online
                booking destination. Every primary reservation prompt now lands on the same live
                target, which keeps first-launch traffic oriented and makes future booking updates
                a one-line configuration change.
              </p>
              <div className="reservation-moment-grid" aria-label="Reservation highlights">
                {reservationMoments.map((item) => (
                  <article className="reservation-moment" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>
            <aside className="reservation-card" aria-label="Reservation booking">
              <span className="story-note__label">Reservation-first CTA</span>
              <h3>Keep the booking path obvious on every screen.</h3>
              <p>
                The navigation, hero, and final section all point to the same booking target so
                guests never have to guess where to go next.
              </p>
              <div className="reservation-actions">
                <BookingLink className="button button--primary" label={bookingTarget.sectionLabel} />
                <a className="button button--secondary" href="tel:+15550123456">
                  Call the host stand
                </a>
              </div>
              <ul className="feature-list">
                {reservationDetails.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <div className="mobile-booking-bar" aria-label="Quick reservation access">
        <div>
          <span className="mobile-booking-bar__eyebrow">Reserve tonight</span>
          <p>Keep the booking flow one tap away on mobile.</p>
        </div>
        <BookingLink className="button button--primary button--compact" label={bookingTarget.mobileLabel} />
      </div>
    </div>
  );
}
