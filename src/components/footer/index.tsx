/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import styles from "src/components/footer/index.module.scss";
import { Link as Scroll } from "react-scroll";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/assets/img/footer_main_sp@2x.png"
        layout="fill"
        objectFit="cover"
      />
      <Scroll to="top" smooth={true} duration={600}>
        <div className={styles.scroll_btn}>
          <img src="/assets/img/arrow.svg" alt="" />
        </div>
      </Scroll>

      <p>Copyright © KOSÉ Corporation. All rights reserved.</p>
    </footer>
  );
};
