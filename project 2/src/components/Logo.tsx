import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export function Logo({ className = '', variant = 'full' }: LogoProps) {
  return (
    <div className={`${className} flex items-center`}>
      <img 
        src="/logos/with-bg.svg"
        alt="NexTechAI"
        className={`h-full w-auto ${variant === 'icon' ? 'max-h-12' : 'max-h-20'}`}
      />
    </div>
  );
}