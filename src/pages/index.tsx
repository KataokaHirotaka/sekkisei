import type { NextPage } from "next";
import { Products } from "src/components/products";
import { Story } from "src/components/story";
import { HomeLayout } from "src/layouts/home";

const Home: NextPage = () => {
  return (
    <>
      <HomeLayout title="sekkisei" description="sekkiseiのlp">
        <Story />
        <Products />
      </HomeLayout>
    </>
  );
};

export default Home;
