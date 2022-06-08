import type { NextPage } from "next";
import Head from "next/head";
// import Card from './components/molecules/Card';
import ProductListing from "../components/organisms/ProductListing";

const Home: NextPage = () => {
  return (
    <div id="productpage">
      <Head>
        <title>Jabong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductListing />
      </main>
    </div>
  );
};
export default Home;
