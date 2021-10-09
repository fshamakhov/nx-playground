import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import Link from 'next/link';
import React from 'react';

const name = 'Fedor Shamakhov';
export const siteTitle = 'Fedor Shamakhov';

/* eslint-disable-next-line */
export interface LayoutProps {
  home?: boolean;
}

const hostname = process.env.NEXT_PUBLIC_HOSTNAME || 'localhost';
const scheme = process.env.NEXT_PUBLIC_SCHEME ||'https';
const port = process.env.NEXT_PUBLIC_PORT ? `:${process.env.NEXT_PUBLIC_PORT}` : '';

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fedor Shamakhov</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Fedor Shamakhov, web developer from Siberia"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <meta
          property="og:image"
          content={`${scheme}://${hostname}${port}/images/vardzia.jpg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fedor Shamakhov" />
        <meta name="twitter:site" content="@Electron160zC" />
        <meta name="twitter:description" content="Fedor Shamakhov, web developer from Siberia" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
          }}
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <div className="inner">
          <p>
            Powered by
            <img id="QLDisp" src="/images/QLDisp.svg" alt="QLDisp" />
            <a href="https://www.nginx.com/">Nginx</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
