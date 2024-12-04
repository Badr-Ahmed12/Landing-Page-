import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className = '', children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;

