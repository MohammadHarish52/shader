import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 whitespace-nowrap';
  
  const variantStyles = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100 shadow-2xl hover:shadow-white/20',
    secondary: 'bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40',
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
      style={{ minWidth: '160px', minHeight: '56px' }}
    >
      {children}
    </button>
  );
}