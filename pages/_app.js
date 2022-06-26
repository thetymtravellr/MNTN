import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
     
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
