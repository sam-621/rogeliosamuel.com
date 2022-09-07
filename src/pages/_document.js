import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/img/favicon.svg" />
          <meta name="author" content="Rogelio Samuel Moreno Corrales" />
          <meta
            name="keywords"
            content="rogeliosamuel621, rogeliosamuel21, Rogelio Samuel Moreno Corrales, website"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="Rogelio Samuel website. Here you can find my projects, experience level, and more details about me."
          />

          <meta name="author" content="Rogelio Samuel Moreno Corrales" />
          <meta
            name="description"
            content="My website created in Reactjs where you can find my projects, experience and something about me"
          />
          <meta name="keywords" content="Frontend, Reactjs, Web Development" />

          {/* <!-- Twitter --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@rogeliosamuel21" />
          <meta name="twitter:title" content="Rogelio Samuel website" />
          <meta
            name="twitter:description"
            content="Here you can find my projects, experience and something about me"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1607875701/My%20Website/my_image_oqkwgf.png"
          />
        </Head>
        <body className="bg-viewport">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
