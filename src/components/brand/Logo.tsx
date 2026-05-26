interface LogoProps {
  readonly variant?: 'mark' | 'full';
  readonly size?: number;
}

/** Marca compacta "tp" */
const MARK_SRC = '/logos/pht.png';
/** Wordmark horizontal thrust.pure */
const WORDMARK_SRC = '/logos/tp.png';

export function Logo({ variant = 'full', size = 36 }: LogoProps) {
  if (variant === 'mark') {
    return (
      <img
        className="logo logo--mark"
        src={MARK_SRC}
        alt="ThrustPure"
        width={size}
        height={size}
        decoding="async"
      />
    );
  }

  return (
    <img
      className="logo logo--wordmark"
      src={WORDMARK_SRC}
      alt="thrust.pure"
      height={size}
      decoding="async"
    />
  );
}
