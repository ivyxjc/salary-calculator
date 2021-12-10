import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {IvyPage} from '../types'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../lib/theme'
import Head from 'next/head'

type AppWithLayoutProps = {
  Component: IvyPage
} & AppProps

function MyApp({Component, pageProps}: AppWithLayoutProps) {
  let Layout = Component.layout || (({children}) => <>{children}</>)
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet="utf-8"/>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        <meta name="theme-color" content="#ffffff"/>
        {/* <meta
                  httpEquiv="Content-Security-Policy"
                  content="
                    connect-src 'self';
                    img-src 'self';
                    manifest-src 'self';
                    script-src-elem 'self';
                    style-src-elem 'self';
"></meta> */}
      </Head>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
