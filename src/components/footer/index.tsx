/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import styles from "src/components/footer/index.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.scroll_btn}>
        <img src="/assets/img/arrow.svg" alt="" />
      </div>
      <p>Copyright © KOSÉ Corporation. All rights reserved.</p>
    </footer>
  );
};
