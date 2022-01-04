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
}

const classes = {
  base: 'py-2 rounded-full px-7 border',
  variant: {
    primary: 'text-white bg-black hover:bg-gray-900 border-black',
    secondary:
      'text-gray-900 bg-transparent hover:border-gray-400 border-gray-300',
  },
}

const Button = (props: ButtonProps): JSX.Element | null => {
  const { children, href, target, rel, onClick, variant, ...rest } = props

  if (href) {
    return (
      <Link href={href}>
        <a
          {...rest}
          target={target}
          onClick={() => onClick && onClick()}
          rel={rel}
          className={cn(classes.base, classes.variant[variant!])}
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
      className={cn(classes.base, classes.variant[variant!])}
    >
      {children}
    </button>
  )
}

export default Button
