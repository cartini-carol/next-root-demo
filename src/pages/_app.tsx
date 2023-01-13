import type { AppContext, AppInitialProps, AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { ComponentType, useEffect, useRef } from "react";

import Layout from "components/layout";
import GlobalStyle from "components/styles/globalstyles";
import theme from "components/theme";
import { ThemeProvider } from "styled-components";
import { NextComponentType } from "next";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

type CompProps = AppProps["Component"] & {
  Layout?: ComponentType;
};

const App: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps & { Component: CompProps }
> = ({ Component, pageProps }) => {
  const ComputedLayout = Component.Layout || Layout;

  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

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
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ComputedLayout>
              <Component {...pageProps} />
            </ComputedLayout>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
