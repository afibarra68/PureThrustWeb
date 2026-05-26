import { Logo } from '../brand/Logo';

export function Footer() {
  return (
    <footer className="footer">
      <Logo variant="mark" size={28} />
      <p className="footer__text">
        ThrustPure — release targets con tracción: del móvil del equipo al board.
      </p>
      <p className="footer__domain">
        <a href="https://thrustpure.com" rel="noopener noreferrer">
          thrustpure.com
        </a>
      </p>
    </footer>
  );
}
