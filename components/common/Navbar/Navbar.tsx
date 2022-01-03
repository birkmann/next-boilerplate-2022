import s from './Navbar.module.scss'
import { Container, Logo } from '@components/ui'
import Link from 'next/link'
import NavbarRoot from './NavbarRoot'

const Navbar = () => {
  return (
    <NavbarRoot>
      <div className="bg-gray-100 h-8 hidden lg:block"></div>
      <Container>
        <Link href="/">
          <a className={s.logo} aria-label="Logo">
            <Logo />
          </a>
        </Link>
      </Container>
      <div className="bg-gray-100 h-14 flex items-center justify-center text-sm">
        Als Member profitierst du von kostenlosem Versand und 60 Tage
        kostenloser Rücksendung. &nbsp;
        <a href="#" className="underline">
          Weitere Infos
        </a>
      </div>
    </NavbarRoot>
  )
}

export default Navbar
