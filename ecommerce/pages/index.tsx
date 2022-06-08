import type { NextPage } from "next";
import Head from "next/head";
// dynamic importing of components
import dynamic from 'next/dynamic'

const ProductListing = dynamic(() => import("../components/organisms/ProductListing"), {
  loading: () => <p>Loading</p>,
  ssr: false,
})

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
