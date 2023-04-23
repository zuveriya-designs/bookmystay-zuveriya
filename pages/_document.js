import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.11/dist/gsap.min.js"></Script>

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
