import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MobileMenuContext } from '@context/MobileMenu.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileMenuContext>
      <Component {...pageProps} />
    </MobileMenuContext>
  )
}

export default MyApp
