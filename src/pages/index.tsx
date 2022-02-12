import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomeLayout } from "src/layouts/home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h2>test</h2>
      <HomeLayout title="sekkisei" description="sekkiseiのlp">
        <h2>ホーム</h2>
      </HomeLayout>
    </>
  );
};

export default Home;
