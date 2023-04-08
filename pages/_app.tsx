import MainLayout from "@/src/components/layout/main-layout";
import "@/styles/globals.scss";
import "@/styles/general.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
