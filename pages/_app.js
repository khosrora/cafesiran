import { useEffect } from 'react';
import Script from "next/script";
import { useDispatch } from 'react-redux';
import { wrapper } from '../redux/store'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import NextNProgress from "nextjs-progressbar";
import { Toaster } from 'react-hot-toast';

import { getDetailsUser } from './../redux/user/actions';
import Cookies from 'js-cookie';


function MyApp({ Component, pageProps }) {

  const token = Cookies.get("CafesIran__TOKEN")

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) dispatch(getDetailsUser())
  }, [])
  return (
    <>
      {/* ! Google tag (gtag.js)  */}
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-8RK39ZCLG9" />
      <Script strategy="lazyOnload" id="my-script">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
     
             gtag('config', 'G-8RK39ZCLG9');
        `}
      </Script>
      <ThemeProvider enableSystem={false} attribute="class" defaultTheme='dark'>
        <NextNProgress color="#FF7129" />
        <Component {...pageProps} />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp);