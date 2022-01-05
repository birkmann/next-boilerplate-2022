import Button from '@components/ui/Button'
import Link from 'next/link'
import React from 'react'
import { useMobileMenuContext } from '@context/MobileMenu.context'
import cn from 'classnames'

export type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <a className="flex items-center justify-between py-2 text-2xl font-semibold leading-8">
        {children}
        <svg fill="#111" viewBox="0 0 185.4 300" className="w-3 h-3">
          <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z"></path>
        </svg>
      </a>
    </Link>
  )
}

const MobileMenu = () => {
  const [MobileMenuContext, setMobileMenuState] = useMobileMenuContext()
  const closeMobileMenu = () => {
    setMobileMenuState({
      ...MobileMenuContext,
      isOpen: false,
    })

    document
      .querySelector('body')!
      .classList.remove(
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'bottom-0',
        'overflow-auto'
      )
  }
  return (
    <div
      className={cn(
        'absolute top-0 right-0 z-50 w-[320px] h-screen bg-white lg:hidden translate-x-full transition-transform duration-300 ease-in-out',
        { 'translate-x-0': MobileMenuContext.isOpen }
      )}
    >
      <div className="h-full px-8 overflow-y-scroll">
        <div className="flex justify-end pt-2 -mr-4">
          <div
            className="p-2 rounded-full hover:bg-gray-200"
            onClick={() => {
              closeMobileMenu()
            }}
          >
            <svg className="w-7 h-7" fill="#111" viewBox="-6 -6 26 26">
              <path d="M12.12.36L7 5.48 1.88.36.44 1.88 5.48 7 .44 12.12l1.44 1.44L7 8.52l5.12 5.04 1.52-1.44L8.52 7l5.12-5.12z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <NavLink href="/">Neuheiten</NavLink>
          <NavLink href="/">Herren</NavLink>
          <NavLink href="/">Damen</NavLink>
          <NavLink href="/">Kinder</NavLink>
          <NavLink href="/">Bis zu 50 % Rabatt</NavLink>
          <NavLink href="/">Kollektion</NavLink>
        </div>
        <ul className="mt-12">
          <li>
            <Link href="#">
              <a className="flex items-center py-2 space-x-2">
                <svg className="w-8 h-8" fill="#111" viewBox="0 0 26 32">
                  <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
                </svg>
                <span>Jordan</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="flex items-center py-2 space-x-2">
                <svg className="w-8 h-8" fill="#111" viewBox="0 0 39 33">
                  <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path>
                </svg>
                <span>Converse</span>
              </a>
            </Link>
          </li>
        </ul>
        <p className="mt-16 text-xl font-medium text-gray-500">
          Werde Nike Member und hol dir die besten Produkte, Inspirationen und
          Storys rund um den Sport.{' '}
          <Link href="#">
            <a className="text-black">Weitere Infos</a>
          </Link>
        </p>
        <div className="my-16 space-y-4">
          <Button variant="primary">Sei dabei</Button>
          <Button variant="secondary">Anmelden</Button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
