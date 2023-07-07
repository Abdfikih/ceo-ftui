import type { AppProps } from "next/app"
import "../styles/globals.css"

import { AuthModalProvider } from "@contexts"

import Head from "next/head"
import { Toaster } from "react-hot-toast"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>CEO FTUI 2023</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="title" content="CEO FTUI 2023 - Center of Engineers Occupation" />
      <meta
        name="description"
        content="CEO adalah program kerja BEM FTUI 2023 yang bertujuan membekali dan memfasilitasi persiapan mahasiswa, khususnya Fakultas Teknik UI, terjun ke dunia kerja melalui serangkaian seminar, workshop, dan Job Fair."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ceoftui.id" />
      <meta property="og:title" content="CEO FTUI 2023 - Center of Engineers Occupation" />
      <meta
        property="og:description"
        content="CEO adalah program kerja BEM FTUI 2023 yang bertujuan membekali dan memfasilitasi persiapan mahasiswa, khususnya Fakultas Teknik UI, terjun ke dunia kerja melalui serangkaian seminar, workshop, dan Job Fair."
      />
      <meta property="og:image" content="https://ceo-ftui.vercel.app/seo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ceoftui.id" />
      <meta property="twitter:title" content="CEO FTUI 2023 - Center of Engineers Occupation" />
      <meta
        property="twitter:description"
        content="CEO adalah program kerja BEM FTUI 2023 yang bertujuan membekali dan memfasilitasi persiapan mahasiswa, khususnya Fakultas Teknik UI, terjun ke dunia kerja melalui serangkaian seminar, workshop, dan Job Fair."
      />
      <meta property="twitter:image" content="https://ceo-ftui.vercel.app/seo.png" />
    </Head>

    <AuthModalProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthModalProvider>
  </>
)

export default App
