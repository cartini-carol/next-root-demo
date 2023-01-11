import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { ComponentType, useEffect } from "react";

import Layout from "components/layout";
import GlobalStyle from "components/styles/globalstyles";
import theme from "components/theme";
import { ThemeProvider } from "styled-components";

type CompProps = AppProps["Component"] & {
  Layout?: ComponentType;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: CompProps }) {
  const ComputedLayout = Component.Layout || Layout;
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      nProgress.start();
    };
    const handleStop = () => {
      nProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width" />
        <title>ROOT</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ComputedLayout>
          <Component {...pageProps} />
        </ComputedLayout>
      </ThemeProvider>
    </>
  );
}
