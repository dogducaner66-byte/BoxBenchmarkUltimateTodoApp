import {
  aboutMoments,
  aboutSection,
  bookingTarget,
  experienceMoments,
  galleryMedia,
  heroMedia,
  highlights,
  hostStandContact,
  menuCards,
  navigationItems,
  reservationDetails,
  reservationMoments,
  visitCards,
} from './content/cafeContent';

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
            <picture className="showcase-card__media">
              <source media="(min-width: 720px)" srcSet={heroMedia.desktopSrc} />
              <img
                alt={heroMedia.alt}
                decoding="async"
                fetchPriority="high"
                height={heroMedia.height}
                loading="eager"
                sizes={heroMedia.sizes}
                src={heroMedia.mobileSrc}
                width={heroMedia.width}
              />
            </picture>
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
                  <strong>Mon-Thu until 9 PM, Fri-Sat until 10 PM</strong>
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
              <h2 id="menu-heading">Menu highlights that make the room feel worth reserving.</h2>
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
              <span className="eyebrow">Ambience &amp; about</span>
              <h2 id="story-heading">A neighborhood room designed to feel trustworthy on the first visit.</h2>
            </div>
            <p>{aboutSection.intro}</p>
            <div className="card-grid card-grid--stacked">
              {aboutMoments.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="story-note">
              <span className="story-note__label">{aboutSection.noteLabel}</span>
              <p>{aboutSection.note}</p>
            </div>
          </article>
        </section>

        <section className="panel panel--framed" aria-labelledby="gallery-heading">
          <div className="section-heading">
            <span className="eyebrow">Responsive imagery</span>
            <h2 id="gallery-heading">Photo-ready details that load after the booking decision stays visible.</h2>
          </div>
          <div className="media-grid">
            {galleryMedia.map((item) => (
              <figure className="media-card" key={item.title}>
                <img
                  alt={item.alt}
                  decoding="async"
                  fetchPriority="low"
                  height={item.height}
                  loading="lazy"
                  src={item.src}
                  width={item.width}
                />
                <figcaption>
                  <span className="card__eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="panel panel--framed" id="experience">
          <div className="section-heading">
            <span className="eyebrow">In-room experience</span>
            <h2>The room shifts smoothly from solo coffee stops to candlelit reservations.</h2>
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

        <section className="panel panel--framed" id="visit" aria-labelledby="visit-heading">
          <div className="section-heading">
            <span className="eyebrow">Visit Harbor &amp; Hearth</span>
            <h2 id="visit-heading">Location, hours, and contact details that remove first-visit friction.</h2>
          </div>
          <div className="card-grid">
            {visitCards.map((item) => (
              <article className="card card--detail" key={item.title}>
                <span className="card__eyebrow">{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="feature-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {item.links ? (
                  <div className="link-list">
                    {item.links.map((link) => (
                      <a href={link.href} key={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="panel reservation-panel" id="reservation" aria-labelledby="reservation-heading">
          <div className="section-heading">
            <span className="eyebrow">Online reservations</span>
            <h2 id="reservation-heading">Give launch-week traffic one booking target and a confident reason to use it.</h2>
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
                <a className="button button--secondary" href={hostStandContact.href}>
                  {hostStandContact.label}
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
