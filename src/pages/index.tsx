import type { NextPage } from "next";
import { Products } from "src/components/products";
import { Standards } from "src/components/standards";
import { Store } from "src/components/store";
import { Story } from "src/components/story";
import { HomeLayout } from "src/layouts/home";

const Home: NextPage = () => {
  return (
    <>
      <HomeLayout title="sekkisei" description="sekkiseiのlp">
        <Story />
        <Products />
        <Standards />
        <Store />
      </HomeLayout>
    </>
  );
};

export default Home;
