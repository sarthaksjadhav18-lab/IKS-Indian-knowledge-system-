import React from 'react';

interface LotusIconProps {
  className?: string;
}

export const LotusIcon: React.FC<LotusIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* Classical Indian Lotus / Padma Emblem Vector */}
    <path d="M12 2.5C11.6 4.8 10 7.2 8 8.8c-1.6 1.3-3.4 1.7-5 1.7 1.6 1.2 3.6 1.7 5.2 1.2.6 1.6 1.7 3.6 3.8 4.8 2.1-1.2 3.2-3.2 3.8-4.8 1.6.5 3.6 0 5.2-1.2-1.6 0-3.4-.4-5-1.7-2-1.6-3.6-4-4-6.3zm0 4.8c.9 1.3 2 2.7 3.3 3.5-.9.3-2 .5-3.3.5s-2.4-.2-3.3-.5c1.3-.8 2.4-2.2 3.3-3.5zm-7.2 8.2c2.2 0 4.4-1.1 6-2.7-1.1-.6-2.2-.6-3.8 0-1.1.4-2 1.4-2.2 2.7zm14.4 0c-.2-1.3-1.1-2.3-2.2-2.7-1.6-.6-2.7-.6-3.8 0 1.6 1.6 3.8 2.7 6 2.7zM12 18c-2.8 0-5.5 1.1-7.5 3.2h15C17.5 19.1 14.8 18 12 18z" />
  </svg>
);
