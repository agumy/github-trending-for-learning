import "tailwindcss/tailwind.css";
import "../lib/firebase";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
