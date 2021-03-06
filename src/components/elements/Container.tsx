import clsx from 'clsx';
import React from 'react';

interface ContainerProps extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> {}

const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => {
    return (
        <div className={clsx("w-full max-w-2xl mx-auto my-8 px-2", className)} {...props}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Container;