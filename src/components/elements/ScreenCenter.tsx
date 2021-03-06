import clsx from 'clsx';
import React from 'react';

interface ScreenCenterProps extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> {}

const ScreenCenter: React.FC<ScreenCenterProps> = ({ children, className, ...props }) => {
    return (
        <div className={clsx("w-screen h-screen flex items-center justify-center flex-col", className)} {...props}>
            {children}
        </div>
    )
}

export default ScreenCenter;