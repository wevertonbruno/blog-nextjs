import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from '../assets/styles/globals';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>DREV - Blog</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
