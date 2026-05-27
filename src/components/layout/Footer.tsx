import { Logo } from '../brand/Logo';
import {
  FOOTER_CONTACT,
  FOOTER_ECOSYSTEM_LEAD,
  FOOTER_LEGAL,
  FOOTER_PLATFORMS,
  FOOTER_SOCIAL,
} from '../../content/footerContent';

type FooterProps = {
  readonly variant?: 'landing' | 'platform';
};

function FooterContactLinks({ className }: { readonly className?: string }) {
  return (
    <ul className={className}>
      <li>
        <a href={FOOTER_CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
          WhatsApp · {FOOTER_CONTACT.whatsappDisplay}
        </a>
      </li>
      <li>
        <a href={`mailto:${FOOTER_CONTACT.email}`}>{FOOTER_CONTACT.email}</a>
      </li>
    </ul>
  );
}

function FooterPlatform() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer--platform footer--rich">
      <div className="footer__inner">
        <div className="footer__intro">
          <Logo variant="mark" size={32} />
          <p className="footer__domain">
            <a href={FOOTER_CONTACT.domain} rel="noopener noreferrer">
              {FOOTER_CONTACT.domainLabel}
            </a>
          </p>
          <p className="footer__ecosystem-lead">{FOOTER_ECOSYSTEM_LEAD}</p>
          <FooterContactLinks className="footer__contact footer__contact--intro" />
          <ul className="footer__quick-links">
            <li>
              <a href={`mailto:${FOOTER_CONTACT.email}?subject=Videollamada`}>
                Solicitar videollamada
              </a>
            </li>
            <li>
              <a href={FOOTER_SOCIAL.thrustPure.href} target="_blank" rel="noopener noreferrer">
                {FOOTER_SOCIAL.thrustPure.label}
              </a>
            </li>
            <li>
              <a href={`mailto:${FOOTER_CONTACT.email}?subject=Contacto aliados`}>
                Contacto con aliados
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__columns">
          <section className="footer__col footer__col--wide" aria-labelledby="footer-platforms-title">
            <h2 id="footer-platforms-title" className="footer__col-title">
              Plataformas del ecosistema
            </h2>
            <ul className="footer-platform-list">
              {FOOTER_PLATFORMS.map((platform) => (
                <li key={platform.id}>
                  <article className="footer-platform-card">
                    <header className="footer-platform-card__head">
                      <span className="footer-platform-card__role">{platform.role}</span>
                      <h3 className="footer-platform-card__name">
                        <a href={platform.siteUrl} target="_blank" rel="noopener noreferrer">
                          {platform.name}
                        </a>
                      </h3>
                      <p className="footer-platform-card__admin">
                        <a href={platform.adminUrl} target="_blank" rel="noopener noreferrer">
                          {platform.adminHostname}
                        </a>
                      </p>
                    </header>
                    <p className="footer-platform-card__summary">{platform.summary}</p>
                    <ul className="footer-platform-card__highlights">
                      {platform.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="footer-platform-card__meta">
                      <div>
                        <h4 className="footer-platform-card__meta-title">En producción</h4>
                        <ul className="footer__list footer__list--compact">
                          {platform.inProduction.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="footer-platform-card__meta-title">Próximamente</h4>
                        <ul className="footer__list footer__list--compact footer__list--muted">
                          {platform.roadmap.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a className="footer-platform-card__cta" href={platform.productAnchor}>
                      Ver producto en thrustpure.com →
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer__col" aria-labelledby="footer-legal-title">
            <h2 id="footer-legal-title" className="footer__col-title">
              Legal
            </h2>
            <p className="footer__col-note">Documentos de la plataforma AlParquear</p>
            <ul className="footer__list footer__list--links">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="footer__col-title footer__col-title--spaced">Contacto Thrust Pure</h2>
            <FooterContactLinks className="footer__contact" />
          </section>
        </div>

        <div className="footer__bottom">
          <p className="footer__allies">
            Nuestros aliados y plataformas —{' '}
            <a href={FOOTER_CONTACT.domain} rel="noopener noreferrer">
              {FOOTER_CONTACT.domainLabel}
            </a>
          </p>
          <p className="footer__copy">
            © {year}{' '}
            <a href={FOOTER_CONTACT.domain} rel="noopener noreferrer">
              thrustpure.com
            </a>
            {' · '}
            <a href={FOOTER_PLATFORMS[0].siteUrl} target="_blank" rel="noopener noreferrer">
              AlParquear
            </a>
            {' es una plataforma del ecosistema'}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLanding() {
  return (
    <footer className="footer footer--presale">
      <Logo variant="mark" size={28} />
      <p className="footer__text">Claridad, calidad y rendimiento — en camino.</p>
      <p className="footer__domain">
        <a href={FOOTER_CONTACT.domain} rel="noopener noreferrer">
          {FOOTER_CONTACT.domainLabel}
        </a>
      </p>
      <FooterContactLinks className="footer__contact footer__contact--landing" />
    </footer>
  );
}

export function Footer({ variant = 'landing' }: FooterProps) {
  return variant === 'platform' ? <FooterPlatform /> : <FooterLanding />;
}
