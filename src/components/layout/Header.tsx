import { Logo } from '../brand/Logo';

const NAV = [
  { href: '#releases', label: 'Targets' },
  { href: '#products', label: 'Productos' },
  { href: '#infra', label: 'Infra' },
] as const;

export function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="#" aria-label="ThrustPure inicio">
        <Logo variant="mark" size={32} />
        <span className="header__domain">thrustpure.com</span>
      </a>
      <nav className="header__nav" aria-label="Principal">
        {NAV.map((item) => (
          <a key={item.href} className="header__link" href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
