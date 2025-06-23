import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium';
  
  const variantClasses = {
    primary: 'bg-gradient-primary text-black',
    secondary: 'bg-gray-800 text-gray-300 border border-gray-700',
    accent: 'bg-accent-400 text-black',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;