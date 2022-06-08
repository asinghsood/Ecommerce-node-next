import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// dynamic importing of components
import dynamic from 'next/dynamic'

const CartConatiner = dynamic(() => import("../components/organisms/CartConatiner"), {
  loading: () => <p>Loading</p>,
  ssr: false,
})

const Cart: NextPage = () => {
  return (
    <div className={styles.container} id="cartContainer">
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
