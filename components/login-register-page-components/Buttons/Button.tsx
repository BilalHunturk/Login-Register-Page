import clsx from 'clsx';
import React from 'react'


interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;  // Updated the argument here
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;

} 



const Button: React.FC<ButtonProps> = ({ children,
  danger, disabled, fullWidth, onClick, secondary, type }) => {
    
  return (
    
    <button
      disabled={disabled}
      type={type}
      className={clsx(`flex justify-center px-4 py-4 text-sm font-semibold rounded-lg`,
        disabled && `opacity-45 cursor-default`,
        fullWidth && `w-full`,
        secondary ? `text-gray-800` : `text-white`,
        danger && `bg-rose-700 hover:bg-red-600`,
        !secondary && !danger && `bg-sky-600 hover:bg-sky-700`,

      )}
    >
      {children}
    </button>
  )
}

export default Button