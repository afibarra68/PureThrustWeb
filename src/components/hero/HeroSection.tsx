import { Link } from 'react-router-dom';
import { Logo } from '../brand/Logo';
import { LaunchSignupForm } from '../launch/LaunchSignupForm';
import { HeroBackground } from './HeroBackground';

export function HeroSection() {
  return (
    <section className="hero" aria-label="Inicio">
      <HeroBackground />
      <div className="hero__content">
        <div className="hero__brand">
          <Logo variant="full" size={44} />
        </div>

        <header className="hero__value">
          <h1 className="hero__title">
            El futuro de la pureza y el rendimiento está en marcha.
          </h1>
          <p className="hero__essence" aria-label="Claridad y calidad">
            Claridad · Calidad
          </p>
          <p className="hero__lead">
            Combinamos innovación tecnológica, los más altos estándares de claridad y
            calidad, y la potencia de la Inteligencia Artificial bajo una arquitectura
            limpia y exigente. Diseñamos la próxima generación de entornos eficientes,
            integrando infraestructura avanzada en nuestros procesos con un único
            propósito: hacer tu vida más fácil.
          </p>
          <div className="hero__more-row">
            <Link className="btn btn--ghost hero__more" to="/plataforma">
              Ver más
            </Link>
          </div>
        </header>

        <aside className="hero__launch" id="lanzamiento" aria-labelledby="launch-heading">
          <div className="hero__launch-card">
            <p className="hero__invite" id="launch-heading">
              Libérate de la complejidad, date un respiro y cuéntanos tu caso. Estamos
              listos para atenderte.
            </p>
            <LaunchSignupForm />
          </div>
        </aside>
      </div>
    </section>
  );
}
