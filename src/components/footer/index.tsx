/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import styles from "src/components/footer/index.module.scss";
import { ScrollBtn } from "../scrollBtn";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/assets/img/footer_main_sp@2x.png"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.scrollBtn_wrapper}>
        <ScrollBtn />
      </div>
      <p className={styles.footer_txt}>
        Copyright © KOSÉ Corporation. All rights reserved.
      </p>
    </footer>
  );
};
