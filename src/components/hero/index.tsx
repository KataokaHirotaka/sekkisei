import { Header } from "../header";
import styles from "src/components/hero/index.module.scss";
import Image from "next/image";

export const Hero = (): JSX.Element => {
  return (
    <div className={styles.topHero_wrapper}>
      <div className={styles.topHero}>
        <Header />
      </div>
      <h1 className={styles.hero_title}>
        {/* TODOImageタグに変える必要あり */}
        <img src="/assets/img/hero_title@2x.png" alt="sekkisei" />
        {/* <Image
          src="/assets/img/hero_title@2x.png"
          width={1000}
          height={87}
          objectFit="contain"
          alt="sekkisei"
          unoptimized
        /> */}
      </h1>
    </div>
  );
};
