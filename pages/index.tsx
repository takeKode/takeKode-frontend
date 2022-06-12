import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Button, NextUIProvider } from "@nextui-org/react";

const CustomHead = () => (
  <Head>
    <title>takeKode</title>
    <meta name="description" content="Share your code easily" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const Home: NextPage = () => {
  const router = useRouter();
  const handleShareCodeClick = () => {
    router.push("/code");
  };
  return (
    <NextUIProvider>
      <div className={styles.container}>
        <CustomHead />
        <main>
          <h1>Welcome to takeKode!</h1>
        </main>
        <Button onClick={handleShareCodeClick}>Share code</Button>
      </div>
    </NextUIProvider>
  );
};

export default Home;
