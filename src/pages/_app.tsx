import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import { fonts } from '../lib/fonts'
import { theme } from '../theme';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>
      {`
          :root {
            --font-inter: ${fonts.inter.style.fontFamily};
          }
        `}
    </style>
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  </>;
}
