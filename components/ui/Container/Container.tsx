import cn from 'classnames'
import React, { FC } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean,
}) => {
  const rootClassName = cn(className, {
    'mx-auto px-4 lg:px-8 max-w-[1800px]': !clean,
  })

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
