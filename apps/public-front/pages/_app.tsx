import { AppProps } from 'next/app';
import '../styles/global.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: any;
  }
}

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default CustomApp;
