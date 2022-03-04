/* eslint-disable @next/next/no-page-custom-font */
import "src/styles/globals.scss";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
