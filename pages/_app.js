import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
