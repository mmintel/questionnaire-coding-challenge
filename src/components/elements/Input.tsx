import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input className={clsx("border rounded p-2 w-full bg-white", className)} {...props} />
    )
}

export default Input;