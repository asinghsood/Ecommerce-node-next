import type { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic'

/* Dynamic imports of components for Chunking */
const ProductListing = dynamic(() => import("../components/organisms/ProductListing"), {
  loading: () => <p>Loading</p>,
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <div id="productpage">
      <Head>
        <title>Cartify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductListing />
      </main>
    </div>
  );
};
export default Home;
