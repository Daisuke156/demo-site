import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

const publicPages = [];

function MyApp({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  // If the current route is listed as public, render it directly
  // Otherwise, use Clerk to require authentication
  return (
    <>
      {/* <ClerkProvider> */}
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <div>
            {/* <SignedIn> */}
            <Component {...pageProps} />
            {/* </SignedIn> */}
          </div>
          {/* <SignedOut>
            <RedirectToSignIn />
          </SignedOut> */}
        </>
      )}
      {/* </ClerkProvider> */}
    </>
  );
}

export default MyApp;
