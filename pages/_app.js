import "../styles/globals.css";
import { MeetupContextProvider } from "../context";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <MeetupContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MeetupContextProvider>
  );
}

export default MyApp;
