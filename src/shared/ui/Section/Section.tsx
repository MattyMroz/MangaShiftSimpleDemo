import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
}

export const Section = ({ id, className = "", children, title }: SectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 py-32 ${className}`}
    >
      <div className="w-full max-w-[120rem] mx-auto">
        {title && (
          <h2 className="font-bold mb-20 text-center text-[clamp(4.8rem,8vw,10rem)] leading-tight">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
