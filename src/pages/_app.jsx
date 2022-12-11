import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

//  List pages you want to be publicly accessible, or leave empty if
//  every page requires authentication. Use this naming strategy:
//   "/"              for pages/index.js
//   "/foo"           for pages/foo/index.js
//   "/foo/bar"       for pages/foo/bar.js
//   "/foo/[...bar]"  for pages/foo/[...bar].js
const publicPages = [];

function MyApp({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);
  
  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Header />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
