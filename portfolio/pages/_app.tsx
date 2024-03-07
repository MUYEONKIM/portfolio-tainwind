import { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="font-PretendRegular">
      <Component {...pageProps} />;
    </div>
  );
}
