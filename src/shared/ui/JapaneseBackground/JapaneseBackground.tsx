import React from 'react';

export const JapaneseBackground = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 w-full text-center">
      <span className="block text-[18vw] md:text-[15vw] font-black text-[var(--text-primary)] whitespace-nowrap leading-normal opacity-10 dark:opacity-20 blur-sm font-[family-name:var(--font-noto-sans-jp)] -rotate-12 md:rotate-0 transform origin-center">
        マンガシフト
      </span>
    </div>
  );
};
