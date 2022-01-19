import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MobileMenuContext } from '@context/MobileMenu.context'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <MobileMenuContext>
        <Component {...pageProps} />
      </MobileMenuContext>
    </>
  )
}

export default MyApp
