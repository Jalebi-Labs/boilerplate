import '../styles/globals.css';
import type { AppProps } from 'next/app';

import AppProviders from '../components/AppProviders';
import { UserContextProvider } from '../components/UserContext';
import useWatchForAuthStateChange from '../components/useWatchForAuthStateChange';

function MyApp({ Component, pageProps }: AppProps) {
  useWatchForAuthStateChange();

  return (
    <AppProviders>
      {/* <UserContextProvider> */}
      <Component {...pageProps} />
      {/* </UserContextProvider> */}
    </AppProviders>
  );
}

export default MyApp;
