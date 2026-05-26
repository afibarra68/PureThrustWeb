import { Logo } from '../brand/Logo';

export function HeroSection() {
  return (
    <section className="hero" aria-label="Inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__logo-row">
        <Logo variant="full" size={40} />
      </div>
      <ul className="hero__pills" aria-label="Capas del stack">
        <li className="hero__pill hero__pill--primary">Release targets</li>
        <li className="hero__pill">Infra lista</li>
        <li className="hero__pill">Bio pre-deploy</li>
      </ul>
      <div className="hero__cta">
        <a className="btn btn--primary" href="#releases">
          Ver release targets
        </a>
        <a className="btn btn--ghost" href="#infra">
          Stack de infra
        </a>
      </div>
    </section>
  );
}
