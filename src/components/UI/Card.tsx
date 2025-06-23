import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false 
}) => {
  const baseClasses = 'bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-300';
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10 hover:border-primary-500/30' : '';
  const gradientClasses = gradient ? 'bg-gradient-dark border-gray-600' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;