import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreContext, defaultStore } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={defaultStore}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

export default MyApp;
