import { DefaultSEO } from '@containers/DefaultSEO'
import { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../styles/utils.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSEO />
      <Head>
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1662571762/ijlizgmux2cqdmoijpih.png"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
