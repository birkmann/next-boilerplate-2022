import { FC, useEffect } from 'react'
import cn from 'classnames'
import { useScrollDirection } from '../../../hooks/useScrollDirection'

const NavbarRoot: FC = ({ children }) => {
  const { isScrollingUp } = useScrollDirection()

  let scrolledHeader = false

  if (typeof window !== 'undefined') {
    scrolledHeader = window.scrollY > 150
  }

  useEffect(() => {
    if (scrolledHeader) {
      document.body.classList.add('has-navbar')
    } else {
      document.body.classList.remove('has-navbar')
    }
  }, [scrolledHeader])

  return (
    <div
      className={cn(
        'bg-white border-b transition-transform sticky top-0 delay-100 duration-500',
        {
          '-translate-y-full': scrolledHeader,
        },
        {
          'translate-y-0': isScrollingUp,
        }
      )}
    >
      {children}
    </div>
  )
}

export default NavbarRoot
