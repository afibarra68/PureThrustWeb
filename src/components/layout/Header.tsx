import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';

const PLATFORM_NAV = [
  { href: '#herramientas', label: 'Arquitectura' },
  { href: '#releases', label: 'Targets' },
  { href: '#products', label: 'Productos' },
] as const;

type HeaderProps = {
  readonly variant?: 'landing' | 'platform';
};

export function Header({ variant = 'landing' }: HeaderProps) {
  const isPlatform = variant === 'platform';

  return (
    <header
      className={`header ${isPlatform ? 'header--platform' : 'header--presale'}`}
    >
      <Link
        className="header__brand"
        to="/"
        aria-label="Thrust Pure inicio"
      >
        <Logo variant="mark" size={isPlatform ? 40 : 32} />
        <span className="header__domain">thrustpure.com</span>
      </Link>
      <nav className="header__nav" aria-label="Principal">
        {isPlatform ? (
          <>
            {PLATFORM_NAV.map((item) => (
              <a
                key={item.href}
                className="header__link"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <Link className="header__link" to="/">
              Inicio
            </Link>
          </>
        ) : (
          <>
            <Link className="header__link header__link--cta" to="/plataforma">
              Ver más
            </Link>
            <a className="header__link header__link--contact" href="#lanzamiento">
              <span className="header__link-label header__link-label--long">
                Cuéntanos tu caso
              </span>
              <span className="header__link-label header__link-label--short">Contacto</span>
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
