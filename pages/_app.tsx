import '../styles/globals.css';
import type { AppProps } from 'next/app';

import AppProviders from '../components/AppProviders';
import useWatchForAuthStateChange from '../components/useWatchForAuthStateChange';

function MyApp({ Component, pageProps }: AppProps) {
  useWatchForAuthStateChange();

  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
