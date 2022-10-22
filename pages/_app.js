import { useEffect } from 'react';
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
    <ThemeProvider enableSystem={true}>
      <NextNProgress color="#FF7129" />
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </ThemeProvider>
  )
}
export default wrapper.withRedux(MyApp);