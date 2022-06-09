import type { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic'

/* Dynamic imports of components for Chunking */
const CartConatiner = dynamic(() => import("../components/organisms/CartConatiner"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const Cart: NextPage = () => {
  return (
    <div id="cartContainer">
      <Head>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CartConatiner />
      </main>
    </div>
  );
};

export default Cart;
