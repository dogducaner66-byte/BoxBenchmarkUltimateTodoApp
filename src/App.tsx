const navigationItems = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Story' },
  { href: '#experience', label: 'Experience' },
  { href: '#reservation', label: 'Reservations' },
];

const highlights = [
  {
    title: 'All-day cafe energy',
    description: 'Seasonal brunch, slow coffee, and sunset small plates in one room.',
  },
  {
    title: 'Fast online reservations',
    description: 'Guide guests toward a frictionless booking flow before tables fill up.',
  },
  {
    title: 'Launch-ready storytelling',
    description: 'A polished first-touch layout designed for immediate paid traffic and socials.',
  },
];

const menuCards = [
  {
    title: 'Citrus ricotta toast',
    detail: 'Whipped ricotta, roasted grapes, pistachio crunch, and wildflower honey.',
  },
  {
    title: 'Midnight roast flight',
    detail: 'Espresso, flash-brew tonic, and our signature maple oat cortado.',
  },
  {
    title: 'Harbor supper board',
    detail: 'Shared cheeses, marinated olives, blistered flatbread, and garden crudites.',
  },
];

const experiencePoints = [
  'Window-side tables for casual meetings and laptop brunches.',
  'Evening candlelight service with zero-fuss reservation flow.',
  'Private table reminders positioned for launch-week conversion.',
];

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
            </ul>
          </nav>
        </div>

        <div className="hero-section__content" id="top">
          <div className="eyebrow">Modern cafe landing page MVP</div>
          <h1>Welcome guests with a warm room, a sharp menu, and an obvious path to reserve.</h1>
          <p className="hero-copy">
            Harbor &amp; Hearth blends neighborhood comfort with launch-ready polish so first-time
            visitors immediately know what you serve, why it feels special, and how to book online.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#reservation">
              Reserve a table
            </a>
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
      </header>

      <main className="content-grid">
        <section className="panel" aria-labelledby="highlights-heading">
          <div className="section-heading">
            <span className="eyebrow">Why it converts</span>
            <h2 id="highlights-heading">An initial browser experience built to answer first-launch questions fast.</h2>
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

        <section className="panel panel--accent" id="menu" aria-labelledby="menu-heading">
          <div className="section-heading">
            <span className="eyebrow">Signature menu</span>
            <h2 id="menu-heading">A focused preview of the flavors guests can expect from morning through evening.</h2>
          </div>
          <div className="card-grid">
            {menuCards.map((item) => (
              <article className="card card--menu" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-layout" id="story">
          <article className="panel">
            <div className="section-heading">
              <span className="eyebrow">The story</span>
              <h2>Built for mornings that start slow and nights that invite one more round.</h2>
            </div>
            <p>
              The layout keeps the brand promise, menu mood, and booking intent on one page so
              launch audiences never hit a dead end. It is ready for future integrations without
              overbuilding the first release.
            </p>
          </article>

          <article className="panel" id="experience">
            <div className="section-heading">
              <span className="eyebrow">In-room experience</span>
              <h2>Every section guides guests from discovery to decision.</h2>
            </div>
            <ul className="feature-list">
              {experiencePoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="panel reservation-panel" id="reservation" aria-labelledby="reservation-heading">
          <div className="section-heading">
            <span className="eyebrow">Online reservations</span>
            <h2 id="reservation-heading">Give launch-week traffic a clear next step before they bounce.</h2>
          </div>
          <p>
            Reserve for brunch, coffee dates, or supper service with a lightweight online booking
            flow. This section is intentionally ready for a real reservation integration in the next
            iteration.
          </p>
          <div className="reservation-actions">
            <a className="button button--primary" href="mailto:reservations@harborandhearth.cafe">
              Start reservation request
            </a>
            <a className="button button--secondary" href="tel:+15550123456">
              Call the host stand
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
