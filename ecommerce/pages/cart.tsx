import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CartConatiner from "../components/organisms/CartConatiner";

const Cart: NextPage = () => {
  return (
    <div className={styles.container}>
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
