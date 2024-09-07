import { Html, Head, Main, NextScript } from "next/document";
import SEO from "@/components/SEO";

export default function Document() {
  return (
    <Html lang="en">
      <Head><SEO /></Head>      <body
        style={{
          backgroundImage: `url(/bg/bg1.svg), url(/bg/bg2.svg)`,
          backgroundSize: "cover, cover",
          backgroundPosition: "top, center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
