import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import GoogleTagManager from '../components/GoogleTagManager'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
      />
      <meta name="keywords" content="spunbond, care spunbond, pt spunbond, nonwoven" />

      <link rel="manifest" href="/manifest.json" />
      <link rel='icon' href='/favicon.ico'/>
      <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
    </Head>
    <GoogleTagManager>
    <Component {...pageProps} />
    </GoogleTagManager>
    </>
  )
}

export default MyApp
