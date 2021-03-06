import clsx from 'clsx';
import React from 'react';

interface AlertProps extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> {
    variant?: "error"
}

const Alert: React.FC<AlertProps> = ({ variant, children, className, ...props }) => {
    return (
        <div className={clsx("p-4 rounded", variant === 'error' && "bg-red-200 text-red-500", className)} {...props}>
            {children}
        </div>
    )
}

Alert.defaultProps = {
    variant: 'error'
}

export default Alert;