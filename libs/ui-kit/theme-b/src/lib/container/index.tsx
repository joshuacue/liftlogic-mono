import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  hasPadding?: boolean;
  background?: string | null;
}

export function Container({
  children,
  containerClassName = '',
  hasPadding = true,
  className,
  background,
  ...props
}: ContainerProps) {
  const backgroundType = background?.includes('http') ? 'image' : 'color';
  return (
    <div
      {...props}
      className={containerClassName}
      style={{
        background:
          backgroundType === 'image' ? `url(${background})` : background || '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className={`${
          hasPadding ? 'py-2' : ''
        } max-w-[144em] w-full mx-auto ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
