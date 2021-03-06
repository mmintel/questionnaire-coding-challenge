import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> {}

const Button: React.FC<ButtonProps> = ({ className, ...props }) => (
    <button className={clsx("bg-blue-700 py-2 px-4 text-white rounded-full hover:bg-blue-600 focus:outline-none", className)} {...props}></button>
)

export default Button;