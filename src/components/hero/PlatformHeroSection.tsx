import { Logo } from '../brand/Logo';

const QUICK_LINKS = [
  {
    href: '#releases',
    label: 'Release targets',
    description: 'Cada lanzamiento único, alto impacto en el negocio',
  },
  {
    href: '#products',
    label: 'Productos',
    description: 'Infraestructura a un clic en estas dependencias',
  },
] as const;

export function PlatformHeroSection() {
  return (
    <section className="platform-hero" aria-labelledby="platform-hero-title">
      <div className="platform-hero__glow" aria-hidden="true" />
      <div className="platform-hero__grid">
        <div className="platform-hero__brand">
          <Logo variant="full" size={80} />
          <p className="platform-hero__domain">thrustpure.com</p>
          <p className="platform-hero__pillars" aria-label="Simple, sólido, resiliente">
            Simple · Sólido · Resiliente
          </p>
        </div>

        <div className="platform-hero__panel">
          <p className="platform-hero__eyebrow">Plataforma</p>
          <h1 className="platform-hero__title" id="platform-hero-title">
            ARQUITECTURA QUE MUEVE
          </h1>
          <p className="platform-hero__lead">
            Explora cómo las capas técnicas, los targets de release y las líneas de
            producto trabajan juntos.
          </p>

          <nav className="platform-hero__nav" aria-label="Accesos rápidos">
            {QUICK_LINKS.map((link) => (
              <a key={link.href} className="platform-hero__link" href={link.href}>
                <span className="platform-hero__link-label">{link.label}</span>
                <span className="platform-hero__link-desc">{link.description}</span>
                <span className="platform-hero__link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
