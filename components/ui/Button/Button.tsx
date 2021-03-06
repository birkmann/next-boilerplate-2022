import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

interface ButtonProps {
  variant?: 'primary' | 'primaryLight' | 'outline'
  fontSize?: 'sm' | 'md' | 'lg'
  width?: 'default' | 'full'
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  children: React.ReactNode
  onClick?: () => void
}

const classes = {
  base: 'py-2 rounded-full px-7 border inline-block text-center',
  variant: {
    primary: 'text-white bg-black hover:bg-gray-900 border-black',
    primaryLight: 'text-black bg-white hover:opacity-75 border-white',
    outline:
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

  const classesCombined = cn(
    classes.base,
    classes.variant[variant!],
    classes.fontSize[fontSize!],
    classes.width[width!]
  )

  if (href) {
    return (
      <Link href={href}>
        <a
          {...rest}
          target={target}
          rel={rel}
          onClick={() => onClick && onClick()}
          className={classesCombined}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      {...rest}
      onClick={() => onClick && onClick()}
      className={classesCombined}
    >
      {children}
    </button>
  )
}

export default Button
