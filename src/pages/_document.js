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
          <meta
            name="keywords"
            content="rogeliosamuel621, rogeliosamuel21, Rogelio Samuel Moreno Corrales, website"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Rogelio Samuel Moreno Corrales" />
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
