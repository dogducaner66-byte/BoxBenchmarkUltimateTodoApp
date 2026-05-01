import { NavLink, Outlet } from 'react-router-dom';
import { brand, footerColumns, navigationItems, primaryAction } from '../../content/cafeContent';

export function StorefrontLayout() {
  return (
    <div className="site-shell">
      <header className="page-shell">
        <div className="hero-section site-header">
          <div className="hero-section__topbar">
            <div className="brand-copy">
              <NavLink className="brand" to="/">
                {brand.name}
              </NavLink>
              <p>{brand.tagline}</p>
            </div>
            <nav aria-label="Birincil">
              <ul className="nav-list">
                {navigationItems.map((item) => (
                  <li key={item.to}>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end={item.end} to={item.to}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li className="nav-list__cta">
                  <NavLink className="button button--primary button--nav" title={primaryAction.title} to={primaryAction.to}>
                    {primaryAction.navLabel}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-header__meta">
            <span className="eyebrow">Outdoor storefront system</span>
            <p>{brand.notice}</p>
          </div>
        </div>
      </header>

      <main className="page-shell page-stack">
        <Outlet />
      </main>

      <footer className="page-shell">
        <section className="panel panel--framed footer-shell" aria-label="Storefront summary">
          <div className="section-heading">
            <span className="eyebrow">Storefront ozeti</span>
            <h2>Kuzey Patika storefront omurgasi premium outdoor perakende icin hazir.</h2>
          </div>
          <div className="card-grid">
            {footerColumns.map((column) => (
              <article className="card" key={column.title}>
                <h3>{column.title}</h3>
                <ul className="feature-list">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </footer>

      <div className="mobile-booking-bar" aria-label="Hizli koleksiyon gecisi">
        <div>
          <span className="mobile-booking-bar__eyebrow">Tek CTA omurgasi</span>
          <p>Kategori vitrini tum sayfalarda ayni ana aksiyon olarak korunur.</p>
        </div>
        <NavLink className="button button--primary button--compact" title={primaryAction.title} to={primaryAction.to}>
          {primaryAction.mobileLabel}
        </NavLink>
      </div>
    </div>
  );
}
