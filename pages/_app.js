import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Arctic44 – Bold Software Innovation</title>
        <meta name="description" content="Arctic44 builds bold, high-performance digital platforms for ambitious brands." />
        <meta name="keywords" content="Arctic44, software company, Sri Lanka, web development, digital transformation, devops" />
        <meta name="author" content="Arctic44 Team" />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.arctic44.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Arctic44 – Bold Software Innovation" />
        <meta property="og:description" content="Explore Arctic44's next-gen development services." />
        <meta property="og:image" content="https://www.arctic44.com/assets/preview.jpg" />
        <meta property="og:url" content="https://www.arctic44.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arctic44 – Bold Software Innovation" />
        <meta name="twitter:description" content="Explore Arctic44's next-gen development services." />
        <meta name="twitter:image" content="https://www.arctic44.com/assets/preview.jpg" />
        <meta name="twitter:site" content="@arctic44" />

        {/* Google/Bing Verification */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_CODE" />

        {/* Favicon */}
        <link rel="icon" href="/favicon1.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
