import type { LayoutProps } from "src/layouts/types";
import { NextSeo } from "next-seo";
import styles from "src/layouts/home/index.module.scss";
import { Footer } from "src/components/footer";
import { Hero } from "src/components/hero";

export const HomeLayout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <NextSeo title={props.title} description={props.description} />
      <Hero />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
