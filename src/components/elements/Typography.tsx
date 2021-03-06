import clsx from 'clsx';
import React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    size: number;
    tag: 'span' | 'h1' | 'h2' | 'p';
}

const Typography: React.FC<TypographyProps> = ({ tag: Tag, size, children, className, ...props }) => {
    return (
        <Tag className={clsx({
            "text-3xl": size === 1,
            "text-xl": size === 2,
        }, className)} {...props}>
            {children}
        </Tag>
    )
}

Typography.defaultProps = {
    tag: 'span',
}

export default Typography;