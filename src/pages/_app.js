import "@/styles/globals.css";
import Header from "@/components/Header";
import { StoreProvider } from "easy-peasy";
import store from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Header />

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  );
}
