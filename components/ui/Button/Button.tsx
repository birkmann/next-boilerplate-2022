import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  fontSize?: 'sm' | 'md' | 'lg'
  width?: 'default' | 'full'
}

const classes = {
  base: 'py-2 rounded-full px-7 border inline-block text-center',
  variant: {
    primary: 'text-white bg-black hover:bg-gray-900 border-black',
    secondary:
      'text-gray-900 bg-transparent hover:border-gray-400 border-gray-300',
  },
  fontSize: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  },
  width: {
    default: '',
    full: 'w-full',
  },
}

const Button = (props: ButtonProps): JSX.Element | null => {
  const {
    children,
    href,
    target,
    rel,
    onClick,
    variant,
    fontSize,
    width,
    ...rest
  } = props

  if (href) {
    return (
      <Link href={href}>
        <a
          {...rest}
          target={target}
          onClick={() => onClick && onClick()}
          rel={rel}
          className={cn(
            classes.base,
            classes.variant[variant!],
            classes.fontSize[fontSize!],
            classes.width[width!]
          )}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={() => onClick && onClick()}
      {...rest}
      className={cn(
        classes.base,
        classes.variant[variant!],
        classes.fontSize[fontSize!],
        classes.width[width!]
      )}
    >
      {children}
    </button>
  )
}

export default Button
