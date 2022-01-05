import { Container, Logo } from '@components/ui'
import { Searchbar } from '@components/common/'
import Link from 'next/link'
import NavbarRoot from './NavbarRoot'

export type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className="inline-block p-3 leading-8 border-b-2 border-transparent hover:border-black">
        {children}
      </a>
    </Link>
  )
}

const Navbar = () => {
  return (
    <NavbarRoot>
      <div className="hidden bg-gray-100 lg:block">
        <Container>
          <div className="flex">
            <div className="flex py-2 space-x-6">
              <Link href="#">
                <a>
                  <svg
                    height="24px"
                    width="24px"
                    fill="#111"
                    viewBox="0 0 26 32"
                  >
                    <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
                  </svg>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <svg
                    height="24px"
                    width="24px"
                    fill="#111"
                    viewBox="0 0 39 33"
                  >
                    <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="flex items-center ml-auto space-x-3 text-xs">
              <Link href="#">
                <a className="hover:text-gray-500">Hilfe</a>
              </Link>
              <div className="w-[1px] h-4 bg-gray-600"></div>
              <Link href="#">
                <a className="hover:text-gray-500">Sei dabei</a>
              </Link>
              <div className="w-[1px] h-4 bg-gray-600"></div>
              <Link href="#">
                <a className="hover:text-gray-500">Anmelden</a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex items-center">
          <Link href="#">
            <a className="z-10 inline-block mr-auto" aria-label="Logo">
              <Logo />
            </a>
          </Link>
          <div className="absolute left-0 right-0 w-full">
            <nav className="hidden mx-auto text-center lg:block w-[calc(100%-640px)]">
              <NavLink href="/">Neuheiten</NavLink>
              <NavLink href="/">Herren</NavLink>
              <NavLink href="/">Damen</NavLink>
              <NavLink href="/">Kinder</NavLink>
              <div className="hidden xl:inline-block">
                <NavLink href="/">Bis zu 50 % Rabatt</NavLink>
              </div>
              <div className="hidden xl:inline-block">
                <NavLink href="/">Kollektion</NavLink>
              </div>
            </nav>
          </div>
          <Searchbar />
          <div className="z-10 flex ml-6 space-x-2">
            <Link href="#">
              <a className="hidden p-2 rounded-full hover:bg-gray-200 lg:block">
                <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                  <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
                </svg>
              </a>
            </Link>
            <Link href="#">
              <a className="p-2 rounded-full hover:bg-gray-200">
                <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                  <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                  <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                </svg>
              </a>
            </Link>
            <div className="lg:hidden">
              <button
                className="p-2 rounded-full hover:bg-gray-200"
                aria-label="Menu"
              >
                <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                  <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <div className="hidden text-sm bg-gray-100 lg:block">
        <p className="p-3 text-sm leading-relaxed text-center">
          Als Member profitierst du von kostenlosem Versand und 60 Tage
          kostenloser Rücksendung. &nbsp;
          <Link href="#">
            <a className="underline">Weitere Infos</a>
          </Link>
        </p>
      </div>
    </NavbarRoot>
  )
}

export default Navbar
