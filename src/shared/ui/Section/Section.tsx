import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  gridCols?: 1 | 2;
  isHero?: boolean;
}

export const Section = ({
  id,
  className = "",
  children,
  title,
  gridCols = 1,
  isHero = false
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        w-full overflow-x-hidden
        ${isHero ? 'pt-0' : 'pt-[var(--section-padding-top)]'}
        pb-[var(--section-padding-bottom)]
        px-[var(--container-padding)]
        ${className}
      `.trim()}
    >
      <div className="max-w-[var(--container-width)] mx-auto w-full">
        {title && (
          <h2 className="font-bold text-center mb-12 text-[length:var(--section-title-font-size)] leading-tight">
            {title}
          </h2>
        )}
        {gridCols === 1 ? (
          children
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
