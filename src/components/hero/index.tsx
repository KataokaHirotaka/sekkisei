import { Header } from "../header";
import styles from "src/components/hero/index.module.scss";
import Image from "next/image";

export const Hero = (): JSX.Element => {
  return (
    <div className={styles.topHero_wrapper} id="top">
      <div className={`${styles.main_img_wrapper} ${styles.img_sp}`}>
        <Image
          src="/assets/img/main_sp@2x.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>
      <div className={`${styles.main_img_wrapper} ${styles.img_pc}`}>
        <Image
          src="/assets/img/main_pc@2x.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </div>

      <div className={styles.topHero}>
        <Header />
      </div>
      <h1 className={styles.hero_title}>
        <Image
          src="/assets/img/hero_title@2x.png"
          objectFit="contain"
          layout="fill"
          alt="sekkisei"
        />
      </h1>
    </div>
  );
};
