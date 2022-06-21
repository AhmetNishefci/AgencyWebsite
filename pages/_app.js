// import Layout from "../components/Layout";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"), {
  loading: () => (
    <div>
      <p>Loading...</p>
    </div>
  ),
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
