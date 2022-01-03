import { Container, Logo } from '@components/ui'
import Link from 'next/link'
import NavbarRoot from './NavbarRoot'

export type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className="py-4 border-black hover:border-b-2">{children}</a>
    </Link>
  )
}

const Navbar = () => {
  return (
    <NavbarRoot>
      <div className="hidden h-8 bg-gray-100 lg:block"></div>
      <Container>
        <div className="flex items-center">
          <Link href="/">
            <a className="inline-block" aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <nav className="hidden mx-auto space-x-5 text-lg lg:block">
            <NavLink href="/">Neuheiten</NavLink>
            <NavLink href="">Herren</NavLink>
            <NavLink href="">Damen</NavLink>
            <NavLink href="">Kinder</NavLink>
            <NavLink href="">Bis zu 50 % Rabatt</NavLink>
            <NavLink href="">Kollektion</NavLink>
          </nav>
        </div>
      </Container>
      <div className="flex items-center justify-center text-sm bg-gray-100 h-14">
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
