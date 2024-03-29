import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {Theme} from '../components/App';
import Script from 'next/script';
import { ParallaxProvider } from 'react-scroll-parallax';

function App({ Component, pageProps }) {
  return <ThemeProvider theme={Theme}>
    <ParallaxProvider>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-Z2HC20WBH4`} />
      <Script strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2HC20WBH4', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <CssBaseline />
      <Component {...pageProps} />
    </ParallaxProvider>
  </ThemeProvider>
}

export default App
