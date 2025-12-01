import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 focus:ring-blue-500",
    secondary: "bg-white text-neutral-900 hover:bg-neutral-100 border border-neutral-200 shadow-sm focus:ring-neutral-200",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white",
    ghost: "bg-transparent text-neutral-600 hover:text-blue-500 hover:bg-blue-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;