import s from './Navbar.module.scss'
import { Container, Logo } from '@components/ui'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={s.Navbar}>
      {
        <Container>
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
        </Container>
      }
    </div>
  )
}

export default Navbar
