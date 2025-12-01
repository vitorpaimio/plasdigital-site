import React, { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  bgClass?: string;
}