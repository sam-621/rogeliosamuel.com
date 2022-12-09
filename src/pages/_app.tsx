import { AppProps } from 'next/app'

import { DefaultSEO } from 'src/components'

import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
