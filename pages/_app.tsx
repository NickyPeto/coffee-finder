import Footer from "@/app/components/footer";
import "../styles/globals.css";

import { AppProps } from "next/app";

//_app.tsx is the entry point of the app. It provides a wrapper that surrounds all the pages
//You can use it to add any UI components that are available on every page
//for example if you add a footer or top bar here it will be available throughout all the app
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
