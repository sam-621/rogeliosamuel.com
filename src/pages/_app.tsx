import { DefaultSEO } from '@containers/DefaultSEO'
import { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import '../styles/utils.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
