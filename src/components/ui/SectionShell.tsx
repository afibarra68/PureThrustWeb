import type { ReactNode } from 'react';

interface SectionShellProps {
  readonly id: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly titleNode?: ReactNode;
  readonly children: ReactNode;
}

export function SectionShell({ id, title, subtitle, titleNode, children }: SectionShellProps) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <header className="section__head">
        {titleNode ? (
          <h2 className="section__title" id={`${id}-title`}>
            {titleNode}
          </h2>
        ) : (
          <>
            <h2 className="section__title" id={`${id}-title`}>
              {title}
            </h2>
            {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
          </>
        )}
      </header>
      {children}
    </section>
  );
}
